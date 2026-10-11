import { useState } from 'react'
import { clinic } from '../config.js'
import Icon from './Icon.jsx'

export default function Contact({ t }) {
  const [status, setStatus] = useState('idle') // idle | sending | ok | error
  const f = t.form

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('sending')
    try {
      if (!clinic.formEndpoint) throw new Error('Form endpoint not configured')
      const response = await fetch(clinic.formEndpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (!response.ok) throw new Error(response.statusText)
      form.reset()
      setStatus('ok')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section section-dark">
      <div className="container contact">
        <div className="contact-info">
          <h2>{t.title}</h2>
          <p className="contact-lead">{t.text}</p>
          <ul className="contact-list">
            <li>
              <Icon name="phone" />
              <div>
                <span>{t.phone}</span>
                <a href={`tel:${clinic.phone.replace(/\s/g, '')}`}>{clinic.phone}</a>
              </div>
            </li>
            <li>
              <Icon name="mail" />
              <div>
                <span>{t.email}</span>
                <a href={`mailto:${clinic.email}`}>{clinic.email}</a>
              </div>
            </li>
            <li>
              <Icon name="pin" />
              <div>
                <span>{t.address}</span>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {clinic.address}
                </a>
              </div>
            </li>
          </ul>
          <p className="emergency"><Icon name="alert" />{t.emergency}</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              {f.name}
              <input name="name" autoComplete="name" required />
            </label>
            <label>
              {f.email}
              <input type="email" name="email" autoComplete="email" required />
            </label>
          </div>
          <div className="form-row">
            <label>
              {f.phone}
              <input type="tel" name="phone" autoComplete="tel" />
            </label>
            <label>
              {f.subject}
              <select name="subject" defaultValue={f.subjects[0]}>
                {f.subjects.map((s) => <option key={s}>{s}</option>)}
              </select>
            </label>
          </div>
          <label>
            {f.message}
            <textarea name="message" rows="5" required />
          </label>
          <label className="consent">
            <input type="checkbox" name="consent" required />
            <span>{f.consent}</span>
          </label>
          <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? f.sending : f.send}
          </button>
          <p className={`form-status ${status}`} role="status" aria-live="polite">
            {status === 'ok' && f.ok}
            {status === 'error' && f.error}
          </p>
        </form>
      </div>

      <div className="container">
        <iframe
          className="map"
          title="Mapa / Map"
          loading="lazy"
          src={`https://www.google.com/maps?q=${encodeURIComponent(clinic.mapQuery)}&output=embed`}
        />
      </div>
    </section>
  )
}
