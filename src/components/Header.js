import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <span className="nav-logo">SS</span>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="hero">
        <p className="hero-tag">Computer Science Student</p>
        <h1 className="hero-name">Siya<br /><em>Shaha</em></h1>
        <p className="hero-bio">
          A passionate CS student with a strong foundation in OOP, data structures,
          and frontend development. Building engaging web experiences one line at a time.
        </p>
        <div className="hero-links">
          <a href="mailto:siya.shaha@mitwpu.edu.in" className="btn">Email Me</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
