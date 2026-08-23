function Journey() {
  return (
    <section className="journey" id="journey">
      <div className="journey-header">
        <p className="section-label">04 / JOURNEY</p>

        <h2>
          Still
          <span> becoming.</span>
        </h2>

        <p className="journey-intro">
          My path isn't a straight line. Each project, technology, and
          problem I've worked on has shaped how I build today.
        </p>
      </div>

      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-year">START</div>

          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <h3>Programming Foundations</h3>
            <p>
              Started with C and C++, learning the fundamentals of
              programming, algorithms, and problem solving.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-year">NEXT</div>

          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <h3>Exploring Development</h3>
            <p>
              Expanded into Java, Python, SQL, web development, and
              application development through hands-on projects.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-year current">NOW</div>

          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <h3>Building Real Systems</h3>
            <p>
              Working with React, Android, cybersecurity concepts, GitHub,
              and real-world projects while continuously learning new
              technologies.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Journey;