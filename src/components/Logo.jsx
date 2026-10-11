// Two interlinked rings: the "vínculo" (bond) between people.
export default function Logo({ light = false }) {
  return (
    <span className={`logo ${light ? 'logo-light' : ''}`}>
      <svg viewBox="0 0 40 28" aria-hidden="true">
        <circle cx="14" cy="14" r="10" />
        <circle cx="26" cy="14" r="10" />
      </svg>
      Vínculo
    </span>
  )
}
