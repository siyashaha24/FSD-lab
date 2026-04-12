import './Experience.css';

const experiences = [
  {
    role: 'Tech Team Member',
    org: 'IRIS Club Website',
    period: 'Aug 2024 – Present',
    link: 'www.iris-club.in',
    href: 'https://www.iris-club.in',
    description:
      'Contributed to UI improvements, performance optimization, and feature implementation for the college club website. Collaborated with peers using Git and built a deeper understanding of frontend development practices.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'Debugging', 'Documentation'],
  },
];

const certifications = [
  {
    title: 'Data Structures',
    issuer: 'Expert Websoft, Maharashtra',
    period: 'Jan 2025 – May 2025',
    description:
      'Gained in-depth knowledge of Trees, Graphs, Dynamic Programming, Backtracking, and Branch and Bound. Strengthened algorithmic and analytical skills.',
  },
];

function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <div className="section-label">03 — Experience & Certifications</div>
        <h2 className="section-title">What I've Done</h2>

        <div className="exp-block">
          <h3 className="exp-sub-heading">Experience</h3>
          {experiences.map((exp) => (
            <div key={exp.role} className="exp-card">
              <div className="exp-header">
                <div>
                  <p className="exp-role">{exp.role}</p>
                  <p className="exp-org">
                    {exp.href ? (
                      <a href={exp.href} target="_blank" rel="noreferrer">{exp.org}</a>
                    ) : (
                      exp.org
                    )}
                  </p>
                </div>
                <span className="exp-period">{exp.period}</span>
              </div>
              <p className="exp-desc">{exp.description}</p>
              <div className="exp-tags">
                {exp.skills.map((s) => (
                  <span key={s} className="exp-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="exp-block">
          <h3 className="exp-sub-heading">Certifications</h3>
          {certifications.map((cert) => (
            <div key={cert.title} className="exp-card">
              <div className="exp-header">
                <div>
                  <p className="exp-role">{cert.title}</p>
                  <p className="exp-org">{cert.issuer}</p>
                </div>
                <span className="exp-period">{cert.period}</span>
              </div>
              <p className="exp-desc">{cert.description}</p>
            </div>
          ))}
        </div>

        <div className="exp-block">
          <h3 className="exp-sub-heading">Extracurricular Activities</h3>
          <div className="exp-card">
            <p className="exp-role">Volunteer — RIDE</p>
            <p className="exp-desc">Helped organize large-scale events, handled logistics, and ensured smooth coordination with stakeholders at Research Innovation Design Entrepreneurship.</p>
          </div>
          <div className="exp-card" style={{ marginTop: '1rem' }}>
            <p className="exp-role">Volunteer — SLDP</p>
            <p className="exp-desc">Contributed to organizing academic competitions; gained experience in teamwork, pressure handling, and communication at the Social Leadership Development Program.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
