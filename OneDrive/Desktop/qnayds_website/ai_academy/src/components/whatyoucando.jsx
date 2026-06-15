import { useEffect, useRef } from "react";
import "../styles/whatyoucando.css";

const abilities = [
  {
    icon: "🌐",
    title: "Build full web apps",
    desc: "Create complete, functional websites and web applications — not just templates, but real products from scratch.",
  },
  {
    icon: "📱",
    title: "Build mobile apps",
    desc: "Develop mobile applications for iOS and Android using AI tools — no native dev experience needed.",
  },
  {
    icon: "🤖",
    title: "Deploy AI models",
    desc: "Train, fine-tune, and deploy machine learning models into real-world products and services.",
  },
  {
    icon: "⚙️",
    title: "Handle full projects",
    desc: "Plan, design, build, and deploy — manage the entire development lifecycle from idea to launch.",
  },
  {
    icon: "🔗",
    title: "Build AI pipelines",
    desc: "Connect LLMs, APIs, and data sources to create powerful automated AI-driven workflows.",
  },
  {
    icon: "📊",
    title: "Analyse data with AI",
    desc: "Use AI tools to clean, visualise, and extract insights from real datasets and business data.",
  },
];

function WhatYouCanDo() {
  const headerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("wycd--visible")),
      { threshold: 0.15 }
    );
    if (headerRef.current) obs.observe(headerRef.current);

    const cardObs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("wycd-card--visible")),
      { threshold: 0.1 }
    );
    cardRefs.current.forEach((c) => c && cardObs.observe(c));

    return () => { obs.disconnect(); cardObs.disconnect(); };
  }, []);

  return (
    <section className="wycd-section">
      <div className="wycd-header wycd-animate" ref={headerRef}>
        <h2 className="wycd-title">What you'll be able to do</h2>
        <p className="wycd-subtitle">Build anything. Handle everything.</p>
        <p className="wycd-desc">
          By the end of your program, you won't just know how to code — you'll
          know how to ship.
        </p>
      </div>

      <div className="wycd-grid">
        {abilities.map((item, i) => (
          <div
            className="wycd-card"
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="wycd-card-icon">{item.icon}</div>
            <h3 className="wycd-card-title">{item.title}</h3>
            <p className="wycd-card-desc">{item.desc}</p>
            <div className="wycd-card-glow" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhatYouCanDo;