import { useEffect, useState } from 'react'
import { content } from './content.js'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Approach from './components/Approach.jsx'
import Team from './components/Team.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Signs from './components/Signs.jsx'
import Families from './components/Families.jsx'
import Faq from './components/Faq.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

function initialLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'pt' || saved === 'en') return saved
  } catch {
    // storage unavailable
  }
  return navigator.language?.startsWith('en') ? 'en' : 'pt'
}

export default function App() {
  const [lang, setLang] = useState(initialLang)
  const t = content[lang]

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-PT' : 'en'
    try {
      localStorage.setItem('lang', lang)
    } catch {
      // storage unavailable
    }
  }, [lang])

  return (
    <>
      <Header t={t.nav} lang={lang} setLang={setLang} />
      <main>
        <Hero t={t.hero} highlights={t.highlights} />
        <About t={t.about} />
        <Signs t={t.signs} />
        <Services t={t.services} />
        <Approach t={t.approach} quote={t.quote} quoteAuthor={t.quoteAuthor} />
        <Families t={t.families} />
        <Team t={t.team} />
        <Faq t={t.faq} />
        <Contact t={t.contact} />
      </main>
      <Footer t={t.footer} nav={t.nav} />
      <WhatsAppButton label={t.whatsapp} />
    </>
  )
}
