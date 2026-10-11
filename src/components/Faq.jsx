export default function Faq({ t }) {
  return (
    <section id="faq" className="section section-tint">
      <div className="container faq">
        <h2>{t.title}</h2>
        <div className="faq-list">
          {t.items.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
