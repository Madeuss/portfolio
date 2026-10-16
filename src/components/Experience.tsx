import { useI18n } from '../i18n/I18nProvider'

export default function Experience() {
  const { t } = useI18n()

  return (
    <section id="experiencia" className="section">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">{t.experience.title}</h2>
          <p className="label">{t.experience.label}</p>
        </div>
        <ul className="list">
          {t.experience.jobs.map((j, i) => (
            <li className="job" key={i}>
              <span className="job__period">{j.period}</span>
              <div className="job__main">
                <span className="job__company">{j.company}</span>
                <span className="job__desc">{j.desc}</span>
                {j.highlights && (
                  <ul className="job__highlights">
                    {j.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
              <span className="job__role">
                {j.role}
                <svg
                  className="job__arrow"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 13L13 5" />
                  <path d="M6 5h7v7" />
                </svg>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
