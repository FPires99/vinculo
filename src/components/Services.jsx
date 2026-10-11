import individualImg from '../assets/individual-session.jpg'
import groupImg from '../assets/group-session.jpg'
import Icon from './Icon.jsx'

function ServiceCard({ data, img }) {
  return (
    <article className="service">
      <img src={img} alt="" loading="lazy" />
      <div className="service-body">
        <h3>{data.title}</h3>
        <p>{data.text}</p>
        <ul className="checklist">
          {data.points.map((p) => (
            <li key={p}><Icon name="check" />{p}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default function Services({ t }) {
  return (
    <section id="services" className="section section-tint">
      <div className="container">
        <header className="section-head">
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </header>
        <div className="services">
          <ServiceCard data={t.individual} img={individualImg} />
          <ServiceCard data={t.group} img={groupImg} />
        </div>
      </div>
    </section>
  )
}
