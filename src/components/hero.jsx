import { useEffect, useRef } from "react";
import "../styles/hero.css";
import bgImage from '../assets/image.png';

function StarCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    const stars = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 160; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.2,
        a: Math.random(),
        speed: Math.random() * 0.005 + 0.002,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let frame = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;
      stars.forEach((s) => {
        const opacity =
          s.a * (0.4 + 0.6 * Math.sin(frame * s.speed + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,212,255,${opacity})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-starcanvas" />;
}

function Hero() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="hero-section"
      style={{
        /* No color overlay, only the background image is loaded */
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <StarCanvas />

      <div className="hero-content">
        {/* Badge */}
        <div className="hero-badge">
          <h1>Best AI Academy in Kerala</h1>
        </div>

        {/* Headline */}
        <h1 className="hero-heading">
          The Future Belongs
          <br />
          to <span className="hero-heading-gradient">Those Who Learn&nbsp;It</span>
        </h1>

        {/* Subtext */}
        <p className="hero-subtext">
          Unlock Your Potential with the Power of AI
        </p>

        <p>AI certification courses for students, freshers & working professionals
        across Kochi, Kozhikode, Thrissur & Thiruvananthapuram.</p>

        {/* CTA Buttons */}
        <div className="hero-cta-group">
          <a href="#enroll" className="hero-btn-primary" onClick={scrollTo("enroll")}>
            Start learning 
          </a>
          <a href="#courses" className="hero-btn-secondary" onClick={scrollTo("courses")}>
            Browse courses
          </a>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-num">30 days</span>
            <span className="hero-stat-label">To become a developer</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-num">Zero</span>
            <span className="hero-stat-label">Prior experience needed</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-num">100%</span>
            <span className="hero-stat-label">Hands-on projects</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;