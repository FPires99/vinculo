import bondImg from '../assets/bond.jpg'

export default function About({ t }) {
  return (
    <section id="about" className="section container">
      <div className="split">
        <figure className="split-media">
          <img src={bondImg} alt="" loading="lazy" />
        </figure>
        <div>
          <h2>{t.title}</h2>
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <h3 className="areas-title">{t.areasTitle}</h3>
          <ul className="tags">
            {t.areas.map((a) => <li key={a}>{a}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
