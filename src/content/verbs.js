// Les verbes du 1er groupe («ER») — Cours collectif N°1, slides 118-200, 336-348.
//
// A verb is not a French/English pair, so it doesn't share the vocab shape.
// It's a table: (verb, pronoun) -> form. One entry below expands into six
// flashcards, and the distractors for each card are drawn from the OTHER five
// forms of the same verb. That's deliberate: `parle` vs `parles` vs `parlez`
// is the confusion actually worth drilling. Distractors pulled from unrelated
// verbs would be visibly wrong and teach nothing.

// The rule as taught: root + ending.
export const endings = {
  je: 'e',
  tu: 'es',
  il: 'e', // il / elle / on
  nous: 'ons',
  vous: 'ez',
  ils: 'ent', // ils / elles
}

// The forms below are written out rather than generated from `endings`,
// because for two verbs on the worksheet the rule quietly produces wrong
// French. See `spellingChange`. Generating would have baked those errors in.
export const verbs = [
  {
    id: 'chanter',
    fr: 'chanter',
    en: 'to sing',
    latin: 'cantare',
    forms: { je: 'chante', tu: 'chantes', il: 'chante', nous: 'chantons', vous: 'chantez', ils: 'chantent' },
  },
  {
    id: 'habiter',
    fr: 'habiter',
    en: 'to live',
    latin: 'habitare (to stay) / habere (to own)',
    forms: { je: 'habite', tu: 'habites', il: 'habite', nous: 'habitons', vous: 'habitez', ils: 'habitent' },
  },
  {
    id: 'parler',
    fr: 'parler',
    en: 'to speak',
    latin: 'parabolare (a speech) — from Greek parabolé (meeting)',
    forms: { je: 'parle', tu: 'parles', il: 'parle', nous: 'parlons', vous: 'parlez', ils: 'parlent' },
  },
  {
    id: 'manger',
    fr: 'manger',
    en: 'to eat',
    latin: 'manducare',
    // Slide 122 says every -ER verb is regular except `envoyer` and `aller`.
    // That is true of the ENDINGS, but not of the spelling of the stem.
    spellingChange:
      'nous mangeons — the e is kept so the g stays soft. The rule as stated would give "mangons", which would be pronounced with a hard g.',
    forms: { je: 'mange', tu: 'manges', il: 'mange', nous: 'mangeons', vous: 'mangez', ils: 'mangent' },
  },
  {
    id: 'casser',
    fr: 'casser',
    en: 'to break',
    latin: 'quassare (to shake strongly)',
    forms: { je: 'casse', tu: 'casses', il: 'casse', nous: 'cassons', vous: 'cassez', ils: 'cassent' },
  },
  {
    id: 'peser',
    fr: 'peser',
    en: 'to weigh',
    latin: 'pendere',
    spellingChange:
      'je pèse, but nous pesons — the stem takes è when the ending is silent. The rule as stated would give "pese".',
    forms: { je: 'pèse', tu: 'pèses', il: 'pèse', nous: 'pesons', vous: 'pesez', ils: 'pèsent' },
  },
  {
    id: 'donner',
    fr: 'donner',
    en: 'to give',
    latin: 'donare',
    forms: { je: 'donne', tu: 'donnes', il: 'donne', nous: 'donnons', vous: 'donnez', ils: 'donnent' },
  },
  {
    id: 'jouer',
    fr: 'jouer',
    en: 'to play',
    latin: 'jocari',
    forms: { je: 'joue', tu: 'joues', il: 'joue', nous: 'jouons', vous: 'jouez', ils: 'jouent' },
  },
  {
    id: 'noter',
    fr: 'noter',
    en: 'to note',
    latin: 'nota (a mark) -> notare (to mark)',
    forms: { je: 'note', tu: 'notes', il: 'note', nous: 'notons', vous: 'notez', ils: 'notent' },
  },
]

// How each slot is labelled when shown as a question prompt.
export const slotLabels = {
  je: 'je',
  tu: 'tu',
  il: 'il / elle',
  nous: 'nous',
  vous: 'vous',
  ils: 'ils / elles',
}

// What a speech synthesizer should say. It would read "il / elle" aloud as
// "il slash elle", so the spoken form picks one pronoun.
const spokenLabels = { ...slotLabels, il: 'il', ils: 'ils' }

/**
 * Join a subject pronoun to a verb form, applying elision.
 *
 * `je` + `parle` -> "je parle", but `je` + `habite` -> "j'habite", because
 * French drops the vowel of `je` before a word starting with a vowel sound.
 * The `h` of `habiter` is silent (an "h muet"), so it elides like a vowel.
 *
 * Only `je` elides among the pronouns in this lesson.
 */
export function conjugated(slot, form, { spoken = false } = {}) {
  if (slot === 'je' && /^[aeiouyâàéèêëîïôûùh]/i.test(form)) {
    return `j'${form}`
  }
  return `${(spoken ? spokenLabels : slotLabels)[slot]} ${form}`
}
