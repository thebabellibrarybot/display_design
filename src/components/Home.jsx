import "../App.css";
import Navbar from "./Navbar";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import { useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // ✅ If we navigated here from another route with a scroll target, scroll now.
  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!target) return;

    const map = {
      hero: heroRef,
      services: servicesRef,
      about: aboutRef,
      contact: contactRef,
    };

    // Scroll to the requested section
    map[target]?.current?.scrollIntoView({ behavior: "smooth" });

    // Clear the state so it doesn't re-scroll on back/refresh
    navigate("/", { replace: true, state: {} });
  }, [location.state, navigate]);

  return (
    <main>
      <Navbar
        onHero={() => scrollTo(heroRef)}
        onAbout={() => scrollTo(aboutRef)}
        onServices={() => scrollTo(servicesRef)}
        onContact={() => scrollTo(contactRef)}
      />

      <section ref={heroRef} id="home" className="home-hero" />

      <section ref={servicesRef} id="services">
        <Services />
      </section>

      <section ref={aboutRef} id="about">
        <About />
      </section>

      <section ref={contactRef} id="contact">
        <Contact />
      </section>
    </main>
  );
}

