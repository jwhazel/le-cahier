// Adjective agreement & position — Cours collectif N°8.
//
// Two separate grammar points, two separate transform decks (same
// "authored distractors" pattern as negation/interrogatives/plurals):
//
// `genderPairs` — masculine -> feminine. The general rule is +e, but three
// endings override it: -if -> -ve, -eux -> -se, -eau -> -elle. The slide's
// "transform masculine to feminine" exercise (actif, heureux, créatif,
// paresseux, nouveau, jumeau) never showed its answer key in the extracted
// text, so those six are filled in from the rule stated on the very next
// slide (itself fully worked: sportif -> sportive, sérieux -> sérieuse,
// beau -> belle) plus ordinary, extremely common French — not guessed.
// Flagged in VERIFY.md.
//
// `positions` — most adjectives follow the noun (une voiture rapide), but the
// BAGS ones (Beauty / Age / Goodness / Size) go before it (une belle ville,
// un vieux château, un bon restaurant, une grande maison). Only the fully
// worked rule-slide examples are used here; the slide's own "fill the blank"
// exercise (des arbres + grands...) is skipped because it never showed an
// answer, and the plural case hides a further rule (des -> de before a
// preceding adjective) that this course never taught. See VERIFY.md.

export const genderPairs = [
  {
    id: 'grand',
    masculine: 'grand',
    feminine: 'grande',
    en: 'tall / big',
    distractors: ['grand', 'grandeuse', 'grandive'],
  },
  {
    id: 'beau',
    masculine: 'beau',
    feminine: 'belle',
    en: 'handsome / beautiful',
    note: '-eau -> -elle, not the regular +e.',
    distractors: ['beaue', 'beau', 'beause'],
  },
  {
    id: 'sportif',
    masculine: 'sportif',
    feminine: 'sportive',
    en: 'athletic',
    note: '-if -> -ve, not the regular +e.',
    distractors: ['sportife', 'sportif', 'sportielle'],
  },
  {
    id: 'serieux',
    masculine: 'sérieux',
    feminine: 'sérieuse',
    en: 'serious',
    note: '-eux -> -euse, not the regular +e.',
    distractors: ['sérieuxe', 'sérieux', 'sérieuve'],
  },
  {
    id: 'actif',
    masculine: 'actif',
    feminine: 'active',
    en: 'active',
    distractors: ['actife', 'actif', 'actielle'],
  },
  {
    id: 'heureux',
    masculine: 'heureux',
    feminine: 'heureuse',
    en: 'happy',
    distractors: ['heureuxe', 'heureux', 'heureuve'],
  },
  {
    id: 'creatif',
    masculine: 'créatif',
    feminine: 'créative',
    en: 'creative',
    distractors: ['créatife', 'créatif', 'créatielle'],
  },
  {
    id: 'paresseux',
    masculine: 'paresseux',
    feminine: 'paresseuse',
    en: 'lazy',
    distractors: ['paresseuxe', 'paresseux', 'paresseuve'],
  },
  {
    id: 'nouveau',
    masculine: 'nouveau',
    feminine: 'nouvelle',
    en: 'new',
    distractors: ['nouveaue', 'nouveau', 'nouveause'],
  },
  {
    id: 'jumeau',
    masculine: 'jumeau',
    feminine: 'jumelle',
    en: 'twin',
    distractors: ['jumeaue', 'jumeau', 'jumeause'],
  },
]

export const positions = [
  {
    id: 'belle-ville',
    cue: 'a beautiful city (ville + belle — Beauty)',
    phrase: 'une belle ville',
    distractors: ['une ville belle', 'un belle ville', 'une bel ville'],
  },
  {
    id: 'vieux-chateau',
    cue: 'an old castle (château + vieux — Age)',
    phrase: 'un vieux château',
    distractors: ['un château vieux', 'une vieux château', 'un vieil château'],
  },
  {
    id: 'bon-restaurant',
    cue: 'a good restaurant (restaurant + bon — Goodness)',
    phrase: 'un bon restaurant',
    distractors: ['un restaurant bon', 'une bon restaurant', 'un bonne restaurant'],
  },
  {
    id: 'grande-maison',
    cue: 'a big house (maison + grande — Size)',
    phrase: 'une grande maison',
    distractors: ['une maison grande', 'un grande maison', 'une grand maison'],
  },
  {
    id: 'voiture-rapide',
    cue: 'a fast car (voiture + rapide — not BAGS)',
    phrase: 'une voiture rapide',
    distractors: ['une rapide voiture', 'un voiture rapide', 'une voiture rapides'],
  },
  {
    id: 'chien-gentil',
    cue: 'a nice dog (chien + gentil — not BAGS)',
    phrase: 'un chien gentil',
    distractors: ['un gentil chien', 'une chien gentil', 'un chien gentille'],
  },
  {
    id: 'musique-magnifique',
    cue: 'beautiful music (musique + magnifique — not BAGS)',
    phrase: 'une musique magnifique',
    distractors: ['une magnifique musique', 'un musique magnifique', 'une musique magnifiques'],
  },
]
