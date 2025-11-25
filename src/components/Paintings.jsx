import React, { useMemo, useState } from "react";
import "./Paintings.css";
import ImageSlide from "./ImageSlide";
import { groupPaintingsByYear, getFilesForYear } from "../utils/files";

const paintingsByYear = groupPaintingsByYear();


export default function Paintings() {
  const years = useMemo(
    () => Object.keys(paintingsByYear).sort().reverse(), // newest first
    []
  );

  const [activeYear, setActiveYear] = useState(years[0] || null);
  const images = activeYear ? getFilesForYear(activeYear) : [];
  console.log(images, 'images')

  return (
    <main className="page paintings-page">
        <header className="navbar-sm">
            <p>Paintings</p>
            {/* Year submenu */}
            <nav className="year-menu" aria-label="Paintings by year">
            {years.map((year) => (
                <button
                key={year}
                type="button"
                className={
                    "year-menu__item" +
                    (year === activeYear ? " year-menu__item--active" : "")
                }
                onClick={() => setActiveYear(year)}
                >
                {year}
                </button>
            ))}
            </nav>
        </header>

        {/* List of ImageSlides */}
        <section className="image-list">
            {images.length === 0 ? (
            <p>No paintings found for {activeYear}.</p>
            ) : (
            images.map((img) => (
                <ImageSlide key={img.path || img.src} image={img} />
            ))
            )}
        </section>
      
    </main>
  );
}