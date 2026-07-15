// Turns content (facts) into questions (facts + plausible lies).
//
// Nothing in here touches React. It's plain functions over plain data, which
// means you can reason about it — and test it — without rendering anything.

import { pronouns } from '../content/pronouns.js'
import { classroom, colors, salutations } from '../content/vocab.js'
import { verbs, slotLabels, conjugated } from '../content/verbs.js'

const CHOICES_PER_QUESTION = 4

// ---------------------------------------------------------------------------
// Deterministic randomness
// ---------------------------------------------------------------------------
// A question's choices must be shuffled, but they must shuffle the SAME way
// every time that question is rendered. React re-renders components freely —
// on a hover, on a parent state change, on anything. If the shuffle read
// Math.random() during render, the options would silently reorder underneath
// the mouse as you were reaching for one. So: seed the shuffle on the
// question's id and derive it once.

function hashSeed(str) {
  let h = 2166136261
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

/** mulberry32 — small, fast, seeded PRNG. Returns a function like Math.random. */
function makeRandom(seed) {
  let a = seed
  return function random() {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Fisher-Yates. Returns a new array; does not mutate the input. */
function shuffle(items, random) {
  const out = [...items]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

// ---------------------------------------------------------------------------
// Distractors
// ---------------------------------------------------------------------------

/**
 * Choose wrong answers for a question.
 *
 * Three things disqualify a candidate:
 *
 *  1. Its display text duplicates a choice already taken. This bites on verbs,
 *     where `je parle` and `il parle` are the same string — a question can't
 *     offer "parle" twice.
 *
 *  2. It's confusable with the ANSWER. `on` and `nous` both mean "we", so
 *     offering "WE" as a wrong answer to "ON means ___" would be asking a
 *     question that has two right answers.
 *
 *  3. It's confusable with a distractor already taken. This one is subtler,
 *     and it isn't about fairness — it's about leakage. If "TU means ___"
 *     offers both "WE" and "WE (informal)", you know at a glance that neither
 *     can be right, because a well-formed question has exactly one answer.
 *     Two synonymous options eliminate each other and hand you a free 50/50
 *     without any French. So the whole choice set must be mutually distinct,
 *     not merely distinct from the answer.
 */
function pickDistractors(pool, answer, random) {
  const banned = new Set([answer.id, ...(answer.confusableWith ?? [])])
  const seenText = new Set([answer.text])
  const taken = []

  for (const candidate of shuffle(pool, random)) {
    if (taken.length === CHOICES_PER_QUESTION - 1) break
    if (banned.has(candidate.id)) continue
    if (seenText.has(candidate.text)) continue

    taken.push(candidate)
    seenText.add(candidate.text)
    // Anything this new distractor is confusable with is now off the table.
    for (const id of candidate.confusableWith ?? []) banned.add(id)
  }

  return taken
}

/**
 * Assemble one question: prompt, shuffled choices, and which one is right.
 *
 * The shuffle is seeded on (question id + run seed) rather than the id alone.
 * Seeding on the id alone is stable — which is what we want during a run — but
 * it's stable *forever*: the answer to "JE means" would land in slot A every
 * time you ever played, and you'd end up memorising positions instead of
 * pronouns. Mixing in the run seed re-deals the options each new quiz while
 * keeping them fixed across React's re-renders within one.
 */
function assemble({ id, prompt, subtitle, answer, pool, note, swatch, speech, runSeed }) {
  const random = makeRandom(hashSeed(`${id}:${runSeed}`))
  const distractors = pickDistractors(pool, answer, random)

  // Not enough distinct wrong answers to ask a fair question. Better to drop
  // the card than to show a 2-option coin flip.
  if (distractors.length < CHOICES_PER_QUESTION - 1) return null

  return {
    id,
    prompt,
    subtitle,
    note,
    swatch,
    speech, // French to read aloud; never the prompt, which may hold English
    answerId: answer.id,
    choices: shuffle([answer, ...distractors], random),
  }
}

// ---------------------------------------------------------------------------
// Generators — one per content shape
// ---------------------------------------------------------------------------

/** French -> English. `une chaise` means ___ */
function vocabQuestions(items, deckId, runSeed, { display = (it) => it.fr } = {}) {
  const pool = items.map((it) => ({ id: it.id, text: it.en, confusableWith: it.confusableWith }))

  return items
    .map((it) =>
      assemble({
        id: `${deckId}:${it.id}`,
        prompt: display(it),
        subtitle: 'means',
        note: it.note,
        swatch: it.hex, // revealed only after answering; see Quiz.jsx
        speech: it.speech ?? display(it),
        answer: pool.find((p) => p.id === it.id),
        pool,
        runSeed,
      }),
    )
    .filter(Boolean)
}

/**
 * Conjugation. One verb -> six questions, each drawing its distractors from
 * the same verb's other forms.
 */
function verbQuestions(runSeed) {
  return verbs.flatMap((verb) => {
    const pool = Object.entries(verb.forms).map(([slot, form]) => ({
      id: `${verb.id}:${slot}`,
      text: form,
    }))

    return Object.keys(verb.forms)
      .map((slot) => {
        const question = assemble({
          id: `verbs:${verb.id}:${slot}`,
          prompt: `${verb.fr} (${verb.en})`,
          subtitle: `${slotLabels[slot]} …`,
          note: verb.spellingChange,
          speech: verb.fr, // the prompt holds English; speak only the infinitive
          answer: pool.find((p) => p.id === `${verb.id}:${slot}`),
          pool,
          runSeed,
        })
        if (!question) return null

        return {
          ...question,
          // Show the fully-elided form ("j'habite") once the answer is revealed.
          reveal: conjugated(slot, verb.forms[slot]),
          // …and speak the whole phrase. The bare form is useless aloud: the
          // endings -e, -es and -ent are all silent, so `parle`, `parles` and
          // `parlent` are homophones. Only the pronoun distinguishes them.
          revealSpeech: conjugated(slot, verb.forms[slot], { spoken: true }),
        }
      })
      .filter(Boolean)
  })
}

// ---------------------------------------------------------------------------
// Decks
// ---------------------------------------------------------------------------

export const decks = [
  {
    id: 'pronouns',
    label: 'Les pronoms sujets',
    build: (seed) => vocabQuestions(pronouns, 'pronouns', seed),
  },
  { id: 'verbs', label: 'Les verbes en «ER»', build: verbQuestions },
  {
    id: 'classroom',
    label: 'Les objets de la classe',
    // Show the article — you should be absorbing gender alongside the noun.
    build: (seed) =>
      vocabQuestions(classroom, 'classroom', seed, { display: (it) => `${it.article} ${it.fr}` }),
  },
  { id: 'colors', label: 'Les couleurs', build: (seed) => vocabQuestions(colors, 'colors', seed) },
  {
    id: 'salutations',
    label: 'Saluer',
    build: (seed) => vocabQuestions(salutations, 'salutations', seed),
  },
]

/** Build a shuffled run of questions for a deck (or every deck). */
export function buildQuiz(deckId, runSeed) {
  const chosen = deckId === 'all' ? decks : decks.filter((d) => d.id === deckId)
  const questions = chosen.flatMap((d) => d.build(runSeed))
  return shuffle(questions, makeRandom(runSeed))
}
