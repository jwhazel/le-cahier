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

// Cours N°4 — the vocabulary from the Gauguin / Tahiti slides. The art-history
// itself is a class break (skipped), but the noun list under the paintings is
// real, practical beginner vocabulary, so it earns a small deck. Same shape as
// `classroom`: the definite article carries the gender, so you learn "la mer"
// as one unit, not "mer".
export const nature = [
  { id: 'mer', fr: 'mer', article: 'la', gender: 'f', en: 'the sea' },
  { id: 'sable', fr: 'sable', article: 'le', gender: 'm', en: 'the sand' },
  { id: 'montagne', fr: 'montagne', article: 'la', gender: 'f', en: 'the mountain' },
  { id: 'fleur', fr: 'fleur', article: 'la', gender: 'f', en: 'the flower' },
  // l' hides the gender — herbe is feminine. Flagged in the cheat sheet.
  { id: 'herbe', fr: 'herbe', article: "l'", gender: 'f', en: 'the grass' },
  { id: 'lune', fr: 'lune', article: 'la', gender: 'f', en: 'the moon' },
  { id: 'cheval', fr: 'cheval', article: 'le', gender: 'm', en: 'the horse' },
  { id: 'chemin', fr: 'chemin', article: 'le', gender: 'm', en: 'the path / trail' },
  { id: 'maison', fr: 'maison', article: 'la', gender: 'f', en: 'the house' },
  { id: 'robe', fr: 'robe', article: 'la', gender: 'f', en: 'the dress' },
  { id: 'femme', fr: 'femme', article: 'la', gender: 'f', en: 'the woman' },
  { id: 'pareo', fr: 'paréo', article: 'le', gender: 'm', en: 'a sarong / beach wrap' },
]

// Cours N°5 — «Quel temps fait-il ?» (the weather). The slide pairs each noun
// with the adjective you use to describe the day: la pluie (rain) → il fait
// pluvieux / c'est pluvieux (rainy). Nouns carry their article so gender rides
// along, as in `classroom`; the adjectives and the two `il fait …` expressions
// have no article. All glosses are distinct English, so no `confusableWith` is
// needed — "sun" and "sunny" are legitimately different cards.
export const weather = [
  { id: 'soleil', fr: 'soleil', article: 'le', gender: 'm', en: 'sun' },
  { id: 'nuage', fr: 'nuage', article: 'le', gender: 'm', en: 'cloud' },
  { id: 'pluie', fr: 'pluie', article: 'la', gender: 'f', en: 'rain' },
  { id: 'vent', fr: 'vent', article: 'le', gender: 'm', en: 'wind' },
  { id: 'neige', fr: 'neige', article: 'la', gender: 'f', en: 'snow' },
  { id: 'grele', fr: 'grêle', article: 'la', gender: 'f', en: 'hail' },
  { id: 'glace', fr: 'glace', article: 'la', gender: 'f', en: 'ice' },
  // l' hides the gender — éclair is masculine (un éclair).
  { id: 'eclair', fr: 'éclair', article: "l'", gender: 'm', en: 'lightning' },
  { id: 'tonnerre', fr: 'tonnerre', article: 'le', gender: 'm', en: 'thunder' },
  { id: 'tempete', fr: 'tempête', article: 'la', gender: 'f', en: 'storm' },
  { id: 'tornade', fr: 'tornade', article: 'la', gender: 'f', en: 'tornado' },
  // The describing words (adjectives) and the two set expressions — no article.
  { id: 'ensoleille', fr: 'ensoleillé', en: 'sunny' },
  { id: 'nuageux', fr: 'nuageux', en: 'cloudy' },
  { id: 'pluvieux', fr: 'pluvieux', en: 'rainy' },
  { id: 'venteux', fr: 'venteux', en: 'windy' },
  { id: 'enneige', fr: 'enneigé', en: 'snowy' },
  { id: 'il-fait-chaud', fr: 'il fait chaud', en: "it's hot" },
  { id: 'il-fait-froid', fr: 'il fait froid', en: "it's cold" },
]

// Cours N°5 — the seaside / «danseuse créole» vocabulary. The slide's Matisse
// art-history is a class break (skipped, like Gauguin's), but the noun list under
// it — the sea and its creatures, plus the dancer and a few body parts — is
// practical beginner vocabulary, so it earns a deck. Same grab-bag shape as
// `nature`: article-first, so gender is learned with the word. Indefinite where
// the slide used it (un océan), definite for the body parts (la tête).
export const seaside = [
  { id: 'ocean', fr: 'océan', article: 'un', gender: 'm', en: 'an ocean' },
  { id: 'meduse', fr: 'méduse', article: 'une', gender: 'f', en: 'a jellyfish' },
  { id: 'algue', fr: 'algue', article: 'une', gender: 'f', en: 'seaweed' },
  { id: 'mouette', fr: 'mouette', article: 'une', gender: 'f', en: 'a seagull' },
  { id: 'corail', fr: 'corail', article: 'un', gender: 'm', en: 'coral' },
  { id: 'poisson', fr: 'poisson', article: 'un', gender: 'm', en: 'a fish' },
  { id: 'hippocampe', fr: 'hippocampe', article: 'un', gender: 'm', en: 'a seahorse' },
  { id: 'etoile-de-mer', fr: 'étoile de mer', article: 'une', gender: 'f', en: 'a starfish' },
  { id: 'danseuse', fr: 'danseuse', article: 'une', gender: 'f', en: 'a dancer (f)' },
  { id: 'tutu', fr: 'tutu', article: 'un', gender: 'm', en: 'a tutu' },
  { id: 'tete', fr: 'tête', article: 'la', gender: 'f', en: 'the head' },
  { id: 'bras', fr: 'bras', article: 'le', gender: 'm', en: 'the arm' },
  { id: 'jambe', fr: 'jambe', article: 'la', gender: 'f', en: 'the leg' },
]

// Cours N°6 — the landscape vocabulary from the Monet / Impressionism slide. Same
// story as `nature` (Gauguin) and `seaside` (Matisse): the art-history is a class
// break (skipped), but the noun list under the paintings is good beginner
// vocabulary. Only the words NOT already taught elsewhere are here — la mer, la
// fleur, l'herbe, la maison, la montagne, la robe are already in `nature` /
// `seaside`, so they're not repeated. Article-first, so gender is learned with the
// word. The slide misprints "un ombrelle"; ombrelle is feminine (une ombrelle) —
// corrected here and flagged in VERIFY.md.
export const paysage = [
  { id: 'champ', fr: 'champ', article: 'un', gender: 'm', en: 'a field' },
  { id: 'arbre', fr: 'arbre', article: 'un', gender: 'm', en: 'a tree' },
  // l' hides the gender — ciel is masculine (le ciel).
  { id: 'ciel', fr: 'ciel', article: 'le', gender: 'm', en: 'the sky' },
  { id: 'enfant', fr: 'enfant', article: 'un', gender: 'm', en: 'a child' },
  { id: 'chapeau', fr: 'chapeau', article: 'un', gender: 'm', en: 'a hat' },
  { id: 'ombrelle', fr: 'ombrelle', article: 'une', gender: 'f', en: 'a parasol / sun umbrella' },
  { id: 'route', fr: 'route', article: 'une', gender: 'f', en: 'a road' },
  { id: 'paysage', fr: 'paysage', article: 'le', gender: 'm', en: 'the landscape / scenery' },
  // l' hides the gender — ombre is feminine (une ombre).
  { id: 'ombre', fr: 'ombre', article: "l'", gender: 'f', en: 'the shade / shadow' },
]

// Cours N°7 — vocabulary from the Simon de Châlons Nativity-scene painting
// slide. Same pattern as `paysage`: the painter's biography is a class break
// (skipped), but the noun list under the painting is good vocabulary. Already
// excludes «montagne», which is in `nature`. The slide glosses "un âne" as
// "a mountain" — that's a translation error; âne means donkey, corrected here
// and flagged in VERIFY.md.
export const chalons = [
  { id: 'perroquet', fr: 'perroquet', article: 'un', gender: 'm', en: 'a parrot' },
  { id: 'ange', fr: 'ange', article: 'un', gender: 'm', en: 'an angel' },
  { id: 'vierge-marie', fr: 'la Vierge Marie', en: 'the Virgin Mary' },
  { id: 'enfant-jesus', fr: "l'Enfant Jésus", en: 'Baby Jesus' },
  { id: 'bergers', fr: 'bergers', article: 'les', gender: 'm', en: 'shepherds' },
  { id: 'colonne', fr: 'colonne', article: 'une', gender: 'f', en: 'a column' },
  { id: 'batiment', fr: 'bâtiment', article: 'un', gender: 'm', en: 'a building' },
  { id: 'humble', fr: 'humble', en: 'humble' },
  { id: 'mouton', fr: 'mouton', article: 'un', gender: 'm', en: 'a sheep' },
  {
    id: 'ane',
    fr: 'âne',
    article: 'un',
    gender: 'm',
    en: 'a donkey',
    note: 'The slide mistranslates this as "a mountain" — âne means donkey.',
  },
  { id: 'drap', fr: 'drap', article: 'un', gender: 'm', en: 'a sheet' },
  { id: 'cornemuse', fr: 'cornemuse', article: 'une', gender: 'f', en: 'a bagpipe' },
]

// Cours N°8 — le corps (the body). «La tête», «le bras» and «la jambe» were
// already taught alongside the Matisse dancer in `seaside` (Cours N°5), so
// they're not repeated here.
export const body = [
  { id: 'corps', fr: 'corps', article: 'le', gender: 'm', en: 'the body' },
  { id: 'main', fr: 'main', article: 'la', gender: 'f', en: 'the hand' },
  { id: 'pied', fr: 'pied', article: 'le', gender: 'm', en: 'the foot' },
  { id: 'yeux', fr: 'yeux', article: 'les', gender: 'm', en: 'eyes' },
  { id: 'nez', fr: 'nez', article: 'le', gender: 'm', en: 'nose' },
  { id: 'oreilles', fr: 'oreilles', article: 'les', gender: 'f', en: 'ears' },
  { id: 'dents', fr: 'dents', article: 'les', gender: 'f', en: 'teeth' },
  { id: 'cheveux', fr: 'cheveux', article: 'les', gender: 'm', en: 'hair' },
  { id: 'epaule', fr: 'épaule', article: "l'", gender: 'f', en: 'shoulder' },
  { id: 'coude', fr: 'coude', article: 'le', gender: 'm', en: 'elbow' },
  { id: 'poignet', fr: 'poignet', article: 'le', gender: 'm', en: 'wrist' },
  { id: 'doigts', fr: 'doigts', article: 'les', gender: 'm', en: 'fingers' },
  { id: 'genoux', fr: 'genoux', article: 'les', gender: 'm', en: 'knees' },
  { id: 'cheville', fr: 'cheville', article: 'la', gender: 'f', en: 'ankle' },
  { id: 'orteils', fr: 'orteils', article: 'les', gender: 'm', en: 'toes' },
  { id: 'cou', fr: 'cou', article: 'le', gender: 'm', en: 'neck' },
  { id: 'ventre', fr: 'ventre', article: 'le', gender: 'm', en: 'the stomach / belly' },
  { id: 'dos', fr: 'dos', article: 'le', gender: 'm', en: 'back' },
]

// Cours N°8 — physical/personality descriptors, merged from the "le corps"
// table's second column and the standalone "Qualities and faults" slide
// (sympathique appears on both; kept once). Masculine/feminine pairs use the
// SAME card ("beau / belle"), matching the pattern already used for danseuse
// and other single-gender nouns — the quiz drills recognition, not agreement,
// which the new `adjectives.js` deck handles separately.
//
// The slide prints "Jolie / jolie" for both forms — a typo, since the
// masculine is «joli». Corrected here; flagged in VERIFY.md. It also prints
// "Méchante / méchante" the same way; corrected to «méchant / méchante».
export const traits = [
  { id: 'adorable', fr: 'adorable', en: 'adorable' },
  { id: 'sympathique', fr: 'sympathique', en: 'nice / friendly' },
  { id: 'gentil', fr: 'gentil / gentille', en: 'kind' },
  { id: 'drole', fr: 'drôle', en: 'funny' },
  { id: 'serieux', fr: 'sérieux / sérieuse', en: 'serious' },
  { id: 'triste', fr: 'triste', en: 'sad' },
  { id: 'timide', fr: 'timide', en: 'shy' },
  { id: 'calme', fr: 'calme', en: 'calm' },
  { id: 'egoiste', fr: 'égoïste', en: 'selfish' },
  { id: 'avare', fr: 'avare', en: 'greedy / stingy' },
  { id: 'mechant', fr: 'méchant / méchante', en: 'mean' },
  { id: 'paresseux', fr: 'paresseux / paresseuse', en: 'lazy' },
  { id: 'beau', fr: 'beau / belle', en: 'handsome / beautiful' },
  { id: 'joli', fr: 'joli / jolie', en: 'pretty' },
  { id: 'elegant', fr: 'élégant / élégante', en: 'elegant' },
  { id: 'mignon', fr: 'mignon / mignonne', en: 'cute' },
  { id: 'grandpetit', fr: 'grand / petit', en: 'tall / small-short' },
  { id: 'mince', fr: 'mince', en: 'slim' },
  { id: 'gros', fr: 'gros / grosse', en: 'fat' },
  { id: 'fort', fr: 'fort / forte', en: 'strong' },
  { id: 'jeune', fr: 'jeune', en: 'young' },
  { id: 'vieux', fr: 'vieux / vieille', en: 'old' },
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
