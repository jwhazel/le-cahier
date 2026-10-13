import { useState } from 'react'
import Quiz from './Quiz.jsx'
import Reference from './Reference.jsx'
import { decks, lessons } from './quiz/engine.js'
import { useFrenchVoice } from './speech.js'

/**
 * 1 -> "I", 14 -> "XIV", 42 -> "XLII". Greedy: take the largest value that
 * fits, repeat. The two-letter entries (CM, XC, IV…) are what make the
 * subtractive forms come out right without any special cases.
 */
const ROMAN_VALUES = [
  [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'],
  [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
]
function toRoman(n) {
  let out = ''
  for (const [value, letters] of ROMAN_VALUES) {
    while (n >= value) {
      out += letters
      n -= value
    }
  }
  return out
}

// Deck sizes, worked out ONCE when the module loads. Counting a deck means
// building all its questions, and the decks never change while the app runs —
// so there's no reason to redo it on every render. (useMemo would also work,
// but it's for values that depend on props or state; this depends on neither,
// so a plain module-level constant is simpler.) Roman numerals run continuously
// across every lesson, so each deck has one stable index however it's grouped.
const SIZED_DECKS = decks.map((d, i) => ({ ...d, numeral: toRoman(i + 1), size: d.build().length }))
const GRAND_TOTAL = SIZED_DECKS.reduce((sum, d) => sum + d.size, 0)

export default function App() {
  // Three screens, ONE state variable — a tagged union.
  //
  //   { name: 'decks' }
  //   { name: 'quiz',    deckId, seed }
  //   { name: 'results', deckId, score, total, missed }
  //
  // The first version of this used two variables (`run` and `report`), which is
  // two booleans describing three screens. That extra combination is reachable:
  // clearing `run` while `report` was still set left the results on screen with
  // no deck behind it, and the "Recommencer" button read `run.deckId` off null.
  // A tagged union makes the illegal state unrepresentable — `results` always
  // carries its own deckId.
  const [screen, setScreen] = useState({ name: 'decks' })
  const [sound, setSound] = useState(true)
  const [referenceOpen, setReferenceOpen] = useState(false)
  // Look the voice up once, here, and hand it down — rather than having the
  // quiz and the cheat sheet each find it separately ("lifting state up").
  const { voice, supported } = useFrenchVoice()

  // A fresh seed per run reshuffles both the question order and each card's
  // options — but the seed is fixed *within* a run, so React's re-renders
  // don't scramble anything mid-question.
  const start = (deckId) => setScreen({ name: 'quiz', deckId, seed: Date.now() })

  return (
    <main className="sheet">
      <header className="masthead">
        <div className="masthead-top">
          <p className="kicker">Cours collectifs du jeudi</p>
          <button className="antiseche-open" onClick={() => setReferenceOpen(true)}>
            Antisèche
          </button>
        </div>
        <h1>
          Le <em>cahier</em>
        </h1>
      </header>

      <Reference open={referenceOpen} onClose={() => setReferenceOpen(false)} voice={voice} />

      {screen.name === 'decks' && <DeckPicker onPick={start} />}

      {screen.name === 'quiz' && (
        <Quiz
          deckId={screen.deckId}
          seed={screen.seed}
          voice={voice}
          supported={supported}
          sound={sound}
          paused={referenceOpen}
          onToggleSound={() => setSound((on) => !on)}
          onFinish={(report) => setScreen({ name: 'results', deckId: screen.deckId, ...report })}
          onQuit={() => setScreen({ name: 'decks' })}
        />
      )}

      {screen.name === 'results' && (
        <Results
          report={screen}
          onAgain={() => start(screen.deckId)}
          onHome={() => setScreen({ name: 'decks' })}
        />
      )}
    </main>
  )
}

function DeckPicker({ onPick }) {
  return (
    <div className="deck-groups">
      {lessons.map((lesson) => {
        const group = SIZED_DECKS.filter((d) => d.lesson === lesson.id)
        const lessonTotal = group.reduce((sum, d) => sum + d.size, 0)
        return (
          <section key={lesson.id} className="deck-group">
            <h2 className="deck-group-head">
              {lesson.label}
              <span className="deck-group-date">{lesson.date}</span>
            </h2>
            <ul className="decks">
              {group.map((deck) => (
                <DeckRow key={deck.id} deck={deck} onPick={onPick} />
              ))}
              <li>
                <button className="deck" onClick={() => onPick(`lesson:${lesson.id}`)}>
                  <span className="numeral">✳</span>
                  <span className="name">Tout mélangé — {lesson.label}</span>
                  <span className="count">{lessonTotal} cartes</span>
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </button>
              </li>
            </ul>
          </section>
        )
      })}

      <ul className="decks decks-all">
        <li>
          <button className="deck" onClick={() => onPick('all')}>
            <span className="numeral">✳</span>
            <span className="name">Tout mélangé — tous les cours</span>
            <span className="count">{GRAND_TOTAL} cartes</span>
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </button>
        </li>
      </ul>
    </div>
  )
}

function DeckRow({ deck, onPick }) {
  return (
    <li>
      <button className="deck" onClick={() => onPick(deck.id)}>
        <span className="numeral">{deck.numeral}</span>
        <span className="name">{deck.label}</span>
        <span className="count">{deck.size} cartes</span>
        <span className="arrow" aria-hidden="true">
          →
        </span>
      </button>
    </li>
  )
}

function Results({ report, onAgain, onHome }) {
  const { score, total, missed } = report

  return (
    <div className="results">
      <p className="tally">
        {score}
        <span> / {total}</span>
      </p>

      {missed.length > 0 && (
        <ul className="missed">
          {missed.map((m, i) => (
            <li key={i}>
              <span className="fr">{m.prompt}</span>
              <span className="en">{m.answer}</span>
            </li>
          ))}
        </ul>
      )}

      <div>
        <button className="link" onClick={onAgain}>
          Recommencer
        </button>{' '}
        <button className="link" onClick={onHome} style={{ marginLeft: '1.5rem' }}>
          Choisir un autre
        </button>
      </div>
    </div>
  )
}
