import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const student = {
    name: "Siya Shaha",
    role: "Computer Science Student & Web Developer",
    university: "MIT World Peace University, Pune",
    degree: "B.Tech in Computer Science & Engineering",
    cgpa: "8.58",
    batch: "2023 – 2027",
    email: "siya.shaha@mitwpu.edu.in",
    phone: "+91 9511915423",
    location: "Pune, Maharashtra",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    about: "Computer Science student with a strong foundation in object-oriented programming (OOP) using C++, data structures, and C. Passionate about software development and web technologies, building engaging and responsive websites using HTML, CSS, and JavaScript.",
    skills: {
      languages: ["C++", "C", "JavaScript", "Python"],
      web: ["HTML", "CSS", "React (learning)"],
      concepts: ["Data Structures", "Algorithms", "OOP", "CRUD"],
      tools: ["Git", "VS Code", "MongoDB", "Node.js"],
      soft: ["Communication", "Time Management", "Documentation", "Teamwork"]
    },
    experience: [
      {
        title: "Tech Team Member",
        org: "IRIS Club Website",
        period: "Aug 2024 – Present",
        desc: "Contributing to UI improvements, performance optimization, and feature implementation. Collaborated with peers using Git.",
        link: "www.iris-club.in",
        skills: ["HTML", "CSS", "JavaScript", "Git"]
      }
    ],
    certifications: [
      {
        title: "Data Structures",
        org: "Expert Websoft, Maharashtra",
        period: "Jan 2025 – May 2025",
        desc: "Advanced topics: Trees, Graphs, Dynamic Programming, Backtracking, Branch and Bound."
      }
    ],
    activities: [
      {
        title: "Volunteer – RIDE",
        desc: "Research Innovation Design Entrepreneurship. Organized large-scale events and handled logistics."
      },
      {
        title: "Volunteer – SLDP",
        desc: "Social Leadership Development Program. Organized academic competitions; teamwork and communication."
      }
    ],
    education: [
      { school: "MIT World Peace University", degree: "B.Tech CSE", year: "2023–2027", score: "CGPA: 8.58" },
      { school: "Chaitanya's International School", degree: "XII Science (Maharashtra Board)", year: "2023", score: "86.67%" },
      { school: "Vidya Pratishthan's Vinodkumar Gujar Bal Vikas Mandir", degree: "X (ICSE)", year: "2021", score: "98.20%" }
    ]
  };

  return (
    <div className="portfolio">
      {/* Hero */}
      <section className="hero card">
        <div className="hero-avatar">
          {student.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div className="hero-info">
          <h1 className="hero-name">{student.name}</h1>
          <p className="hero-role">{student.role}</p>
          <p className="hero-uni">🎓 {student.university}</p>
          <div className="hero-meta">
            <span>📧 {student.email}</span>
            <span>📞 {student.phone}</span>
            <span>📍 {student.location}</span>
          </div>
          <div className="hero-links">
            <a href={student.linkedin} target="_blank" rel="noreferrer" className="link-btn linkedin">
              💼 LinkedIn
            </a>
            <a href={student.github} target="_blank" rel="noreferrer" className="link-btn github">
              🐙 GitHub
            </a>
          </div>
        </div>
        <div className="hero-stat">
          <div className="stat-box">
            <span className="stat-val">{student.cgpa}</span>
            <span className="stat-label">CGPA</span>
          </div>
          <div className="stat-box">
            <span className="stat-val">2027</span>
            <span className="stat-label">Graduating</span>
          </div>
          <div className="stat-box">
            <span className="stat-val">98%</span>
            <span className="stat-label">Xth Score</span>
          </div>
        </div>
      </section>

      <div className="grid-2col">
        {/* About */}
        <section className="card">
          <h2 className="section-title">👤 About Me</h2>
          <p className="about-text">{student.about}</p>
        </section>

        {/* Skills */}
        <section className="card">
          <h2 className="section-title">🛠 Skills</h2>
          {Object.entries(student.skills).map(([category, items]) => (
            <div key={category} className="skill-group">
              <span className="skill-cat">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
              <div className="skill-tags">
                {items.map(skill => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Experience */}
      <section className="card">
        <h2 className="section-title">💼 Experience</h2>
        {student.experience.map((exp, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{exp.title}</h3>
                <span className="badge">{exp.period}</span>
              </div>
              <p className="timeline-org">{exp.org} {exp.link && <a href={`https://${exp.link}`} target="_blank" rel="noreferrer">🔗 {exp.link}</a>}</p>
              <p className="timeline-desc">{exp.desc}</p>
              <div>{exp.skills.map(s => <span key={s} className="tag">{s}</span>)}</div>
            </div>
          </div>
        ))}
      </section>

      <div className="grid-2col">
        {/* Certifications */}
        <section className="card">
          <h2 className="section-title">🏅 Certifications</h2>
          {student.certifications.map((cert, i) => (
            <div key={i} className="cert-item">
              <div className="cert-icon">📜</div>
              <div>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-org">{cert.org}</p>
                <p className="cert-period">{cert.period}</p>
                <p className="cert-desc">{cert.desc}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Activities */}
        <section className="card">
          <h2 className="section-title">🌟 Activities</h2>
          {student.activities.map((act, i) => (
            <div key={i} className="activity-item">
              <h3 className="activity-title">{act.title}</h3>
              <p className="activity-desc">{act.desc}</p>
            </div>
          ))}
        </section>
      </div>

      {/* Education */}
      <section className="card">
        <h2 className="section-title">🎓 Education</h2>
        <div className="edu-grid">
          {student.education.map((edu, i) => (
            <div key={i} className="edu-card">
              <div className="edu-icon">{i === 0 ? '🏛' : i === 1 ? '🏫' : '🏡'}</div>
              <h3 className="edu-school">{edu.school}</h3>
              <p className="edu-degree">{edu.degree}</p>
              <div className="edu-footer">
                <span className="badge">{edu.year}</span>
                <span className="score">{edu.score}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
