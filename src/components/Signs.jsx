import Icon from './Icon.jsx'

export default function Signs({ t }) {
  return (
    <section id="signs" className="section container">
      <header className="section-head">
        <h2>{t.title}</h2>
        <p>{t.subtitle}</p>
      </header>
      <div className="signs">
        {t.groups.map((g) => (
          <div key={g.title} className="signs-card">
            <h3>{g.title}</h3>
            <ul className="checklist">
              {g.items.map((item) => (
                <li key={item}><Icon name="check" />{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="signs-footer">
        <p>{t.note}</p>
        <a href="#contact" className="btn btn-primary">{t.cta}</a>
      </div>
    </section>
  )
}
