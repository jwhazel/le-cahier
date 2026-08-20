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
//   3     — 3ème groupe, the irregular verbs (-oir/-dre/-ir/-tre…); no rule,
//           each is memorised. Cours N°5. Forms written out, like the auxiliaries.
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
  // new «ER» verb — Cours N°4 (from the écraser/donner conjugation slide)
  {
    id: 'ecraser',
    fr: 'écraser',
    en: 'to crush',
    group: 1,
    latin: 'Old French "escrachier / écrazer" (to crush)',
    // j'écrase — elision before the vowel; handled by conjugated().
    forms: { je: 'écrase', tu: 'écrases', il: 'écrase', nous: 'écrasons', vous: 'écrasez', ils: 'écrasent' },
  },
  // new «ER» verbs — Cours N°5 (the placer / mijoter conjugation slide). This
  // course also teaches the "C dur / C doux" rule, and `placer` is exactly where
  // it bites: the c is soft [s] before e/i, hard [k] before a/o/u. So the nous
  // form needs a cedilla to keep the sound — the same kind of stem-spelling shift
  // as manger → mangeons, one the plain root+ending rule doesn't capture.
  {
    id: 'placer',
    fr: 'placer',
    en: 'to place / to put',
    group: 1,
    latin: 'Greek "plateia" (a big street / open space)',
    spellingChange:
      'nous plaçons — the ç keeps the c soft [s] before o. The plain rule would give "placons", pronounced with a hard [k].',
    forms: { je: 'place', tu: 'places', il: 'place', nous: 'plaçons', vous: 'placez', ils: 'placent' },
  },
  {
    id: 'mijoter',
    fr: 'mijoter',
    en: 'to simmer / to stew',
    group: 1,
    latin: 'Old French "migeoter" (from the west of France, "faire mûrir" = to ripen)',
    forms: { je: 'mijote', tu: 'mijotes', il: 'mijote', nous: 'mijotons', vous: 'mijotez', ils: 'mijotent' },
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

  // new «IR» verbs — Cours N°4 (the "conjugate at present" exercise)
  {
    id: 'punir',
    fr: 'punir',
    en: 'to punish',
    group: 2,
    forms: { je: 'punis', tu: 'punis', il: 'punit', nous: 'punissons', vous: 'punissez', ils: 'punissent' },
  },
  {
    id: 'saisir',
    fr: 'saisir',
    en: 'to seize / to grab',
    group: 2,
    forms: { je: 'saisis', tu: 'saisis', il: 'saisit', nous: 'saisissons', vous: 'saisissez', ils: 'saisissent' },
  },
  {
    id: 'atterrir',
    fr: 'atterrir',
    en: 'to land',
    group: 2,
    latin: 'à + terre (to the ground)',
    // j'atterris — elision before the vowel; handled by conjugated().
    forms: {
      je: 'atterris',
      tu: 'atterris',
      il: 'atterrit',
      nous: 'atterrissons',
      vous: 'atterrissez',
      ils: 'atterrissent',
    },
  },
  {
    id: 'investir',
    fr: 'investir',
    en: 'to invest',
    group: 2,
    // j'investis — elision before the vowel; handled by conjugated().
    forms: {
      je: 'investis',
      tu: 'investis',
      il: 'investit',
      nous: 'investissons',
      vous: 'investissez',
      ils: 'investissent',
    },
  },
  {
    id: 'benir',
    fr: 'bénir',
    en: 'to bless',
    group: 2,
    forms: { je: 'bénis', tu: 'bénis', il: 'bénit', nous: 'bénissons', vous: 'bénissez', ils: 'bénissent' },
  },
  {
    id: 'avertir',
    fr: 'avertir',
    en: 'to warn',
    group: 2,
    // j'avertis — elision before the vowel; handled by conjugated().
    forms: {
      je: 'avertis',
      tu: 'avertis',
      il: 'avertit',
      nous: 'avertissons',
      vous: 'avertissez',
      ils: 'avertissent',
    },
  },

  // new «IR» verbs — Cours N°5 (vieillir + the "conjuguez au présent" exercise:
  // rougir, applaudir, nourrir, agir). All regular 2nd-group; j'applaudis and
  // j'agis elide, handled by conjugated().
  {
    id: 'vieillir',
    fr: 'vieillir',
    en: 'to age / to grow old',
    group: 2,
    latin: 'vetus (old)',
    forms: {
      je: 'vieillis',
      tu: 'vieillis',
      il: 'vieillit',
      nous: 'vieillissons',
      vous: 'vieillissez',
      ils: 'vieillissent',
    },
  },
  {
    id: 'rougir',
    fr: 'rougir',
    en: 'to blush / to redden',
    group: 2,
    forms: { je: 'rougis', tu: 'rougis', il: 'rougit', nous: 'rougissons', vous: 'rougissez', ils: 'rougissent' },
  },
  {
    id: 'applaudir',
    fr: 'applaudir',
    en: 'to applaud / to clap',
    group: 2,
    // j'applaudis — elision before the vowel; handled by conjugated().
    forms: {
      je: 'applaudis',
      tu: 'applaudis',
      il: 'applaudit',
      nous: 'applaudissons',
      vous: 'applaudissez',
      ils: 'applaudissent',
    },
  },
  {
    id: 'nourrir',
    fr: 'nourrir',
    en: 'to feed / to nourish',
    group: 2,
    forms: { je: 'nourris', tu: 'nourris', il: 'nourrit', nous: 'nourrissons', vous: 'nourrissez', ils: 'nourrissent' },
  },
  {
    id: 'agir',
    fr: 'agir',
    en: 'to act',
    group: 2,
    // j'agis — elision before the vowel; handled by conjugated().
    forms: { je: 'agis', tu: 'agis', il: 'agit', nous: 'agissons', vous: 'agissez', ils: 'agissent' },
  },

  // new «IR» verbs — Cours N°6 (the "new verbs 2nd group" list + the conjugation
  // exercise). All regular 2nd-group; j'établis / j'aplatis / j'approfondis /
  // j'embellis elide, handled by conjugated().
  {
    id: 'fleurir',
    fr: 'fleurir',
    en: 'to bloom / to flower',
    group: 2,
    forms: { je: 'fleuris', tu: 'fleuris', il: 'fleurit', nous: 'fleurissons', vous: 'fleurissez', ils: 'fleurissent' },
  },
  {
    id: 'etablir',
    fr: 'établir',
    en: 'to establish',
    group: 2,
    // j'établis — elision before the vowel; handled by conjugated().
    forms: { je: 'établis', tu: 'établis', il: 'établit', nous: 'établissons', vous: 'établissez', ils: 'établissent' },
  },
  {
    id: 'aplatir',
    fr: 'aplatir',
    en: 'to flatten',
    group: 2,
    latin: 'Greek "platus" (large and flat)',
    // j'aplatis — elision before the vowel; handled by conjugated().
    forms: { je: 'aplatis', tu: 'aplatis', il: 'aplatit', nous: 'aplatissons', vous: 'aplatissez', ils: 'aplatissent' },
  },
  {
    id: 'reunir',
    fr: 'réunir',
    en: 'to gather / to reunite',
    group: 2,
    latin: 'Old French "raunir" (to reunite)',
    forms: { je: 'réunis', tu: 'réunis', il: 'réunit', nous: 'réunissons', vous: 'réunissez', ils: 'réunissent' },
  },
  {
    id: 'approfondir',
    fr: 'approfondir',
    en: 'to deepen',
    group: 2,
    // j'approfondis — elision before the vowel; handled by conjugated().
    forms: {
      je: 'approfondis',
      tu: 'approfondis',
      il: 'approfondit',
      nous: 'approfondissons',
      vous: 'approfondissez',
      ils: 'approfondissent',
    },
  },
  {
    id: 'embellir',
    fr: 'embellir',
    en: 'to beautify',
    group: 2,
    // j'embellis — elision before the vowel; handled by conjugated().
    forms: { je: 'embellis', tu: 'embellis', il: 'embellit', nous: 'embellissons', vous: 'embellissez', ils: 'embellissent' },
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
  // new reflexive verb — Cours N°4 (se cacher = to hide oneself, the reflexive
  // twin of the plain `cacher` above). Same stem, but the reflexive pronoun
  // (me / te / se / nous / vous / se) sits in front.
  {
    id: 'secacher',
    fr: 'se cacher',
    en: 'to hide (oneself)',
    group: 'reflexive',
    forms: {
      je: 'me cache',
      tu: 'te caches',
      il: 'se cache',
      nous: 'nous cachons',
      vous: 'vous cachez',
      ils: 'se cachent',
    },
  },
  // new reflexive verb — Cours N°5 (se tromper = to be wrong / to make a mistake).
  {
    id: 'setromper',
    fr: 'se tromper',
    en: 'to be wrong / to make a mistake',
    group: 'reflexive',
    forms: {
      je: 'me trompe',
      tu: 'te trompes',
      il: 'se trompe',
      nous: 'nous trompons',
      vous: 'vous trompez',
      ils: 'se trompent',
    },
  },

  // --- 3ème groupe (irregular) — Cours N°5 ---------------------------------
  // The "third group" isn't a group so much as everything that doesn't follow
  // the -ER or -IR rules. The infinitive endings alone (-oir, -dre, -ir, -tre,
  // -oindre, -eindre, -oudre) don't predict the conjugation, so every form is
  // written out and simply memorised — same treatment as être/avoir. Distractors
  // still come from the SAME verb's other forms, so each card drills the shape of
  // one verb (je vois / nous voyons / ils voient) rather than mixing verbs.
  {
    id: 'voir',
    fr: 'voir',
    en: 'to see',
    group: 3,
    latin: 'videre (to see)',
    forms: { je: 'vois', tu: 'vois', il: 'voit', nous: 'voyons', vous: 'voyez', ils: 'voient' },
  },
  {
    id: 'prendre',
    fr: 'prendre',
    en: 'to take',
    group: 3,
    latin: 'prehendere (to grasp)',
    forms: { je: 'prends', tu: 'prends', il: 'prend', nous: 'prenons', vous: 'prenez', ils: 'prennent' },
  },
  {
    id: 'attendre',
    fr: 'attendre',
    en: 'to wait (for)',
    group: 3,
    latin: 'attendere (to direct your mind towards)',
    // j'attends — elision before the vowel; handled by conjugated().
    forms: { je: 'attends', tu: 'attends', il: 'attend', nous: 'attendons', vous: 'attendez', ils: 'attendent' },
  },
  {
    id: 'mettre',
    fr: 'mettre',
    en: 'to put',
    group: 3,
    latin: 'mittere (to send)',
    forms: { je: 'mets', tu: 'mets', il: 'met', nous: 'mettons', vous: 'mettez', ils: 'mettent' },
  },
  {
    id: 'dormir',
    fr: 'dormir',
    en: 'to sleep',
    group: 3,
    latin: 'dormire (to sleep)',
    // -IR infinitive, but 3rd group: je dors, not "je dormis". The singular drops
    // the -m of the stem.
    forms: { je: 'dors', tu: 'dors', il: 'dort', nous: 'dormons', vous: 'dormez', ils: 'dorment' },
  },
  {
    id: 'mentir',
    fr: 'mentir',
    en: 'to lie',
    group: 3,
    latin: 'mentiri (to lie)',
    forms: { je: 'mens', tu: 'mens', il: 'ment', nous: 'mentons', vous: 'mentez', ils: 'mentent' },
  },
  {
    id: 'depeindre',
    fr: 'dépeindre',
    en: 'to depict',
    group: 3,
    // -eindre verbs: the singular loses the -d (je dépeins), and the plural stem
    // picks up "-gn-" (nous dépeignons). Same pattern as peindre / éteindre.
    forms: {
      je: 'dépeins',
      tu: 'dépeins',
      il: 'dépeint',
      nous: 'dépeignons',
      vous: 'dépeignez',
      ils: 'dépeignent',
    },
  },
  {
    id: 'moudre',
    fr: 'moudre',
    en: 'to grind / to mill',
    group: 3,
    latin: 'molere (to grind)',
    // -oudre verb: singular keeps the -d (je mouds), but the plural stem becomes
    // "moul-" (nous moulons). Genuinely irregular — worth staring at.
    forms: { je: 'mouds', tu: 'mouds', il: 'moud', nous: 'moulons', vous: 'moulez', ils: 'moulent' },
  },
  // Cours N°6 completes the 3rd-group table with admettre (conjugates like mettre:
  // one t in the singular, two in the plural). j'admets elides.
  {
    id: 'admettre',
    fr: 'admettre',
    en: 'to admit',
    group: 3,
    latin: 'admittere (to let happen)',
    // j'admets — elision before the vowel; handled by conjugated().
    forms: { je: 'admets', tu: 'admets', il: 'admet', nous: 'admettons', vous: 'admettez', ils: 'admettent' },
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
