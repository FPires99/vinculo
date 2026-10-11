import heroImg from '../assets/hero-path.jpg'
import Icon from './Icon.jsx'

const icons = ['user', 'users', 'lock']

export default function Hero({ t, highlights }) {
  return (
    <section id="top" className="hero" style={{ '--hero-img': `url(${heroImg})` }}>
      <div className="hero-inner container">
        <p className="kicker kicker-light">{t.kicker}</p>
        <h1>{t.title}</h1>
        <p className="hero-text">{t.text}</p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">{t.primary}</a>
          <a href="#services" className="btn btn-outline-light">{t.secondary}</a>
        </div>
      </div>

      <div className="container">
        <ul className="highlights">
          {highlights.map((h, i) => (
            <li key={h.title}>
              <span className="highlight-icon"><Icon name={icons[i]} /></span>
              <div>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
