import { useEffect, useRef } from 'react'
import { pronouns } from './content/pronouns.js'
import { classroom, colors, salutations } from './content/vocab.js'
import { days, months } from './content/calendar.js'
import { numbers } from './content/numbers.js'
import { verbs, slotLabels, conjugated } from './content/verbs.js'
import { lessons } from './quiz/engine.js'
import { useFrenchVoice } from './speech.js'
import Speaker from './Speaker.jsx'

const SLOTS = ['je', 'tu', 'il', 'nous', 'vous', 'ils']

const erVerbs = verbs.filter((v) => v.group === 1)
const irVerbs = verbs.filter((v) => v.group === 2)
const auxVerbs = verbs.filter((v) => v.group === 'aux')

// Jump-nav targets, tagged by lesson so the nav mirrors the deck picker.
const SECTIONS = [
  { id: 'ref-pronouns', label: 'Pronoms', lesson: 1 },
  { id: 'ref-verbs', label: 'Verbes «ER»', lesson: 1 },
  { id: 'ref-classroom', label: 'La classe', lesson: 1 },
  { id: 'ref-colors', label: 'Couleurs', lesson: 1 },
  { id: 'ref-salutations', label: 'Saluer', lesson: 1 },
  { id: 'ref-days', label: 'Jours', lesson: 2 },
  { id: 'ref-months', label: 'Mois', lesson: 2 },
  { id: 'ref-numbers', label: 'Nombres', lesson: 2 },
  { id: 'ref-verbs-ir', label: 'Verbes «IR»', lesson: 2 },
  { id: 'ref-aux', label: 'Être & avoir', lesson: 2 },
]

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
          {lessons.map((lesson) => (
            <span key={lesson.id} className="ref-nav-group">
              <span className="ref-nav-tag">N°{lesson.id}</span>
              {SECTIONS.filter((s) => s.lesson === lesson.id).map((s) => (
                <button key={s.id} onClick={() => jumpTo(s.id)}>
                  {s.label}
                </button>
              ))}
            </span>
          ))}
        </nav>
        <button className="ref-close" onClick={onClose} aria-label="Fermer">
          ✕
        </button>
      </div>

      <div className="ref-body" ref={bodyRef}>
        {/* ------------------------------------------------ Cours N°1 --- */}
        <LessonDivider lesson={lessons[0]} />

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
          <VerbGrid verbs={erVerbs} voice={voice} flagFn={erIrregularCell} />
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
                    {s.fr} <Speaker text={s.speech ?? s.fr} voice={voice} label={`Prononcer « ${s.fr} »`} />
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

        {/* ------------------------------------------------ Cours N°2 --- */}
        <LessonDivider lesson={lessons[1]} />

        <Section id="ref-days" title="Les jours de la semaine">
          <VocabTable items={days} voice={voice} />
          <p className="ref-foot">Lowercase in French — <em>lundi</em>, not <em>Lundi</em>. See VERIFY.md.</p>
        </Section>

        <Section id="ref-months" title="Les mois">
          <VocabTable items={months} voice={voice} />
        </Section>

        <Section id="ref-numbers" title="Les nombres">
          <div className="num-grid">
            {numbers.map((n) => (
              <div className="num-cell" key={n.id}>
                <span className="num-digit">{n.digit}</span>
                <span className="num-word">{n.fr}</span>
                <Speaker text={n.fr} voice={voice} label={`Prononcer « ${n.fr} »`} />
              </div>
            ))}
          </div>
          <p className="ref-foot">
            <em>quatre-vingts</em> keeps its s at 80, but drops it before another number
            (<em>quatre-vingt-un</em>). See VERIFY.md.
          </p>
        </Section>

        <Section id="ref-verbs-ir" title="Les verbes du 2ème groupe «IR»">
          <VerbGrid verbs={irVerbs} voice={voice} />
          <p className="ref-foot">
            Regular: root + <em>is · is · it · issons · issez · issent</em>. Note <em>je</em> and{' '}
            <em>tu</em> are identical.
          </p>
        </Section>

        <Section id="ref-aux" title="Les auxiliaires : être & avoir">
          <VerbGrid verbs={auxVerbs} voice={voice} />
          <p className="ref-foot">Irregular — no rule. Memorise them; every compound tense is built on these.</p>
        </Section>
      </div>
    </dialog>
  )
}

function LessonDivider({ lesson }) {
  return (
    <div className="ref-lesson">
      {lesson.label}
      <span className="ref-lesson-date">{lesson.date}</span>
    </div>
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

// A simple French -> English table with a speaker per row. Shared by days/months.
function VocabTable({ items, voice }) {
  return (
    <table className="ref-table">
      <tbody>
        {items.map((it) => (
          <tr key={it.id}>
            <th scope="row">
              {it.fr} <Speaker text={it.fr} voice={voice} label={`Prononcer « ${it.fr} »`} />
            </th>
            <td>{it.en}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

// A conjugation grid: verbs down, pronouns across. Shared by «ER», «IR» and the
// auxiliaries. `flagFn(verb, slot)` optionally marks a cell as an irregular
// spelling — only the «ER» group uses it.
function VerbGrid({ verbs: verbList, voice, flagFn }) {
  return (
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
          {verbList.map((v) => (
            <tr key={v.id}>
              <th scope="row" className="inf">
                <span>
                  {v.fr} <span className="muted">{v.en}</span>
                </span>
                <Speaker text={v.fr} voice={voice} label={`Prononcer « ${v.fr} »`} />
              </th>
              {SLOTS.map((slot) => (
                <td key={slot} className={flagFn?.(v, slot) ? 'flag' : ''}>
                  {conjugated(slot, v.forms[slot]).replace(`${slotLabels[slot]} `, '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// A «ER» verb's spelling shift only affects certain slots. Flag the exact cells
// that depart from the plain rule so the cheat sheet points at the right form.
function erIrregularCell(verb, slot) {
  if (verb.id === 'manger') return slot === 'nous' // mangeons keeps the e
  if (verb.id === 'peser') return slot !== 'nous' && slot !== 'vous' // è where the ending is silent
  return false
}
