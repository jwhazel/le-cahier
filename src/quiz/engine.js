// Turns content (facts) into questions (facts + plausible lies).
//
// Nothing in here touches React. It's plain functions over plain data, which
// means you can reason about it — and test it — without rendering anything.

import { pronouns } from '../content/pronouns.js'
import { classroom, colors, salutations, nature, weather, seaside, paysage } from '../content/vocab.js'
import { days, months, seasons } from '../content/calendar.js'
import { numbers } from '../content/numbers.js'
import { nationalities } from '../content/nationalities.js'
import { reflexivePronouns } from '../content/reflexives.js'
import { accents } from '../content/accents.js'
import { articleNouns, ARTICLES, articleOf, withArticle } from '../content/articles.js'
import { negations } from '../content/negation.js'
import { possessives } from '../content/possessives.js'
import { inversions, questionWords } from '../content/interrogatives.js'
import { grosMots } from '../content/grosmots.js'
import { imperfectVerbs } from '../content/imperfect.js'
import { verbs, slotLabels, conjugated } from '../content/verbs.js'
import { TIME_CARDS } from './time.js'

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
    note = (it) => it.note,
  } = {},
) {
  const pool = items.map((it) => ({ id: it.id, text: answerText(it), confusableWith: it.confusableWith }))

  return items
    .map((it) =>
      assemble({
        id: `${deckId}:${it.id}`,
        prompt: display(it),
        subtitle,
        note: note(it),
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
 *
 * The options let a second TENSE reuse this exact machinery: the imperfect deck
 * passes the same-shaped `imperfectVerbs` with a different `idPrefix` (so its
 * question ids don't collide with the present decks), a `subtitleFor` that says
 * "à l'imparfait", and `noteOf` reading each verb's `note`. Keeping the elision
 * and reveal logic in one place means both tenses stay correct together.
 */
function verbQuestions(
  runSeed,
  verbList,
  {
    idPrefix = 'verbs',
    subtitleFor = (slot) => `${slotLabels[slot]} …`,
    noteOf = (verb) => verb.spellingChange,
  } = {},
) {
  return verbList.flatMap((verb) => {
    const pool = Object.entries(verb.forms).map(([slot, form]) => ({
      id: `${verb.id}:${slot}`,
      text: form,
    }))

    return Object.keys(verb.forms)
      .map((slot) => {
        const question = assemble({
          id: `${idPrefix}:${verb.id}:${slot}`,
          prompt: `${verb.fr} (${verb.en})`,
          subtitle: subtitleFor(slot),
          note: noteOf(verb),
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

/**
 * Definite articles. Every question offers the same four options (le / la / l' /
 * les) — the answer is computed from the noun, so there's no distractor pool to
 * build; the four articles *are* the choices.
 */
function articleQuestions(runSeed) {
  const pool = ARTICLES.map((a) => ({ id: a, text: a }))
  return articleNouns
    .map((noun) => {
      const answer = articleOf(noun)
      return assemble({
        id: `articles:${noun.id}`,
        prompt: `___ ${noun.fr}`,
        subtitle: 'article défini',
        speech: withArticle(noun), // hear the noun with its article
        answer: pool.find((p) => p.id === answer),
        pool,
        runSeed,
      })
    })
    .filter(Boolean)
    .map((q) => ({ ...q, reveal: withArticle(articleNouns.find((n) => `articles:${n.id}` === q.id)) }))
}

/**
 * "Pick the correct X" over a prompt/answer/distractors triple. Shared by
 * negation (affirmative -> negation) and any future transformation deck: the
 * distractors are authored, not drawn from siblings, because the whole point is
 * the specific mistakes the rule prevents.
 */
function transformQuestions(items, deckId, runSeed, { prompt, answer, subtitle, note }) {
  return items
    .map((it) => {
      const target = answer(it)
      const pool = [
        { id: `${it.id}:ok`, text: target },
        ...it.distractors.map((d, i) => ({ id: `${it.id}:d${i}`, text: d })),
      ]
      const q = assemble({
        id: `${deckId}:${it.id}`,
        prompt: prompt(it),
        subtitle,
        note: note?.(it),
        speech: target, // speak the correct target
        answer: pool[0],
        pool,
        runSeed,
      })
      return q && { ...q, reveal: target }
    })
    .filter(Boolean)
}

/**
 * Possessive adjectives. A fill-in-the-blank: the prompt is a sentence with a
 * ___ gap, the four options are single possessives (mon / ma / mes …), and the
 * distractors are authored — the same person's other forms (the agreement trap)
 * plus one wrong-person form. It's close to transformQuestions, but the options
 * are bare words while the reveal and speech want the WHOLE sentence with the
 * blank filled, so it gets its own small generator rather than bending that one.
 */
function possessiveQuestions(runSeed) {
  return possessives
    .map((it) => {
      const filled = it.template.replace('___', it.answer)
      const pool = [
        { id: `${it.id}:ok`, text: it.answer },
        ...it.distractors.map((d, i) => ({ id: `${it.id}:d${i}`, text: d })),
      ]
      const q = assemble({
        id: `possessives:${it.id}`,
        prompt: it.template,
        subtitle: it.hint, // the noun's gender/number — this is about agreement
        speech: filled, // hear the whole correct sentence, not the bare word
        answer: pool[0],
        pool,
        runSeed,
      })
      return q && { ...q, reveal: filled }
    })
    .filter(Boolean)
}

/**
 * Telling time. A generator: the prompt is a digital clock, the answer is the
 * French phrase computed in time.js, and the distractors are the phrasings a
 * learner is most likely to confuse it with.
 */
function timeQuestions(runSeed) {
  return TIME_CARDS.map((card) => {
    const pool = [
      { id: `${card.id}:ok`, text: card.phrase },
      ...card.distractors.map((d, i) => ({ id: `${card.id}:d${i}`, text: d })),
    ]
    const q = assemble({
      id: `time:${card.id}`,
      prompt: card.digital,
      subtitle: 'quelle heure est-il ?',
      speech: card.phrase,
      answer: pool[0],
      pool,
      runSeed,
    })
    return q && { ...q, reveal: `${card.digital} — ${card.phrase}` }
  }).filter(Boolean)
}

// ---------------------------------------------------------------------------
// Decks
// ---------------------------------------------------------------------------

// The courses, in order. Drives the lesson grouping in the deck picker and the
// cheat sheet.
export const lessons = [
  { id: 1, label: 'Cours N°1', date: '9 juillet' },
  { id: 2, label: 'Cours N°2', date: '17 juillet' },
  { id: 3, label: 'Cours N°3', date: '24 juillet' },
  { id: 4, label: 'Cours N°4', date: '30 juillet' },
  { id: 5, label: 'Cours N°5', date: '6 août' },
  { id: 6, label: 'Cours N°6', date: '13 août' },
]

const erVerbs = verbs.filter((v) => v.group === 1)
const irVerbs = verbs.filter((v) => v.group === 2)
const thirdVerbs = verbs.filter((v) => v.group === 3)
const auxVerbs = verbs.filter((v) => v.group === 'aux')
const reflexiveVerbs = verbs.filter((v) => v.group === 'reflexive')

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

  // --- Cours N°3 -----------------------------------------------------------
  // (cacher / réagir / ralentir fold into the «ER» and «IR» decks above.)
  {
    id: 'nationalities',
    lesson: 3,
    label: 'Les nationalités',
    build: (seed) => vocabQuestions(nationalities, 'nationalities', seed),
  },
  { id: 'articles', lesson: 3, label: 'Les articles définis', build: articleQuestions },
  {
    id: 'reflexive-pronouns',
    lesson: 3,
    label: 'Les pronoms réfléchis',
    build: (seed) =>
      vocabQuestions(reflexivePronouns, 'reflexive-pronouns', seed, {
        display: (it) => it.subject,
        answerText: (it) => it.fr,
        subtitle: 'pronom réfléchi',
        speech: (it) => it.fr,
      }),
  },
  {
    id: 'reflexive-verbs',
    lesson: 3,
    label: 'Se présenter (verbes pronominaux)',
    build: (seed) => verbQuestions(seed, reflexiveVerbs),
  },
  {
    id: 'accents',
    lesson: 3,
    label: 'Les accents',
    // Prompt is the accent's name; the four options are drawn from the five
    // symbols. Speak the example word so you hear where the accent lands.
    build: (seed) =>
      vocabQuestions(accents, 'accents', seed, {
        display: (it) => it.name,
        answerText: (it) => it.symbol,
        subtitle: 'quelle lettre ?',
        speech: (it) => it.example,
      }),
  },
  {
    id: 'negation',
    lesson: 3,
    label: 'La négation (ne… pas)',
    build: (seed) =>
      transformQuestions(negations, 'negation', seed, {
        prompt: (it) => it.affirmative,
        answer: (it) => it.negative,
        subtitle: 'à la forme négative',
      }),
  },
  { id: 'time', lesson: 3, label: "L'heure", build: timeQuestions },

  // --- Cours N°4 -----------------------------------------------------------
  // (écraser folds into «ER»; punir/saisir/atterrir/investir/bénir/avertir into
  // «IR»; se cacher into the reflexive deck.)
  {
    id: 'nature',
    lesson: 4,
    label: 'La nature (Tahiti)',
    // Show the article — gender is learned with the noun, as in `classroom`.
    build: (seed) =>
      vocabQuestions(nature, 'nature', seed, { display: (it) => `${it.article} ${it.fr}` }),
  },
  {
    id: 'possessives',
    lesson: 4,
    label: 'Les adjectifs possessifs',
    build: possessiveQuestions,
  },
  {
    id: 'interrogatives',
    lesson: 4,
    label: 'Poser une question (inversion)',
    build: (seed) =>
      transformQuestions(inversions, 'interrogatives', seed, {
        prompt: (it) => it.affirmative,
        answer: (it) => it.question,
        subtitle: 'à la forme interrogative',
      }),
  },
  {
    id: 'question-words',
    lesson: 4,
    label: 'Les mots interrogatifs',
    build: (seed) => vocabQuestions(questionWords, 'question-words', seed),
  },
  {
    id: 'gros-mots',
    lesson: 4,
    label: 'Gros mots (argot) 🌶️',
    // Not from the slides — see grosmots.js. The register rides along as a note
    // revealed after answering.
    build: (seed) =>
      vocabQuestions(grosMots, 'gros-mots', seed, {
        note: (it) => registerNote(it),
      }),
  },

  // --- Cours N°5 -----------------------------------------------------------
  // (placer / mijoter fold into «ER»; vieillir / rougir / applaudir / nourrir /
  // agir into «IR»; se tromper into the reflexive deck.)
  {
    id: 'weather',
    lesson: 5,
    label: 'Quel temps fait-il ?',
    // Nouns show their article (gender rides along); adjectives/expressions don't.
    build: (seed) =>
      vocabQuestions(weather, 'weather', seed, {
        display: (it) => (it.article ? `${it.article} ${it.fr}` : it.fr),
      }),
  },
  {
    id: 'seaside',
    lesson: 5,
    label: 'Au bord de la mer',
    build: (seed) =>
      vocabQuestions(seaside, 'seaside', seed, { display: (it) => `${it.article} ${it.fr}` }),
  },
  {
    id: 'verbs-3',
    lesson: 5,
    label: 'Les verbes du 3ème groupe',
    build: (seed) => verbQuestions(seed, thirdVerbs),
  },

  // --- Cours N°6 -----------------------------------------------------------
  // (placer/mijoter already in «ER»; fleurir/établir/aplatir/réunir/approfondir/
  // embellir fold into «IR»; admettre into the 3rd-group deck.)
  {
    id: 'imperfect',
    lesson: 6,
    label: "L'imparfait (passé)",
    // Same generator as the present decks, a different tense. See verbQuestions.
    build: (seed) =>
      verbQuestions(seed, imperfectVerbs, {
        idPrefix: 'imperfect',
        subtitleFor: (slot) => `à l'imparfait — ${slotLabels[slot]} …`,
        noteOf: (v) => v.note,
      }),
  },
  {
    id: 'seasons',
    lesson: 6,
    label: 'Les saisons et les moments',
    // Nouns show their article (gender rides along); the adverbs (hier, demain…)
    // have none.
    build: (seed) =>
      vocabQuestions(seasons, 'seasons', seed, {
        display: (it) => (it.article ? `${it.article} ${it.fr}` : it.fr),
      }),
  },
  {
    id: 'paysage',
    lesson: 6,
    label: 'Le paysage (Monet)',
    build: (seed) =>
      vocabQuestions(paysage, 'paysage', seed, { display: (it) => `${it.article} ${it.fr}` }),
  },
]

// vocabQuestions passes `it.note` straight through; the gros-mots deck has no
// authored note, so build one from the register for the reveal line.
const REGISTER_LABEL = {
  familier: 'familier — mild, everyday frustration',
  vulgaire: 'vulgaire — crude; not for work or strangers',
  injure: 'injure — a personal insult; aimed at someone',
}
function registerNote(it) {
  const label = REGISTER_LABEL[it.register]
  return it.note ? `${label}. ${it.note}` : label
}

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
