# Verify: content vs. the slides

One section per course, extracted from the PDFs in `course-slides/`.

**Read this against the PDF before you drill the decks.** An error here becomes
something you memorise. Check the ⚠️ items first — they're the ones where I
departed from what the slides say.

- [Cours N°1](#cours-n1) — 9 juillet
- [Cours N°2](#cours-n2) — 17 juillet

---

# Cours N°1

Extracted from `course-slides/Cours collectif Jeudi N°1.pdf` (29 slides).

---

## ⚠️ Where I contradicted the slides

**Slide 122** states that every 1st-group `-ER` verb is regular except `envoyer`
and `aller`. Two verbs on your own worksheet don't follow the stated
`root + ending` rule:

| Verb | Rule gives | Correct | Why |
|---|---|---|---|
| `manger` | *nous mangons* | **nous mangeons** | The `e` keeps the `g` soft. Without it you'd say "man-gons". |
| `peser` | *je pese* | **je pèse** | The stem takes `è` when the ending is silent: `je pèse` / `nous pesons`. |

I encoded the correct forms. The slide isn't wrong so much as simplifying —
the *endings* are perfectly regular, only the stem's spelling shifts. **Worth
asking Laurent** rather than assuming the slide is broken.

**Slide 134** drills `habiter` with `JE ___`. The answer is **`j'habite`**, not
`je habite`: `je` elides before a vowel sound, and the `h` of `habiter` is silent.
The slides never state this. The app shows the elided form after you answer.

---

## What became cards (99 total)

### Les pronoms sujets — 9 cards
`je` I · `tu` you (sing. informal) · `il` he/it (m) · `elle` she/it (f) ·
`on` we (informal) · `nous` we · `vous` you (pl. or formal) ·
`ils` they (m or mixed) · `elles` they (f only)

> `on` and `nous` both gloss as "we", so the engine never offers them as options
> to the same question. Same for the several ways to say hello.

### Les verbes en «ER» — 54 cards (9 verbs × 6 persons)
`chanter` · `habiter` · `parler` · `manger` · `casser` · `peser` · `donner` ·
`jouer` · `noter`

Wrong answers are drawn from **the same verb's other forms**, so you're choosing
between `parle` / `parles` / `parlons` / `parlez` / `parlent` — the confusion
that's actually worth drilling.

### Les objets de la classe — 10 cards
une chaise · une table · un tableau · un ordinateur · une tablette ·
un téléphone · un cahier · un livre · un stylo · un crayon

Shown *with* the article, so you absorb gender alongside the noun.

### Les couleurs — 14 cards
rouge · bleu · vert · jaune · noir · blanc · gris · rose · violet · orange ·
marron · beige · turquoise · doré

Masculine singular forms, as taught. (Colors are adjectives and agree — `vert` →
`verte` — but agreement isn't in lesson 1, so it isn't modelled yet.)
The color swatch only appears *after* you answer; showing it first would make
every question free.

The PDF prints `DORé`; the correct spelling is `doré`.

### Saluer — 12 cards
bonjour · bonjour Madame/Monsieur · rebonjour · bien le bonjour · salut ·
coucou · salutation · bonsoir · au revoir · à demain · s'il vous plaît · merci

The summary table on slide 273 has blanks; I took these from the complete bullet
list above it.

---

## What I deliberately skipped

| Slides | Content | Why |
|---|---|---|
| 4–11 | Introduction, Laurent's presentation | Not drillable. But the four questions (`Comment t'appelles-tu?` etc.) are worth their own deck once you can answer them. |
| 12–26 | Sentence construction: sujet + verbe + complément | Conceptual, not a fact to memorise. Would need a different question type. |
| 81–95, 104–117 | Exercises: identify subject/verb/complement | Same — these need free-response, not multiple choice. |
| 194–200 | Translation exercise ("I break a glass: …") | Good future deck: fill in the conjugated verb. Needs a text-input mode. |
| 201–247 | French History: Henri IV | Trivia. Genuinely interesting, entirely irrelevant to speaking French. |

The two exercise sections are the most valuable things I left on the table.
They'd both fit a typing mode over the existing verb data.

---

## Pronunciation

Every card can be read aloud — press <kbd>P</kbd>, or click the speaker. The
correct answer is spoken automatically the moment a card is graded.

This uses the browser's built-in speech synthesizer, so it works offline with no
account and no key. It picks the best **metropolitan French** voice you have
installed, preferring `Thomas`, then `Jacques`. Your machine also has Amélie and
several other `fr_CA` voices; those rank last on purpose, because Québécois
vowels aren't the target your course is aiming you at.

> Install "Thomas (Enhanced)" via System Settings → Accessibility → Spoken
> Content → System Voice → Manage Voices. The default voice is noticeably worse.

**A thing the audio will teach you, which the slides don't say.** Play the six
forms of `parler`:

| | sounds like |
|---|---|
| je parle · tu parles · il parle · ils parlent | …[paʁl] — **all four identical** |
| nous parlons | [paʁlɔ̃] |
| vous parlez | [paʁle] |

The endings `-e`, `-es`, and `-ent` are all silent. Four of the six forms are
homophones, and only the pronoun tells them apart. That's precisely why the
written drill matters — and why the app always speaks the *whole phrase*
(`tu parles`), never the bare form (`parles`), which would be useless aloud.

---

## What the app doesn't do yet

- **No progress tracking.** Reload and it forgets. Deliberate for v1.
- **No English → French direction.** The data supports it; nothing renders it.
- **No gender drill.** `chaise` is marked `f` in the data but never asked about.
- **25% guess floor.** Four choices. The usual fix is requiring a card be
  answered right several times before it's retired (Leitner boxes), which is
  also how you'd add spaced repetition.
- **No listening mode.** Hear `un cahier`, pick the spelling. The speech layer
  already supports it; nothing renders it.

---

# Cours N°2

Extracted from `course-slides/Cours collectif Jeudi N°2.pdf` (35 slides).
Added 5 decks (126 cards): days, months, numbers, 2nd-group «IR» verbs, and the
auxiliaries `être`/`avoir`. Two new «ER» verbs (`travailler`, `aimer`) fold into
the existing «ER» deck.

## ⚠️ Where I corrected or departed from the slides

**Days and months are lowercase in French.** The slides print `Lundi`, `Janvier`
as table headers, but French orthography writes `lundi`, `janvier` in running
text — they only take a capital at the start of a sentence, unlike English. I
stored them lowercase. If Laurent wants them capitalised, that's a display choice,
not French spelling.

**Number spelling traps** (encoded as the slide teaches, but worth staring at):

| Number | French | Trap |
|---|---|---|
| 21 | vingt **et** un | `et`, no hyphens (traditional spelling) |
| 71 | soixante **et** onze | same |
| 80 | quatre-vingt**s** | keeps the final `s` |
| 81 | quatre-vingt-un | **drops** the `s` before another number |
| 70 / 90 | soixante-dix / quatre-vingt-dix | "sixty-ten" / "four-twenty-ten" |

> The 1990 spelling reform hyphenates everything (`vingt-et-un`). The slide uses
> the traditional forms, so I did too. Either is accepted; be consistent.

**`être` and `avoir` are irregular** — no root+ending rule. I wrote the forms out
(`je suis / tu es / il est / nous sommes / vous êtes / ils sont`; `j'ai / tu as /
il a / nous avons / vous avez / ils ont`) and the reference labels them so. `j'ai`
elides, and the app shows it.

## New grammar — the «IR» group

The 2nd group conjugates **root + is / is / it / issons / issez / issent**. All
ten verbs on the slide are regular, so I generated nothing — the forms are written
out. Two things to notice, both drilled:

- **`je` and `tu` are identical** (`finis` / `finis`). Real French, not a typo.
- **`j'obéis`** elides, same rule as `j'habite`.

Verb decks never mix distractors across groups: an «IR» question's wrong answers
are other forms of the *same* «IR» verb, never an «ER» form.

## What I skipped from Cours N°2 (and why)

| Slides | Content | Why |
|---|---|---|
| 261–289 | **Negation** (`ne…pas`, `ne…rien`) | Sentence *transformation*, not recall — same shape as the sentence-construction exercises skipped in N°1. Wants a new "transform this sentence" exercise type, not a multiple-choice card. The single most valuable thing left on the table. |
| 343–406 | **Nasal vowels** ([õ][ã][ɛ̃][œ̃]) and **the "R" sound** | Pure pronunciation. Not text-MC material. Could become an audio-only "listen and pick" mode using the speech layer. |
| 481–517 | **Painting / position vocab** (`la muse`, `un buste`, `premier-plan`…) | You chose to skip it — half is art-specific and tied to one painting. `à droite`/`à gauche`/`en haut`/`en bas` are the reusable bits if you want them later. |
| 112–135 | Pronoun & sentence-analysis exercises | Review of N°1 material, or transformation exercises. |
| 237–260, 328–342, 445–517 | Louis XIV / Lully anecdote, the France quiz, painter bios | Trivia. |

The negation exercise and a listening mode are the two natural next builds — both
reuse machinery that already exists.

---

# Cours N°3

Extracted from `course-slides/Cours collectif Jeudi N°3.pdf` (24 slides). Most of
the deck is deliberate review (months, days, «IR» list, pronouns, numbers, nasal
vowels, être/avoir) and was skipped. Added 7 decks (70 cards) plus 3 verbs folded
into the existing «ER»/«IR» decks. The three "hard to convert" topics were built
as multiple-choice rather than a new typing mode — you chose *Everything*, with a
*generator* for time.

## ⚠️ Where I corrected or departed from the slides

**Nationalities are lowercase as adjectives.** `je suis français` (adjective,
lowercase). The noun "a French person" would be capitalised — `un Français` — but
the course uses the adjective form, so cards are lowercase. Feminine adds `-e`,
except `italien → italienne` and `canadien → canadienne`, which double the n.

**`s'appeler` doubles its L by sound, not everywhere.** `je m'appelle`,
`tu t'appelles`, `il s'appelle`, `ils s'appellent` (double l), but `nous appelons`
/ `vous appelez` (single l), because `-ons`/`-ez` already carry the stress. The
slide's `TU T'APELLES` is a typo — the app uses `t'appelles`.

**Age uses `avoir`, not `être`.** `j'ai 20 ans` = "I am 20", literally "I have 20
years". A classic false-friend trap; noted in the *se présenter* reference.

## Telling time — the generator

`src/quiz/time.js` computes the French phrase for any 24-hour time and generates
the wrong phrasings a learner confuses it with (off-by-one hour, `et quart` vs
`et demie`, forward-count instead of `moins`). The deck instantiates a fixed
spread of ~20 times so cards are stable. Agreement traps handled and unit-tested:

| Time | Phrase | Why it's tricky |
|---|---|---|
| 1h00 | `une heure` | singular |
| 21h00 | `vingt et une heures` | feminine agreement (heure is f.) |
| 12h30 | `midi et demi` | **masculine** demi after midi/minuit |
| 3h30 | `trois heures et demie` | feminine demie after heures |
| 10h50 | `onze heures moins dix` | count backward from the next hour |
| 15h45 | `seize heures moins le quart` | next hour − quarter |
| 23h45 | `minuit moins le quart` | rolls over to minuit |

## Definite articles — computed, not stored

`le`/`la`/`l'`/`les` is fully determined by gender + number + first sound, so the
deck computes the answer (`articleOf`) and offers all four articles as options
every time. The cheat sheet uses the *same* function, so it can't disagree with
the quiz.

## What I skipped from Cours N°3 (and why)

| Content | Why |
|---|---|
| **The France Quiz** and **all the pirates** (l'Olonnais, Wynne, Surcouf) | You asked to skip these. Great reading, not language drills. |
| **Croissant / baguette** pronunciation | A joke slide — pronunciation only. |
| **Nasal vowels** and **the "R" sound** (again) | Pure pronunciation; a future audio-only "listen and pick" mode. |
| **"Words that change gender"** (amour/délice/orgue) | A three-word Latin curiosity; low value, easy to mis-learn. Left in the source only. |
| Review of months/days/«IR»/pronouns/numbers/être-avoir | Already in the app since N°1–N°2. |

## New this course, by deck

- **Verbs**: `cacher` (ER), `réagir` + `ralentir` (IR) — folded into the existing decks.
- **Les nationalités** — 7, masculine → English (feminine shown in the cheat sheet).
- **Les articles définis** — computed le/la/l'/les.
- **Les pronoms réfléchis** — subject → me/te/se/nous/vous/se.
- **Se présenter (verbes pronominaux)** — `s'appeler`, `se présenter` conjugations.
- **Les accents** — name → é/è/ê/ë/ç, with a spoken example.
- **La négation** — pick the correct negation (elision, placement, dropped `ne`).
- **L'heure** — the time generator.

# Cours N°4

Cours N°4 (30 juillet) was mostly **review** — its first ~25 slides re-teach
N°2/N°3 material almost verbatim (months, days, subject pronouns, the whole «IR»
list, être/avoir, numbers, telling age, telling time, reflexives, definite
articles, nationalities, colors). The genuinely new material is *Leçon 5,
"échanger des informations personnelles"*: **possessive adjectives**, the
**interrogative form**, and **question words**. Those, plus a handful of new
verbs and the Tahiti vocabulary, are what became cards.

## ⚠️ Where I corrected or departed from the slides

- **Possessives — I avoided the feminine-vowel exception the slide omits.**
  Before a feminine noun starting with a vowel or silent h, French uses the
  *masculine* possessive for euphony: `mon amie`, `ton école`, `son histoire` —
  **not** `ma amie`. The slide never mentions this, and its own rule ("ma =
  feminine") would produce the wrong form there. So the possessives deck uses no
  such nouns; every feminine noun in it starts with a consonant, where `ma/ta/sa`
  is correct. (Same tactic as the negation deck avoiding the `de` rule.)
- **`s'appeler` typo carried over.** The slide still prints `T'APELLES`; correct
  is `t'appelles` (double l). Already fixed in N°3, unchanged here.
- **Euphonic `t` is the whole point of the inversion deck.** At the 3rd person
  singular, a verb ending in `-e` or `-a` inserts a `t` between hyphens:
  `parle-t-il`, `a-t-elle`. The distractors are exactly the failures of this rule
  (missing `t`, apostrophe instead of hyphens, spurious `t` where none is needed).
- **Toned down one example sentence.** The slide's inversion exercise includes
  *"Vous êtes moches"* (you are ugly); I used *"Vous êtes prêts"* (you are ready)
  since the app is shared with the class. The grammar point is identical.

## New this course, by deck

- **Verbs** (folded into existing decks): `écraser` (ER); `punir`, `saisir`,
  `atterrir`, `investir`, `bénir`, `avertir` (IR); `se cacher` (reflexive).
- **La nature (Tahiti)** — 12 nouns from the Gauguin slides (la mer, le sable, la
  montagne, la fleur, l'herbe, la lune, le cheval, le chemin, la maison, la robe,
  la femme, le paréo), article-first so gender rides along.
- **Les adjectifs possessifs** — fill-in-the-blank; the answer agrees with the
  *object*, distractors are the same person's other forms (the agreement trap)
  plus one wrong-person form. Reveal + speech give the whole sentence.
- **Poser une question (inversion)** — pick the correct inversion question;
  authored distractors target the euphonic `t` and hyphenation.
- **Les mots interrogatifs** — où / quand / comment / pourquoi / qui / que·quoi /
  quel·quelle / combien (recall).
- **Gros mots (argot) 🌶️** — **not from the slides.** Inspired by the road-rage
  tangent; a real, register-labelled deck (familier / vulgaire / injure) so the
  weight of each word is learned alongside its meaning. Its own deck, easy to skip.

## What I skipped from Cours N°4 (and why)

| Content | Why |
|---|---|
| **The France Quiz** (presidents, cheeses, Tour de France…) | You asked to skip these. Trivia, not language. |
| **Le Pétomane** (Joseph Pujol) story | A class break — history, not French to drill. |
| **Gauguin / Tahiti** art-history text | The art-history itself is a break; only the noun list under it became a deck. |
| Review of months/days/pronouns/«IR»/être-avoir/numbers/age/time/reflexives/articles/nationalities/colors | Already in the app since N°1–N°3. `turquoise` and `doré` were already in the colors deck. |

# Cours N°5

Extracted from `course-slides/Cours collectif Jeudi N°5.pdf` (52 slides). Like N°4,
the bulk is **review** — the whole first half re-runs the oral-comprehension
questions, months, days, subject pronouns, the «IR» exercise, negation,
être/avoir, numbers, colors, possessive adjectives, and the interrogative form,
all already in the app. The genuinely new material: the **3rd-group (irregular)
verbs**, a couple of new «ER»/«IR» verbs (one of which, `placer`, carries the
course's new *C dur / C doux* rule), a **weather** deck, and a **seaside** deck
from the Matisse slide. Added 3 decks (79 cards) + 8 verbs folded into existing
decks. Total ≈ 560 cards across 25 decks.

## ⚠️ Where I corrected or departed from the slides

- **`placer` needs a cedilla the plain rule hides.** This course teaches "C dur /
  C doux": `c` is soft [s] before `e/i/y`, hard [k] before `a/o/u`. So `placer`
  → **nous plaçons** (ç to keep the [s]), not "placons" — the same class of stem
  shift as `manger → mangeons`. Encoded with a `spellingChange` note and flagged
  in the «ER» grid. The endings are regular; only the stem's spelling moves.
- **3rd-group verbs are written out, never generated.** The infinitive ending
  (-oir / -dre / -ir / -tre / -oindre / -eindre / -oudre) does **not** predict the
  forms, so each is memorised like an auxiliary. The traps I hand-checked:
  | Verb | Singular | Plural stem shift |
  |---|---|---|
  | voir | je vois | nous **voy**ons, ils **voi**ent |
  | prendre | je prends | nous **pren**ons, ils **prenn**ent |
  | dormir | je **dors** (drops -m) | nous dormons |
  | mentir | je **mens** | nous mentons |
  | mettre | je mets | nous mettons |
  | dépeindre | je dépein**s** (no -d) | nous dépei**gn**ons |
  | moudre | je moud**s** (keeps -d) | nous **moul**ons |
  `dépeindre` and `moudre` are the exotic ones the slide assigns as exercises;
  `prendre`, `mettre`, `voir`, `dormir` are the everyday ones worth owning.
- **No new slide *errors* this course** — the possessive table (adds
  notre/votre/nos/vos/leur/leurs, already in the N°4 deck) and the euphonic-`t`
  rule are both stated correctly. The slide again lumps `combien` under "how" — it's
  "how much / how many"; the question-words deck already glosses it that way.

## Deliberately not built (fits no fair multiple-choice card)

| Content | Why |
|---|---|
| **C dur / C doux** rule (soft vs hard `c`) | It's a *binary* judgement (hard or soft), which can't fill four distinct options fairly. It's captured indirectly through `placer → plaçons`; the full rule belongs in the planned listening/typing mode. |
| **The « GN » sounds** (mouillé `agneau` vs separated `stagner`) | Pure pronunciation, also binary. Same future mode. |
| **France Quiz**, **Le massacre de la Saint-Barthélemy**, **Le porte-coton** | You asked to skip these — history/trivia, not language. |
| **Matisse / fauvism** art-history text | A class break, like Gauguin's; only the noun list under it became the seaside deck. |
| Review of oral-comp / months / days / pronouns / «IR» / negation / être-avoir / numbers / colors / possessives / interrogatives | Already in the app since N°1–N°4. |

## New this course, by deck

- **Verbs** (folded into existing decks): `placer` (ER, with the ç rule) + `mijoter`
  (ER); `vieillir`, `rougir`, `applaudir`, `nourrir`, `agir` (IR); `se tromper`
  (reflexive).
- **Les verbes du 3ème groupe** — `voir`, `prendre`, `attendre`, `mettre`,
  `dormir`, `mentir`, `dépeindre`, `moudre` (8 verbs × 6 persons). New `group: 3`,
  its own deck and cheat-sheet grid.
- **Quel temps fait-il ?** — weather: the nouns (le soleil, le nuage, la pluie, le
  vent, la neige, la grêle, la glace, l'éclair, le tonnerre, la tempête, la
  tornade), the describing adjectives (ensoleillé, nuageux, pluvieux, venteux,
  enneigé), and `il fait chaud` / `il fait froid`. Nouns shown with their article.
- **Au bord de la mer** — the Matisse-scene vocabulary: sea creatures (océan,
  méduse, algue, mouette, corail, poisson, hippocampe, étoile de mer), the dancer
  (danseuse, tutu), and three body parts (tête, bras, jambe), article-first.

# Cours N°6

Extracted from `course-slides/Cours collectif Jeudi N°6.pdf` (48 slides). Again
mostly **review** (weather, placer/mijoter, reflexives, être/avoir, numbers,
colors, the interrogative form, the 3rd-group table — all already in the app). The
headline new material is a whole new **tense — l'imparfait (the imperfect past)** —
the first tense beyond the present. Plus new verbs, a **seasons + time-of-day**
deck, and the **Monet landscape** vocabulary. Added 3 decks (89 cards) + 7 verbs
folded into existing decks. Total ≈ 691 cards across 28 decks.

## The imperfect — the app's first past tense

The slide's rule: take the present **nous** form, drop `-ons` for the stem, add one
fixed set of endings for every verb — `-ais · -ais · -ait · -ions · -iez · -aient`.
2nd-group verbs keep their `-iss-` (nous finissons → finiss- → *finissais*). It's
the most regular tense in French: **only `être` is irregular** (stem `ét-`,
*j'étais*), `avoir` is regular (`av-`), and even `aller` — irregular in the present
— is regular here (`all-`, *j'allais*), which the deck deliberately shows.

Even though it's regular, I **wrote every form out** in a new `imperfect.js` rather
than generating them — same policy as the present tense, so each card is checkable
against the slide and the edge cases (`ét-`, the `-iss-`, elisions like *j'étais* /
*j'avais* / *j'habitais*) can't be silently mis-generated. The deck reuses the
existing verb generator (a verb is one model; the imperfect is just a second
`forms` table), so the elision/reveal logic lives in one place for both tenses.

The 11 verbs drilled (the slide's own examples): être, avoir, parler, aimer,
habiter, regarder, écouter, finir, bâtir, prendre, aller. Note **je and tu are
always identical** in the imperfect (`parlais` / `parlais`), like the 2nd-group
present. Impersonal **`pleuvoir`** (*il pleuvait*) exists only at `il`, so it can't
form a fair 6-way drill — it's noted in the cheat sheet, not carded.

## ⚠️ Where I corrected or departed from the slides

- **`une ombrelle`, not "un ombrelle".** The Monet vocab slide misprints it as
  masculine; *ombrelle* is feminine. Corrected in the `paysage` deck.
- **`aplatir` — one p.** The slide shows `APLATIR` (correct); worth stating since
  the English "flatten" and the double-t tempt an extra letter. One p, two t implied
  by nothing — it's a-p-l-a-t-i-r, a regular 2nd-group verb.
- **No outright grammar errors this course.** The imperfect table, the 3rd-group
  table (which N°6 fills in — matches what I hand-wrote for N°5), and the
  interrogative examples are all correct. The slide again lumps `combien` under
  "how" — it's "how much / how many", as the question-words deck already glosses it.

## New this course, by deck

- **Verbs** (folded into existing decks): `fleurir`, `établir`, `aplatir`,
  `réunir`, `approfondir`, `embellir` (IR); `admettre` (3rd group — completes the
  N°5 table).
- **L'imparfait (passé)** — 11 verbs × 6 persons, the new tense (see above).
- **Les saisons et les moments** — the seasons (une saison, le printemps, l'été,
  l'automne, l'hiver) with the "when" adverbs (aujourd'hui, demain, après-demain,
  hier, avant-hier) and parts of the day (le matin, l'après-midi, le soir, la nuit).
  Nouns article-first; l'été / l'automne / l'hiver are all masculine behind the l'.
- **Le paysage (Monet)** — landscape nouns from the Impressionism slide: un champ,
  un arbre, le ciel, un enfant, un chapeau, une ombrelle, une route, le paysage,
  l'ombre. Words already taught in `nature` / `seaside` (la mer, la fleur, la
  maison, la montagne, la robe, l'herbe) are **not** repeated.

## What I skipped from Cours N°6 (and why)

| Content | Why |
|---|---|
| **The France Quiz** (Marie-Antoinette, EU vote, nuclear tests, car brands, NATO) | You asked to skip these — trivia, not language. |
| **Robespierre** & **the executioner Sanson** history | Class-break history; genuinely grim reading, no French to drill. |
| **Claude Monet / Impressionism** art-history text | A break, like Gauguin's and Matisse's; only the noun list under it became a deck. |
| **« Synonyme pour pieds »** (peton, panard, arpion, fromage) | A joke slide — regional slang for "foot" (and "cheese" as the punchline). Low value, easy to mis-learn; left in the source. |
| **"Present your boyfriend/girlfriend, make his business card"** | A speaking/writing role-play (leçons 6–7), not a multiple-choice fact. |
| Review of weather / placer / reflexives / être-avoir / numbers / colors / interrogatives / the 3rd-group table | Already in the app since N°1–N°5. |

# Cours N°7

Extracted from `course-slides/Cours collectif jeudi N°7.pdf` (about 40 slides).
Denser than N°5/N°6: on top of the usual review (months, days, colors, être/avoir,
seasons, aplatir/réunir, possessives — all already in the app), this course adds
**8 new «ER» verbs, 6 new «IR» verbs, 2 more 3rd-group verbs (apprendre, venir),
3 more imperfect verbs, a family-vocabulary deck, a new grammar point (c'est vs.
il/elle est), a full plural-noun-formation deck, and a religious-painting
vocabulary set**. Added 4 decks (52 cards) + 19 verbs folded into existing decks.
Total ≈ 857 cards across 32 decks in seven lessons.

## ⚠️ Where I corrected or departed from the slides

- **The course date.** The slide's own header reads "Jeudi 20 juillet 2026", but
  that date falls *before* N°3 (24 juillet) in the sequence — a clerical
  copy-paste error on the slide template, not a language point. Corrected to
  **20 août** (the next Thursday after N°6's 13 août) in `lessons`.
- **`un âne` does not mean "a mountain".** The Simon de Châlons painting-vocab
  slide glosses it that way — a straight translation error. *Âne* means donkey;
  *montagne* (already correctly used elsewhere on the same slide) is the word for
  mountain. Corrected in the `chalons` vocab, with the mistranslation flagged as a
  note revealed after answering.
- **No grammar errors.** The imperfect endings, the venir/apprendre conjugation
  table, the plural-formation rules, and the c'est/il-elle-est examples are all
  correct as taught.

## `acheter` — a second `peser`-shaped spelling trap

Like `peser` (N°1) and `placer` (N°5), `acheter` isn't actually irregular — the
ENDINGS are the regular «ER» set — but the stem takes a grave accent when the
ending is silent: **j'achète, tu achètes, il achète, ils achètent**, but **nous
achetons, vous achetez** (the -ons/-ez already carry the stress, so no accent is
needed). Hand-written, flagged with a `spellingChange` note like its siblings.

## `venir` — a genuine "boot verb"

Unlike the regular verbs, `venir` really is irregular: je/tu/il/ils switch the stem
to **vien-**, and the ils/elles form doubles the n (**viennent**), while nous/vous
keep the plain infinitive stem (**venons / venez**). Same shape as `tenir` /
`devenir`. Present tense forms hand-written, like every 3rd-group verb.
In the **imperfect**, though, `venir` is perfectly regular — the stem comes from
`nous venons` → *ven-* → *je venais* — the same "irregular present, regular
imperfect" pattern the deck already highlights for `aller`.

## New this course, by deck

- **Verbs** (folded into existing decks):
  - «ER»: `humer`, `acheter` (spelling shift, see above), `écouter`, `étudier`,
    `arriver`, `quitter`, `demander`, `chercher`. (`travailler` already existed
    from N°2 — not repeated.)
  - «IR»: `guérir`, `fournir`, `accomplir`, `surgir`, `unir`, `rétrécir`.
    (`saisir` already existed from N°4 — not repeated.)
  - 3rd group: `apprendre`, `venir` (see above).
  - Imperfect: `venir`, `tourner`, `marcher` (join the existing 11 from N°6).
- **La famille** — 22 cards: la famille, les parents, le père/la mère, les
  enfants, le fils/la fille, le frère/la sœur, les grands-parents, l'oncle/la
  tante, le cousin/la cousine, le mari/la femme, les époux, un bébé, le chien/le
  chat. Article-first, like `classroom` / `nature`.
- **Présenter : « c'est » vs « il/elle est »** — a new grammar deck, same
  transform pattern as negation/interrogatives. `c'est` / `ce sont` + a
  determiner (name, possessive, indefinite article) identifies *who* someone is;
  `il/elle est` / `ils/elles sont` + no determiner describes *what* they're like
  (an unmodified profession, or an adjective). 6 hand-authored sentence pairs,
  distractors are the exact swaps the rule forbids (wrong pronoun form, a missing
  or spurious article).
- **Le pluriel des noms** — 12 cards covering the plural-formation rules: the
  general **+s** (silent); **-s/-x/-z stay unchanged** (bus, prix, nez);
  **-eau/-au/-eu → -x** (bateau → bateaux) except **pneu → pneus**;
  **-al → -aux** (animal → animaux) except **bal/festival → bals/festivals**;
  **-ail → +s** (détail → détails) except **travail/vitrail → travaux/vitraux**.
  Distractors are the specific wrong-rule swaps (applying +s where -aux is needed,
  applying -aux where the noun is actually regular, forgetting to change the noun).
- **Simon de Châlons (peinture)** — 12 cards of vocabulary from the Renaissance
  Nativity-scene painting: un perroquet, un ange, la Vierge Marie, l'Enfant Jésus,
  les bergers, une colonne, un bâtiment, humble, un mouton, un âne (corrected, see
  above), un drap, une cornemuse. `montagne` already existed from `nature`, so
  it's not repeated.

## What I skipped from Cours N°7 (and why)

| Content | Why |
|---|---|
| **The France Quiz** (President/Government/Parliament, Macron nicknames, D-Day code name, Napoléon's lycée reform, the Rafale, French bands, Jean-Pierre Jeunet films) | Trivia, not language — same call as N°6. |
| **Le vin au Moyen-Âge** (medieval winemaking, Hypocras, religious/medical/culinary uses of wine) | Class-break history, no French to drill. |
| **Wine-related slang** (un sac à vin, un poivrot, un pilier de bar, picoler, être bourré, avoir la gueule de bois) | Tied directly to the skipped wine-history section; unlike `grosmots` (which was your own idea from a class tangent), this vocabulary comes straight off a trivia slide, so it's skipped along with it. |
| **The recorded interview** (présenter, un ami, venir, tout le monde, espérer, métier, la chasse/le chasseur, la proie, actuellement, ancien, un mont, bonne chance) | A specific person's biography/listening exercise, same category as the painter bios — anecdotal, not generalizable vocabulary. |
| **"Present your boyfriend/girlfriend" photo exercise** (beau, belle, moche, très vilain, les dents, les cheveux, les yeux, un sourire, élégant, sentir, puer…) | The same role-play already skipped in N°6 (same photos, same instructions) — repetitive, and a speaking exercise rather than a multiple-choice fact. |
| Review of months/days/colors/être-avoir/seasons/aplatir/réunir/possessives | Already in the app since N°2–N°6. |

# Cours N°8

Extracted from `course-slides/Cours collectif Jeudi N°8.pdf` (about 30 slides).
On top of a lot of pure review (family, plurals, the ER-verb list, être/avoir,
colors, seasons — all already in the app from N°2–N°7), this course adds **12
new verbs, a body-parts deck, a personality/appearance-adjective deck, and a
new grammar topic in two parts: adjective gender agreement and adjective
position (the BAGS rule)**. Added 4 decks (57 cards) + 12 verbs folded into
existing decks. Total ≈ 992 cards across 36 decks in eight lessons.

## ⚠️ Where I corrected or departed from the slides

- **Two typos in the "le corps" adjective table.** The slide prints
  *"Jolie / jolie"* for both the masculine and feminine of "pretty" — the
  masculine should be **joli**. It also prints *"Méchante / méchante"* for
  "mean" — the masculine should be **méchant**. Both corrected in `traits`
  (vocab.js), flagged in the cheat sheet.
- **The masculine→feminine adjective exercise never showed an answer key** in
  the extracted slide text (`actif`, `heureux`, `créatif`, `paresseux`,
  `nouveau`, `jumeau` → blank). I filled these in from the fully-worked rule
  slide right next to it (`sportif→sportive`, `sérieux→sérieuse`,
  `beau→belle`) — the same three patterns apply directly, and all six are
  extremely common, unambiguous words, not a guess. See `adjectives.js`.
- **The adjective-*position* fill-in exercise ("des arbres + grands…") was
  skipped outright**, not just left unanswered like the gender one above — it
  also hides a rule this course never taught (**des → de** before a plural
  adjective that precedes its noun, e.g. *de grands arbres*), so encoding an
  answer would risk teaching an ungrammatical form. The `adjective-position`
  deck only uses the rule slide's own fully-written examples instead.
- **No grammar errors** in the imperfect additions, the obéir/désobéir table,
  or the BAGS rule statement itself.

## Two verbs worth a note

- **`vivre`** (3rd group, "to live") — only *nous vivons* is directly on the
  slide (the translation exercise); the rest of the table is the standard,
  extremely common conjugation (je vis, tu vis, il vit, vous vivez, ils
  vivent), not a guess.
- **`sentir`** and **`tenir`** join the imperfect deck as two more "irregular
  present, regular imperfect" verbs — same story the deck already tells for
  `aller` and `venir`. `tenir` is explicitly the same "boot verb" family as
  `venir` (je tiens / ils tiennent), noted in N°7's VERIFY entry.

## New this course, by deck

- **Verbs** (folded into existing decks):
  - «ER»: `éviter`, `étaler`.
  - «IR»: `désobéir`, `rétablir`, `divertir`, `démolir`. (`avertir`,
    `accomplir`, `approfondir`, `nourrir` already existed — not repeated.)
  - Reflexive: `se cogner`.
  - 3rd group: `vivre`.
  - Imperfect: `sembler`, `viser`, `divertir`, `sentir`, `tenir`.
- **Le corps** — 18 cards: le corps, la main, le pied, les yeux, le nez, les
  oreilles, les dents, les cheveux, l'épaule, le coude, le poignet, les doigts,
  les genoux, la cheville, les orteils, le cou, le ventre, le dos. (`la tête`,
  `le bras`, `la jambe` already existed from N°5's `seaside` — not repeated.)
- **Qualités, défauts et apparence** — 22 cards merging the personality-traits
  list (adorable, sympathique, gentil, drôle, sérieux, triste, timide, calme,
  égoïste, avare, méchant, paresseux) with the appearance-adjective column
  (beau, joli, élégant, mignon, grand/petit, mince, gros, fort, jeune, vieux).
  `sympathique` appeared on both slides; kept once.
- **Les adjectifs : accord (masculin/féminin)** — 10 cards drilling the
  gender-agreement rule: regular **+e** (grand→grande), with three overrides
  — **-if→-ve**, **-eux→-euse**, **-eau→-elle** (see the note above about the
  exercise's missing answer key).
- **Les adjectifs : la place (règle BAGS)** — 7 cards on adjective position:
  most adjectives follow the noun (une voiture rapide), but **B**eauty,
  **A**ge, **G**oodness, **S**ize adjectives go before it (une belle ville, un
  vieux château, un bon restaurant, une grande maison).

## What I skipped from Cours N°8 (and why)

| Content | Why |
|---|---|
| **"Present your boyfriend/girlfriend" photo exercise** (séduisant, beau, moche, très moche, les dents, les cheveux, les yeux, un sourire, élégant, sentir, puer…) | The same role-play already skipped in N°6 and N°7 (same categories, same instructions) — repetitive, and a speaking exercise rather than a multiple-choice fact. `séduisant/séduisante` is the one new word in it, not enough to revive the exercise. |
| **"Car le français est élégant"** (the crude fill-in-the-blank joke about introducing yourself) | A class-break joke skit, not vocabulary — same category as N°6's "synonymes pour pieds" pun slide. |
| **"Strange and funny medieval French words"** (morbac, vilain, paillard, ribaud, goujat, fieffé-coquin, boustifaille, vesse, se conchier) | Explicitly framed as a class-break curiosity about archaic/obsolete slang, not modern vocabulary — same call as N°7's skipped wine-slang list. |
| **Hyacinthe Rigaud** biography, his pricing records, and the Louis XIV portrait vocabulary (le rideau, la couronne, le sceptre, l'épée, les collants, la fleur de lys, l'hermine, la perruque, le Roi soleil…) | Art-history class break. Unlike Monet/Châlons, this vocabulary is costume/regalia specific to one 1701 royal portrait, not general-purpose — skipped along with the bio rather than kept as its own deck. |
| Review of family / plurals / the ER-verb list / être-avoir / colors / seasons | Already in the app since N°2–N°7. |
