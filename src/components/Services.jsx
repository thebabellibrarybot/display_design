import React from "react";
import "./Services.css";

import {
  Home,
  Palette,
  Box,
  Camera,
  Lightbulb,
  Ruler, // good for install/measurements
} from "lucide-react";

const services = {
  title: "Our Expertise",
  description:
    "Professional art installation and display services that transform your space into a thoughtfully curated gallery experience.",
  items: [
    {
      title: "Gallery Wall Installation",
      description:
        "Expert installation of artwork collections with precise spacing, leveling, and lighting considerations for maximum visual impact.",
      features: [
        "Layout Planning",
        "Precise Measurements",
        "Professional Hanging",
        "Spacing Optimization",
      ],
      Icon: Home,
    },
    {
      title: "Framing & Stretching",
      description:
        "Museum-quality framing and professional canvas stretching services using archival materials and techniques that protect and enhance your artwork.",
      features: ["Conservation Framing", "Canvas Stretching", "Custom Matting", "UV Protection"],
      Icon: Box,
    },
    {
      title: "Custom Art Creation",
      description:
        "Commissioned artwork and custom pieces designed specifically for your space, style, and vision.",
      features: ["Original Paintings", "Digital Art", "Mixed Media", "Collaborative Design"],
      Icon: Palette,
    },
    {
      title: "Display Systems",
      description:
        "Custom gallery shelving, display cases, and storage solutions designed to showcase and protect your collection.",
      features: ["Gallery Shelving", "Display Cases", "Storage Solutions", "Museum Systems"],
      Icon: Lightbulb,
    },
    {
      title: "Lighting & Finishing",
      description:
        "Professional lighting design, trim work, and wall preparation to create the perfect gallery environment.",
      features: ["Art Lighting", "Light Boxes", "Decorative Trim", "Wall Preparation"],
      Icon: Camera,
    },
    // ✅ Added a 6th card to make it 6 total
    {
      title: "Planning & Consultation",
      description:
        "On-site or remote planning to help you curate, place, and sequence works for a cohesive, gallery-level presentation.",
      features: ["Collection Review", "Room-by-Room Plan", "Hardware Guidance", "Install Roadmap"],
      Icon: Ruler,
    },
  ],
};

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services__inner">
        <header className="services__header">
          <h2 className="services__title">{services.title}</h2>
          <p className="services__desc">{services.description}</p>
        </header>

        <div className="services__grid">
          {services.items.map((service) => {
            const Icon = service.Icon;
            return (
              <article key={service.title} className="service-card">
                <div className="service-card__icon">
                  <Icon size={22} strokeWidth={1.5} />
                </div>

                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__text">{service.description}</p>

                <ul className="service-card__features">
                  {service.features.map((feature) => (
                    <li key={feature} className="service-card__feature">
                      <span className="service-card__dot" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}