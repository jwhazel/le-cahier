// Definite articles le / la / l' / les — Cours collectif N°3, slides 452-473.
//
// The article a noun takes is fully determined by gender + number + first
// sound, so we don't store the article — we compute it with `articleOf`, and
// the quiz asks you to pick it. The four options are ALWAYS le / la / l' / les,
// which is exactly a 4-choice question with no distractor guesswork.

export const ARTICLES = ['le', 'la', "l'", 'les']

// Nouns to drill. `gender` is m/f; `plural: true` forces `les`; `silentH: true`
// marks an "h muet" (l'homme) that elides like a vowel. The canonical slide
// examples plus a spread of classroom nouns for coverage.
export const articleNouns = [
  { id: 'livre', fr: 'livre', gender: 'm', en: 'the book' },
  { id: 'maison', fr: 'maison', gender: 'f', en: 'the house' },
  { id: 'ecole', fr: 'école', gender: 'f', en: 'the school' }, // vowel -> l'
  { id: 'homme', fr: 'homme', gender: 'm', silentH: true, en: 'the man' }, // silent h -> l'
  { id: 'livres', fr: 'livres', gender: 'm', plural: true, en: 'the books' },
  { id: 'maisons', fr: 'maisons', gender: 'f', plural: true, en: 'the houses' },
  { id: 'voiture', fr: 'voiture', gender: 'f', en: 'the car' },
  { id: 'montre', fr: 'montre', gender: 'f', en: 'the watch' },
  { id: 'ordinateur', fr: 'ordinateur', gender: 'm', en: 'the computer' }, // vowel -> l'
  { id: 'table', fr: 'table', gender: 'f', en: 'the table' },
  { id: 'stylo', fr: 'stylo', gender: 'm', en: 'the pen' },
  { id: 'ampoule', fr: 'ampoule', gender: 'f', en: 'the light bulb' }, // vowel -> l'
]

/** The correct definite article for a noun. */
export function articleOf(noun) {
  if (noun.plural) return 'les'
  if (noun.silentH || /^[aeiouâàéèêëîïôûù]/i.test(noun.fr)) return "l'"
  return noun.gender === 'f' ? 'la' : 'le'
}

/** How the article joins the noun for display / speech: "l'école", "le livre". */
export function withArticle(noun) {
  const art = articleOf(noun)
  return art.endsWith("'") ? `${art}${noun.fr}` : `${art} ${noun.fr}`
}

// Definite vs. indefinite — Cours collectif N°9, slides ~215-227.
//
// N°3 taught WHICH definite article a noun takes (gender/number/first sound);
// this is the first time the course asks WHETHER to use a definite or an
// indefinite article at all — le/la/les for something specific or already
// known, un/une/des for something not. A transform deck, same "authored
// distractors" pattern as negation/introducing: the distractors are the
// article swaps the rule forbids.
//
// The slide's own fill-in exercise never showed an answer key in the
// extracted text; these five are filled in from the rule as stated, applied
// to the slide's own example nouns — not guessed. The last one (Golden
// apples) illustrates a real quirk beyond the stated rule: French uses the
// DEFINITE article for a general like/dislike ("je n'aime pas LES pommes"),
// where English uses no article at all. Flagged in the cheat sheet.
export const articleChoices = [
  {
    id: 'chien-voisin',
    cue: "The neighbor's dog is noisy. (one specific, known dog)",
    phrase: 'Le chien du voisin est bruyant.',
    distractors: ['Un chien du voisin est bruyant.', 'Des chien du voisin est bruyant.', 'La chien du voisin est bruyant.'],
  },
  {
    id: 'voiture-rue',
    cue: 'A car drives down the street. (not a specific car)',
    phrase: 'Une voiture roule dans la rue.',
    distractors: ['La voiture roule dans la rue.', 'Les voiture roule dans la rue.', 'Un voiture roule dans la rue.'],
  },
  {
    id: 'voiture-jim',
    cue: "Jim's blue and pink car is parked. (one specific, known car)",
    phrase: 'La voiture bleue et rose de Jim est garée.',
    distractors: [
      'Une voiture bleue et rose de Jim est garée.',
      'Les voiture bleue et rose de Jim est garée.',
      'Le voiture bleue et rose de Jim est garée.',
    ],
  },
  {
    id: 'agent-maisons',
    cue: 'The real-estate agent sells houses every month. (an unspecified number)',
    phrase: "L'agent immobilier vend des maisons tous les mois.",
    distractors: [
      "L'agent immobilier vend les maisons tous les mois.",
      "L'agent immobilier vend une maisons tous les mois.",
      "L'agent immobilier vend la maisons tous les mois.",
    ],
  },
  {
    id: 'pommes-golden',
    cue: "I don't like Golden apples. (a general category, not specific apples)",
    phrase: 'Je n’aime pas les pommes « Golden ».',
    note: 'French uses the definite article for a general like/dislike, where English uses none.',
    distractors: [
      'Je n’aime pas des pommes « Golden ».',
      'Je n’aime pas une pommes « Golden ».',
      'Je n’aime pas la pommes « Golden ».',
    ],
  },
]
