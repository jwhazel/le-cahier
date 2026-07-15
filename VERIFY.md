# Verify: Cours collectif N°1

Extracted from `course-slides/Cours collectif Jeudi N°1.pdf` (29 slides).

**Read this against the PDF before you drill the decks.** An error here becomes
something you memorise. Check the two ⚠️ items first — they're the ones where I
departed from what the slides say.

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
