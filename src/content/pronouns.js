// Les pronoms sujets — Cours collectif N°1, slides 27-42.
//
// Each entry is a FACT, not a question. The quiz engine builds questions from
// these at runtime, pulling wrong answers from the other entries in this file.
//
// `confusableWith` marks entries whose English glosses overlap enough that
// offering both as choices to the same question would be unfair. `on` and
// `nous` both mean "we" — a question asking what ON means must never offer
// "WE" as a distractor, because that answer isn't actually wrong.

export const pronouns = [
  { id: 'je', fr: 'je', en: 'I', person: '1s', example: 'Je suis un étudiant' },
  { id: 'tu', fr: 'tu', en: 'YOU (singular, informal)', person: '2s', example: 'Tu es un étudiant' },
  { id: 'il', fr: 'il', en: 'HE / IT (masculine)', person: '3s', example: 'Il est un étudiant' },
  { id: 'elle', fr: 'elle', en: 'SHE / IT (feminine)', person: '3s', example: 'Elle est une étudiante' },
  {
    id: 'on',
    fr: 'on',
    en: 'WE (informal)',
    person: '3s', // grammatically 3rd-person singular, even though it means "we"
    example: 'On est des étudiants',
    confusableWith: ['nous'],
  },
  {
    id: 'nous',
    fr: 'nous',
    en: 'WE',
    person: '1p',
    example: 'Nous sommes des étudiants',
    confusableWith: ['on'],
  },
  { id: 'vous', fr: 'vous', en: 'YOU (plural or formal)', person: '2p', example: 'Vous êtes des étudiants' },
  { id: 'ils', fr: 'ils', en: 'THEY (masculine or mixed)', person: '3p', example: 'Ils parlent' },
  { id: 'elles', fr: 'elles', en: 'THEY (feminine only)', person: '3p', example: 'Elles parlent' },
]
