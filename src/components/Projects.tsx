import { projectMeta } from '../data/content'
import { useI18n } from '../i18n/I18nProvider'

export default function Projects() {
  const { t } = useI18n()

  return (
    <section id="projetos" className="section">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="label">{t.projects.label}</p>
        </div>
        <div className="projects__grid">
          {t.projects.items.map((p, i) => {
            const meta = projectMeta[i] ?? {}
            const external = meta.href?.startsWith('http')
            return (
              <a
                key={i}
                href={meta.href ?? '#projetos'}
                {...(external && { target: '_blank', rel: 'noreferrer' })}
                className="card"
              >
                <div className="card__media">
                  <div
                    className="card__shot"
                    style={{ backgroundColor: meta.tint }}
                  >
                    {meta.image ? (
                      <img
                        src={meta.image}
                        alt={p.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    ) : (
                      <span className="card__placeholder">{p.placeholder}</span>
                    )}
                  </div>
                  <span className="card__tag">{p.tag}</span>
                </div>
                <div className="card__head">
                  <span className="card__name">{p.name}</span>
                  <span className="card__year">{p.year}</span>
                </div>
                <span className="card__desc">{p.desc}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
