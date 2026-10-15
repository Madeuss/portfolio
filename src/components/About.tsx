import { about } from '../data/content';

export default function About() {
  return (
    <section id="sobre" className="section about">
      <div className="container about__grid">
        <p className="label about__label">/Sobre</p>
        <div className="about__body">
          <h2 className="about__statement">
            Faço produtos complexos parecerem simples, do componente ao <em>deploy</em>.
          </h2>
          <div className="about__text">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="about__stats">
            {about.stats.map((s) => (
              <div className="stat" key={s.label}>
                <span className="stat__value">{s.value}</span>
                <span className="stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
