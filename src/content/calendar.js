// Days and months — Cours collectif N°2, slides 4-54.
//
// IMPORTANT: French days and months are LOWERCASE (lundi, janvier), unlike
// English. The slides capitalise them (Lundi, Janvier) because they're table
// headers, but that's a typographic choice, not French orthography. They only
// take a capital at the start of a sentence. Stored lowercase here on purpose;
// see VERIFY.md.

export const days = [
  { id: 'lundi', fr: 'lundi', en: 'Monday' },
  { id: 'mardi', fr: 'mardi', en: 'Tuesday' },
  { id: 'mercredi', fr: 'mercredi', en: 'Wednesday' },
  { id: 'jeudi', fr: 'jeudi', en: 'Thursday' },
  { id: 'vendredi', fr: 'vendredi', en: 'Friday' },
  { id: 'samedi', fr: 'samedi', en: 'Saturday' },
  { id: 'dimanche', fr: 'dimanche', en: 'Sunday' },
]

export const months = [
  { id: 'janvier', fr: 'janvier', en: 'January' },
  { id: 'fevrier', fr: 'février', en: 'February' },
  { id: 'mars', fr: 'mars', en: 'March' },
  { id: 'avril', fr: 'avril', en: 'April' },
  { id: 'mai', fr: 'mai', en: 'May' },
  { id: 'juin', fr: 'juin', en: 'June' },
  { id: 'juillet', fr: 'juillet', en: 'July' },
  { id: 'aout', fr: 'août', en: 'August' },
  { id: 'septembre', fr: 'septembre', en: 'September' },
  { id: 'octobre', fr: 'octobre', en: 'October' },
  { id: 'novembre', fr: 'novembre', en: 'November' },
  { id: 'decembre', fr: 'décembre', en: 'December' },
]

// Cours N°6 — the seasons, plus the "when" words (today / tomorrow / yesterday)
// and the parts of the day. Grouped here because it's the same temporal family as
// days and months. Nouns carry their article so gender rides along (as in
// `classroom`); the adverbs — aujourd'hui, demain, hier … — take no article.
// Several of the season nouns hide their gender behind an elided l' (l'été,
// l'hiver): all three of those are masculine. Flagged in the cheat sheet.
export const seasons = [
  { id: 'saison', fr: 'saison', article: 'une', gender: 'f', en: 'a season' },
  { id: 'printemps', fr: 'printemps', article: 'le', gender: 'm', en: 'spring' },
  { id: 'ete', fr: 'été', article: "l'", gender: 'm', en: 'summer' },
  { id: 'automne', fr: 'automne', article: "l'", gender: 'm', en: 'autumn / fall' },
  { id: 'hiver', fr: 'hiver', article: "l'", gender: 'm', en: 'winter' },
  { id: 'aujourdhui', fr: "aujourd'hui", en: 'today' },
  { id: 'demain', fr: 'demain', en: 'tomorrow' },
  { id: 'apres-demain', fr: 'après-demain', en: 'the day after tomorrow' },
  { id: 'hier', fr: 'hier', en: 'yesterday' },
  { id: 'avant-hier', fr: 'avant-hier', en: 'the day before yesterday' },
  { id: 'matin', fr: 'matin', article: 'le', gender: 'm', en: 'morning' },
  { id: 'apres-midi', fr: 'après-midi', article: "l'", gender: 'm', en: 'afternoon' },
  { id: 'soir', fr: 'soir', article: 'le', gender: 'm', en: 'evening' },
  { id: 'nuit', fr: 'nuit', article: 'la', gender: 'f', en: 'night' },
]
