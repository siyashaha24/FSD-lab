import './About.css';

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-label">01 — About</div>
        <h2 className="section-title">Who I Am</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a Computer Science & Engineering student at MIT World Peace University, Pune,
              currently in my second year with a CGPA of <strong>8.58</strong>. I have a strong
              foundation in object-oriented programming using C++, data structures, and algorithms.
            </p>
            <p>
              My passion for software development extends into web development, where I use HTML,
              CSS, and JavaScript to build engaging and responsive websites. I'm also developing
              a good understanding of Python.
            </p>
            <p>
              Outside of academics, I actively contribute to my college's IRIS Club website and
              volunteer at major university events.
            </p>
          </div>
          <div className="about-card">
            <div className="about-stat">
              <span className="stat-num">8.58</span>
              <span className="stat-label">Current CGPA</span>
            </div>
            <div className="about-stat">
              <span className="stat-num">98%</span>
              <span className="stat-label">Class X (ICSE)</span>
            </div>
            <div className="about-stat">
              <span className="stat-num">86%</span>
              <span className="stat-label">Class XII (HSC)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
