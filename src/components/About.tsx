import { useI18n } from '../i18n/I18nProvider'

export default function About() {
  const { t } = useI18n()
  const [before, highlight, after] = t.about.statement

  return (
    <section id="sobre" className="section about">
      <div className="container about__grid">
        <p className="label about__label">{t.about.label}</p>
        <div className="about__body">
          <h2 className="about__statement">
            {before}
            <em>{highlight}</em>
            {after}
          </h2>
          <div className="about__text">
            {t.about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="about__stats">
            {t.about.stats.map((s) => (
              <div className="stat" key={s.label}>
                <span className="stat__value">{s.value}</span>
                <span className="stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
