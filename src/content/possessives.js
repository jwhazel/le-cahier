// Possessive adjectives (mon / ma / mes …) — Cours collectif N°4.
//
// The whole point of this deck is the trap the slide shouts about: in French
// the possessive agrees with the THING owned (its gender and number), NOT with
// the owner. English does the opposite — "her brother" / "his sister" track the
// owner's sex. So «Marie aime ___ frère» is SON frère (frère is masculine),
// even though the owner, Marie, is a woman.
//
// Each card is a fill-in-the-blank sentence. The answer is one possessive; the
// distractors are the SAME person's other forms (the agreement mistake) plus one
// wrong-person form. `hint` states the gender/number so the question is about
// agreement, not about guessing the noun's gender.
//
// Deliberately avoided: feminine nouns that begin with a vowel or silent h. Those
// take the *masculine* form for euphony (mon amie, ton école, son histoire), an
// exception the slide never mentions — including them would teach ma/ta/sa there,
// which is wrong. See VERIFY.md.

// `template` holds a "___" blank; the engine fills it to show/speak the full
// sentence after you answer.
export const possessives = [
  {
    id: 'je-livre',
    template: 'Je lis ___ livre.',
    answer: 'mon',
    distractors: ['ma', 'mes', 'ton'],
    hint: 'livre — masculin singulier',
    en: 'I read my book.',
  },
  {
    id: 'je-soeur',
    template: "J'adore ___ sœur.",
    answer: 'ma',
    distractors: ['mon', 'mes', 'ta'],
    hint: 'sœur — féminin singulier',
    en: 'I adore my sister.',
  },
  {
    id: 'je-telephone',
    template: "J'ai oublié ___ téléphone.",
    answer: 'mon',
    distractors: ['ma', 'mes', 'son'],
    hint: 'téléphone — masculin singulier',
    en: 'I forgot my phone.',
  },
  {
    id: 'tu-maison',
    template: 'Tu ranges ___ maison.',
    answer: 'ta',
    distractors: ['ton', 'tes', 'sa'],
    hint: 'maison — féminin singulier',
    en: 'You tidy your house.',
  },
  {
    id: 'tu-amis',
    template: 'Tu appelles ___ amis.',
    answer: 'tes',
    distractors: ['ton', 'ta', 'ses'],
    hint: 'amis — masculin pluriel',
    en: 'You call your friends.',
  },
  {
    id: 'il-voiture',
    template: 'Jean aime ___ voiture.',
    answer: 'sa',
    distractors: ['son', 'ses', 'ta'],
    hint: 'voiture — féminin singulier (owner is Jean — agreement follows the car, not Jean)',
    en: "Jean loves his car.",
  },
  {
    id: 'elle-frere',
    template: 'Marie aime ___ frère.',
    answer: 'son',
    distractors: ['sa', 'ses', 'ton'],
    hint: 'frère — masculin singulier (owner is Marie — SON, not "her")',
    en: "Marie loves her brother.",
  },
  {
    id: 'elle-mere',
    template: 'Elle appelle ___ mère.',
    answer: 'sa',
    distractors: ['son', 'ses', 'ma'],
    hint: 'mère — féminin singulier',
    en: 'She calls her mom.',
  },
  {
    id: 'nous-amis',
    template: 'Nous aimons ___ amis.',
    answer: 'nos',
    distractors: ['notre', 'votre', 'mes'],
    hint: 'amis — masculin pluriel',
    en: 'We love our friends.',
  },
  {
    id: 'vous-chien',
    template: 'Vous promenez ___ chien.',
    answer: 'votre',
    distractors: ['vos', 'notre', 'ton'],
    hint: 'chien — masculin singulier',
    en: 'You walk your dog.',
  },
  {
    id: 'ils-parents',
    template: 'Ils rendent visite à ___ parents.',
    answer: 'leurs',
    distractors: ['leur', 'nos', 'ses'],
    hint: 'parents — masculin pluriel',
    en: 'They visit their parents.',
  },
  {
    id: 'ils-maison',
    template: 'Ils vendent ___ maison.',
    answer: 'leur',
    distractors: ['leurs', 'notre', 'sa'],
    hint: 'maison — féminin singulier',
    en: 'They are selling their house.',
  },
]
