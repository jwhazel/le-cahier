// La famille — Cours collectif N°7.
//
// Same shape as classroom/nature in vocab.js. A couple of entries are plural
// nouns in French (les parents, les enfants, les grands-parents, les époux) —
// they carry `article: 'les'` like any other noun here; the deck doesn't care
// that the count happens to be baked into the word itself.

export const family = [
  { id: 'famille', fr: 'famille', article: 'la', gender: 'f', en: 'family' },
  { id: 'parents', fr: 'parents', article: 'les', gender: 'm', en: 'parents' },
  { id: 'pere', fr: 'père', article: 'le', gender: 'm', en: 'father' },
  { id: 'mere', fr: 'mère', article: 'la', gender: 'f', en: 'mother' },
  { id: 'enfants', fr: 'enfants', article: 'les', gender: 'm', en: 'children / kids' },
  { id: 'fils', fr: 'fils', article: 'le', gender: 'm', en: 'son' },
  { id: 'fille', fr: 'fille', article: 'la', gender: 'f', en: 'daughter' },
  { id: 'frere', fr: 'frère', article: 'le', gender: 'm', en: 'brother' },
  { id: 'soeur', fr: 'sœur', article: 'la', gender: 'f', en: 'sister' },
  { id: 'grandpere', fr: 'grand-père', article: 'le', gender: 'm', en: 'grandfather' },
  { id: 'grandmere', fr: 'grand-mère', article: 'la', gender: 'f', en: 'grandmother' },
  { id: 'grandsparents', fr: 'grands-parents', article: 'les', gender: 'm', en: 'grandparents' },
  { id: 'oncle', fr: 'oncle', article: "l'", gender: 'm', en: 'uncle' },
  { id: 'tante', fr: 'tante', article: 'la', gender: 'f', en: 'aunt' },
  { id: 'cousin', fr: 'cousin', article: 'le', gender: 'm', en: 'cousin (m)' },
  { id: 'cousine', fr: 'cousine', article: 'la', gender: 'f', en: 'cousin (f)' },
  { id: 'mari', fr: 'mari', article: 'le', gender: 'm', en: 'husband' },
  {
    id: 'femme-epouse',
    fr: 'femme',
    article: 'la',
    gender: 'f',
    en: 'wife',
    note: 'Also means "woman" (see the nature deck) — context tells them apart.',
  },
  { id: 'epoux', fr: 'époux', article: 'les', gender: 'm', en: 'spouses' },
  { id: 'bebe', fr: 'bébé', article: 'un', gender: 'm', en: 'a baby' },
  { id: 'chien', fr: 'chien', article: 'le', gender: 'm', en: 'dog' },
  { id: 'chat', fr: 'chat', article: 'le', gender: 'm', en: 'cat' },
]
