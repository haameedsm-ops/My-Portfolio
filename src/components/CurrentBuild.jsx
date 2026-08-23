function CurrentBuild() {
  return (
    <section className="current-build">
      <p className="build-label">CURRENTLY BUILDING</p>

      <div className="build-card">
        {/* LEFT / MAIN */}
        <div className="build-main">
          <div className="build-topline">
            <span className="build-index">01</span>
            <span className="build-category">DIGITAL FORENSICS</span>
          </div>

          <div className="build-title-row">
            <div>
              <h3>ForensiX</h3>
              <p className="build-subtitle">
                DIGITAL EVIDENCE INTELLIGENCE PLATFORM
              </p>
            </div>

            <span className="build-status">
              <span className="build-status-dot"></span>
              ACTIVE
            </span>
          </div>

          <p className="build-description">
            Digital forensics platform for analyzing evidence, detecting
            investigation indicators, and generating structured forensic
            reports from digital evidence.
          </p>

          <div className="build-tech">
            <span>REACT</span>
            <span>PYTHON</span>
            <span>FLASK</span>
            <span>SQL</span>
            <span>AI</span>
            <span>CYBERSECURITY</span>
          </div>

          <div className="build-footer">
            <div className="build-progress">
              <div className="build-progress-header">
                <span>BUILD PROGRESS</span>
                <strong>88%</strong>
              </div>

              <div className="build-progress-track">
                <span></span>
              </div>
            </div>

            <div className="build-meta">
              <span>FOCUS</span>
              <strong>Digital Forensics</strong>
            </div>
          </div>
        </div>

        {/* RIGHT / SYSTEM PANEL */}
        <div className="build-side">
          <div className="build-system-status">
            <span className="build-status-dot"></span>
            SYSTEM STATUS
          </div>

          <span className="build-side-label">CURRENT MODULE</span>
          <strong>Evidence Analysis</strong>

          <div className="build-side-line"></div>

          <span className="build-side-label">LANGUAGES USED</span>
          <strong>Python / JavaScript / SQL</strong>

          <div className="build-side-line"></div>

          <span className="build-side-label">PROJECT STATUS</span>
          <strong>Final MVP Integration</strong>
        </div>
      </div>
    </section>
  );
}

export default CurrentBuild;