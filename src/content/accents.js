// Accents and the cedilla — Cours collectif N°3, slides 208-248.
//
// Recognition deck: prompt is the accent's French name, answer is the letter
// that carries it. The four options are drawn from these five symbols. `example`
// is a word that uses it — spoken aloud, and shown in the cheat sheet — since
// the accent is ultimately a pronunciation cue.

export const accents = [
  { id: 'aigu', name: 'accent aigu', symbol: 'é', example: 'été', en: 'acute — summer' },
  { id: 'grave', name: 'accent grave', symbol: 'è', example: 'mère', en: 'grave — mother' },
  { id: 'circonflexe', name: 'accent circonflexe', symbol: 'ê', example: 'tête', en: 'circumflex — head' },
  { id: 'trema', name: 'tréma', symbol: 'ë', example: 'Noël', en: 'diaeresis — splits two vowels (na-ïve)' },
  { id: 'cedille', name: 'cédille', symbol: 'ç', example: 'garçon', en: 'cedilla — makes a soft "ss" before a/o/u' },
]
