// Asking questions — Cours collectif N°4 ("Leçon 5", the interrogative form).
//
// The slide teaches three ways to ask a question: intonation ("Tu viens ?"),
// est-ce que ("Est-ce que tu viens ?"), and inversion ("Viens-tu ?"). Inversion
// is the one worth drilling, because it's the one with a rule you can get wrong:
//
//   * the subject pronoun moves AFTER the verb, joined by a hyphen;
//   * and if that leaves two vowels touching at the 3rd person singular
//     (a verb ending in -e or -a meeting il / elle / on), French inserts a
//     "euphonic" t between hyphens: «parle-t-il», «a-t-elle».
//
// So each card is "pick the correct inversion question". The answer is the
// well-formed question; the distractors are the exact failures the rule prevents
// — the missing euphonic t, a plain space instead of a hyphen, an apostrophe
// instead of the -t-, a wrong verb ending.

export const inversions = [
  {
    id: 'tu-parles',
    affirmative: 'Tu parles anglais.',
    question: 'Parles-tu anglais ?',
    distractors: [
      'Parle-tu anglais ?', // dropped the -s of the tu form
      'Parles tu anglais ?', // space instead of a hyphen
      'Tu parles-anglais ?', // subject not inverted
    ],
    en: 'Do you speak English?',
  },
  {
    id: 'il-parle',
    affirmative: 'Il parle français.',
    question: 'Parle-t-il français ?',
    distractors: [
      'Parle-il français ?', // missing the euphonic t
      "Parle-t'il français ?", // apostrophe instead of the -t- hyphens
      'Parlet-il français ?', // t stuck to the verb, no hyphen
    ],
    en: 'Does he speak French?',
  },
  {
    id: 'elle-mange',
    affirmative: 'Elle mange du pain.',
    question: 'Mange-t-elle du pain ?',
    distractors: [
      'Mange-elle du pain ?', // missing the euphonic t
      'Mange t elle du pain ?', // spaces instead of hyphens
      'Mangez-elle du pain ?', // wrong verb form (vous ending)
    ],
    en: 'Does she eat bread?',
  },
  {
    id: 'il-a-chien',
    affirmative: 'Il a un chien.',
    question: 'A-t-il un chien ?',
    distractors: [
      'A-il un chien ?', // missing the euphonic t after "a"
      "A-t'il un chien ?", // apostrophe instead of the -t- hyphens
      'At-il un chien ?', // t stuck to the verb, no first hyphen
    ],
    en: 'Does he have a dog?',
  },
  {
    id: 'nous-habitons',
    affirmative: 'Nous habitons à Louisville.',
    question: 'Habitons-nous à Louisville ?',
    distractors: [
      'Habitons nous à Louisville ?', // space instead of a hyphen
      'Habite-nous à Louisville ?', // wrong verb form (dropped -ons)
      'Nous habitons-à Louisville ?', // subject not inverted
    ],
    en: 'Do we live in Louisville?',
  },
  {
    id: 'vous-etes',
    affirmative: 'Vous êtes prêts.',
    question: 'Êtes-vous prêts ?',
    distractors: [
      'Êtes-t-vous prêts ?', // spurious euphonic t (only 3rd person sing. needs it)
      'Etes vous prêts ?', // space instead of a hyphen (and missing accent)
      'Vous êtes-prêts ?', // subject not inverted
    ],
    en: 'Are you ready?',
  },
  {
    id: 'tu-as',
    affirmative: 'Tu as 40 ans.',
    question: 'As-tu 40 ans ?',
    distractors: [
      'A-tu 40 ans ?', // wrong verb form (dropped -s)
      'As tu 40 ans ?', // space instead of a hyphen
      'As-t-tu 40 ans ?', // spurious euphonic t (tu is not 3rd person sing.)
    ],
    en: 'Are you 40 years old?',
  },
  {
    id: 'je-suis',
    affirmative: 'Je suis français.',
    question: 'Suis-je français ?',
    distractors: [
      'Suis je français ?', // space instead of a hyphen
      'Suis-t-je français ?', // spurious euphonic t
      'Je suis-français ?', // subject not inverted
    ],
    en: 'Am I French?',
  },
  {
    id: 'vous-comprenez',
    affirmative: 'Vous comprenez.',
    question: 'Comprenez-vous ?',
    distractors: [
      'Comprenez vous ?', // space instead of a hyphen
      'Comprennez-vous ?', // misspelt verb (double n)
      'Vous comprenez ?', // that's intonation, not inversion
    ],
    en: 'Do you understand?',
  },
  {
    id: 'elle-parle',
    affirmative: 'Elle parle anglais.',
    question: 'Parle-t-elle anglais ?',
    distractors: [
      'Parle-elle anglais ?', // missing the euphonic t
      'Parle-t-elle-anglais ?', // stray hyphen onto the complement
      'Parlent-elle anglais ?', // wrong verb form (ils/elles ending)
    ],
    en: 'Does she speak English?',
  },
]

// The question words themselves — a plain recognition deck. Several gloss to the
// same English ("what"), so they carry `confusableWith` so the quiz never offers
// two right answers (see pronouns.js for the reasoning).
export const questionWords = [
  { id: 'ou', fr: 'où', en: 'where', note: 'Accent distinguishes it from "ou" = or.' },
  { id: 'quand', fr: 'quand', en: 'when' },
  { id: 'comment', fr: 'comment', en: 'how' },
  { id: 'pourquoi', fr: 'pourquoi', en: 'why' },
  { id: 'qui', fr: 'qui', en: 'who' },
  { id: 'que', fr: 'que / quoi', en: 'what', confusableWith: ['quel'] },
  { id: 'quel', fr: 'quel / quelle', en: 'which', confusableWith: ['que'] },
  { id: 'combien', fr: 'combien', en: 'how much / how many' },
]
