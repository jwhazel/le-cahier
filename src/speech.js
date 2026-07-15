// Pronunciation via the Web Speech API — built into the browser, no network,
// no dependency, no key. It reads the voices macOS already has installed.
//
// Check your voices in System Settings → Accessibility → Spoken Content →
// System Voice → Manage Voices. "Thomas (Enhanced)" is worth the download.

import { useEffect, useState } from 'react'

const supported = typeof window !== 'undefined' && 'speechSynthesis' in window

// Metropolitan French, best first. Your course is Paris-oriented, so fr-CA
// voices (Amélie, Rocko…) are deliberately ranked last — Québécois vowels are
// lovely but they aren't the target you're being graded against.
const PREFERRED = ['Thomas', 'Jacques', 'Flo', 'Eddy']

function rank(voice) {
  const named = PREFERRED.indexOf(voice.name.split(' (')[0])
  return [
    voice.lang.startsWith('fr-FR') || voice.lang.startsWith('fr_FR') ? 0 : 1,
    named === -1 ? PREFERRED.length : named,
    voice.localService ? 0 : 1, // offline voices don't stall on a bad connection
  ]
}

function bestFrenchVoice() {
  const french = window.speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith('fr'))
  if (french.length === 0) return null

  return french.sort((a, b) => {
    const [x, y] = [rank(a), rank(b)]
    return x[0] - y[0] || x[1] - y[1] || x[2] - y[2]
  })[0]
}

/**
 * The voice list is populated asynchronously — Chrome returns an empty array on
 * first call and fires `voiceschanged` once it's ready. Safari usually has it
 * synchronously. Handle both.
 */
export function useFrenchVoice() {
  const [voice, setVoice] = useState(() => (supported ? bestFrenchVoice() : null))

  useEffect(() => {
    if (!supported || voice) return
    const onChange = () => setVoice(bestFrenchVoice())
    window.speechSynthesis.addEventListener('voiceschanged', onChange)
    return () => window.speechSynthesis.removeEventListener('voiceschanged', onChange)
  }, [voice])

  return { voice, supported }
}

/**
 * Speak a French phrase.
 *
 * Always pass the whole phrase ("tu parles"), never the bare verb form
 * ("parles"). Four of the six present-tense forms of an -ER verb are
 * homophones — je parle / tu parles / il parle / ils parlent all end in the
 * same [paʁl] — so the pronoun is the only audible difference. Speaking the
 * form alone would be actively misleading.
 */
export function speak(text, voice, { rate = 0.85 } = {}) {
  if (!supported || !voice) return

  // Cancel anything still queued, or rapid clicking backs up a long stream.
  window.speechSynthesis.cancel()

  const utterance = new SpeechSynthesisUtterance(text)
  utterance.voice = voice
  utterance.lang = voice.lang
  utterance.rate = rate // native speed is too fast to imitate at week one
  window.speechSynthesis.speak(utterance)
}
