import { useState } from 'react'
import Quiz from './Quiz.jsx'
import Reference from './Reference.jsx'
import { decks } from './quiz/engine.js'

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI']

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

  // A fresh seed per run reshuffles both the question order and each card's
  // options — but the seed is fixed *within* a run, so React's re-renders
  // don't scramble anything mid-question.
  const start = (deckId) => setScreen({ name: 'quiz', deckId, seed: Date.now() })

  return (
    <main className="sheet">
      <header className="masthead">
        <div className="masthead-top">
          <p className="kicker">Cours collectif N°1 · 9 juillet</p>
          <button className="antiseche-open" onClick={() => setReferenceOpen(true)}>
            Antisèche
          </button>
        </div>
        <h1>
          Le <em>cahier</em>
        </h1>
      </header>

      <Reference open={referenceOpen} onClose={() => setReferenceOpen(false)} />

      {screen.name === 'decks' && <DeckPicker onPick={start} />}

      {screen.name === 'quiz' && (
        <Quiz
          deckId={screen.deckId}
          seed={screen.seed}
          sound={sound}
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
  const all = decks.map((d) => ({ ...d, size: d.build().length }))
  const total = all.reduce((sum, d) => sum + d.size, 0)

  return (
    <ul className="decks">
      {all.map((deck, i) => (
        <li key={deck.id}>
          <button className="deck" onClick={() => onPick(deck.id)}>
            <span className="numeral">{ROMAN[i]}</span>
            <span className="name">{deck.label}</span>
            <span className="count">{deck.size} cartes</span>
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </button>
        </li>
      ))}
      <li>
        <button className="deck" onClick={() => onPick('all')}>
          <span className="numeral">✳</span>
          <span className="name">Tout mélangé</span>
          <span className="count">{total} cartes</span>
          <span className="arrow" aria-hidden="true">
            →
          </span>
        </button>
      </li>
    </ul>
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
