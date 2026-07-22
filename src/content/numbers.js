// Numbers — Cours collectif N°2, slides 290-327.
//
// Drilled digit -> French word (see the quiz engine), because the useful skill
// is producing "dix-sept" when you see 17, not the reverse. Distractors are
// other number words, where the confusions are real: dix-sept vs dix-huit,
// soixante-dix vs quatre-vingts.
//
// Spelling traps worth knowing (all as taught on the slide):
//   - 21, 71 use "et" with no hyphens: vingt et un, soixante et onze
//     (traditional spelling; the 1990 reform would write vingt-et-un).
//   - 80 = quatre-vingts WITH a final s...
//   - 81 = quatre-vingt-un DROPS the s (vingt loses its s before another number)
//   - 70/90 are "sixty-ten" / "four-twenty-ten": soixante-dix, quatre-vingt-dix

export const numbers = [
  { id: 'n0', digit: '0', fr: 'zéro' },
  { id: 'n1', digit: '1', fr: 'un' },
  { id: 'n2', digit: '2', fr: 'deux' },
  { id: 'n3', digit: '3', fr: 'trois' },
  { id: 'n4', digit: '4', fr: 'quatre' },
  { id: 'n5', digit: '5', fr: 'cinq' },
  { id: 'n6', digit: '6', fr: 'six' },
  { id: 'n7', digit: '7', fr: 'sept' },
  { id: 'n8', digit: '8', fr: 'huit' },
  { id: 'n9', digit: '9', fr: 'neuf' },
  { id: 'n10', digit: '10', fr: 'dix' },
  { id: 'n11', digit: '11', fr: 'onze' },
  { id: 'n12', digit: '12', fr: 'douze' },
  { id: 'n13', digit: '13', fr: 'treize' },
  { id: 'n14', digit: '14', fr: 'quatorze' },
  { id: 'n15', digit: '15', fr: 'quinze' },
  { id: 'n16', digit: '16', fr: 'seize' },
  { id: 'n17', digit: '17', fr: 'dix-sept' },
  { id: 'n18', digit: '18', fr: 'dix-huit' },
  { id: 'n19', digit: '19', fr: 'dix-neuf' },
  { id: 'n20', digit: '20', fr: 'vingt' },
  { id: 'n21', digit: '21', fr: 'vingt et un' },
  { id: 'n22', digit: '22', fr: 'vingt-deux' },
  { id: 'n30', digit: '30', fr: 'trente' },
  { id: 'n40', digit: '40', fr: 'quarante' },
  { id: 'n50', digit: '50', fr: 'cinquante' },
  { id: 'n60', digit: '60', fr: 'soixante' },
  { id: 'n70', digit: '70', fr: 'soixante-dix' },
  { id: 'n71', digit: '71', fr: 'soixante et onze' },
  { id: 'n80', digit: '80', fr: 'quatre-vingts' },
  { id: 'n81', digit: '81', fr: 'quatre-vingt-un' },
  { id: 'n90', digit: '90', fr: 'quatre-vingt-dix' },
  { id: 'n91', digit: '91', fr: 'quatre-vingt-onze' },
  { id: 'n100', digit: '100', fr: 'cent' },
  { id: 'n1000', digit: '1000', fr: 'mille' },
]
