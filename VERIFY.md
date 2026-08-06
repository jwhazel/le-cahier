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
