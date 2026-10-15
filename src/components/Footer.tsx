import { contact, footerLinks } from '../data/content';
import RollingText from './RollingText';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grain" aria-hidden="true" />
      <div className="container footer__top">
        <h2 className="footer__claim">
          Interfaces
          <br />
          que escalam
          <br />
          com o produto.
        </h2>
        <div className="footer__col">
          <h3>/Links</h3>
          <nav aria-label="Rodapé" className="footer__links">
            {footerLinks.map((l) => (
              <a key={l.href} href={l.href} className="footer__pill roll-trigger" aria-label={l.label}>
                <RollingText text={l.label} />
              </a>
            ))}
          </nav>
        </div>
        <div className="footer__col">
          <h3>/Contato</h3>
          <div className="footer__contact">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={contact.linkedin}>LinkedIn ↗</a>
            <a href={contact.github}>GitHub ↗</a>
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Mateus Souza</span>
        <span>Feito com React e muito café</span>
      </div>
      <div className="footer__giant" aria-hidden="true">
        <span>MATEUS</span>
      </div>
    </footer>
  );
}
