import './Education.css';

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "MIT World Peace University, Pune",
    period: "2023 – 2027",
    detail: "CGPA: 8.58",
  },
  {
    degree: "Senior Secondary (XII) — Science",
    institution: "Chaitanya's International School, Maharashtra",
    period: "2023",
    detail: "Percentage: 86.67%",
  },
  {
    degree: "Secondary (X) — ICSE",
    institution: "Vidya Pratishthan's Vinodkumar Gujar Bal Vikas Mandir, Baramati",
    period: "2021",
    detail: "Percentage: 98.20%",
  },
];

function Education() {
  return (
    <section id="education" className="education section">
      <div className="container">
        <div className="section-label">04 — Education</div>
        <h2 className="section-title">Academic Background</h2>
        <div className="edu-list">
          {education.map((edu, i) => (
            <div key={i} className="edu-item">
              <div className="edu-number">{String(i + 1).padStart(2, '0')}</div>
              <div className="edu-info">
                <p className="edu-degree">{edu.degree}</p>
                <p className="edu-institution">{edu.institution}</p>
              </div>
              <div className="edu-right">
                <span className="edu-period">{edu.period}</span>
                <span className="edu-detail">{edu.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
