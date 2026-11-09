
import { useEffect, useRef, useState } from "react";

function Navbar() {
  const [isAnimating, setIsAnimating] = useState(false);
  const animationTimer = useRef(null);

  const playAnimation = () => {
    clearTimeout(animationTimer.current);

    // Reset first so the animation can replay.
    setIsAnimating(false);

    requestAnimationFrame(() => {
      setIsAnimating(true);

      animationTimer.current = setTimeout(() => {
        setIsAnimating(false);
      }, 1800);
    });
  };

  useEffect(() => {
    return () => clearTimeout(animationTimer.current);
  }, []);

  return (
    <nav className="navbar">
      <a
        href="#home"
        className={`logo ${isAnimating ? "logo-active" : ""}`}
        onClick={playAnimation}
      >
        <span className="logo-mark">&gt;_</span>

        <span className="logo-text">
          <span className="logo-base">WORK LABS</span>
          <span className="logo-fill">WORK LABS</span>
          <span className="logo-liquid">🧪</span>
        </span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#achievements">Achievements</a>
        <a href="#journey">Journey</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
