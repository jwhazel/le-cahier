// Présenter une personne : « c'est » vs « il/elle est » — Cours collectif N°7.
//
// « C'est » (plural « ce sont ») identifies WHO someone is, and it's used
// whenever a determiner is attached — a possessive (mon frère), a name (Marie),
// or an indefinite article (un professeur). « Il/elle est » (plural ils/elles
// sont) describes what someone is like, and drops that determiner: an
// unmodified profession or an adjective. Mixing the two up is the actual
// mistake worth drilling, so — same pattern as negation/interrogatives — the
// prompt is an English cue, the answer is the correctly-formed French sentence,
// and the distractors are the specific swaps: the wrong pronoun-form, a
// missing/spurious article, or the wrong singular/plural.

export const introductions = [
  {
    id: 'frere',
    prompt: 'This is my brother.',
    answer: "C'est mon frère.",
    distractors: ['Il est mon frère.', 'Ce sont mon frère.', 'Elle est mon frère.'],
  },
  {
    id: 'marie',
    prompt: 'This is Marie.',
    answer: "C'est Marie.",
    distractors: ['Elle est Marie.', 'Ce sont Marie.', 'Il est Marie.'],
  },
  {
    id: 'parents',
    prompt: 'These are my parents.',
    answer: 'Ce sont mes parents.',
    distractors: ['C’est mes parents.', 'Ils sont mes parents.', 'Il est mes parents.'],
  },
  {
    id: 'amis',
    prompt: 'These are my friends.',
    answer: 'Ce sont mes amis.',
    distractors: ['C’est mes amis.', 'Elles sont mes amis.', 'Il est mes amis.'],
  },
  {
    id: 'professeur',
    prompt: 'He is a teacher.',
    answer: 'Il est professeur.',
    distractors: ['C’est professeur.', 'Il est un professeur.', 'Elle est professeur.'],
  },
  {
    id: 'gentille',
    prompt: 'She is kind.',
    answer: 'Elle est gentille.',
    distractors: ['C’est gentille.', 'Elle est une gentille.', 'Il est gentille.'],
  },
]
