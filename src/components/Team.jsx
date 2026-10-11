import joanaImg from '../assets/joana.jpg'

export default function Team({ t }) {
  return (
    <section id="team" className="section container">
      <div className="team">
        <figure className="team-photo">
          <img src={joanaImg} alt={t.name} loading="lazy" />
        </figure>
        <div>
          <p className="kicker">{t.title}</p>
          <h2>{t.name}</h2>
          <p className="team-role">{t.role}</p>
          <p>{t.bio}</p>
        </div>
      </div>
    </section>
  )
}
