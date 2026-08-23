import { useState } from "react";

function Hero() {
  const [transitioning, setTransitioning] = useState(false);

  const handleNavigation = (event, target) => {
  event.preventDefault();

  if (transitioning) {
    return;
  }

  setTransitioning(true);

  setTimeout(() => {
    const targetElement = document.getElementById(target);

    if (!targetElement) {
      setTransitioning(false);
      return;
    }

    const targetPosition =
      targetElement.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: targetPosition,
      behavior: "instant",
    });

    // Let the transition panels finish opening.
    setTimeout(() => {
      // Remove the full-screen transition overlay first.
      setTransitioning(false);

      // Wait one frame for the overlay to disappear,
      // then start the destination screen animation.
      requestAnimationFrame(() => {
        targetElement.classList.remove("screen-incoming");

        void targetElement.offsetWidth;

        targetElement.classList.add("screen-incoming");

        setTimeout(() => {
          targetElement.classList.remove("screen-incoming");
        }, 1050);
      });
    }, 800);
  }, 500);
};

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-status">
          <span className="status-pulse"></span>
          SYSTEM STATUS: ONLINE
        </div>

        <p className="hero-eyebrow">
          COMPUTER SCIENCE / BUILDER / EXPLORER
        </p>

        <h1>
          Hi, I'm <span>Haameed.</span>
        </h1>

        <h2>
          Interactive Learner
          <span> · </span>
          Adaptive Developer
          <span> · </span>
          Solution Builder
        </h2>

        <p className="hero-description">
          3rd Year Computer Science Engineering Student building practical
          software, exploring cybersecurity, and turning ideas into working
          systems.
        </p>

        <div className="hero-buttons">
          <a
            href="#projects"
            className="hero-primary"
            onClick={(event) => handleNavigation(event, "projects")}
          >
            VIEW PROJECTS
            <span>↗</span>
          </a>

          <a
            href="#contact"
            className="hero-secondary"
            onClick={(event) => handleNavigation(event, "contact")}
          >
            CONTACT ME
            <span>↗</span>
          </a>
        </div>

        <div className="hero-meta">
          <span>BASED IN INDIA</span>
          <span>OPEN TO OPPORTUNITIES</span>
        </div>
      </section>

      {transitioning && (
        <div className="hero-transition">
          <div className="transition-panel transition-panel-left"></div>

          <div className="transition-panel transition-panel-right"></div>

          <div className="transition-line transition-line-left"></div>

          <div className="transition-line transition-line-right"></div>

          <div className="transition-core">
            <span>ACCESSING LAB</span>
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;