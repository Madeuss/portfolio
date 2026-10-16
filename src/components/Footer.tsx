import { contact, footerLinks } from '../data/content'
import { useI18n } from '../i18n/I18nProvider'
import { Crest } from './icons'
import LangSwitch from './LangSwitch'
import RollingText from './RollingText'

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="footer">
      <div className="footer__grain" aria-hidden="true" />
      <div className="container footer__top">
        <h2 className="footer__claim">
          {t.footer.claim.map((line, i) => (
            <span key={line}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </h2>
        <div className="footer__col">
          <h3>{t.footer.links}</h3>
          <nav aria-label={t.nav.footerLabel} className="footer__links">
            {footerLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="footer__pill roll-trigger"
                aria-label={t.nav[l.key]}
              >
                <RollingText text={t.nav[l.key]} />
              </a>
            ))}
          </nav>
        </div>
        <div className="footer__col">
          <h3>{t.footer.contact}</h3>
          <div className="footer__contact">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href={contact.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Mateus Souza</span>
        <LangSwitch tone="dark" />
        <span className="footer__made">
          Vai Corinthians
          <Crest />
        </span>
      </div>
      <div className="footer__giant" aria-hidden="true">
        <span>MATEUS</span>
      </div>
    </footer>
  )
}
