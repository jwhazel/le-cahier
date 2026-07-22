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
