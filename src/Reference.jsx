import { useEffect, useRef } from 'react'
import { pronouns } from './content/pronouns.js'
import {
  classroom,
  colors,
  salutations,
  nature,
  weather,
  seaside,
  paysage,
  chalons,
  cousin,
  body,
  traits,
} from './content/vocab.js'
import { days, months, seasons } from './content/calendar.js'
import { numbers } from './content/numbers.js'
import { nationalities } from './content/nationalities.js'
import { reflexivePronouns } from './content/reflexives.js'
import { accents } from './content/accents.js'
import { articleNouns, withArticle, articleChoices, nounLabel, isElided } from './content/articles.js'
import { negations } from './content/negation.js'
import { inversions, questionWords } from './content/interrogatives.js'
import { grosMots } from './content/grosmots.js'
import { imperfectVerbs } from './content/imperfect.js'
import {
  slotLabels,
  conjugated,
  erVerbs,
  irVerbs,
  thirdVerbs,
  auxVerbs,
  reflexiveVerbs,
  commonVerbs,
} from './content/verbs.js'
import { futureVerbs, futureStems } from './content/future.js'
import { family } from './content/family.js'
import { plurals } from './content/plurals.js'
import { introductions } from './content/introducing.js'
import { genderPairs, positions } from './content/adjectives.js'
import { interests, preferences } from './content/interests.js'
import { TIME_CARDS } from './quiz/time.js'
import { lessons } from './quiz/engine.js'
import Speaker from './Speaker.jsx'

const SLOTS = ['je', 'tu', 'il', 'nous', 'vous', 'ils']


// A few worked time examples for the cheat sheet — one per rule. Guard the
// lookup so a mistyped id degrades gracefully instead of crashing the dialog.
const TIME_EXAMPLES = ['t15h00', 't3h15', 't6h30', 't10h50', 't15h45', 't12h00', 't0h00']
  .map((id) => TIME_CARDS.find((c) => c.id === id))
  .filter(Boolean)

/**
 * The cheat sheet, in a native <dialog>. Using the platform element rather than
 * a hand-rolled overlay buys the backdrop, Escape-to-close, focus trapping, and
 * `inert` background for free — all things that are easy to get subtly wrong by
 * hand.
 */
export default function Reference({ open, onClose, voice }) {
  const dialogRef = useRef(null)

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

  return (
    <dialog ref={dialogRef} className="reference" onClick={onBackdropClick} aria-label="Antisèche">
      <div className="ref-head">
        <h2>Antisèche</h2>
        <button className="ref-close" onClick={onClose} aria-label="Fermer">
          ✕
        </button>
      </div>

      {/* The <dialog> itself stays mounted (the effects above need its DOM node),
          but its contents — every table for all ten courses — are only built
          while it's open. Closed, it costs nothing on each App re-render. */}
      {open && (
        <div className="ref-body">
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
              (manger → nous mange<em>ons</em>, placer → nous pla<em>ç</em>ons, peser → je p<em>è</em>se).
              See VERIFY.md.
            </p>
          </Section>

          <Section id="ref-classroom" title="Les objets de la classe">
            <VocabTable items={classroom} voice={voice} />
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
            <VocabTable items={salutations} voice={voice} />
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

          {/* ------------------------------------------------ Cours N°3 --- */}
          <LessonDivider lesson={lessons[2]} />

          <Section id="ref-nationalities" title="Les nationalités">
            <table className="ref-table">
              <thead>
                <tr>
                  <th>Masculin</th>
                  <th>Féminin</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {nationalities.map((n) => (
                  <tr key={n.id}>
                    <th scope="row">
                      {n.fr} <Speaker text={n.fr} voice={voice} label={`Prononcer « ${n.fr} »`} />
                    </th>
                    <td>
                      {n.fem} <Speaker text={n.fem} voice={voice} label={`Prononcer « ${n.fem} »`} />
                    </td>
                    <td className="muted">{n.en}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="ref-foot">
              Feminine usually adds <em>-e</em>; <em>italien → italienne</em> doubles the n. Pattern:{' '}
              <em>je suis + nationalité</em>.
            </p>
          </Section>

          <Section id="ref-articles" title="Les articles définis">
            <table className="ref-table">
              <thead>
                <tr>
                  <th>Article</th>
                  <th>Emploi</th>
                  <th>Exemple</th>
                </tr>
              </thead>
              <tbody>
                <ArticleRow art="le" use="masculin singulier" ex="livre" voice={voice} />
                <ArticleRow art="la" use="féminin singulier" ex="maison" voice={voice} />
                <ArticleRow art="l'" use="voyelle ou h muet" ex="ecole" voice={voice} />
                <ArticleRow art="les" use="pluriel (m. ou f.)" ex="livres" voice={voice} />
              </tbody>
            </table>
          </Section>

          <Section id="ref-reflexives" title="Se présenter : pronoms & verbes réfléchis">
            <table className="ref-table">
              <thead>
                <tr>
                  <th>Sujet</th>
                  <th>Pronom réfléchi</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {reflexivePronouns.map((r) => (
                  <tr key={r.id}>
                    <th scope="row">{r.subject}</th>
                    <td>
                      {r.fr} <Speaker text={r.fr} voice={voice} label={`Prononcer « ${r.fr} »`} />
                    </td>
                    <td className="muted">{r.en}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <VerbGrid verbs={reflexiveVerbs} voice={voice} />
            <p className="ref-foot">
              Pattern for introducing yourself: <em>je m'appelle</em> … , <em>je suis</em> [nationalité],{' '}
              <em>j'ai</em> [nombre] <em>ans</em> — age uses <em>avoir</em>, not <em>être</em>.
            </p>
          </Section>

          <Section id="ref-accents" title="Les accents">
            <table className="ref-table">
              <tbody>
                {accents.map((a) => (
                  <tr key={a.id}>
                    <th scope="row">
                      <span className="accent-symbol">{a.symbol}</span> {a.name}
                    </th>
                    <td>
                      {a.example} <Speaker text={a.example} voice={voice} label={`Prononcer « ${a.example} »`} />
                    </td>
                    <td className="muted">{a.en}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Section>

          <Section id="ref-time" title="L'heure (24 h)">
            <table className="ref-table">
              <tbody>
                {TIME_EXAMPLES.map((c) => (
                  <tr key={c.id}>
                    <th scope="row" className="time-digital">
                      {c.digital}
                    </th>
                    <td>
                      {c.phrase} <Speaker text={c.phrase} voice={voice} label={`Prononcer « ${c.phrase} »`} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="ref-foot">
              <em>:15</em> et quart · <em>:30</em> et demie · <em>:45</em> moins le quart · after the half,
              count backward from the next hour (<em>10h50 → onze heures moins dix</em>).
            </p>
          </Section>

          <Section id="ref-negation" title="La négation (ne… pas)">
            <table className="ref-table">
              <tbody>
                {negations.map((n) => (
                  <tr key={n.id}>
                    <th scope="row" className="neg-aff">
                      {n.affirmative}
                    </th>
                    <td>
                      {n.negative} <Speaker text={n.negative} voice={voice} label={`Prononcer « ${n.negative} »`} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="ref-foot">
              Sujet + <em>ne / n'</em> + verbe + <em>pas</em> + complément. <em>n'</em> before a vowel or
              silent h (<em>il n'aime pas</em>).
            </p>
          </Section>

          {/* ------------------------------------------------ Cours N°4 --- */}
          <LessonDivider lesson={lessons[3]} />

          <Section id="ref-nature" title="La nature (Tahiti)">
            <VocabTable items={nature} voice={voice} />
            <p className="ref-foot">
              <em>l'herbe</em> hides its gender behind the elision — it's feminine (<em>la</em> herbe).
            </p>
          </Section>

          <Section id="ref-possessives" title="Les adjectifs possessifs">
            <div className="ref-scroll">
              <table className="ref-table conj">
                <thead>
                  <tr>
                    <th></th>
                    <th>masc. sing.</th>
                    <th>fém. sing.</th>
                    <th>pluriel</th>
                  </tr>
                </thead>
                <tbody>
                  {POSSESSIVE_GRID.map((row) => (
                    <tr key={row.subject}>
                      <th scope="row" className="inf">
                        <span>
                          {row.subject} <span className="muted">{row.en}</span>
                        </span>
                      </th>
                      <td>{row.ms}</td>
                      <td>{row.fs}</td>
                      <td>{row.pl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="ref-foot">
              Agrees with the <em>thing owned</em>, not the owner — <em>Marie aime son frère</em> (frère is
              masculine, even though Marie is a woman). English does the opposite.
            </p>
          </Section>

          <Section id="ref-interrogatives" title="Poser une question">
            <table className="ref-table">
              <thead>
                <tr>
                  <th>Affirmation</th>
                  <th>Inversion</th>
                </tr>
              </thead>
              <tbody>
                {inversions.map((q) => (
                  <tr key={q.id}>
                    <th scope="row" className="neg-aff">
                      {q.affirmative}
                    </th>
                    <td>
                      {q.question} <Speaker text={q.question} voice={voice} label={`Prononcer « ${q.question} »`} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="ref-foot">
              Verbe + <em>-</em> + sujet. At <em>il / elle / on</em>, a verb ending in <em>-e</em> or{' '}
              <em>-a</em> inserts a euphonic <em>t</em>: <em>parle-t-il</em>, <em>a-t-elle</em>.
            </p>
            <VocabTable items={questionWords} voice={voice} />
          </Section>

          <Section id="ref-grosmots" title="Gros mots (argot) 🌶️">
            <p className="ref-foot ref-foot-top">
              Not from the slides. Labelled by weight: <span className="reg reg-familier">familier</span> mild ·{' '}
              <span className="reg reg-vulgaire">vulgaire</span> crude ·{' '}
              <span className="reg reg-injure">injure</span> aimed at someone. Know what you're saying.
            </p>
            <table className="ref-table">
              <tbody>
                {grosMots.map((g) => (
                  <tr key={g.id}>
                    <th scope="row">
                      {g.fr} <Speaker text={g.fr} voice={voice} label={`Prononcer « ${g.fr} »`} />
                    </th>
                    <td>
                      <span className={`reg reg-${g.register}`}>{g.register}</span> {g.en}
                      {g.note && <span className="muted"> — {g.note}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Section>

          {/* ------------------------------------------------ Cours N°5 --- */}
          <LessonDivider lesson={lessons[4]} />

          <Section id="ref-weather" title="Quel temps fait-il ?">
            <VocabTable items={weather} voice={voice} />
            <p className="ref-foot">
              The noun names the thing (<em>la pluie</em>, rain); the adjective describes the day
              (<em>pluvieux</em>, rainy). <em>l'éclair</em> hides its gender — it's masculine.
            </p>
          </Section>

          <Section id="ref-seaside" title="Au bord de la mer">
            <VocabTable items={seaside} voice={voice} />
            <p className="ref-foot">
              Vocabulary from the Matisse « danseuse créole » slide — the sea, then the dancer and a few
              body parts. The art-history itself was a class break (skipped).
            </p>
          </Section>

          <Section id="ref-verbs-3" title="Les verbes du 3ème groupe">
            <VerbGrid verbs={thirdVerbs} voice={voice} />
            <p className="ref-foot">
              Irregular — no root+ending rule, so each is memorised (like <em>être</em> / <em>avoir</em>).
              Watch the stem shift between singular and plural: <em>je vois → nous voyons</em>,{' '}
              <em>je mouds → nous moulons</em>, <em>je dépeins → nous dépeignons</em>.
            </p>
          </Section>

          {/* ------------------------------------------------ Cours N°6 --- */}
          <LessonDivider lesson={lessons[5]} />

          <Section id="ref-imperfect" title="L'imparfait (passé)">
            <VerbGrid verbs={imperfectVerbs} voice={voice} />
            <p className="ref-foot">
              One tense, one set of endings for every verb: <em>-ais · -ais · -ait · -ions · -iez ·
              -aient</em>. The stem is the present <em>nous</em> form minus <em>-ons</em>
              (nous parl<em>ons</em> → <em>parl-</em>; nous finiss<em>ons</em> → <em>finiss-</em>).
              Only <em>être</em> is irregular (<em>ét-</em>); even <em>aller</em> is regular here
              (<em>j'allais</em>). Impersonal <em>pleuvoir</em> exists only at <em>il</em>:{' '}
              <em>il pleuvait</em>.
            </p>
          </Section>

          <Section id="ref-seasons" title="Les saisons et les moments">
            <VocabTable items={seasons} voice={voice} />
            <p className="ref-foot">
              <em>l'été</em>, <em>l'automne</em>, <em>l'hiver</em> hide their gender behind the elision —
              all three are masculine.
            </p>
          </Section>

          <Section id="ref-paysage" title="Le paysage (Monet)">
            <VocabTable items={paysage} voice={voice} />
            <p className="ref-foot">
              Landscape vocabulary from the Monet slide — words already taught in <em>nature</em> /{' '}
              <em>bord de mer</em> (la mer, la fleur, la maison…) aren't repeated here.
            </p>
          </Section>

          {/* ------------------------------------------------ Cours N°7 --- */}
          <LessonDivider lesson={lessons[6]} />

          <Section id="ref-family" title="La famille">
            <VocabTable items={family} voice={voice} />
          </Section>

          <Section id="ref-introducing" title="Présenter : « c'est » vs « il/elle est »">
            <table className="ref-table">
              <thead>
                <tr>
                  <th>Anglais</th>
                  <th>Français</th>
                </tr>
              </thead>
              <tbody>
                {introductions.map((it) => (
                  <tr key={it.id}>
                    <th scope="row" className="neg-aff">
                      {it.prompt}
                    </th>
                    <td>
                      {it.answer} <Speaker text={it.answer} voice={voice} label={`Prononcer « ${it.answer} »`} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="ref-foot">
              <em>C'est / ce sont</em> + determiner (name, possessive, article): identifies WHO.{' '}
              <em>il/elle est / ils/elles sont</em> + no determiner: describes WHAT — an unmodified
              profession (<em>il est professeur</em>, not <em>il est un professeur</em>) or an adjective.
            </p>
          </Section>

          <Section id="ref-plurals" title="Le pluriel des noms">
            <table className="ref-table">
              <tbody>
                {plurals.map((p) => (
                  <tr key={p.id}>
                    <th scope="row">{p.singular}</th>
                    <td>
                      {p.plural} <Speaker text={p.plural} voice={voice} label={`Prononcer « ${p.plural} »`} />
                      {p.note && <span className="muted"> — {p.note}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="ref-foot">
              General rule: +s (silent). <em>-s / -x / -z</em> stay unchanged (des bus, des prix, des
              nez). <em>-eau / -au / -eu</em> → <em>-x</em> (des bateaux) — except <em>pneu → pneus</em>.{' '}
              <em>-al</em> → <em>-aux</em> (des animaux) — except <em>bal / festival → bals / festivals</em>.{' '}
              <em>-ail</em> → +s (des détails) — except <em>travail / vitrail → travaux / vitraux</em>.
            </p>
          </Section>

          <Section id="ref-chalons" title="Simon de Châlons (peinture)">
            <VocabTable items={chalons} voice={voice} />
            <p className="ref-foot">
              Vocabulary from the Simon de Châlons Nativity-scene slide — the painter's biography was a
              class break (skipped). The slide glosses <em>un âne</em> as "a mountain"; corrected to its
              real meaning, donkey. See VERIFY.md.
            </p>
          </Section>

          {/* ------------------------------------------------ Cours N°8 --- */}
          <LessonDivider lesson={lessons[7]} />

          <Section id="ref-body" title="Le corps">
            <VocabTable items={body} voice={voice} />
            <p className="ref-foot">
              <em>la tête</em>, <em>le bras</em>, <em>la jambe</em> already appear in <em>bord de mer</em>{' '}
              (N°5) and aren't repeated here.
            </p>
          </Section>

          <Section id="ref-traits" title="Qualités, défauts et apparence">
            <VocabTable items={traits} voice={voice} />
            <p className="ref-foot">
              The slide prints <em>Jolie / jolie</em> and <em>Méchante / méchante</em> — both typos,
              duplicating the feminine. Corrected here to <em>joli / jolie</em> and{' '}
              <em>méchant / méchante</em>. See VERIFY.md.
            </p>
          </Section>

          <Section id="ref-adjective-gender" title="Les adjectifs : accord (masculin/féminin)">
            <table className="ref-table">
              <tbody>
                {genderPairs.map((g) => (
                  <tr key={g.id}>
                    <th scope="row">{g.masculine}</th>
                    <td>
                      {g.feminine} <Speaker text={g.feminine} voice={voice} label={`Prononcer « ${g.feminine} »`} />
                      {g.note && <span className="muted"> — {g.note}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="ref-foot">
              General rule: +e. Three overrides: <em>-if → -ve</em> (sportif → sportive),{' '}
              <em>-eux → -euse</em> (sérieux → sérieuse), <em>-eau → -elle</em> (beau → belle).
            </p>
          </Section>

          <Section id="ref-adjective-position" title="Les adjectifs : la place (règle BAGS)">
            <table className="ref-table">
              <tbody>
                {positions.map((p) => (
                  <tr key={p.id}>
                    <th scope="row" className="neg-aff">
                      {p.cue}
                    </th>
                    <td>
                      {p.phrase} <Speaker text={p.phrase} voice={voice} label={`Prononcer « ${p.phrase} »`} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="ref-foot">
              Most adjectives follow the noun. The BAGS ones — <em>B</em>eauty, <em>A</em>ge,{' '}
              <em>G</em>oodness, <em>S</em>ize — go before it instead.
            </p>
          </Section>

          {/* ------------------------------------------------ Cours N°9 --- */}
          <LessonDivider lesson={lessons[8]} />

          <Section id="ref-interests" title="Les intérêts et les goûts">
            <VocabTable items={[...interests, ...preferences]} voice={voice} />
            <p className="ref-foot">
              <em>adorer</em> &gt; <em>aimer</em> &gt; <em>apprécier</em> &gt; <em>ne pas aimer</em>, in
              decreasing intensity. <em>aimer</em> is already a conjugated «ER» verb (N°2); the negative
              is just the negation pattern (N°3) — only <em>adorer</em>, <em>apprécier</em> and{' '}
              <em>préférer</em> are new here.
            </p>
          </Section>

          <Section id="ref-article-choice" title="Article défini ou indéfini ?">
            <table className="ref-table">
              <thead>
                <tr>
                  <th>Contexte</th>
                  <th>Français</th>
                </tr>
              </thead>
              <tbody>
                {articleChoices.map((a) => (
                  <tr key={a.id}>
                    <th scope="row" className="neg-aff">
                      {a.cue}
                    </th>
                    <td>
                      {a.phrase} <Speaker text={a.phrase} voice={voice} label={`Prononcer « ${a.phrase} »`} />
                      {a.note && <span className="muted"> — {a.note}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="ref-foot">
              Definite (<em>le / la / les</em>) for something specific or already known; indefinite (
              <em>un / une / des</em>) for something not. French almost always uses an article — English
              often drops it, especially for general likes/dislikes (<em>j'aime LES pizzas</em>).
            </p>
          </Section>

          {/* ------------------------------------------------ Cours N°10 --- */}
          <LessonDivider lesson={lessons[9]} />

          <Section id="ref-future" title="Le futur simple">
            <VerbGrid verbs={futureVerbs} voice={voice} />
            <p className="ref-foot">
              Infinitive + <em>-ai · -as · -a · -ons · -ez · -ont</em> (the present of <em>avoir</em>).
              <em>-re</em> verbs drop the final e first: <em>prendre → je prendrai</em>. No <em>-iss-</em>{' '}
              for the 2nd group: <em>je finirai</em>. The <strong>r</strong> before the ending is the mark of
              the future — even the irregular stems keep it.
            </p>
          </Section>

          <Section id="ref-future-stems" title="Le futur : les radicaux irréguliers">
            <table className="ref-table">
              <thead>
                <tr>
                  <th>Infinitif</th>
                  <th>Futur</th>
                  <th>Présent · imparfait</th>
                </tr>
              </thead>
              <tbody>
                {futureStems.map((it) => (
                  <tr key={it.id}>
                    <th scope="row">
                      {it.fr} <span className="muted">{it.en}</span>
                    </th>
                    <td>
                      {it.answer} <Speaker text={it.answer} voice={voice} label={`Prononcer « ${it.answer} »`} />
                    </td>
                    <td className="muted">{it.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="ref-foot">
              Same endings as the regular verbs — only the stem changes. Don't build these from the
              infinitive: <em>j'êtrai</em>, <em>je fairai</em> and <em>je voirai</em> don't exist.
            </p>
          </Section>

          <Section id="ref-common-verbs" title="Les verbes les plus courants">
            <VocabTable items={commonVerbs} voice={voice} />
            <p className="ref-foot">
              The slide promises 18 and lists 16 — <em>pouvoir</em> (can) is the obvious missing one.
              All of them are conjugated in the «ER» and 3ème-groupe grids above.
            </p>
          </Section>

          <Section id="ref-cousin" title="Jean Cousin (peinture)">
            <VocabTable items={cousin} voice={voice} />
            <p className="ref-foot">
              Vocabulary from <em>Eva Prima Pandora</em> — the biography and interpretation slides were
              skipped. <em>une femme</em>, <em>la mer</em>, <em>un drap</em> and <em>des arbres</em> are
              already in earlier decks. The slide hyphenates <em>premier-plan</em>; it's{' '}
              <em>le premier plan</em> (but <em>l'arrière-plan</em> does take a hyphen).
            </p>
          </Section>
        </div>
      )}
    </dialog>
  )
}

// The possessive-adjective grid, canonical form for the cheat sheet. The quiz
// drills these in sentences (possessives.js); this is the table to glance at.
const POSSESSIVE_GRID = [
  { subject: 'je', en: 'my', ms: 'mon', fs: 'ma', pl: 'mes' },
  { subject: 'tu', en: 'your', ms: 'ton', fs: 'ta', pl: 'tes' },
  { subject: 'il / elle', en: 'his / her', ms: 'son', fs: 'sa', pl: 'ses' },
  { subject: 'nous', en: 'our', ms: 'notre', fs: 'notre', pl: 'nos' },
  { subject: 'vous', en: 'your', ms: 'votre', fs: 'votre', pl: 'vos' },
  { subject: 'ils / elles', en: 'their', ms: 'leur', fs: 'leur', pl: 'leurs' },
]

// One row of the definite-article table, with the correct article computed the
// same way the quiz does (so the cheat sheet can't disagree with the deck).
function ArticleRow({ art, use, ex, voice }) {
  const noun = articleNouns.find((n) => n.id === ex)
  return (
    <tr>
      <th scope="row" className="article-cell">
        {art}
      </th>
      <td className="muted">{use}</td>
      <td>
        {withArticle(noun)} <Speaker text={withArticle(noun)} voice={voice} label={`Prononcer « ${withArticle(noun)} »`} />
      </td>
    </tr>
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

// The standard French -> English table, one row per item with a speaker.
// Shared by every plain vocabulary list in the cheat sheet. A noun that carries
// an `article` gets a coloured gender badge; an item's `note` follows its gloss.
// One component means a fix here (like the l' spacing) lands everywhere at once.
function VocabTable({ items, voice }) {
  return (
    <table className="ref-table">
      <tbody>
        {items.map((it) => (
          <tr key={it.id}>
            <th scope="row">
              {it.article && <span className={`gender ${it.gender}`}>{it.article}</span>}
              {/* "le livre" has a space after the article; "l'arbre" doesn't. */}
              {it.article && !isElided(it.article) && ' '}
              {it.fr}{' '}
              <Speaker text={it.speech ?? nounLabel(it)} voice={voice} label={`Prononcer « ${nounLabel(it)} »`} />
            </th>
            <td>
              {it.en}
              {it.note && <span className="muted"> — {it.note}</span>}
            </td>
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
  if (verb.id === 'placer') return slot === 'nous' // plaçons — ç keeps the c soft
  if (verb.id === 'peser') return slot !== 'nous' && slot !== 'vous' // è where the ending is silent
  return false
}
