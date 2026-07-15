import { speak } from './speech.js'

/**
 * A speaker icon that reads a French phrase aloud. Renders nothing when there's
 * no voice installed or no text to speak, so callers can drop it in freely.
 */
export default function Speaker({ text, voice, label }) {
  if (!voice || !text) return null
  return (
    <button className="speaker" onClick={() => speak(text, voice)} aria-label={label} title={label}>
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path
          d="M4 9.5h3.5L12 5.5v13L7.5 14.5H4z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path d="M15.5 9a4 4 0 0 1 0 6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M18 6.5a7.5 7.5 0 0 1 0 11" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </button>
  )
}
