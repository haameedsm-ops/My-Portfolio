function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        <span className="logo-mark">&gt;_</span>
        <span>WORK LABS 🧪</span>
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