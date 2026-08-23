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

  const renderSkills = (items) => (
    <div className="skill-list">
      {items.map((skill) => (
        <span className="skill-item" key={skill.name}>
          <i className={`skill-icon ${skill.icon}`}></i>
          <span className="skill-name">{skill.name}</span>
        </span>
      ))}
    </div>
  );

  return (
    <section className="skills" id="skills">
      <div className="skills-header">
        <p className="section-label">02 / CAPABILITIES</p>

        <h2>
          Tools I use to
          <span> build things.</span>
        </h2>
      </div>

      <div className="skills-grid">

        <div className="skill-group">
          <p className="skill-category">LANGUAGES</p>
          {renderSkills(languages)}
        </div>

        <div className="skill-group">
          <p className="skill-category">DEVELOPMENT</p>
          {renderSkills(development)}
        </div>

        <div className="skill-group">
          <p className="skill-category">TOOLS & SYSTEMS</p>
          {renderSkills(tools)}
        </div>

        <div className="skill-group">
          <p className="skill-category">EXPLORING</p>
          {renderSkills(exploring)}
        </div>

      </div>
    </section>
  );
}

export default Skills;