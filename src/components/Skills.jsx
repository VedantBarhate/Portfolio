import skills from '../data/skills';
import './Skills.css';

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-label">06 / SKILLS</div>
        <h2 className="section-title">Tools of my trade.</h2>
        <p className="section-description">
          Technologies and tools I use to build, experiment, and develop intelligent systems.
        </p>

        <div className="skills-grid">
          {skills.map((category) => (
            <div key={category.id} className="skills-category">
              <h3 className="category-title">{category.category}</h3>
              <ul className="skills-tag-list" aria-label={`${category.category} skills`}>
                {category.items.map((skill) => (
                  <li key={skill} className="skill-tag">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
