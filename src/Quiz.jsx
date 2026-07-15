import { useEffect, useMemo, useState } from 'react'
import { buildQuiz } from './quiz/engine.js'
import { useFrenchVoice, speak } from './speech.js'
import Speaker from './Speaker.jsx'

const KEYS = ['A', 'B', 'C', 'D']

export default function Quiz({ deckId, seed, sound, onToggleSound, onFinish, onQuit }) {
  // buildQuiz shuffles. If we called it in the render body it would produce a
  // brand-new order on every re-render — the questions would reshuffle each
  // time you clicked. useMemo pins it to (deckId, seed): the same inputs give
  // the same quiz, and it only rebuilds when you start a new run.
  const questions = useMemo(() => buildQuiz(deckId, seed), [deckId, seed])
  const { voice, supported } = useFrenchVoice()

  const [index, setIndex] = useState(0)
  const [chosenId, setChosenId] = useState(null)
  const [missed, setMissed] = useState([])
  const [score, setScore] = useState(0)

  const question = questions[index]
  const answered = chosenId !== null
  const audible = sound && voice

  // Say the answer out loud the moment the card is graded — that's when you're
  // paying attention to the right form. Depends on question.id, not `answered`
  // alone, so an unanswered card never speaks.
  useEffect(() => {
    if (!audible || !answered) return
    speak(question.revealSpeech ?? question.speech, voice)
  }, [audible, answered, question, voice])

  // Never leave a phrase mid-sentence when the quiz unmounts.
  useEffect(() => () => window.speechSynthesis?.cancel(), [])

  function choose(choice) {
    if (answered) return // one shot per card
    setChosenId(choice.id)

    if (choice.id === question.answerId) {
      setScore((s) => s + 1)
    } else {
      const correct = question.choices.find((c) => c.id === question.answerId)
      setMissed((m) => [...m, { prompt: question.prompt, answer: correct.text }])
    }
  }

  function next() {
    if (index + 1 >= questions.length) {
      onFinish({ score, total: questions.length, missed })
    } else {
      setIndex((i) => i + 1)
      setChosenId(null)
    }
  }

  // Answer with A-D (or 1-4), advance with Enter or Space.
  useEffect(() => {
    function onKey(event) {
      if (event.key.toLowerCase() === 'p' && voice) {
        speak(answered ? (question.revealSpeech ?? question.speech) : question.speech, voice)
        return
      }
      if (!answered) {
        const letter = KEYS.indexOf(event.key.toUpperCase())
        const digit = '1234'.indexOf(event.key)
        const slot = letter >= 0 ? letter : digit
        if (slot >= 0 && question.choices[slot]) choose(question.choices[slot])
        return
      }
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        next()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const correctChoice = question.choices.find((c) => c.id === question.answerId)

  return (
    <>
      <div className="progress">
        <span>
          {String(index + 1).padStart(2, '0')} / {String(questions.length).padStart(2, '0')}
        </span>
        <span className="score">
          {supported && voice && (
            <button className="link sound" onClick={onToggleSound}>
              {sound ? '🔊' : '🔇'} {voice.name.split(' (')[0]}
            </button>
          )}
          <b>{score}</b> correct
        </span>
      </div>

      {/* Keying the prompt on question.id makes React tear down and rebuild it
          each card, which restarts the entrance animation. */}
      <div className="prompt" key={question.id}>
        <p className="term">
          {question.prompt}
          <Speaker text={question.speech} voice={voice} label={`Prononcer « ${question.speech} »`} />
        </p>
        <p className="subtitle">{question.subtitle}</p>
      </div>

      <ul className="choices">
        {question.choices.map((choice, i) => {
          let state = ''
          if (answered && choice.id === question.answerId) state = 'correct'
          else if (answered && choice.id === chosenId) state = 'wrong'

          return (
            <li key={choice.id}>
              <button
                className={`choice ${state}`}
                onClick={() => choose(choice)}
                disabled={answered}
                aria-label={`${KEYS[i]}. ${choice.text}`}
              >
                <span className="key" aria-hidden="true">
                  {KEYS[i]}
                </span>
                <span>{choice.text}</span>

                {/* A color swatch before you answer would give the game away.
                    Only paint it once the card is graded. */}
                {answered && question.swatch && choice.id === question.answerId && (
                  <span className="swatch" style={{ background: question.swatch }} />
                )}
              </button>
            </li>
          )
        })}
      </ul>

      {answered && (
        <div className="feedback">
          <div>
            <p className="reveal">
              {question.reveal ?? `${question.prompt} — ${correctChoice.text}`}
              <Speaker
                text={question.revealSpeech ?? question.speech}
                voice={voice}
                label="Réécouter"
              />
            </p>
            {question.note && <p className="note">{question.note}</p>}
          </div>
          <button className="next" onClick={next} autoFocus>
            {index + 1 >= questions.length ? 'Terminer' : 'Suivant'}
          </button>
        </div>
      )}

      <p className="hint">
        <kbd>A</kbd>–<kbd>D</kbd> to answer · <kbd>↵</kbd> to continue
        {voice && (
          <>
            {' '}
            · <kbd>P</kbd> to hear it
          </>
        )}{' '}
        ·{' '}
        <button className="link" onClick={onQuit} style={{ margin: 0, fontSize: 'inherit' }}>
          Quitter
        </button>
      </p>
    </>
  )
}
