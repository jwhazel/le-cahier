// Le futur simple — the future tense. Cours collectif N°10, the second new TENSE
// in the app after l'imparfait (N°6).
//
// The rule as taught: INFINITIVE + one fixed set of endings —
//
//     je -ai · tu -as · il -a · nous -ons · vous -ez · ils -ont
//
// (the endings are the present of avoir, minus the av- of avons/avez). For -RE
// verbs, drop the final e first: prendre → prendr- → je prendrai. The R before
// the ending is "the mark of the future" — every future form has one.
//
//     marcher → je marcherai   finir → je finirai   prendre → je prendrai
//
// Then the exception list: about ten very common verbs swap the infinitive for
// an irregular stem, but STILL take the same endings and STILL end the stem in
// r — être → ser-, avoir → aur-, aller → ir-, faire → fer-, venir → viendr-,
// voir → verr-, pouvoir → pourr-, vouloir → voudr-, devoir → devr-,
// savoir → saur-.
//
// As with the other tenses, every form is written out rather than generated,
// so each card can be checked against the slide. The slide gives only the
// `je` form of the irregulars; the other five persons are the irregular stem +
// the regular endings above. Shape matches verbs.js ({ id, fr, en, group,
// forms }), so `verbQuestions` builds the deck unchanged.

export const futureVerbs = [
  // --- the auxiliaries ------------------------------------------------------
  {
    id: 'etre',
    fr: 'être',
    en: 'to be',
    group: 'aux',
    note: 'Irregular stem: ser- (je serai). Nothing like the infinitive.',
    forms: { je: 'serai', tu: 'seras', il: 'sera', nous: 'serons', vous: 'serez', ils: 'seront' },
  },
  {
    id: 'avoir',
    fr: 'avoir',
    en: 'to have',
    group: 'aux',
    note: 'Irregular stem: aur- (j’aurai).',
    forms: { je: 'aurai', tu: 'auras', il: 'aura', nous: 'aurons', vous: 'aurez', ils: 'auront' },
  },

  // --- 1st group «ER»: infinitive + ending ----------------------------------
  // marcher (the slide's model verb), casser (table), manger / nager / lâcher
  // (exercise). manger and nager keep their -e- here for free — it's already
  // in the infinitive, so there's no "mangeons"-style spelling shift to learn.
  {
    id: 'marcher',
    fr: 'marcher',
    en: 'to walk',
    group: 1,
    forms: { je: 'marcherai', tu: 'marcheras', il: 'marchera', nous: 'marcherons', vous: 'marcherez', ils: 'marcheront' },
  },
  {
    id: 'casser',
    fr: 'casser',
    en: 'to break',
    group: 1,
    forms: { je: 'casserai', tu: 'casseras', il: 'cassera', nous: 'casserons', vous: 'casserez', ils: 'casseront' },
  },
  {
    id: 'manger',
    fr: 'manger',
    en: 'to eat',
    group: 1,
    forms: { je: 'mangerai', tu: 'mangeras', il: 'mangera', nous: 'mangerons', vous: 'mangerez', ils: 'mangeront' },
  },
  {
    id: 'nager',
    fr: 'nager',
    en: 'to swim',
    group: 1,
    forms: { je: 'nagerai', tu: 'nageras', il: 'nagera', nous: 'nagerons', vous: 'nagerez', ils: 'nageront' },
  },
  {
    id: 'lacher',
    fr: 'lâcher',
    en: 'to drop / to let go',
    group: 1,
    forms: { je: 'lâcherai', tu: 'lâcheras', il: 'lâchera', nous: 'lâcherons', vous: 'lâcherez', ils: 'lâcheront' },
  },

  // --- 2nd group «IR»: infinitive + ending (no -iss- here) ------------------
  {
    id: 'finir',
    fr: 'finir',
    en: 'to finish',
    group: 2,
    note: 'No -iss- in the future: je finirai (compare the imperfect, je finissais).',
    forms: { je: 'finirai', tu: 'finiras', il: 'finira', nous: 'finirons', vous: 'finirez', ils: 'finiront' },
  },
  {
    id: 'remplir',
    fr: 'remplir',
    en: 'to fill',
    group: 2,
    forms: { je: 'remplirai', tu: 'rempliras', il: 'remplira', nous: 'remplirons', vous: 'remplirez', ils: 'rempliront' },
  },
  {
    id: 'guerir',
    fr: 'guérir',
    en: 'to heal / to recover',
    group: 2,
    forms: { je: 'guérirai', tu: 'guériras', il: 'guérira', nous: 'guérirons', vous: 'guérirez', ils: 'guériront' },
  },

  // --- 3rd group -RE: drop the final e, then add the ending -----------------
  {
    id: 'prendre',
    fr: 'prendre',
    en: 'to take',
    group: 3,
    note: '-re verb: drop the final e → prendr- (je prendrai).',
    forms: { je: 'prendrai', tu: 'prendras', il: 'prendra', nous: 'prendrons', vous: 'prendrez', ils: 'prendront' },
  },
  {
    id: 'apprendre',
    fr: 'apprendre',
    en: 'to learn',
    group: 3,
    note: '-re verb: drop the final e → apprendr- (j’apprendrai).',
    // j'apprendrai — elision before the vowel; handled by conjugated().
    forms: {
      je: 'apprendrai',
      tu: 'apprendras',
      il: 'apprendra',
      nous: 'apprendrons',
      vous: 'apprendrez',
      ils: 'apprendront',
    },
  },
  {
    id: 'conduire',
    fr: 'conduire',
    en: 'to drive',
    group: 3,
    note: '-re verb: drop the final e → conduir- (je conduirai).',
    forms: { je: 'conduirai', tu: 'conduiras', il: 'conduira', nous: 'conduirons', vous: 'conduirez', ils: 'conduiront' },
  },

  // --- irregular stems (the slide's "IRREGULAR VERBS!!!!" list) -------------
  // Same endings, new stem. Each stem still ends in r.
  {
    id: 'aller',
    fr: 'aller',
    en: 'to go',
    group: 3,
    note: 'Irregular stem: ir- (j’irai). A third stem, after vais and allons.',
    forms: { je: 'irai', tu: 'iras', il: 'ira', nous: 'irons', vous: 'irez', ils: 'iront' },
  },
  {
    id: 'faire',
    fr: 'faire',
    en: 'to do / to make',
    group: 3,
    note: 'Irregular stem: fer- (je ferai), not "fair-".',
    forms: { je: 'ferai', tu: 'feras', il: 'fera', nous: 'ferons', vous: 'ferez', ils: 'feront' },
  },
  {
    id: 'venir',
    fr: 'venir',
    en: 'to come',
    group: 3,
    note: 'Irregular stem: viendr- (je viendrai) — a d appears.',
    forms: { je: 'viendrai', tu: 'viendras', il: 'viendra', nous: 'viendrons', vous: 'viendrez', ils: 'viendront' },
  },
  {
    id: 'voir',
    fr: 'voir',
    en: 'to see',
    group: 3,
    note: 'Irregular stem: verr- (je verrai) — double r.',
    forms: { je: 'verrai', tu: 'verras', il: 'verra', nous: 'verrons', vous: 'verrez', ils: 'verront' },
  },
  {
    id: 'pouvoir',
    fr: 'pouvoir',
    en: 'can / to be able to',
    group: 3,
    note: 'Irregular stem: pourr- (je pourrai) — double r.',
    forms: { je: 'pourrai', tu: 'pourras', il: 'pourra', nous: 'pourrons', vous: 'pourrez', ils: 'pourront' },
  },
  {
    id: 'vouloir',
    fr: 'vouloir',
    en: 'to want',
    group: 3,
    note: 'Irregular stem: voudr- (je voudrai) — a d appears.',
    forms: { je: 'voudrai', tu: 'voudras', il: 'voudra', nous: 'voudrons', vous: 'voudrez', ils: 'voudront' },
  },
  {
    id: 'devoir',
    fr: 'devoir',
    en: 'must / to have to',
    group: 3,
    note: 'Irregular stem: devr- (je devrai).',
    forms: { je: 'devrai', tu: 'devras', il: 'devra', nous: 'devrons', vous: 'devrez', ils: 'devront' },
  },
  {
    id: 'savoir',
    fr: 'savoir',
    en: 'to know',
    group: 3,
    note: 'Irregular stem: saur- (je saurai) — rhymes with j’aurai.',
    forms: { je: 'saurai', tu: 'sauras', il: 'saura', nous: 'saurons', vous: 'saurez', ils: 'sauront' },
  },
]

// The irregular stems as their own "pick the right form" deck. Conjugation
// cards (above) draw distractors from the SAME verb's other persons, so they
// drill the endings — but with irregular verbs the hard part is the STEM, and
// "je serai / tu seras / il sera" all share it. These cards put the stem itself
// on trial. Distractors are authored, as in negation.js:
//   - the stem you'd get by wrongly applying the infinitive rule (j'êtrai)
//   - the same person in the present, and in the imperfect — real French, but
//     the wrong tense. Telling the three tenses apart is the point.
export const futureStems = [
  {
    id: 'etre',
    fr: 'être',
    en: 'to be',
    answer: 'je serai',
    distractors: ["j'êtrai", 'je suis', "j'étais"],
    note: 'je suis = présent, j’étais = imparfait.',
  },
  {
    id: 'avoir',
    fr: 'avoir',
    en: 'to have',
    answer: "j'aurai",
    distractors: ["j'avoirai", "j'ai", "j'avais"],
    note: 'j’ai = présent, j’avais = imparfait.',
  },
  {
    id: 'aller',
    fr: 'aller',
    en: 'to go',
    answer: "j'irai",
    distractors: ["j'allerai", 'je vais', "j'allais"],
    note: 'je vais = présent, j’allais = imparfait.',
  },
  {
    id: 'faire',
    fr: 'faire',
    en: 'to do / to make',
    answer: 'je ferai',
    distractors: ['je fairai', 'je fais', 'je faisais'],
    note: 'je fais = présent, je faisais = imparfait.',
  },
  {
    id: 'venir',
    fr: 'venir',
    en: 'to come',
    answer: 'je viendrai',
    distractors: ['je venirai', 'je viens', 'je venais'],
    note: 'je viens = présent, je venais = imparfait.',
  },
  {
    id: 'voir',
    fr: 'voir',
    en: 'to see',
    answer: 'je verrai',
    distractors: ['je voirai', 'je vois', 'je voyais'],
    note: 'je vois = présent, je voyais = imparfait.',
  },
  {
    id: 'pouvoir',
    fr: 'pouvoir',
    en: 'can / to be able to',
    answer: 'je pourrai',
    distractors: ['je pouvoirai', 'je peux', 'je pouvais'],
    note: 'je peux = présent, je pouvais = imparfait.',
  },
  {
    id: 'vouloir',
    fr: 'vouloir',
    en: 'to want',
    answer: 'je voudrai',
    distractors: ['je vouloirai', 'je veux', 'je voulais'],
    note: 'je veux = présent, je voulais = imparfait.',
  },
  {
    id: 'devoir',
    fr: 'devoir',
    en: 'must / to have to',
    answer: 'je devrai',
    distractors: ['je devoirai', 'je dois', 'je devais'],
    note: 'je dois = présent, je devais = imparfait.',
  },
  {
    id: 'savoir',
    fr: 'savoir',
    en: 'to know',
    answer: 'je saurai',
    distractors: ['je savoirai', 'je sais', 'je savais'],
    note: 'je sais = présent, je savais = imparfait.',
  },
]
