import Logo from './Logo.jsx'

export default function Footer({ t, nav }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <Logo light />
          <p>{t.tagline}</p>
        </div>
        <ul className="footer-links">
          {['about', 'signs', 'services', 'approach', 'families', 'team', 'faq', 'contact'].map((id) => (
            <li key={id}><a href={`#${id}`}>{nav[id]}</a></li>
          ))}
        </ul>
      </div>
      <p className="container footer-copy">© {new Date().getFullYear()} Vínculo. {t.rights}</p>
    </footer>
  )
}
