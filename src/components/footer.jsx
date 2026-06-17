import "../styles/footer.css";

function Footer() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Col 1 — Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-wordmark">
              <span className="footer-logo-k">QNA</span>
              <span className="footer-logo-ai">YDS</span>
            </div>
            <div className="footer-logo-sub">QNAYDS AI ACADEMY</div>
          </div>
          <p className="footer-tagline">
            Empowering the next generation of developers in Kerala with the
            world's most advanced AI-driven curriculum.
          </p>
          <div className="footer-socials">
            <a href="https://facebook.com/qnayds" target="_blank" rel="noreferrer" className="footer-social" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://instagram.com/qnayds" target="_blank" rel="noreferrer" className="footer-social" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="https://linkedin.com/company/qnayds" target="_blank" rel="noreferrer" className="footer-social" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://wa.me/917907564898" target="_blank" rel="noreferrer" className="footer-social" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </a>
          </div>
        </div>

       

        {/* Col 3 — Quick Links */}
        <div className="footer-col">
          <h4 className="footer-col-title">QUICK LINKS</h4>
          <ul className="footer-links">
            <li><a href="#whoisthisfor" onClick={scrollTo("whoisthisfor")}>How it works</a></li>
            <li><a href="#courses" onClick={scrollTo("courses")}>Courses</a></li>
            <li><a href="#internship">Internship</a></li>
            <li><a href="#enroll" onClick={scrollTo("enroll")}>Enroll Now</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-col-title">COURSES</h4>
          <ul className="footer-links">
           
            <li><a href="#courses" onClick={scrollTo("courses")}>AI Poster Designing</a></li>
            <li><a href="#courses" onClick={scrollTo("courses")}>Excel using AI</a></li>
            <li><a href="#courses" onClick={scrollTo("courses")}>AI for Teachers</a></li>
            <li><a href="#courses" onClick={scrollTo("courses")}>30 Days Hacking</a></li>
          </ul>
        </div>

        {/* Col 4 — Get Connected */}
        <div className="footer-col">
          <h4 className="footer-col-title">GET CONNECTED</h4>
          <ul className="footer-contact">
            <li>
              <div className="footer-contact-icon">📍</div>
              <div className="footer-contact-text">
                <span>ZilBank.com, Manjeri</span>
                <span>Malappuram – 673639</span>
              </div>
            </li>
            <li>
              <div className="footer-contact-icon">📞</div>
              <div className="footer-contact-text">
                <a href="tel:+917907564898">+91-7907564898</a>
                <a href="tel:+919400968397">+91-9400968397</a>
              </div>
            </li>
            <li>
              <div className="footer-contact-icon">✉️</div>
              <div className="footer-contact-text">
                <a href="mailto:career.qnayds@gmail.com">career.qnayds@gmail.com</a>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© 2026 Qnayds AI Academy · Kerala</p>
        <p>Powered by <a href="https://Qnayds.in" target="_blank" rel="noreferrer">Qnayds Academy</a></p>

       
      </div>
    </footer>
  );
}

export default Footer;