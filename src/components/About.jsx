import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <header className="about__header">
          <h2 className="about__title">About</h2>
          <p className="about__subtitle">
            Installation, fabrication, and logistics—built for art, designed for homes and
            studios.
          </p>
        </header>

        <div className="about__grid">
          {/* Left column: statement */}
          <article className="about__panel">
            <h3 className="about__panelTitle">Statement</h3>
            <p className="about__text">
              I help collectors, artists, and small galleries install and present work with the
              same care you’d expect in a professional exhibition. My approach is practical and
              detail-driven: measurement, layout, hardware choice, wall conditions, and
              sequencing—so the final result feels intentional.
            </p>
            <p className="about__text">
              Whether it’s a single piece that needs the right placement or a full wall that
              needs balance and rhythm, I treat the room like a gallery and the artwork like a
              living object—protected, level, and properly supported.
            </p>
          </article>

          {/* Right column: quick facts */}
          <aside className="about__panel about__panel--facts">
            <h3 className="about__panelTitle">At a glance</h3>

            <dl className="about__facts">
              <div className="about__factRow">
                <dt>Based</dt>
                <dd>New York City</dd>
              </div>

              <div className="about__factRow">
                <dt>Focus</dt>
                <dd>Install • Display • Fabrication</dd>
              </div>

              <div className="about__factRow">
                <dt>Work</dt>
                <dd>Residential, studios, galleries</dd>
              </div>

              <div className="about__factRow">
                <dt>Tools</dt>
                <dd>Layout, mounting, finishing, lighting</dd>
              </div>
            </dl>

            <div className="about__cta">
              <a className="about__button" href="#contact">
                Contact
              </a>
              <a className="about__button about__button--ghost" href="#services">
                Services
              </a>
            </div>
          </aside>
        </div>

        {/* Bottom: “services style” bullet strip */}
        <div className="about__strip" aria-label="Capabilities">
          <div className="about__stripItem">Precise measuring & layout</div>
          <div className="about__stripItem">Hardware selection & mounting</div>
          <div className="about__stripItem">Wall prep & finishing</div>
          <div className="about__stripItem">Lighting guidance</div>
        </div>
      </div>
    </section>
  );
}
