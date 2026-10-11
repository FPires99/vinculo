import Icon from './Icon.jsx'

export default function Families({ t }) {
  return (
    <section id="families" className="section section-dark">
      <div className="container families">
        <div>
          <p className="kicker kicker-light">{t.kicker}</p>
          <h2>{t.title}</h2>
          <p className="families-text">{t.text}</p>
          <a href="#contact" className="btn btn-primary">{t.cta}</a>
        </div>
        <ul className="families-tips">
          {t.tips.map((tip) => (
            <li key={tip}><Icon name="check" />{tip}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
