// Vocabulary — nouns, colors, salutations. Cours collectif N°1.
//
// Nouns carry `gender`, because learning "chaise" without learning "une" is
// learning half a word. The quiz can drill the article separately later.

// Slides 292-303. The PDF lists these with articles; gender is derived from them.
export const classroom = [
  { id: 'chaise', fr: 'chaise', article: 'une', gender: 'f', en: 'a chair' },
  { id: 'table', fr: 'table', article: 'une', gender: 'f', en: 'a table' },
  { id: 'tableau', fr: 'tableau', article: 'un', gender: 'm', en: 'a board / whiteboard / blackboard' },
  { id: 'ordinateur', fr: 'ordinateur', article: 'un', gender: 'm', en: 'a computer' },
  { id: 'tablette', fr: 'tablette', article: 'une', gender: 'f', en: 'a tablet' },
  { id: 'telephone', fr: 'téléphone', article: 'un', gender: 'm', en: 'a phone' },
  { id: 'cahier', fr: 'cahier', article: 'un', gender: 'm', en: 'a notebook' },
  { id: 'livre', fr: 'livre', article: 'un', gender: 'm', en: 'a book' },
  { id: 'stylo', fr: 'stylo', article: 'un', gender: 'm', en: 'a pen' },
  { id: 'crayon', fr: 'crayon', article: 'un', gender: 'm', en: 'a pencil' },
]

// Slides 304-319. These are the masculine singular forms, which is what the
// course teaches. Colors are adjectives and agree with their noun (vert ->
// verte), but agreement isn't in lesson 1, so it isn't modelled yet.
//
// `hex` is only for the swatch shown after you answer. Don't show it before —
// a colored square makes every color question free.
export const colors = [
  { id: 'rouge', fr: 'rouge', en: 'red', hex: '#e02f2f' },
  { id: 'bleu', fr: 'bleu', en: 'blue', hex: '#2f6fe0' },
  { id: 'vert', fr: 'vert', en: 'green', hex: '#2fa14e' },
  { id: 'jaune', fr: 'jaune', en: 'yellow', hex: '#e8c62f' },
  { id: 'noir', fr: 'noir', en: 'black', hex: '#1a1a1a' },
  { id: 'blanc', fr: 'blanc', en: 'white', hex: '#f5f5f5' },
  { id: 'gris', fr: 'gris', en: 'grey', hex: '#8a8a8a' },
  { id: 'rose', fr: 'rose', en: 'pink', hex: '#e878a8' },
  { id: 'violet', fr: 'violet', en: 'purple', hex: '#7d3fb5' },
  { id: 'orange', fr: 'orange', en: 'orange', hex: '#e8862f' },
  { id: 'marron', fr: 'marron', en: 'brown', hex: '#7a4a28' },
  { id: 'beige', fr: 'beige', en: 'beige', hex: '#d9c9a8' },
  { id: 'turquoise', fr: 'turquoise', en: 'turquoise', hex: '#2fc0c0' },
  { id: 'dore', fr: 'doré', en: 'golden', hex: '#c9a227' },
]

// Slides 248-291. The slide's summary table has blanks; these come from the
// bullet list above it, which is complete.
//
// Several of these gloss to the same English ("hello"), so they carry
// `confusableWith` — see pronouns.js for why.
export const salutations = [
  {
    id: 'bonjour',
    fr: 'bonjour',
    en: 'hello',
    note: 'Used during the day. More than a greeting — omitting it reads as rude.',
    confusableWith: ['bonjour-madame', 'rebonjour', 'bien-le-bonjour', 'salut', 'coucou'],
  },
  {
    id: 'bonjour-madame',
    fr: 'bonjour Madame / bonjour Monsieur',
    // `speech` overrides `fr` when the card is read aloud. A synthesizer says
    // the slash out loud ("bonjour Madame slash bonjour Monsieur").
    speech: 'Bonjour Madame. Bonjour Monsieur.',
    en: 'hello Madam / hello Sir',
    confusableWith: ['bonjour'],
  },
  { id: 'rebonjour', fr: 'rebonjour', en: 'hello again', confusableWith: ['bonjour'] },
  {
    id: 'bien-le-bonjour',
    fr: 'bien le bonjour',
    en: 'hello (cordial)',
    confusableWith: ['bonjour'],
  },
  { id: 'salut', fr: 'salut', en: 'hi', confusableWith: ['coucou', 'bonjour'] },
  { id: 'coucou', fr: 'coucou', en: 'hi (playful)', confusableWith: ['salut', 'bonjour'] },
  { id: 'salutation', fr: 'salutation', en: 'a greeting' },
  { id: 'bonsoir', fr: 'bonsoir', en: 'good evening', note: 'Used at night.' },
  { id: 'au-revoir', fr: 'au revoir', en: 'goodbye' },
  { id: 'a-demain', fr: 'à demain', en: 'see you tomorrow' },
  { id: 'sil-vous-plait', fr: "s'il vous plaît", en: 'please' },
  { id: 'merci', fr: 'merci', en: 'thank you' },
]
