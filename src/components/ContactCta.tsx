import { contact } from '../data/content'
import { ArrowUpRight } from '@phosphor-icons/react'
import { useI18n } from '../i18n/I18nProvider'
import RollingText from './RollingText'

export default function ContactCta() {
  const { t } = useI18n()
  const [line1, line2, highlight] = t.contact.title

  return (
    <section id="contato" className="section cta">
      <div className="container cta__inner">
        <p className="label">{t.contact.label}</p>
        <h2 className="cta__title">
          {line1}
          <br />
          {line2}
          <em>{highlight}</em>
        </h2>
        <div className="cta__row">
          <a
            href={`mailto:${contact.email}`}
            className="cta__button roll-trigger"
            aria-label={t.contact.buttonLabel}
          >
            <RollingText text={t.contact.button} />
            <span className="cta__button-icon">
              <ArrowUpRight
                size={16}
                weight="bold"
                color="#FFFFFF"
                aria-hidden="true"
              />
            </span>
          </a>
          <span className="cta__note">{t.contact.note}</span>
        </div>
      </div>
    </section>
  )
}
