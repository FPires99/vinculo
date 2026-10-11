export default function Approach({ t, quote, quoteAuthor }) {
  return (
    <>
      <section id="approach" className="section container">
        <header className="section-head">
          <h2>{t.title}</h2>
        </header>
        <ol className="steps">
          {t.steps.map((s, i) => (
            <li key={s.title}>
              <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
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
