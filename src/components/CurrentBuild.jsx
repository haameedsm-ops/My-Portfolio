function CurrentBuild() {
  const technologies = [
    "REACT",
    "PYTHON",
    "FLASK",
    "SQL",
    "AI",
    "CYBERSECURITY",
  ];

  return (
    <section className="current-build" id="current-build">
      <div className="build-heading">
        <div>
          <p className="build-label">CURRENTLY BUILDING</p>

          <h2>
            One system.
            <span> One problem at a time.</span>
          </h2>
        </div>

        <div className="build-live-indicator">
          <span></span>
          DEVELOPMENT ACTIVE
        </div>
      </div>

      <div className="build-card">
        {/* MAIN PROJECT PANEL */}
        <div className="build-main">
          <div className="build-topline">
            <span className="build-index">01 / ACTIVE BUILD</span>

            <span className="build-category">
              DIGITAL FORENSICS
            </span>
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
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
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

        {/* SYSTEM PANEL */}
        <aside className="build-side">
          <div className="build-system-status">
            <span className="build-status-dot"></span>
            SYSTEM STATUS
          </div>

          <div className="build-side-block">
            <span className="build-side-label">
              CURRENT MODULE
            </span>

            <strong>Evidence Analysis</strong>
          </div>

          <div className="build-side-line"></div>

          <div className="build-side-block">
            <span className="build-side-label">
              LANGUAGES USED
            </span>

            <strong>Python / JavaScript / SQL</strong>
          </div>

          <div className="build-side-line"></div>

          <div className="build-side-block">
            <span className="build-side-label">
              PROJECT STATUS
            </span>

            <strong>Final MVP Integration</strong>
          </div>

          <div className="build-side-footer">
            <span>BUILD ID</span>
            <strong>FORENSIX-01</strong>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default CurrentBuild;