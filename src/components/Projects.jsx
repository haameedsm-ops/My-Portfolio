import { useEffect, useState } from "react";
import projects from "../data/projects";

function Projects() {
  const projectList = Object.values(projects);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <p className="section-label">03 / PROJECTS</p>

        <h2>
          Things I've
          <span> built.</span>
        </h2>

        <p className="projects-intro">
          Projects are where I turn concepts into working systems,
          experiment with new technologies, and learn through real problems.
        </p>
      </div>

      <div className="project-list">
        {projectList.map((project, index) => (
          <article className="project-card" key={project.name}>
            <div className="project-number">
              <span>PROJECT</span>
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="project-content">
              <div className="project-heading">
                <div>
                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                </div>

                <span className="project-status">
                  <span className="status-dot"></span>
                  {project.status}
                </span>
              </div>

              <p className="project-description">
                {project.solution}
              </p>

              <div className="project-tech">
                {project.stack.split(" / ").map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-meta">
                <div>
                  <span>ROLE</span>
                  <strong>{project.role}</strong>
                </div>

                <div>
                  <span>FOCUS</span>
                  <strong>{project.type}</strong>
                </div>
              </div>

              <div className="project-actions">
                <button
                  type="button"
                  className="project-primary"
                  onClick={() => setSelectedProject(project)}
                >
                  VIEW CASE
                  <span>↗</span>
                </button>

                <a
                  href={project.github}
                  className="project-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="github-icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.13c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.29 1.18-3.1.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.08.78 2.18v3.23c0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
                    />
                  </svg>

                  GITHUB
                  <span>↗</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedProject && (
        <div
          className="case-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="case-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="case-modal-header">
              <div>
                <p className="case-modal-label">
                  {selectedProject.type} / CASE STUDY
                </p>

                <h3>{selectedProject.name}</h3>
              </div>

              <button
                type="button"
                className="case-close-icon"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
            </div>

            <div className="case-modal-body">
              <div className="case-block">
                <span>01 / THE PROBLEM</span>
                <p>{selectedProject.problem}</p>
              </div>

              <div className="case-block">
                <span>02 / THE SOLUTION</span>
                <p>{selectedProject.solution}</p>
              </div>

              <div className="case-block">
                <span>03 / WHAT I LEARNED</span>
                <p>{selectedProject.learning}</p>
              </div>

              <div className="case-details">
                <div>
                  <span>ROLE</span>
                  <strong>{selectedProject.role}</strong>
                </div>

                <div>
                  <span>TECH STACK</span>
                  <strong>{selectedProject.stack}</strong>
                </div>
              </div>
            </div>

            <div className="case-modal-footer">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
              >
                CLOSE CASE
                <span>×</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;