import achievements from '../data/achievements';
import './Achievements.css';

function Achievements() {
  return (
    <section className="section achievements-section" id="achievements">
      <div className="container">
        <div className="section-label">08 / RECOGNITION</div>
        <h2 className="section-title">Milestones along the way.</h2>

        <div className="achievements-list">
          {achievements.map((item) => (
            <article key={item.id} className="achievement-item">
              <div className="achievement-main">
                <h3 className="achievement-title">{item.title}</h3>
                {(item.organization || item.contribution) && (
                  <div className="achievement-details">
                    {item.organization && (
                      <span className="achievement-org">{item.organization}</span>
                    )}
                    {item.organization && item.contribution && (
                      <span className="achievement-sep" aria-hidden="true">·</span>
                    )}
                    {item.contribution && (
                      <span className="achievement-contribution">
                        {item.contribution}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {item.year && (
                <div className="achievement-meta">
                  <span className="achievement-date">{item.year}</span>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
