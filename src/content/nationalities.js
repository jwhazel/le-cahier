// Nationalities — Cours collectif N°3, slides 483-496.
//
// Drilled masculine French -> English. The feminine form is stored too and
// shown in the cheat sheet, because the useful *rule* here is how the feminine
// is built (usually + e, but italien -> italienne doubles the n). As adjectives
// these are lowercase ("je suis français"); the noun "un Français" would be
// capitalised, but the course uses the adjective form. See VERIFY.md.

export const nationalities = [
  { id: 'francais', fr: 'français', fem: 'française', en: 'French' },
  { id: 'americain', fr: 'américain', fem: 'américaine', en: 'American' },
  { id: 'anglais', fr: 'anglais', fem: 'anglaise', en: 'English / British' },
  { id: 'espagnol', fr: 'espagnol', fem: 'espagnole', en: 'Spanish' },
  { id: 'italien', fr: 'italien', fem: 'italienne', en: 'Italian', note: 'Doubles the n: italien → italienne.' },
  { id: 'canadien', fr: 'canadien', fem: 'canadienne', en: 'Canadian', note: 'Doubles the n: canadien → canadienne.' },
  { id: 'japonais', fr: 'japonais', fem: 'japonaise', en: 'Japanese' },
]
