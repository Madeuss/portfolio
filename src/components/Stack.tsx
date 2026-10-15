import { stack } from '../data/content';

export default function Stack() {
  return (
    <section id="stack" className="section">
      <div className="container stack__grid">
        <p className="label stack__label">/Stack</p>
        <div className="stack__groups">
          {stack.map((g) => (
            <div className="stack__group" key={g.title}>
              <span className="stack__title">{g.title}</span>
              <ul className="stack__chips">
                {g.items.map((it) => (
                  <li className="chip" key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
