import { projects } from '../data/content';

export default function Projects() {
  return (
    <section id="projetos" className="section">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Projetos</h2>
          <p className="label">/Trabalhos selecionados</p>
        </div>
        <div className="projects__grid">
          {projects.map((p, i) => (
            <a key={i} href={p.href ?? '#projetos'} className="card">
              <div className="card__media">
                <div className="card__shot" style={{ backgroundColor: p.tint }}>
                  {p.image ? (
                    <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
          ))}
        </div>
      </div>
    </section>
  );
}
