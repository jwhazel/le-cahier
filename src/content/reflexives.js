// Reflexive (subject -> reflexive) pronoun mapping — Cours N°3, slides 421-427.
//
// A reflexive verb's subject acts on itself, and a reflexive pronoun sits
// before the verb. This deck drills only the mapping; the conjugations live in
// verbs.js (group 'reflexive'). The prompt is the subject pronoun, the answer
// is its reflexive pronoun.
//
// `en` disambiguates the answers, and `confusableWith` keeps the two "nous"/
// "vous" (which are their own reflexive) from colliding as options.

export const reflexivePronouns = [
  { id: 'me', subject: 'je', fr: 'me', en: 'myself' },
  { id: 'te', subject: 'tu', fr: 'te', en: 'yourself (sing.)' },
  { id: 'se-sing', subject: 'il / elle / on', fr: 'se', en: 'himself / herself / itself', confusableWith: ['se-plur'] },
  { id: 'nous', subject: 'nous', fr: 'nous', en: 'ourselves' },
  { id: 'vous', subject: 'vous', fr: 'vous', en: 'yourselves' },
  { id: 'se-plur', subject: 'ils / elles', fr: 'se', en: 'themselves', confusableWith: ['se-sing'] },
]
