import React from "react";
import "../styles/reviews.css";

const reviews = [
  {
    id: 1,
    name: "Fahad Haris",
    initials: "FH",
    color: "purple",
    date: "9 months ago",
    rating: 5,
    text: "I recently completed an online internship class, and it turned out to be an incredibly valuable experience. The sessions were well-organized, engaging, and full of useful insights. The instructors explained every concept clearly, which made the learning process enjoyable.",
  },
  {
    id: 2,
    name: "Aiswarya K R",
    initials: "AK",
    color: "teal",
    date: "8 months ago",
    rating: 5,
    text: "I recently completed a 5-day online internship on Artificial Intelligence. The sessions were easy to understand, very informative, and helped me strengthen my basics in AI. The teacher was supportive and engaging, which made me more interested in learning further.",
  },
  {
    id: 3,
    name: "Abhijith M",
    initials: "AM",
    color: "coral",
    date: "9 months ago",
    rating: 5,
    text: "I recently completed a 5 day online internship & workshop on Artificial Intelligence. It was a great learning experience that helped me strengthen my basic knowledge in AI and machine learning. The teachers were very supportive, making it easy to understand and stay engaged.",
  },
  {
    id: 4,
    name: "Aswan Raj D",
    initials: "AR",
    color: "amber",
    date: "9 months ago",
    rating: 5,
    text: "I recently finished a 5-day internship program and it was an amazing learning experience. The mentor was excellent, which made the learning process smooth and enjoyable for everyone.",
  },
  {
    id: 5,
    name: "Sreerag V R",
    initials: "SR",
    color: "green",
    date: "9 months ago",
    rating: 5,
    text: "I recently completed a 5-day Artificial Intelligence and Machine Learning internship program. Study materials and elements are good. Guides are supportive and classes are easy to learn from.",
  },
  {
    id: 6,
    name: "Mohammed Shibin",
    initials: "MS",
    color: "blue",
    date: "11 months ago",
    rating: 5,
    text: "I recently completed a 5-day online internship and workshop on Artificial Intelligence. It was an enriching experience with well-organized content and clear, insightful explanations of complex concepts.",
  },
];

function StarRating({ count = 5 }) {
  return (
    <div className="rv-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="rv-card">
      <div className="rv-reviewer-row">
        <div className={`rv-avatar rv-avatar--${review.color}`}>
          {review.initials}
        </div>
        <div>
          <p className="rv-reviewer-name">{review.name}</p>
          <p className="rv-reviewer-meta">{review.date}</p>
        </div>
      </div>
      <StarRating count={review.rating} />
      <p className="rv-review-text">{review.text}</p>
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="rv-section">
      <div className="rv-header">
        <h2 className="rv-title">What our students say</h2>
        <p className="rv-subtitle">
          Real feedback from our internship and workshop participants
        </p>
      </div>

      <div className="rv-rating-summary">
        <span className="rv-big-rating">4.6</span>
        <div className="rv-rating-detail">
          <div className="rv-google-badge">
            <span className="rv-g-icon">G</span>
            Google Reviews
          </div>
          <StarRating count={5} />
          <span className="rv-total-count">Based on 6 reviews</span>
        </div>
      </div>

      <div className="rv-grid">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      <div className="rv-cta">
        <a
          href="https://www.google.com/search?q=qnayds+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="rv-cta-link"
        >
          View all Google reviews →
        </a>
      </div>
    </section>
  );
}