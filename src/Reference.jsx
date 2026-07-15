import { useEffect, useRef } from 'react'
import { pronouns } from './content/pronouns.js'
import { classroom, colors, salutations } from './content/vocab.js'
import { verbs, slotLabels, conjugated } from './content/verbs.js'
import { useFrenchVoice } from './speech.js'
import Speaker from './Speaker.jsx'

// The order of jump-links, and the sections they point at.
const SECTIONS = [
  { id: 'ref-pronouns', label: 'Pronoms' },
  { id: 'ref-verbs', label: 'Verbes «ER»' },
  { id: 'ref-classroom', label: 'La classe' },
  { id: 'ref-colors', label: 'Couleurs' },
  { id: 'ref-salutations', label: 'Saluer' },
]

const SLOTS = ['je', 'tu', 'il', 'nous', 'vous', 'ils']

/**
 * The cheat sheet, in a native <dialog>. Using the platform element rather than
 * a hand-rolled overlay buys the backdrop, Escape-to-close, focus trapping, and
 * `inert` background for free — all things that are easy to get subtly wrong by
 * hand.
 */
export default function Reference({ open, onClose }) {
  const dialogRef = useRef(null)
  const bodyRef = useRef(null)
  const { voice } = useFrenchVoice()

  // `open` is React state; a <dialog> is opened imperatively. This effect is the
  // bridge: it drives the DOM element to match the prop. showModal() is what
  // gives the modal backdrop and focus trap — the `open` attribute alone does
  // not.
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    else if (!open && dialog.open) dialog.close()
  }, [open])

  // Escape and backdrop clicks fire the dialog's own 'close' event, bypassing
  // React. Listen for it so parent state stays in sync however it was dismissed.
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    dialog.addEventListener('close', onClose)
    return () => dialog.removeEventListener('close', onClose)
  }, [onClose])

  // A native dialog treats a click anywhere in its box — including the backdrop
  // — as a click on the element. Compare against the content rect to tell a
  // real backdrop click from a click on the sheet inside it.
  function onBackdropClick(event) {
    if (event.target !== dialogRef.current) return
    const r = dialogRef.current.getBoundingClientRect()
    const inside =
      event.clientX >= r.left && event.clientX <= r.right && event.clientY >= r.top && event.clientY <= r.bottom
    if (!inside) onClose()
  }

  function jumpTo(id) {
    bodyRef.current?.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <dialog ref={dialogRef} className="reference" onClick={onBackdropClick} aria-label="Antisèche">
      <div className="ref-head">
        <h2>Antisèche</h2>
        <nav className="ref-nav">
          {SECTIONS.map((s) => (
            <button key={s.id} onClick={() => jumpTo(s.id)}>
              {s.label}
            </button>
          ))}
        </nav>
        <button className="ref-close" onClick={onClose} aria-label="Fermer">
          ✕
        </button>
      </div>

      <div className="ref-body" ref={bodyRef}>
        <Section id="ref-pronouns" title="Les pronoms sujets">
          <table className="ref-table">
            <tbody>
              {pronouns.map((p) => (
                <tr key={p.id}>
                  <th scope="row">
                    {p.fr} <Speaker text={p.fr} voice={voice} label={`Prononcer « ${p.fr} »`} />
                  </th>
                  <td>{p.en}</td>
                  <td className="muted">{p.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        <Section id="ref-verbs" title="Les verbes du 1er groupe «ER»">
          <div className="ref-scroll">
            <table className="ref-table conj">
              <thead>
                <tr>
                  <th></th>
                  {SLOTS.map((slot) => (
                    <th key={slot}>{slotLabels[slot]}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {verbs.map((v) => (
                  <tr key={v.id}>
                    <th scope="row" className="inf">
                      <span>
                        {v.fr} <span className="muted">{v.en}</span>
                      </span>
                      <Speaker text={v.fr} voice={voice} label={`Prononcer « ${v.fr} »`} />
                    </th>
                    {SLOTS.map((slot) => (
                      <td key={slot} className={v.spellingChange && irregularCell(v, slot) ? 'flag' : ''}>
                        {conjugated(slot, v.forms[slot]).replace(`${slotLabels[slot]} `, '')}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="ref-foot">
            <span className="flag-key" /> = spelling shift that breaks the plain root+ending rule
            (manger → nous mange<em>ons</em>, peser → je p<em>è</em>se). See VERIFY.md.
          </p>
        </Section>

        <Section id="ref-classroom" title="Les objets de la classe">
          <table className="ref-table">
            <tbody>
              {classroom.map((o) => (
                <tr key={o.id}>
                  <th scope="row">
                    <span className={`gender ${o.gender}`}>{o.article}</span> {o.fr}{' '}
                    <Speaker text={`${o.article} ${o.fr}`} voice={voice} label={`Prononcer « ${o.article} ${o.fr} »`} />
                  </th>
                  <td>{o.en}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        <Section id="ref-colors" title="Les couleurs">
          <table className="ref-table">
            <tbody>
              {colors.map((c) => (
                <tr key={c.id}>
                  <th scope="row">
                    <span className="swatch" style={{ background: c.hex }} aria-hidden="true" /> {c.fr}{' '}
                    <Speaker text={c.fr} voice={voice} label={`Prononcer « ${c.fr} »`} />
                  </th>
                  <td>{c.en}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        <Section id="ref-salutations" title="Saluer">
          <table className="ref-table">
            <tbody>
              {salutations.map((s) => (
                <tr key={s.id}>
                  <th scope="row">
                    {s.fr}{' '}
                    <Speaker text={s.speech ?? s.fr} voice={voice} label={`Prononcer « ${s.fr} »`} />
                  </th>
                  <td>
                    {s.en}
                    {s.note && <span className="muted"> — {s.note}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>
      </div>
    </dialog>
  )
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="ref-section">
      <h3>{title}</h3>
      {children}
    </section>
  )
}

// A verb's spelling shift only affects certain slots. Flag the exact cells that
// depart from the plain rule so the cheat sheet points at the right form.
function irregularCell(verb, slot) {
  if (verb.id === 'manger') return slot === 'nous' // mangeons keeps the e
  if (verb.id === 'peser') return slot !== 'nous' && slot !== 'vous' // è where the ending is silent
  return false
}
