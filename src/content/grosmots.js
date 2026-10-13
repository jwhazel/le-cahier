// Gros mots — French swearing, argot, and insults.
//
// This deck is NOT from the course slides. It's inspired by the "road rage"
// tangent in Cours N°4, and by the plain fact that every learner meets these
// words eventually — better to meet them labelled than to misjudge their weight
// in front of a French person. Each card carries a `register` so you learn not
// just what a word means but how hard it lands:
//
//   familier — mild, everyday frustration. Safe among friends.
//   vulgaire — crude. Fine with close friends, not at work or with strangers.
//   injure   — a personal insult. Aimed at someone. Handle with care.
//
// Synonyms carry `confusableWith` so the quiz never offers two options that mean
// the same thing (see pronouns.js). Glosses are kept distinct so no two cards
// share the exact English text.

export const grosMots = [
  // --- familier: the mild "darn!" cluster --------------------------------
  {
    id: 'zut',
    fr: 'zut !',
    en: 'darn! / shoot!',
    register: 'familier',
    confusableWith: ['mince', 'flute', 'punaise'],
  },
  {
    id: 'mince',
    fr: 'mince !',
    en: 'dang! / shoot!',
    register: 'familier',
    confusableWith: ['zut', 'flute', 'punaise'],
  },
  {
    id: 'flute',
    fr: 'flûte !',
    en: 'darn it! (very mild)',
    register: 'familier',
    confusableWith: ['zut', 'mince', 'punaise'],
  },
  {
    id: 'punaise',
    fr: 'punaise !',
    en: 'shoot! (polite stand-in for putain)',
    register: 'familier',
    note: 'Literally "bedbug" — a clean substitute for putain, like "sugar" for the other word.',
    confusableWith: ['zut', 'mince', 'flute'],
  },
  {
    id: 'la-vache',
    fr: 'la vache !',
    en: 'wow! / holy cow!',
    register: 'familier',
    note: 'Surprise, not an insult. Literally "the cow".',
  },
  {
    id: 'crotte',
    fr: 'crotte !',
    en: 'crud! (childish)',
    register: 'familier',
    note: 'Literally "droppings" — a nursery-level swap for merde.',
  },

  // --- vulgaire: the strong interjections --------------------------------
  {
    id: 'merde',
    fr: 'merde !',
    en: 'shit! / crap!',
    register: 'vulgaire',
  },
  {
    id: 'putain',
    fr: 'putain !',
    en: 'damn! / f***!',
    register: 'vulgaire',
    note: 'Literally "whore", but as an interjection it just means "damn!". Extremely common — rarely literal.',
  },
  {
    id: 'bordel',
    fr: 'bordel !',
    en: 'what a mess! / bloody hell!',
    register: 'vulgaire',
    note: 'Literally "brothel"; used for chaos or as an intensifier ("putain de bordel").',
  },
  {
    id: 'ta-gueule',
    fr: 'ta gueule !',
    en: 'shut up! (harsh)',
    register: 'vulgaire',
    note: '"Gueule" is an animal\'s mouth — using it for a person is deliberately rude.',
  },
  {
    id: 'casse-toi',
    fr: 'casse-toi !',
    en: 'get lost! / clear off!',
    register: 'vulgaire',
  },
  {
    id: 'fais-chier',
    fr: 'ça me fait chier',
    en: "it pisses me off",
    register: 'vulgaire',
  },

  // --- injure: aimed at a person -----------------------------------------
  {
    id: 'con',
    fr: 'con / conne',
    en: 'idiot / dumbass',
    register: 'injure',
    note: 'Very common. As an adjective ("c\'est con") it just means "that\'s stupid/too bad".',
    confusableWith: ['cretin', 'tete-abruti'],
  },
  {
    id: 'connard',
    fr: 'connard',
    en: 'asshole (m.)',
    register: 'injure',
    confusableWith: ['salaud'],
  },
  {
    id: 'connasse',
    fr: 'connasse',
    en: 'bitch (f.)',
    register: 'injure',
    confusableWith: ['salope'],
  },
  {
    id: 'salaud',
    fr: 'salaud',
    en: 'bastard (m.)',
    register: 'injure',
    confusableWith: ['connard'],
  },
  {
    id: 'salope',
    fr: 'salope',
    en: 'nasty piece of work (f.)',
    register: 'injure',
    confusableWith: ['connasse'],
  },
  {
    id: 'cretin',
    fr: 'crétin',
    en: 'moron / cretin',
    register: 'injure',
    confusableWith: ['con', 'tete-abruti'],
  },

  // --- Cours N°10 — "Because French ARE MEAN": insults about someone's face ---
  // These DID come from a slide (unlike the rest of this file). The "looks
  // stupid" trio (pet / gland / abruti) and the "ugly" pair (cul / vomir) mean
  // nearly the same thing, so each is marked confusable with its neighbours.
  {
    id: 'tete-claques',
    fr: 'avoir une tête à claques',
    en: 'to have a punchable face',
    register: 'injure',
    note: 'Someone so smug you want to slap them. Mild as insults go. The slide writes "un tronche à claque" — tronche (slang for tête) is feminine, and claques takes an s: une tronche à claques.',
  },
  {
    id: 'face-pet',
    fr: 'avoir une face de pet',
    en: 'to have a stupid-looking face (lit. "fart face")',
    register: 'injure',
    confusableWith: ['tete-gland', 'tete-abruti'],
  },
  {
    id: 'tete-gland',
    fr: 'avoir une tête de gland',
    en: 'to look like a dickhead',
    register: 'injure',
    note: 'Crude — gland is literally the tip of the penis (and also an acorn).',
    confusableWith: ['face-pet', 'tete-abruti'],
  },
  {
    id: 'tete-abruti',
    fr: "avoir une tête d'abruti",
    en: 'to look like a complete idiot',
    register: 'injure',
    confusableWith: ['face-pet', 'tete-gland', 'con', 'cretin'],
  },
  {
    id: 'tete-cul',
    fr: 'avoir une tête de cul',
    en: 'to have an ugly, hateful face (lit. "ass face")',
    register: 'injure',
    confusableWith: ['tete-vomir'],
  },
  {
    id: 'tete-vomir',
    fr: 'avoir une tête à vomir',
    en: 'to be so ugly it makes you sick',
    register: 'injure',
    note: 'The milder way to say it: être vraiment vilain (really ugly — though vilain alone, said to a child, just means naughty).',
    confusableWith: ['tete-cul'],
  },
]
