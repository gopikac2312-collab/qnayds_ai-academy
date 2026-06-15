import { useState } from "react";
import "../styles/enroll.css";

function Enroll() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) return;

    // ✅ Replace with your WhatsApp number (include country code, no + or spaces)
    const WHATSAPP_NUMBER = "919656331815";

    const message =
      `🎓 *New Enrollment Request*\n\n` +
      `👤 *Name:* ${form.name}\n` +
      `✉️ *Email:* ${form.email}\n` +
      `📞 *Phone:* ${form.phone}\n\n` +
      `_Sent from Qnayds AI Academy website_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, "_blank");

    setSubmitted(true);
  };

  return (
    <section className="enroll-section" id="enroll">
      <div className="enroll-card">
        {/* Glow blobs */}
        <div className="enroll-blob enroll-blob--1" />
        <div className="enroll-blob enroll-blob--2" />

        {!submitted ? (
          <>
            <div className="enroll-header">
              <h2 className="enroll-title">Ready to Master the Future with AI?</h2>
              <p className="enroll-desc">
                Join the waitlist today. Seats are limited for the first batch.
                Be among the first to build something real.
              </p>
            </div>

            <form className="enroll-form" onSubmit={handleSubmit}>
              {/* Row 1 — Name + Email */}
              <div className="enroll-row">
                <div className="enroll-field">
                  <label className="enroll-label">FULL NAME</label>
                  <div className="enroll-input-wrap">
                    <span className="enroll-icon">👤</span>
                    <input
                      className="enroll-input"
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="enroll-field">
                  <label className="enroll-label">EMAIL ADDRESS</label>
                  <div className="enroll-input-wrap">
                    <span className="enroll-icon">✉️</span>
                    <input
                      className="enroll-input"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Row 2 — Phone */}
              <div className="enroll-field">
                <label className="enroll-label">PHONE NUMBER</label>
                <div className="enroll-input-wrap enroll-input-wrap--half">
                  <span className="enroll-icon">📞</span>
                  <input
                    className="enroll-input"
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Submit */}
              <button className="enroll-submit" type="submit">
                Enroll Now ↗
              </button>

              <p className="enroll-secure">🛡 100% Secure &amp; Professional Callback</p>
            </form>
          </>
        ) : (
          <div className="enroll-success">
            <div className="enroll-success-icon">🎉</div>
            <h2 className="enroll-title">You're on the list!</h2>
            <p className="enroll-desc">
              Thanks, <strong>{form.name}</strong>! We'll reach out to{" "}
              <strong>{form.email}</strong> soon with next steps.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Enroll;