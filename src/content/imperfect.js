// L'imparfait — the imperfect past tense. Cours collectif N°6, the first new
// TENSE in the app (everything before this was the présent).
//
// The imperfect is famously regular: take the present-tense `nous` form, drop the
// -ons to get the stem, and add one fixed set of endings for EVERY verb —
//
//     je -ais · tu -ais · il -ait · nous -ions · vous -iez · ils -aient
//
// so parler (nous parlons → parl-) gives parlais / parlait / parlions …, and even
// the 3rd-group prendre (nous prenons → pren-) gives prenais. The 2nd group keeps
// its -iss- (nous finissons → finiss-), so finir → finissais. There is exactly ONE
// irregular stem in the whole tense: être → ét- (j'étais). avoir is regular
// (nous avons → av-), and aller — irregular in the present — is perfectly regular
// here (nous allons → all-), which is a nice thing to notice.
//
// Even though it's regular, the forms are written out rather than generated, for
// the same reason the present forms are: a generator would silently bake in the
// edge cases (être's stem, the -iss- of the 2nd group, verbs in -ier that would
// double the i at nous/vous). Writing them out keeps every card verifiable against
// the slide. `group` mirrors verbs.js so the cheat sheet can note the pattern.
//
// Shape matches verbs.js exactly ({ id, fr, en, group, forms }), so the same
// `verbQuestions` generator builds the deck — only the subtitle changes to say
// "à l'imparfait". Distractors are the same verb's other imperfect persons.

export const imperfectVerbs = [
  // --- the auxiliaries (do these first — every learner needs j'étais / j'avais) -
  {
    id: 'etre',
    fr: 'être',
    en: 'to be',
    group: 'aux',
    // The one irregular stem of the whole tense: ét-, not the expected *somm-*.
    note: 'The only irregular imperfect stem: ét- (j’étais), not built from nous sommes.',
    forms: { je: 'étais', tu: 'étais', il: 'était', nous: 'étions', vous: 'étiez', ils: 'étaient' },
  },
  {
    id: 'avoir',
    fr: 'avoir',
    en: 'to have',
    group: 'aux',
    // Regular after all: nous avons → av-. j'avais elides.
    forms: { je: 'avais', tu: 'avais', il: 'avait', nous: 'avions', vous: 'aviez', ils: 'avaient' },
  },

  // --- 1st group «ER» (stem from nous …-ons) -------------------------------
  {
    id: 'parler',
    fr: 'parler',
    en: 'to speak',
    group: 1,
    forms: { je: 'parlais', tu: 'parlais', il: 'parlait', nous: 'parlions', vous: 'parliez', ils: 'parlaient' },
  },
  {
    id: 'aimer',
    fr: 'aimer',
    en: 'to love / to like',
    group: 1,
    // j'aimais elides.
    forms: { je: 'aimais', tu: 'aimais', il: 'aimait', nous: 'aimions', vous: 'aimiez', ils: 'aimaient' },
  },
  {
    id: 'habiter',
    fr: 'habiter',
    en: 'to live',
    group: 1,
    // j'habitais elides (silent h).
    forms: {
      je: 'habitais',
      tu: 'habitais',
      il: 'habitait',
      nous: 'habitions',
      vous: 'habitiez',
      ils: 'habitaient',
    },
  },
  {
    id: 'regarder',
    fr: 'regarder',
    en: 'to watch / to look at',
    group: 1,
    forms: {
      je: 'regardais',
      tu: 'regardais',
      il: 'regardait',
      nous: 'regardions',
      vous: 'regardiez',
      ils: 'regardaient',
    },
  },
  {
    id: 'ecouter',
    fr: 'écouter',
    en: 'to listen (to)',
    group: 1,
    // j'écoutais elides.
    forms: {
      je: 'écoutais',
      tu: 'écoutais',
      il: 'écoutait',
      nous: 'écoutions',
      vous: 'écoutiez',
      ils: 'écoutaient',
    },
  },

  // --- 2nd group «IR» (stem keeps -iss-: nous finissons → finiss-) ----------
  {
    id: 'finir',
    fr: 'finir',
    en: 'to finish',
    group: 2,
    forms: {
      je: 'finissais',
      tu: 'finissais',
      il: 'finissait',
      nous: 'finissions',
      vous: 'finissiez',
      ils: 'finissaient',
    },
  },
  {
    id: 'batir',
    fr: 'bâtir',
    en: 'to build',
    group: 2,
    forms: {
      je: 'bâtissais',
      tu: 'bâtissais',
      il: 'bâtissait',
      nous: 'bâtissions',
      vous: 'bâtissiez',
      ils: 'bâtissaient',
    },
  },

  // --- 3rd group + aller (all regular in the imperfect) --------------------
  {
    id: 'prendre',
    fr: 'prendre',
    en: 'to take',
    group: 3,
    // Irregular in the present, regular here: nous prenons → pren-.
    forms: { je: 'prenais', tu: 'prenais', il: 'prenait', nous: 'prenions', vous: 'preniez', ils: 'prenaient' },
  },
  {
    id: 'aller',
    fr: 'aller',
    en: 'to go',
    group: 3,
    // Highly irregular in the present (je vais), but a model citizen here:
    // nous allons → all- → j'allais. Worth pointing out.
    note: 'Irregular in the present (je vais), but perfectly regular in the imperfect: all-.',
    forms: { je: 'allais', tu: 'allais', il: 'allait', nous: 'allions', vous: 'alliez', ils: 'allaient' },
  },
  {
    id: 'venir',
    fr: 'venir',
    en: 'to come',
    group: 3,
    // Also irregular in the present (je viens) but regular here: nous venons → ven-.
    note: 'Irregular in the present (je viens), but regular in the imperfect: ven-.',
    forms: { je: 'venais', tu: 'venais', il: 'venait', nous: 'venions', vous: 'veniez', ils: 'venaient' },
  },

  // --- Cours N°7 — more 1st-group verbs (tourner, marcher), regular ---------
  {
    id: 'tourner',
    fr: 'tourner',
    en: 'to turn',
    group: 1,
    forms: {
      je: 'tournais',
      tu: 'tournais',
      il: 'tournait',
      nous: 'tournions',
      vous: 'tourniez',
      ils: 'tournaient',
    },
  },
  {
    id: 'marcher',
    fr: 'marcher',
    en: 'to walk',
    group: 1,
    forms: {
      je: 'marchais',
      tu: 'marchais',
      il: 'marchait',
      nous: 'marchions',
      vous: 'marchiez',
      ils: 'marchaient',
    },
  },

  // --- Cours N°8 — from the "il/elle sembler/sentir/tenir" fill-in exercise
  // and the viser/divertir imperfect table. All regular, taking their stem
  // from the present nous form, same as everything above.
  {
    id: 'sembler',
    fr: 'sembler',
    en: 'to seem',
    group: 1,
    forms: {
      je: 'semblais',
      tu: 'semblais',
      il: 'semblait',
      nous: 'semblions',
      vous: 'sembliez',
      ils: 'semblaient',
    },
  },
  {
    id: 'viser',
    fr: 'viser',
    en: 'to aim / to target',
    group: 1,
    forms: { je: 'visais', tu: 'visais', il: 'visait', nous: 'visions', vous: 'visiez', ils: 'visaient' },
  },
  {
    id: 'divertir',
    fr: 'divertir',
    en: 'to entertain',
    group: 2,
    forms: {
      je: 'divertissais',
      tu: 'divertissais',
      il: 'divertissait',
      nous: 'divertissions',
      vous: 'divertissiez',
      ils: 'divertissaient',
    },
  },
  {
    id: 'sentir',
    fr: 'sentir',
    en: 'to smell / to feel',
    group: 3,
    // Irregular in the present (je sens, no -iss-), regular here: nous sentons → sent-.
    note: 'Irregular in the present (je sens), but regular in the imperfect: sent-.',
    forms: { je: 'sentais', tu: 'sentais', il: 'sentait', nous: 'sentions', vous: 'sentiez', ils: 'sentaient' },
  },
  {
    id: 'tenir',
    fr: 'tenir',
    en: 'to hold',
    group: 3,
    // Same "boot verb" family as venir (je tiens, ils tiennent), but regular
    // here: nous tenons → ten-.
    note: 'Irregular in the present (je tiens, like venir), but regular in the imperfect: ten-.',
    forms: { je: 'tenais', tu: 'tenais', il: 'tenait', nous: 'tenions', vous: 'teniez', ils: 'tenaient' },
  },
]
