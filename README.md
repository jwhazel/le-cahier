# Le cahier

Flashcards for a ten-course French series. Courses 1–2 of 10 (~237 cards).

```bash
npm install
npm run dev
```

Answer with <kbd>A</kbd>–<kbd>D</kbd>, continue with <kbd>↵</kbd>, hear it with <kbd>P</kbd>.

**Read [VERIFY.md](./VERIFY.md) before trusting the cards.** It lists each course's
cards against its source slides, and flags every place the slides state a rule that
produces incorrect French (or, in N°2, capitalise words that French writes
lowercase).

## How it's put together

```
src/
  content/          the facts — no questions, no wrong answers
    pronouns.js
    vocab.js        nouns, colors, salutations           (N°1)
    verbs.js        conjugation tables + elision helper   (ER / IR / être·avoir)
    calendar.js     days + months                         (N°2)
    numbers.js      0–1000                                (N°2)
  quiz/
    engine.js       facts -> questions; decks; lessons. Plain functions, no React.
  speech.js         pronunciation via the browser's built-in synthesizer
  Speaker.jsx       the shared 🔊 button
  App.jsx           deck picker (grouped by lesson) / quiz / results
  Quiz.jsx          one card at a time
  Reference.jsx     the "Antisèche" cheat sheet (a <dialog>)
```

**Lessons.** Each deck carries a `lesson` number; `engine.js` exports a `lessons`
list that drives the grouping in both the deck picker and the cheat sheet. You can
drill one deck, one course (`Tout mélangé — Cours N°2`), or everything. Adding
course N°3 is: new content file(s) + new deck entries tagged `lesson: 3` + a row in
`lessons`. Nothing else changes.

**Verbs are one model, three groups.** `verbs.js` holds every verb with a `group`
tag (`1` = «ER», `2` = «IR», `'aux'` = être/avoir); the engine filters it into
three decks. Because forms are written out, not generated from a rule, irregular
groups cost nothing — `j'ai` and `nous mangeons` are just data. Distractors are
always drawn from the *same verb*, so groups never cross-contaminate.

**The cheat sheet** (Antisèche button, top-right of every screen) is a native
`<dialog>` that reads the same content modules the quiz does — so it can never
drift from what you're being tested on. It's one `showModal()`/`close()` bridge
effect plus a jump-nav that scrolls within the dialog. Escape, the backdrop, and
focus trapping come free with the platform element.

The central decision: **content files store facts, not questions.** A card is
`{ fr: 'je', en: 'I' }`, and `engine.js` invents three plausible wrong answers at
runtime by pulling from the other facts in the same deck.

This costs a little machinery and buys four things:

1. Writing a card means writing one fact, not a fact plus three lies.
2. Wrong answers are re-dealt every run, so you can't memorise card *shapes*.
3. Reversing the question (English → French) needs no new data.
4. A typing mode later reads the same facts.

Two rules the engine enforces, both found by testing rather than by thinking:

- **No two options may mean the same thing.** `on` and `nous` both mean "we". If
  a question offered both, you could eliminate both without knowing French —
  a well-formed question has exactly one answer, so synonyms cancel out.
- **The correct answer's position is re-dealt each run.** Seeding the shuffle on
  the card's id alone is stable *forever*, and you'd learn that "JE" is always
  option A. Seeding on `id + runSeed` keeps options still during a run and
  moves them between runs.

A third rule lives in `speech.js`: **speak the phrase, not the word.** `parle`,
`parles` and `parlent` are homophones — the endings are silent. Reading the bare
form aloud teaches nothing, so verb cards speak `tu parles`, where the pronoun
carries the difference. See VERIFY.md.

### One CSS gotcha worth remembering (from the dialog)

A `<dialog>` hides itself when closed via the UA rule `dialog:not([open]) {
display: none }`. Author CSS beats the browser's stylesheet *regardless of
specificity*, so styling `.reference { display: flex }` unconditionally silently
overrode that rule — the closed dialog stayed rendered and invisibly swallowed
every click over its box. The fix is to gate layout on the open state:
`.reference[open] { display: flex }`. If you ever style a `<dialog>`, `<details>`,
or anything with UA show/hide behaviour, don't set `display` unconditionally.

## Next

- English → French direction (the data already supports it)
- Listening mode: hear `un cahier`, pick the spelling
- Typing mode — on macOS, hold `e` for `é`, or `Option+e` then `e`
- Gender drill: `un` or `une`?
- Leitner boxes: miss a card, see it sooner. Fixes the 25% guess floor.
- The translation exercise on slide 194 wants a text input
- The cheat sheet grows with each new lesson's content automatically
