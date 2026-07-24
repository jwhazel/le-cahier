// Negation (ne … pas) — Cours collectif N°2 (slides 261-289) and reinforced in
// N°3 (slides 144-158).
//
// Negation is a *transformation*, not recall, so instead of a vocab card it's a
// "pick the correct negation" question: the prompt is the affirmative sentence,
// the answer is its negation, and the three distractors are the mistakes the
// rule is meant to prevent — failing to elide (ne vs n'), dropping the `ne`, or
// putting `pas` in the wrong place.
//
// Sentences deliberately avoid indefinite direct objects (un/une/des), which
// would turn into `de` under negation — a rule the course hasn't taught yet.

export const negations = [
  {
    id: 'chat-nourriture',
    affirmative: 'Le chat mange sa nourriture.',
    negative: 'Le chat ne mange pas sa nourriture.',
    distractors: [
      'Le chat mange pas sa nourriture.', // dropped the ne
      "Le chat n'mange pas sa nourriture.", // wrong elision before a consonant
      'Le chat ne pas mange sa nourriture.', // pas misplaced
    ],
    en: 'The cat eats its food.',
  },
  {
    id: 'jean-cravate',
    affirmative: 'Jean aime sa cravate.',
    negative: "Jean n'aime pas sa cravate.",
    distractors: [
      'Jean ne aime pas sa cravate.', // failed to elide before a vowel
      'Jean aime pas sa cravate.', // dropped the ne
      "Jean n'aime sa cravate pas.", // pas misplaced
    ],
    en: 'Jean likes his tie.',
  },
  {
    id: 'tu-ami',
    affirmative: 'Tu parles à ton ami.',
    negative: 'Tu ne parles pas à ton ami.',
    distractors: [
      'Tu parles pas à ton ami.',
      "Tu n'parles pas à ton ami.",
      'Tu ne parles à ton ami pas.',
    ],
    en: 'You talk to your friend.',
  },
  {
    id: 'chien-jouer',
    affirmative: 'Le chien aime jouer dehors.',
    negative: "Le chien n'aime pas jouer dehors.",
    distractors: [
      'Le chien ne aime pas jouer dehors.',
      'Le chien aime pas jouer dehors.',
      "Le chien n'aime jouer pas dehors.",
    ],
    en: 'The dog likes to play outside.',
  },
  {
    id: 'jeanne-fille',
    affirmative: 'Jeanne est une fille mignonne.',
    negative: "Jeanne n'est pas une fille mignonne.",
    distractors: [
      'Jeanne ne est pas une fille mignonne.',
      'Jeanne est pas une fille mignonne.',
      "Jeanne n'est une fille mignonne pas.",
    ],
    en: 'Jeanne is a cute girl.',
  },
  {
    id: 'nous-devoirs',
    affirmative: 'Nous finissons nos devoirs.',
    negative: 'Nous ne finissons pas nos devoirs.',
    distractors: [
      'Nous finissons pas nos devoirs.',
      "Nous n'finissons pas nos devoirs.",
      'Nous ne pas finissons nos devoirs.',
    ],
    en: 'We finish our homework.',
  },
  {
    id: 'elle-test',
    affirmative: 'Elle réussit le test.',
    negative: 'Elle ne réussit pas le test.',
    distractors: [
      'Elle réussit pas le test.',
      'Elle ne pas réussit le test.',
      'Elle réussit ne pas le test.',
    ],
    en: 'She passes the test.',
  },
  {
    id: 'il-livre',
    affirmative: 'Il a le livre.',
    negative: "Il n'a pas le livre.",
    distractors: [
      'Il ne a pas le livre.', // failed to elide before a vowel
      'Il a pas le livre.',
      "Il n'a le livre pas.",
    ],
    en: 'He has the book.',
  },
]
