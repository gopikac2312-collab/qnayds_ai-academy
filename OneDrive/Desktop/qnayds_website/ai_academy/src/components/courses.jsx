import { useEffect, useRef, useState } from "react";
import "../styles/courses.css";

const courses = [
  
  
  {
    tag: "Advanced",
    icon: "🎨",
    title: "Advanced AI Poster Designing",
    desc: "Create stunning professional posters and visual content using AI design tools like Midjourney, Adobe Firefly, and more.",
    duration: "4 weeks",
    lessons: "22 lessons",
    color: "purple",
  },
  {
    tag: "Intermediate",
    icon: "🎬",
    title: " Advanced AI Video Mastering",
    desc: "Master AI-powered video creation, editing, and enhancement using tools like Runway, Sora, and CapCut AI to produce cinematic content effortlessly.",
    duration: "4 weeks",
    lessons: "20 lessons",
    color: "pink",
  },
  {
    tag: "Intermediate",
    icon: "🌐",
    title: " Advanced AI Web Development",
    desc: "Build modern, responsive websites faster using AI coding assistants like GitHub Copilot, Cursor, and v0 — from design to deployment.",
    duration: "5 weeks",
    lessons: "25 lessons",
    color: "cyan",
  },
  {
    tag: "Advanced",
    icon: "⚙️",
    title: " Advanced AI Automation and Prompt Engineering ",
    desc: "Automate repetitive workflows and business processes using AI tools like Make, Zapier, and n8n — no heavy coding required.",
    duration: "4 weeks",
    lessons: "22 lessons",
    color: "purple",
  },
 
  {
    tag: "Intermediate",
    icon: "📊",
    title: "Advanced Excel using AI",
    desc: "Supercharge your spreadsheets with AI-assisted formulas, automation, data analysis, and smart reporting in Excel.",
    duration: "3 weeks",
    lessons: "18 lessons",
    color: "pink",
  },
  {
    tag: "Beginner",
    icon: "🍎",
    title: "Advanced AI for Teachers",
    desc: "Leverage AI tools to create lesson plans, assessments, personalised learning content, and automate classroom tasks.",
    duration: "3 weeks",
    lessons: "16 lessons",
    color: "cyan",
  },
  
];

const tagColors = {
  Beginner: "tag--cyan",
  Intermediate: "tag--purple",
  Advanced: "tag--pink",
};

function Courses() {
  const headerRef = useRef(null);
  const cardRefs = useRef([]);
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Beginner", "Intermediate", "Advanced"];
  const filtered = filter === "All" ? courses : courses.filter((c) => c.tag === filter);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("courses--visible")),
      { threshold: 0.15 }
    );
    if (headerRef.current) obs.observe(headerRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const cardObs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("course-card--visible")),
      { threshold: 0.08 }
    );
    cardRefs.current.forEach((c) => c && cardObs.observe(c));
    return () => cardObs.disconnect();
  }, [filtered]);

  return (
    <section className="courses-section" id="courses">
      {/* Header */}
      <div className="courses-header courses-animate" ref={headerRef}>
        <h2 className="courses-title">AI-Powered Courses</h2>
        <p className="courses-subtitle">Learn by building. Ship on day one.</p>
        <p className="courses-desc">
          Every course is hands-on, project-based, and built around real AI tools used in the industry today.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="courses-filters">
        {filters.map((f) => (
          <button
            key={f}
            className={`courses-filter-btn ${filter === f ? "courses-filter-btn--active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Cards grid */}
      <div className="courses-grid">
        {filtered.map((course, i) => (
          <div
            className="course-card"
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="course-card-top">
              <span className={`course-tag ${tagColors[course.tag]}`}>{course.tag}</span>
              <div className="course-icon">{course.icon}</div>
            </div>
            <h3 className="course-card-title">{course.title}</h3>
            <p className="course-card-desc">{course.desc}</p>
            <div className="course-card-footer">
              <span className="course-meta">⏱ {course.duration}</span>
              <span className="course-meta">📚 {course.lessons}</span>
              <button className="course-cta">Enroll →</button>
            </div>
            <div className="course-card-glow" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;