import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | copied

  const email = "hello@example.com"; // <-- change later
  const phone = "(555) 555-5555";     // <-- change later
  const instagram = "@yourhandle";    // <-- change later

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
      setTimeout(() => setStatus("idle"), 1200);
    } catch {
      // Clipboard may fail on some browsers—no big deal.
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <header className="contact__header">
          <h2 className="contact__title">Contact</h2>
          <p className="contact__subtitle">
            Tell me what you’re installing, where it’s going, and your timeline. I’ll reply with
            next steps and an estimate.
          </p>
        </header>

        <div className="contact__grid">
          {/* Left: form (front-end only) */}
          <form
            className="contact__panel contact__form"
            onSubmit={(e) => {
              e.preventDefault();
              // Front-end only: you can later wire this to Formspree/Netlify/etc.
              alert("Form submitted (demo). Hook this up to Formspree later.");
            }}
          >
            <h3 className="contact__panelTitle">Inquiry</h3>

            <label className="contact__label">
              Name
              <input className="contact__input" type="text" name="name" required />
            </label>

            <label className="contact__label">
              Email
              <input className="contact__input" type="email" name="email" required />
            </label>

            <label className="contact__label">
              What do you need help with?
              <select className="contact__input" name="topic" defaultValue="install">
                <option value="install">Installation</option>
                <option value="gallery-wall">Gallery Wall Planning</option>
                <option value="framing">Framing / Stretching</option>
                <option value="display">Display Systems</option>
                <option value="lighting">Lighting / Finishing</option>
                <option value="other">Other</option>
              </select>
            </label>

            <label className="contact__label">
              Message
              <textarea
                className="contact__textarea"
                name="message"
                rows={6}
                placeholder="Location (neighborhood/city), wall type (drywall/plaster/brick), number of pieces, sizes, and any deadlines."
                required
              />
            </label>

            <button className="contact__submit" type="submit">
              Send
            </button>

            <p className="contact__note">
              Front-end only for now. When you’re ready, we can connect this to Formspree so it
              emails you automatically.
            </p>
          </form>

          {/* Right: direct contact card */}
          <aside className="contact__panel contact__info">
            <h3 className="contact__panelTitle">Direct</h3>

            <div className="contact__row">
              <span className="contact__k">Email</span>
              <span className="contact__v">
                <a className="contact__link" href={`mailto:${email}`}>
                  {email}
                </a>
                <button type="button" className="contact__copy" onClick={copyEmail}>
                  {status === "copied" ? "Copied" : "Copy"}
                </button>
              </span>
            </div>

            <div className="contact__row">
              <span className="contact__k">Phone</span>
              <span className="contact__v">
                <a className="contact__link" href={`tel:${phone.replace(/[^\d+]/g, "")}`}>
                  {phone}
                </a>
              </span>
            </div>

            <div className="contact__row">
              <span className="contact__k">Instagram</span>
              <span className="contact__v">
                <span className="contact__muted">{instagram}</span>
              </span>
            </div>

            <div className="contact__divider" />

            <h4 className="contact__miniTitle">To quote accurately</h4>
            <ul className="contact__checklist">
              <li>Address / neighborhood</li>
              <li>Wall type (drywall, plaster, brick)</li>
              <li>Number of pieces + sizes</li>
              <li>Photos of the wall and artwork (optional)</li>
              <li>Timeline / deadline</li>
            </ul>

            <a className="contact__button" href="#services">
              View Services
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}