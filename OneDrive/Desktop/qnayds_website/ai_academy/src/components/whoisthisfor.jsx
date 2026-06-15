import { useEffect, useRef } from "react";
import "../styles/whoisthisfor.css";

const cards = [
  {
    icon: "🎓",
    title: "+2 Students / Diploma / Degree / PG",
    desc: "Start building your future before you even finish school. Graduate with a portfolio and real internship experience.",
  },
  {
    icon: "💼",
    title: "Working professionals",
    desc: "Add no-code AI development to your skill set and open doors to new roles, side projects, or your own product.",
  },
  {
    icon: "🏢",
    title: "Business owners",
    desc: "Stop paying for every small digital change. Build and manage your own web presence, tools, and apps independently.",
  },
  {
    icon: "🎨",
    title: "Freelancers & creators",
    desc: "Turn your ideas into real products. Take on development projects, build your own tools, or launch a digital business.",
  },
];

function WhoIsThisFor() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Heading animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("who--visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    // Card animations with stagger
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("who-card--visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((card) => {
      if (card) cardObserver.observe(card);
    });

    return () => {
      observer.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  return (
    <section className="who-section" id="whoisthisfor">
      {/* Header */}
      <div className="who-header who-animate" ref={sectionRef}>
        <h2 className="who-title">Who is this for?</h2>
        <p className="who-subtitle">If you can dream it, you can build it</p>
        <p className="who-desc">
          No degree required. No age limit. Just curiosity and the drive to create.
        </p>
      </div>

      {/* Cards */}
      <div className="who-grid">
        {cards.map((card, i) => (
          <div
            className="who-card"
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            style={{ transitionDelay: `${i * 0.12}s` }}
          >
            <div className="who-card-icon">{card.icon}</div>
            <h3 className="who-card-title">{card.title}</h3>
            <p className="who-card-desc">{card.desc}</p>
            <div className="who-card-glow" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhoIsThisFor;