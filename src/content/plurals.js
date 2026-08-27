// Le pluriel des noms — Cours collectif N°7.
//
// The general rule is +s, and the -s is silent, so a plural often SOUNDS
// identical to its singular. That's why this is a transform deck like negation
// and interrogatives: the prompt is the singular (with its article, so gender
// rides along too), the answer is the correct plural, and the distractors are
// the exact mistakes the exception rules are there to prevent — applying the
// general +s rule where an exception overrides it, applying an exception rule
// where the noun is actually regular, or forgetting to change the noun at all.
//
// Rules drilled here (all from the same slide):
//   -s / -x / -z endings         -> unchanged (un bus = des bus)
//   -eau / -au / -eu             -> +x (un bateau = des bateaux) — EXCEPT pneu
//   -al                          -> -aux (un animal = des animaux) — EXCEPT bal, festival
//   -ail                         -> +s (un détail = des détails) — EXCEPT travail, vitrail

export const plurals = [
  {
    id: 'livre',
    singular: 'un livre',
    plural: 'des livres',
    en: 'a book / books',
    distractors: ['des livre', 'des livreaux', 'des livrals'],
  },
  {
    id: 'bus',
    singular: 'un bus',
    plural: 'des bus',
    en: 'a bus / buses',
    distractors: ['des buses', 'des busses', 'des busaux'],
  },
  {
    id: 'prix',
    singular: 'un prix',
    plural: 'des prix',
    en: 'a prize / prizes',
    distractors: ['des prixs', 'des prixes', 'des prices'],
  },
  {
    id: 'nez',
    singular: 'un nez',
    plural: 'des nez',
    en: 'a nose / noses',
    distractors: ['des nezs', 'des nezes', 'des néz'],
  },
  {
    id: 'bateau',
    singular: 'un bateau',
    plural: 'des bateaux',
    en: 'a boat / boats',
    distractors: ['des bateaus', 'des bateau', 'des bâteaux'],
  },
  {
    id: 'pneu',
    singular: 'un pneu',
    plural: 'des pneus',
    en: 'a tire / tires',
    note: 'The one -eu exception: +s, not +x.',
    distractors: ['des pneux', 'des pneu', 'des pneuxs'],
  },
  {
    id: 'animal',
    singular: 'un animal',
    plural: 'des animaux',
    en: 'an animal / animals',
    distractors: ['des animals', 'des animal', 'des animales'],
  },
  {
    id: 'bal',
    singular: 'un bal',
    plural: 'des bals',
    en: 'a dance / dances',
    note: 'One of the two -al exceptions: +s, not -aux.',
    distractors: ['des baux', 'des bal', 'des balaux'],
  },
  {
    id: 'journal',
    singular: 'un journal',
    plural: 'des journaux',
    en: 'a newspaper / newspapers',
    distractors: ['des journals', 'des journal', 'des journaus'],
  },
  {
    id: 'detail',
    singular: 'un détail',
    plural: 'des détails',
    en: 'a detail / details',
    distractors: ['des détaux', 'des détail', 'des détailx'],
  },
  {
    id: 'travail',
    singular: 'un travail',
    plural: 'des travaux',
    en: 'a job / jobs',
    note: 'One of the two -ail exceptions: -aux, not +s (unlike détail).',
    distractors: ['des travails', 'des travail', 'des travaus'],
  },
  {
    id: 'vitrail',
    singular: 'un vitrail',
    plural: 'des vitraux',
    en: 'a stained-glass window / stained-glass windows',
    note: 'The other -ail exception: -aux, not +s.',
    distractors: ['des vitrails', 'des vitrail', 'des vitrauxs'],
  },
]
