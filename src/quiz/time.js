// Telling time in French — Cours collectif N°3, slides 391-413.
//
// A generator, not a lookup: `timePhrase(h, m)` computes the spoken form for any
// 24-hour time, and `timeDistractors` produces the wrong phrasings a learner is
// most likely to confuse it with. The quiz deck instantiates a fixed spread of
// times (TIME_CARDS) so each card is stable, but the engine works for any time.
//
// The rules (24-hour / "military" time, as the course teaches):
//   :00        → "{hour} heures"        (midi at 12, minuit at 0)
//   :15        → "… et quart"
//   :30        → "… et demie"           (but "midi/minuit et demi" — masculine)
//   :01–:29    → "{hour} heures {min}"
//   :31–:59    → "{next hour} heures moins {60−min}"  (count backward)
//   :45        → "… moins le quart"
//
// Agreement traps handled: "une heure" and "vingt et une heures" (feminine,
// because heure is feminine), and the masculine "midi et demi".

const UNITS = [
  'zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf',
  'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize',
  'dix-sept', 'dix-huit', 'dix-neuf',
]
const TENS = { 20: 'vingt', 30: 'trente', 40: 'quarante', 50: 'cinquante' }

/** Spell an integer 0–59 in French (masculine). */
export function spellNumber(n) {
  if (n < 20) return UNITS[n]
  const tens = Math.floor(n / 10) * 10
  const unit = n % 10
  if (unit === 0) return TENS[tens]
  if (unit === 1) return `${TENS[tens]} et un` // vingt et un, trente et un…
  return `${TENS[tens]}-${UNITS[unit]}` // vingt-deux, quarante-cinq…
}

/** The "{n} heures" phrase, with feminine agreement and midi/minuit. */
function hourWord(h) {
  h = ((h % 24) + 24) % 24
  if (h === 0) return 'minuit'
  if (h === 12) return 'midi'
  if (h === 1) return 'une heure' // singular
  // heure is feminine, so a trailing "un" becomes "une": vingt et une heures.
  const word = spellNumber(h).replace(/un$/, 'une')
  return `${word} heures`
}

/** The full spoken time for h:m (24-hour). No "il est" prefix — the card's
 *  prompt already shows the clock. */
export function timePhrase(h, m) {
  h = ((h % 24) + 24) % 24
  if (m === 0) return hourWord(h)
  if (m === 15) return `${hourWord(h)} et quart`
  if (m === 30) {
    // demi agrees with the hour word: masculine after midi/minuit, else feminine.
    const demi = h === 0 || h === 12 ? 'demi' : 'demie'
    return `${hourWord(h)} et ${demi}`
  }
  if (m < 30) return `${hourWord(h)} ${spellNumber(m)}`

  // Past the half hour, count backward from the next hour.
  const next = (h + 1) % 24
  if (m === 45) return `${hourWord(next)} moins le quart`
  return `${hourWord(next)} moins ${spellNumber(60 - m)}`
}

/** Digital label for the prompt, e.g. 15h45, 8h05, 0h00. */
export function digital(h, m) {
  return `${h}h${String(m).padStart(2, '0')}`
}

/**
 * Plausible wrong phrasings for h:m. Returns several candidates (the quiz picks
 * three distinct ones); each targets a specific, common mistake.
 */
export function timeDistractors(h, m) {
  const correct = timePhrase(h, m)
  const out = []
  const push = (s) => {
    if (s && s !== correct && !out.includes(s)) out.push(s)
  }

  // Off-by-one hour, same minute structure — the most common slip.
  push(timePhrase((h + 1) % 24, m))
  push(timePhrase((h + 23) % 24, m))

  if (m > 30) {
    // Naive forward count instead of "moins" (10h50 → "dix heures cinquante").
    push(`${hourWord(h)} ${spellNumber(m)}`)
    // Backward count off the wrong (current) hour.
    push(`${hourWord(h)} moins ${spellNumber(60 - m)}`)
  }
  if (m === 0) {
    // On the hour: the wrong phrasings are spurious quarters/halves.
    push(`${hourWord(h)} et quart`)
    push(`${hourWord(h)} et demie`)
  }
  if (m === 15) push(`${hourWord(h)} et demie`) // swapped quarter/half
  if (m === 30) push(`${hourWord(h)} et quart`)
  if (m === 45) {
    push(`${hourWord(h)} quarante-cinq`) // naive forward
    push(`${hourWord((h + 1) % 24)} et quart`) // right hour, wrong expression
  }
  if (m !== 0 && m !== 15 && m !== 30 && m !== 45 && m < 30) {
    // Off-by-five minutes.
    if (m + 5 < 30) push(`${hourWord(h)} ${spellNumber(m + 5)}`)
    if (m - 5 > 0) push(`${hourWord(h)} ${spellNumber(m - 5)}`)
  }

  // Guarantee at least three distinct distractors for any time.
  for (let d = 2; out.length < 3 && d <= 6; d++) {
    push(timePhrase((h + d) % 24, m))
    push(timePhrase((h + 24 - d) % 24, m))
  }

  return out
}

// A fixed spread of times that exercises every rule (whole hours incl.
// midi/minuit/1h/21h, quarters, halves, forward and backward minutes).
const TIMES = [
  [0, 0], [12, 0], [1, 0], [21, 0], [15, 0],
  [3, 15], [8, 15], [12, 15],
  [6, 30], [0, 30], [1, 30],
  [15, 45], [11, 45], [23, 45],
  [3, 10], [17, 20], [10, 50], [22, 40], [9, 55], [14, 25],
]

export const TIME_CARDS = TIMES.map(([h, m]) => ({
  id: `t${digital(h, m)}`,
  h,
  m,
  digital: digital(h, m),
  phrase: timePhrase(h, m),
  distractors: timeDistractors(h, m),
}))
