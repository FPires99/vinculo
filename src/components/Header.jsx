import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'

const sections = ['about', 'services', 'signs', 'families', 'faq', 'contact']

export default function Header({ t, lang, setLang }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`header ${scrolled || open ? 'header-solid' : ''}`}>
      <nav className="nav container" aria-label="Principal">
        <a href="#top" className="nav-brand" onClick={close}>
          <Logo light={!scrolled && !open} />
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>

        <div id="nav-menu" className={`nav-menu ${open ? 'open' : ''}`}>
          <ul className="nav-links">
            {sections.map((id) => (
              <li key={id}>
                <a href={`#${id}`} onClick={close}>{t[id]}</a>
              </li>
            ))}
          </ul>
          <div className="lang-switch" role="group" aria-label="Idioma / Language">
            {['pt', 'en'].map((code) => (
              <button
                key={code}
                type="button"
                aria-pressed={lang === code}
                onClick={() => setLang(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <a href="#contact" className="btn btn-primary nav-cta" onClick={close}>{t.cta}</a>
        </div>
      </nav>
    </header>
  )
}
