// Integrity checks over every deck. Run with `npm test`.
//
// These don't check that the French is RIGHT — VERIFY.md and a human do that.
// They check that every card is a well-formed question, because a malformed
// card fails silently: a card dropped for lack of distractors just vanishes,
// and a card with two identical options quietly becomes a 1-in-3 guess.
//
// Uses Node's built-in test runner (node:test), so there's nothing to install.

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decks, buildQuiz } from './engine.js'
import { joinArticle, nounLabel } from '../content/articles.js'

// Several run seeds, because distractors are re-dealt per run: a deck can be
// fine on one shuffle and short of fair options on another.
const SEEDS = [1, 2, 3, 42, 1234, 99999]

test('no deck drops a card for lack of distractors', (t) => {
  const warnings = []
  t.mock.method(console, 'warn', (msg) => warnings.push(msg))
  for (const deck of decks) for (const seed of SEEDS) deck.build(seed)
  assert.deepEqual(warnings, [])
})

test('every deck has the same number of cards on every run', () => {
  for (const deck of decks) {
    const sizes = SEEDS.map((seed) => deck.build(seed).length)
    assert.ok(sizes[0] > 0, `${deck.id} is empty`)
    assert.ok(
      sizes.every((n) => n === sizes[0]),
      `${deck.id} changes size between runs: ${sizes.join(', ')}`,
    )
  }
})

test('every card has four distinct options and exactly one right answer', () => {
  for (const seed of SEEDS) {
    for (const q of buildQuiz('all', seed)) {
      assert.equal(q.choices.length, 4, `${q.id}: ${q.choices.length} options`)

      const texts = q.choices.map((c) => c.text)
      assert.equal(new Set(texts).size, 4, `${q.id}: repeated option in ${JSON.stringify(texts)}`)

      const ids = q.choices.map((c) => c.id)
      assert.equal(new Set(ids).size, 4, `${q.id}: repeated option id`)
      assert.equal(ids.filter((id) => id === q.answerId).length, 1, `${q.id}: answer not among options`)
    }
  }
})

test('question ids are unique across every deck', () => {
  // Ids seed each card's shuffle; two cards sharing one would also share
  // their option order, and React would confuse them as list keys.
  const ids = buildQuiz('all', 1).map((q) => q.id)
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i)
  assert.deepEqual(dupes, [])
})

test('deck ids are unique', () => {
  const ids = decks.map((d) => d.id)
  assert.equal(new Set(ids).size, ids.length)
})

test("an elided article takes no space: l'arbre, not l' arbre", () => {
  assert.equal(joinArticle("l'", 'arbre'), "l'arbre")
  assert.equal(joinArticle('le', 'livre'), 'le livre')
  assert.equal(nounLabel({ article: "l'", fr: 'arrière-plan' }), "l'arrière-plan")
  assert.equal(nounLabel({ fr: 'être nu(e)' }), 'être nu(e)')
})
