function Journey() {
  const journeyStages = [
    {
      number: "01",
      label: "FOUNDATION",
      title: "Programming Foundations",
      description:
        "Started with C and C++, building a strong foundation in programming, algorithms, data structures, and problem solving.",
      tags: ["C", "C++", "DSA", "Problem Solving"],
    },
    {
      number: "02",
      label: "EXPLORATION",
      title: "Exploring Development",
      description:
        "Expanded into Java, Python, SQL, web development, and Android while learning through hands-on projects.",
      tags: ["Java", "Python", "SQL", "Web", "Android"],
    },
    {
      number: "03",
      label: "BUILDING",
      title: "Building Real Projects",
      description:
        "Moved from learning concepts to building working systems, experimenting with React, Flask, GitHub, APIs, and application development.",
      tags: ["React", "Flask", "GitHub", "APIs"],
    },
    {
      number: "04",
      label: "CHALLENGE",
      title: "Hackathons & Innovation",
      description:
        "Started applying technical skills in competitive environments through hackathons, ideathons, and team-based problem solving.",
      tags: ["ISRO", "NAIN", "Neo Nexus", "Hackathons"],
    },
    {
      number: "05",
      label: "SPECIALIZATION",
      title: "Exploring Cybersecurity",
      description:
        "Developing a deeper interest in cybersecurity, digital forensics, investigation workflows, and security-focused software systems.",
      tags: ["Cybersecurity", "Digital Forensics", "Security"],
    },
    {
      number: "06",
      label: "NOW",
      title: "Still Becoming",
      description:
        "Currently in my 3rd year of Computer Science, continuing to build projects, explore new technologies, and turn ideas into practical systems.",
      tags: ["Build", "Learn", "Explore", "Repeat"],
      current: true,
    },
  ];

  return (
    <section className="journey" id="journey">
      <div className="journey-header">
        <p className="section-label">05 / JOURNEY</p>

        <h2>
          Still
          <span> becoming.</span>
        </h2>

        <p className="journey-intro">
          From writing my first programs to building complete systems,
          every stage has been about learning by doing.
        </p>
      </div>

      <div className="journey-track">
        {journeyStages.map((stage) => (
          <article
            className={`journey-stage ${stage.current ? "current" : ""}`}
            key={stage.number}
          >
            <div className="journey-stage-marker">
              <span className="journey-stage-number">
                {stage.number}
              </span>

              <div className="journey-stage-dot"></div>
            </div>

            <div className="journey-stage-content">
              <div className="journey-stage-top">
                <span className="journey-stage-label">
                  {stage.label}
                </span>

                {stage.current && (
                  <span className="journey-live">
                    <span></span>
                    CURRENT
                  </span>
                )}
              </div>

              <h3>{stage.title}</h3>

              <p>{stage.description}</p>

              <div className="journey-tags">
                {stage.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Journey;