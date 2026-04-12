import './Footer.css';

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <p className="footer-name">Siya Shaha</p>
          <p className="footer-tagline">Computer Science Student · MIT-WPU, Pune</p>
        </div>
        <div className="footer-links">
          <a href="mailto:siya.shaha@mitwpu.edu.in">siya.shaha@mitwpu.edu.in</a>
          <a href="tel:+919511915423">+91 9511915423</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Siya Shaha. Built with React.</p>
      </div>
    </footer>
  );
}

export default Footer;
