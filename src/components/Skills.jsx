function Skills() {
  const languages = [
    { name: "C", icon: "devicon-c-plain" },
    { name: "C++", icon: "devicon-cplusplus-plain" },
    { name: "Java", icon: "devicon-java-plain" },
    { name: "Python", icon: "devicon-python-plain" },
    { name: "JavaScript", icon: "devicon-javascript-plain" },
    { name: "SQL", icon: "devicon-mysql-plain" },
  ];

  const development = [
    { name: "React", icon: "devicon-react-original" },
    { name: "HTML / CSS", icon: "devicon-html5-plain" },
    { name: "Flask", icon: "devicon-flask-original" },
    { name: "Android", icon: "devicon-android-plain" },
  ];

  const tools = [
    { name: "Git", icon: "devicon-git-plain" },
    { name: "GitHub", icon: "devicon-github-original" },
    { name: "VS Code", icon: "devicon-vscode-plain" },
    { name: "Android Studio", icon: "devicon-androidstudio-plain" },
    { name: "MySQL", icon: "devicon-mysql-plain" },
  ];

  const exploring = [
    { name: "Cybersecurity", icon: "devicon-linux-plain" },
    { name: "APIs", icon: "devicon-fastapi-plain" },
    { name: "Cloud", icon: "devicon-amazonwebservices-plain-wordmark" },
    { name: "New Technologies", icon: "devicon-devicon-plain" },
  ];

  const categories = [
    {
      number: "01",
      title: "LANGUAGES",
      description: "Core programming languages I build and solve problems with.",
      skills: languages,
    },
    {
      number: "02",
      title: "DEVELOPMENT",
      description: "Frameworks and platforms I use to turn ideas into applications.",
      skills: development,
    },
    {
      number: "03",
      title: "TOOLS & SYSTEMS",
      description: "Tools that support my development workflow and projects.",
      skills: tools,
    },
    {
      number: "04",
      title: "EXPLORING",
      description: "Technologies I'm currently learning and experimenting with.",
      skills: exploring,
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-header">
        <div>
          <p className="section-label">02 / CAPABILITIES</p>

          <h2>
            Tools I use to
            <span> build things.</span>
          </h2>
        </div>

        <div className="skills-header-meta">
          <span>SKILL SYSTEM</span>
          <strong>ACTIVE</strong>
        </div>
      </div>

      <div className="skills-grid">
        {categories.map((category) => (
          <article className="skill-group" key={category.number}>
            <div className="skill-group-top">
              <span className="skill-group-number">
                {category.number}
              </span>

              <span className="skill-group-count">
                {String(category.skills.length).padStart(2, "0")} SKILLS
              </span>
            </div>

            <div className="skill-group-heading">
              <h3>{category.title}</h3>

              <span className="skill-group-arrow">↗</span>
            </div>

            <p className="skill-group-description">
              {category.description}
            </p>

            <div className="skill-list">
              {category.skills.map((skill) => (
                <span className="skill-item" key={skill.name}>
                  <span className="skill-icon-box">
                    <i className={`skill-icon ${skill.icon}`}></i>
                  </span>

                  <span className="skill-name">{skill.name}</span>
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;