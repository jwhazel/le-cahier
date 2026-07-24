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
