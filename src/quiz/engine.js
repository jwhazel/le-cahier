// Turns content (facts) into questions (facts + plausible lies).
//
// Nothing in here touches React. It's plain functions over plain data, which
// means you can reason about it — and test it — without rendering anything.

import { pronouns } from '../content/pronouns.js'
import { classroom, colors, salutations } from '../content/vocab.js'
import { days, months } from '../content/calendar.js'
import { numbers } from '../content/numbers.js'
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

/**
 * Recall questions over a flat vocabulary list.
 *
 * The default is French -> English ("une chaise" means ___). But the four
 * accessors let a deck flip the direction without a new generator: numbers, for
 * instance, show the digit and ask for the French word (17 -> "dix-sept"). What
 * matters is that `answerText` and `speech` stay consistent — the pool of wrong
 * answers is built from `answerText`, and we only ever speak French, never the
 * prompt (which might be English, or a bare digit).
 */
function vocabQuestions(
  items,
  deckId,
  runSeed,
  {
    display = (it) => it.fr,
    answerText = (it) => it.en,
    subtitle = 'means',
    speech = (it) => it.speech ?? it.fr,
  } = {},
) {
  const pool = items.map((it) => ({ id: it.id, text: answerText(it), confusableWith: it.confusableWith }))

  return items
    .map((it) =>
      assemble({
        id: `${deckId}:${it.id}`,
        prompt: display(it),
        subtitle,
        note: it.note,
        swatch: it.hex, // revealed only after answering; see Quiz.jsx
        speech: speech(it),
        answer: pool.find((p) => p.id === it.id),
        pool,
        runSeed,
      }),
    )
    .filter(Boolean)
}

/**
 * Conjugation. One verb -> six questions, each drawing its distractors from
 * the same verb's other forms. `verbList` selects which verbs (by group), so
 * «ER», «IR» and the auxiliaries are separate decks that never leak distractors
 * across groups.
 */
function verbQuestions(runSeed, verbList) {
  return verbList.flatMap((verb) => {
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

// The courses, in order. Drives the lesson grouping in the deck picker and the
// cheat sheet.
export const lessons = [
  { id: 1, label: 'Cours N°1', date: '9 juillet' },
  { id: 2, label: 'Cours N°2', date: '17 juillet' },
]

const erVerbs = verbs.filter((v) => v.group === 1)
const irVerbs = verbs.filter((v) => v.group === 2)
const auxVerbs = verbs.filter((v) => v.group === 'aux')

export const decks = [
  // --- Cours N°1 -----------------------------------------------------------
  {
    id: 'pronouns',
    lesson: 1,
    label: 'Les pronoms sujets',
    build: (seed) => vocabQuestions(pronouns, 'pronouns', seed),
  },
  { id: 'verbs', lesson: 1, label: 'Les verbes «ER»', build: (seed) => verbQuestions(seed, erVerbs) },
  {
    id: 'classroom',
    lesson: 1,
    label: 'Les objets de la classe',
    // Show the article — you should be absorbing gender alongside the noun.
    build: (seed) =>
      vocabQuestions(classroom, 'classroom', seed, { display: (it) => `${it.article} ${it.fr}` }),
  },
  { id: 'colors', lesson: 1, label: 'Les couleurs', build: (seed) => vocabQuestions(colors, 'colors', seed) },
  {
    id: 'salutations',
    lesson: 1,
    label: 'Saluer',
    build: (seed) => vocabQuestions(salutations, 'salutations', seed),
  },

  // --- Cours N°2 -----------------------------------------------------------
  { id: 'days', lesson: 2, label: 'Les jours de la semaine', build: (seed) => vocabQuestions(days, 'days', seed) },
  { id: 'months', lesson: 2, label: 'Les mois', build: (seed) => vocabQuestions(months, 'months', seed) },
  {
    id: 'numbers',
    lesson: 2,
    label: 'Les nombres',
    // Digit -> French word: "17" -> dix-sept. See vocabQuestions.
    build: (seed) =>
      vocabQuestions(numbers, 'numbers', seed, {
        display: (it) => it.digit,
        answerText: (it) => it.fr,
        subtitle: 'en français',
        speech: (it) => it.fr,
      }),
  },
  { id: 'verbs-ir', lesson: 2, label: 'Les verbes «IR»', build: (seed) => verbQuestions(seed, irVerbs) },
  { id: 'aux', lesson: 2, label: 'Être & avoir', build: (seed) => verbQuestions(seed, auxVerbs) },
]

/**
 * Build a shuffled run of questions. `scope` is one of:
 *   'all'          — every deck, every lesson
 *   'lesson:<n>'   — every deck in lesson n ("tout mélangé" for that course)
 *   '<deckId>'     — a single deck
 */
export function buildQuiz(scope, runSeed) {
  let chosen
  if (scope === 'all') chosen = decks
  else if (scope.startsWith('lesson:')) {
    const n = Number(scope.slice('lesson:'.length))
    chosen = decks.filter((d) => d.lesson === n)
  } else chosen = decks.filter((d) => d.id === scope)

  const questions = chosen.flatMap((d) => d.build(runSeed))
  return shuffle(questions, makeRandom(runSeed))
}
