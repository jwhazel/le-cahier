// Verbs, across every course. Cours N°1 (1st group «ER»), Cours N°2 (new «ER»
// verbs, 2nd group «IR», and the irregular auxiliaries être / avoir).
//
// A verb is not a French/English pair, so it doesn't share the vocab shape.
// It's a table: (verb, pronoun) -> form. One entry below expands into six
// flashcards, and the distractors for each card are drawn from the OTHER five
// forms of the same verb. That's deliberate: `parle` vs `parles` vs `parlez`
// is the confusion actually worth drilling. Distractors pulled from unrelated
// verbs would be visibly wrong and teach nothing.
//
// `group` splits the verbs into their own decks and reference grids:
//   1     — 1er groupe, «ER»  (root + e/es/e/ons/ez/ent)
//   2     — 2ème groupe, «IR» (root + is/is/it/issons/issez/issent)
//   'aux' — être & avoir, irregular; no rule, memorise the forms

// The endings as taught, kept for the reference grid's footnotes.
export const endings = {
  1: { je: 'e', tu: 'es', il: 'e', nous: 'ons', vous: 'ez', ils: 'ent' },
  2: { je: 'is', tu: 'is', il: 'it', nous: 'issons', vous: 'issez', ils: 'issent' },
}

// The forms below are written out rather than generated from `endings`,
// because for several verbs the rule quietly produces wrong French (see the
// `spellingChange` notes, and the whole `aux` group). Generating would have
// baked those errors in.
export const verbs = [
  // --- 1er groupe «ER» — Cours N°1 -----------------------------------------
  {
    id: 'chanter',
    fr: 'chanter',
    en: 'to sing',
    group: 1,
    latin: 'cantare',
    forms: { je: 'chante', tu: 'chantes', il: 'chante', nous: 'chantons', vous: 'chantez', ils: 'chantent' },
  },
  {
    id: 'habiter',
    fr: 'habiter',
    en: 'to live',
    group: 1,
    latin: 'habitare (to stay) / habere (to own)',
    forms: { je: 'habite', tu: 'habites', il: 'habite', nous: 'habitons', vous: 'habitez', ils: 'habitent' },
  },
  {
    id: 'parler',
    fr: 'parler',
    en: 'to speak',
    group: 1,
    latin: 'parabolare (a speech) — from Greek parabolé (meeting)',
    forms: { je: 'parle', tu: 'parles', il: 'parle', nous: 'parlons', vous: 'parlez', ils: 'parlent' },
  },
  {
    id: 'manger',
    fr: 'manger',
    en: 'to eat',
    group: 1,
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
    group: 1,
    latin: 'quassare (to shake strongly)',
    forms: { je: 'casse', tu: 'casses', il: 'casse', nous: 'cassons', vous: 'cassez', ils: 'cassent' },
  },
  {
    id: 'peser',
    fr: 'peser',
    en: 'to weigh',
    group: 1,
    latin: 'pendere',
    spellingChange:
      'je pèse, but nous pesons — the stem takes è when the ending is silent. The rule as stated would give "pese".',
    forms: { je: 'pèse', tu: 'pèses', il: 'pèse', nous: 'pesons', vous: 'pesez', ils: 'pèsent' },
  },
  {
    id: 'donner',
    fr: 'donner',
    en: 'to give',
    group: 1,
    latin: 'donare',
    forms: { je: 'donne', tu: 'donnes', il: 'donne', nous: 'donnons', vous: 'donnez', ils: 'donnent' },
  },
  {
    id: 'jouer',
    fr: 'jouer',
    en: 'to play',
    group: 1,
    latin: 'jocari',
    forms: { je: 'joue', tu: 'joues', il: 'joue', nous: 'jouons', vous: 'jouez', ils: 'jouent' },
  },
  {
    id: 'noter',
    fr: 'noter',
    en: 'to note',
    group: 1,
    latin: 'nota (a mark) -> notare (to mark)',
    forms: { je: 'note', tu: 'notes', il: 'note', nous: 'notons', vous: 'notez', ils: 'notent' },
  },
  // new «ER» verbs — Cours N°2
  {
    id: 'travailler',
    fr: 'travailler',
    en: 'to work',
    group: 1,
    latin: 'tripaliare (to torture with the tripalium)',
    forms: {
      je: 'travaille',
      tu: 'travailles',
      il: 'travaille',
      nous: 'travaillons',
      vous: 'travaillez',
      ils: 'travaillent',
    },
  },
  {
    id: 'aimer',
    fr: 'aimer',
    en: 'to love / to like',
    group: 1,
    latin: 'amare — Old French "amer"',
    // je + aime elides to j'aime; handled by conjugated().
    forms: { je: 'aime', tu: 'aimes', il: 'aime', nous: 'aimons', vous: 'aimez', ils: 'aiment' },
  },
  // new «ER» verb — Cours N°3
  {
    id: 'cacher',
    fr: 'cacher',
    en: 'to hide',
    group: 1,
    latin: 'coacticare (to compress / to squeeze)',
    forms: { je: 'cache', tu: 'caches', il: 'cache', nous: 'cachons', vous: 'cachez', ils: 'cachent' },
  },

  // --- 2ème groupe «IR» — Cours N°2 ----------------------------------------
  // All regular: root + is/is/it/issons/issez/issent. Note je and tu are
  // identical ("finis"), as in every 2nd-group verb.
  {
    id: 'finir',
    fr: 'finir',
    en: 'to finish',
    group: 2,
    latin: 'finire (to limit / to end)',
    forms: { je: 'finis', tu: 'finis', il: 'finit', nous: 'finissons', vous: 'finissez', ils: 'finissent' },
  },
  {
    id: 'choisir',
    fr: 'choisir',
    en: 'to choose',
    group: 2,
    forms: {
      je: 'choisis',
      tu: 'choisis',
      il: 'choisit',
      nous: 'choisissons',
      vous: 'choisissez',
      ils: 'choisissent',
    },
  },
  {
    id: 'grandir',
    fr: 'grandir',
    en: 'to grow up',
    group: 2,
    forms: {
      je: 'grandis',
      tu: 'grandis',
      il: 'grandit',
      nous: 'grandissons',
      vous: 'grandissez',
      ils: 'grandissent',
    },
  },
  {
    id: 'reussir',
    fr: 'réussir',
    en: 'to succeed',
    group: 2,
    forms: {
      je: 'réussis',
      tu: 'réussis',
      il: 'réussit',
      nous: 'réussissons',
      vous: 'réussissez',
      ils: 'réussissent',
    },
  },
  {
    id: 'reflechir',
    fr: 'réfléchir',
    en: 'to think / to reflect',
    group: 2,
    forms: {
      je: 'réfléchis',
      tu: 'réfléchis',
      il: 'réfléchit',
      nous: 'réfléchissons',
      vous: 'réfléchissez',
      ils: 'réfléchissent',
    },
  },
  {
    id: 'obeir',
    fr: 'obéir',
    en: 'to obey',
    group: 2,
    // j'obéis — elision before the vowel; handled by conjugated().
    forms: { je: 'obéis', tu: 'obéis', il: 'obéit', nous: 'obéissons', vous: 'obéissez', ils: 'obéissent' },
  },
  {
    id: 'grossir',
    fr: 'grossir',
    en: 'to gain weight',
    group: 2,
    forms: {
      je: 'grossis',
      tu: 'grossis',
      il: 'grossit',
      nous: 'grossissons',
      vous: 'grossissez',
      ils: 'grossissent',
    },
  },
  {
    id: 'maigrir',
    fr: 'maigrir',
    en: 'to lose weight',
    group: 2,
    forms: {
      je: 'maigris',
      tu: 'maigris',
      il: 'maigrit',
      nous: 'maigrissons',
      vous: 'maigrissez',
      ils: 'maigrissent',
    },
  },
  {
    id: 'remplir',
    fr: 'remplir',
    en: 'to fill',
    group: 2,
    forms: {
      je: 'remplis',
      tu: 'remplis',
      il: 'remplit',
      nous: 'remplissons',
      vous: 'remplissez',
      ils: 'remplissent',
    },
  },
  {
    id: 'batir',
    fr: 'bâtir',
    en: 'to build',
    group: 2,
    forms: { je: 'bâtis', tu: 'bâtis', il: 'bâtit', nous: 'bâtissons', vous: 'bâtissez', ils: 'bâtissent' },
  },
  // new «IR» verbs — Cours N°3
  {
    id: 'reagir',
    fr: 'réagir',
    en: 'to react',
    group: 2,
    latin: 'reagere (to push again)',
    forms: { je: 'réagis', tu: 'réagis', il: 'réagit', nous: 'réagissons', vous: 'réagissez', ils: 'réagissent' },
  },
  {
    id: 'ralentir',
    fr: 'ralentir',
    en: 'to slow down',
    group: 2,
    latin: 'Old French "alentir" (to be slow)',
    forms: {
      je: 'ralentis',
      tu: 'ralentis',
      il: 'ralentit',
      nous: 'ralentissons',
      vous: 'ralentissez',
      ils: 'ralentissent',
    },
  },

  // --- auxiliaries être / avoir — Cours N°2 --------------------------------
  // Irregular: no root+ending rule. These have to be memorised, and they carry
  // most of the language (every compound tense is built on them).
  {
    id: 'etre',
    fr: 'être',
    en: 'to be',
    group: 'aux',
    note: 'Irregular auxiliary — no rule, memorise it.',
    forms: { je: 'suis', tu: 'es', il: 'est', nous: 'sommes', vous: 'êtes', ils: 'sont' },
  },
  {
    id: 'avoir',
    fr: 'avoir',
    en: 'to have',
    group: 'aux',
    note: 'Irregular auxiliary — no rule, memorise it. j’ai elides.',
    // j'ai — elision before the vowel; handled by conjugated().
    forms: { je: 'ai', tu: 'as', il: 'a', nous: 'avons', vous: 'avez', ils: 'ont' },
  },

  // --- reflexive (pronominal) verbs — Cours N°3 ----------------------------
  // The reflexive pronoun is baked into each form (m', t', s', nous, vous, s'),
  // so conjugated() joins subject + form correctly: "je" + "m'appelle" =>
  // "je m'appelle". These carry the whole "se présenter" lesson. See also the
  // reflexive-pronoun mapping in reflexives.js.
  {
    id: 'sappeler',
    fr: "s'appeler",
    en: 'to be called / one’s name is',
    group: 'reflexive',
    // Double L keeps the strong [ɛ] sound where the ending is weak: je
    // m'appelle (ll) but nous appelons / vous appelez (single l), where -ons and
    // -ez already carry the stress.
    note: "Double L in m'appelle / t'appelles / s'appelle(nt); single l in nous appelons / vous appelez.",
    forms: {
      je: "m'appelle",
      tu: "t'appelles",
      il: "s'appelle",
      nous: 'nous appelons',
      vous: 'vous appelez',
      ils: "s'appellent",
    },
  },
  {
    id: 'sepresenter',
    fr: 'se présenter',
    en: 'to introduce oneself',
    group: 'reflexive',
    forms: {
      je: 'me présente',
      tu: 'te présentes',
      il: 'se présente',
      nous: 'nous présentons',
      vous: 'vous présentez',
      ils: 'se présentent',
    },
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
 * This also covers j'aime, j'obéis and j'ai.
 *
 * Only `je` elides among the pronouns in these lessons.
 */
export function conjugated(slot, form, { spoken = false } = {}) {
  if (slot === 'je' && /^[aeiouyâàéèêëîïôûùh]/i.test(form)) {
    return `j'${form}`
  }
  return `${(spoken ? spokenLabels : slotLabels)[slot]} ${form}`
}
