import './Skills.css';

const skillGroups = [
  {
    category: 'Languages',
    skills: ['C++', 'C', 'JavaScript', 'Python'],
  },
  {
    category: 'Web Technologies',
    skills: ['HTML5', 'CSS3'],
  },
  {
    category: 'Concepts',
    skills: ['Data Structures', 'Algorithms', 'OOP', 'Dynamic Programming'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'Visual Studio Code'],
  },
  {
    category: 'Soft Skills',
    skills: ['Communication', 'Teamwork', 'Time Management', 'Documentation'],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-label">02 — Skills</div>
        <h2 className="section-title">What I Know</h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.category} className="skill-group">
              <h3 className="skill-category">{group.category}</h3>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
