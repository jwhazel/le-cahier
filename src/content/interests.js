// Les intérêts et les goûts (hobbies and expressing taste) — Cours collectif N°9.
//
// A recall deck like any other vocab list, but the entries are a mix of nouns
// (le football), noun/verb pairs the slide itself paired (la danse / danser),
// and bare infinitives used as activities (dessiner, cuisiner). Nouns that
// carry an article show it; the infinitives don't.
//
// `preferences` are the verbs for expressing degree of liking, in intensity
// order (adorer > aimer > apprécier > ne pas aimer). `aimer` and `ne pas
// aimer` are already fully covered elsewhere (aimer is a conjugated «ER» verb
// since Cours N°2; the negative is just the negation pattern from N°3), so
// only the three new ones are here. Each carries the slide's own example
// sentence as a note.

export const interests = [
  { id: 'football', fr: 'football', article: 'le', gender: 'm', en: 'soccer' },
  { id: 'basketball', fr: 'basketball', article: 'le', gender: 'm', en: 'basketball' },
  { id: 'tennis', fr: 'tennis', article: 'le', gender: 'm', en: 'tennis' },
  { id: 'natation', fr: 'natation', article: 'la', gender: 'f', en: 'swimming' },
  { id: 'course-a-pied', fr: 'course à pied', article: 'la', gender: 'f', en: 'running' },
  { id: 'velo', fr: 'vélo', article: 'le', gender: 'm', en: 'bike' },
  { id: 'danse', fr: 'la danse / danser', en: 'the dance / to dance' },
  { id: 'yoga', fr: 'yoga', article: 'le', gender: 'm', en: 'yoga' },
  { id: 'musique', fr: 'musique', article: 'la', gender: 'f', en: 'music' },
  { id: 'lecture', fr: 'lecture', article: 'la', gender: 'f', en: 'reading' },
  { id: 'cinema', fr: 'cinéma', article: 'le', gender: 'm', en: 'movies / cinema' },
  { id: 'jeux-video', fr: 'jeux vidéos', article: 'les', gender: 'm', en: 'video games' },
  { id: 'opera', fr: 'opéra', article: "l'", gender: 'm', en: 'opera' },
  { id: 'theatre', fr: 'théâtre', article: 'le', gender: 'm', en: 'theater' },
  { id: 'regarder-tv', fr: 'regarder la télévision', en: 'to watch TV' },
  { id: 'ecouter-musique', fr: 'écouter de la musique', en: 'to listen to music' },
  { id: 'jouer-instrument', fr: 'jouer un instrument de musique', en: 'to play a music instrument' },
  { id: 'ecrire', fr: 'écrire', en: 'to write' },
  { id: 'dessiner', fr: 'dessiner', en: 'to draw' },
  { id: 'peindre-loisir', fr: 'peindre', en: 'to paint' },
  { id: 'cuisiner', fr: 'cuisiner', en: 'to cook' },
  { id: 'se-promener', fr: 'se promener', en: 'to walk / to go for a walk' },
  { id: 'sortir-amis', fr: 'sortir avec des amis', en: 'to go out with friends' },
]

export const preferences = [
  { id: 'adorer', fr: 'adorer', en: 'to love', note: "J'adore les pizzas." },
  { id: 'apprecier', fr: 'apprécier', en: 'to like / to enjoy', note: "J'apprécie les balades dans la forêt." },
  { id: 'preferer', fr: 'préférer', en: 'to prefer', note: "Je préfère l'opéra." },
]
