function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-mark">⚗</span>
            WORK LABS
          </div>

          <h2>
            Built with curiosity.
            <span> Driven by problems.</span>
          </h2>

          <p>
            A personal developer lab where ideas become projects,
            experiments, and working systems.
          </p>
        </div>
      </div>

      <div
        className="footer-bottom"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          flexWrap: "nowrap",
        }}
      >
        <p
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "11px",
            letterSpacing: "0.4px",
            color: "#697582",
            margin: 0,
          }}
        >
          © {new Date().getFullYear()} Shaik Mohammed Haameed
        </p>

        <button
          type="button"
          onClick={scrollToTop}
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "11px",
            letterSpacing: "0.8px",
            color: "#8d98a5",
            whiteSpace: "nowrap",
          }}
        >
          BACK TO TOP ↑
        </button>
      </div>
    </footer>
  );
}

export default Footer;