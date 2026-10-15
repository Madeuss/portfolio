import { contact } from '../data/content';
import { ArrowUpRight } from './icons';
import RollingText from './RollingText';

export default function ContactCta() {
  return (
    <section id="contato" className="section cta">
      <div className="container cta__inner">
        <p className="label">/Contato</p>
        <h2 className="cta__title">
          Bora construir
          <br />
          algo <em>juntos?</em>
        </h2>
        <div className="cta__row">
          <a href={`mailto:${contact.email}`} className="cta__button roll-trigger" aria-label="Enviar e-mail">
            <RollingText text="Mande um e-mail" />
            <span className="cta__button-icon">
              <ArrowUpRight color="#FFFFFF" />
            </span>
          </a>
          <span className="cta__note">Aberto a novas vagas e projetos freelance.</span>
        </div>
      </div>
    </section>
  );
}
