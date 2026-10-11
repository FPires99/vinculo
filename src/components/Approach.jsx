import { useRef, useState } from 'react'
import Icon from './Icon.jsx'

// Points where each step sits on the trail (SVG viewBox 1000 x 220).
const points = [
  [110, 150],
  [370, 70],
  [630, 150],
  [890, 70],
]

// Distance between the two rings at each step: apart at the start, linked at the end.
const ringGap = [26, 19, 13, 9]

function segment([x1, y1], [x2, y2]) {
  const mid = (x1 + x2) / 2
  return `M${x1},${y1} C${mid},${y1} ${mid},${y2} ${x2},${y2}`
}

function Rings({ gap }) {
  const cx = 24
  return (
    <svg className="rings" viewBox="0 0 48 30" aria-hidden="true">
      <circle cx={cx - gap / 2} cy="15" r="9" />
      <circle cx={cx + gap / 2} cy="15" r="9" />
    </svg>
  )
}

export default function Approach({ t, quote, quoteAuthor }) {
  const [active, setActive] = useState(0)
  const tabs = useRef([])
  const step = t.steps[active]
  const last = t.steps.length - 1

  function select(i) {
    setActive(i)
    tabs.current[i]?.focus()
  }

  function onKeyDown(e) {
    if (e.key === 'ArrowRight') select(Math.min(active + 1, last))
    if (e.key === 'ArrowLeft') select(Math.max(active - 1, 0))
  }

  return (
    <>
      <section id="approach" className="section journey">
        <div className="container">
          <header className="section-head journey-head">
            <p className="kicker">{t.kicker}</p>
            <h2>{t.title}</h2>
            <p>{t.subtitle}</p>
          </header>

          <div className="trail">
            <svg className="trail-line" viewBox="0 0 1000 220" preserveAspectRatio="none" aria-hidden="true">
              {points.slice(1).map((p, i) => (
                <path
                  key={i}
                  d={segment(points[i], p)}
                  className={i < active ? 'done' : ''}
                />
              ))}
            </svg>

            <div className="trail-stops" role="tablist" aria-label={t.kicker} onKeyDown={onKeyDown}>
              {t.steps.map((s, i) => (
                <button
                  key={s.title}
                  ref={(el) => (tabs.current[i] = el)}
                  type="button"
                  role="tab"
                  id={`step-tab-${i}`}
                  aria-selected={i === active}
                  aria-controls="step-panel"
                  tabIndex={i === active ? 0 : -1}
                  className={`stop ${i === active ? 'active' : ''} ${i < active ? 'done' : ''}`}
                  style={{ '--x': `${points[i][0] / 10}%`, '--y': `${(points[i][1] / 220) * 100}%` }}
                  onClick={() => setActive(i)}
                >
                  <span className="stop-node"><Rings gap={ringGap[i]} /></span>
                  <span className="stop-label">
                    <span className="stop-num">{String(i + 1).padStart(2, '0')}</span>
                    {s.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="step-panel" id="step-panel" role="tabpanel" aria-labelledby={`step-tab-${active}`} key={active}>
            <div>
              <p className="step-count">{String(active + 1).padStart(2, '0')} / {String(last + 1).padStart(2, '0')}</p>
              <h3>{step.title}</h3>
              <p className="step-text">{step.text}</p>
              <div className="step-nav">
                <button type="button" onClick={() => setActive(active - 1)} disabled={active === 0} aria-label="Anterior / Previous">←</button>
                <button type="button" onClick={() => setActive(active + 1)} disabled={active === last} aria-label="Seguinte / Next">→</button>
              </div>
            </div>
            <div className="step-expect">
              <h4>{t.expectTitle}</h4>
              <ul className="checklist">
                {step.expect.map((item) => (
                  <li key={item}><Icon name="check" />{item}</li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-primary">{t.cta}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="quote-band">
        <blockquote className="container">
          <p>“{quote}”</p>
          <cite>{quoteAuthor}</cite>
        </blockquote>
      </section>
    </>
  )
}
