import { useEffect, useState } from "react";

function CurrentBuild() {
  const technologies = [
    "PYTHON",
    "GIT",
    "OSV API",
    "SECURITY",
    "CODE QUALITY",
    "CLI",
  ];

  const milestones = [
    {
      name: "Core repository scanner",
      completed: true,
    },
    {
      name: "Git repository analysis",
      completed: true,
    },
    {
      name: "Security & secrets scanning",
      completed: true,
    },
    {
      name: "Dependency analysis",
      completed: true,
    },
    {
      name: "Vulnerability detection",
      completed: true,
    },
    {
      name: "Code quality analysis",
      completed: true,
    },
    {
      name: "Repository health diagnosis",
      completed: true,
    },
    {
      name: "Outdated dependency detection",
      completed: true,
    },
    {
      name: "Duplicate code detection",
      completed: true,
    },
    {
      name: "Final testing & polish",
      completed: false,
    },
  ];

  const completedMilestones = milestones.filter(
    (milestone) => milestone.completed
  ).length;

  const totalMilestones = milestones.length;

  const progressPercentage = Math.round(
    (completedMilestones / totalMilestones) * 100
  );

  const [githubActivity, setGithubActivity] = useState({
    message: "Optimize duplicate code detection",
    date: "2026-09-06T16:20:35Z",
    url: "https://github.com/haameedsm-ops/Repo-doc/commit/e09e690c1a27b7103e27504eae4cc9b1f8b2e63f",
  });

  useEffect(() => {
    const loadGithubData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/haameedsm-ops/Repo-doc/commits?per_page=1"
        );

        if (!response.ok) return;

        const commits = await response.json();

        if (commits.length) {
          const latestCommit = commits[0];

          setGithubActivity({
            message:
              latestCommit.commit.message.split("\n")[0],
            date: latestCommit.commit.author?.date,
            url: latestCommit.html_url,
          });
        }
      } catch (error) {
        console.log(
          "GitHub project data unavailable."
        );
      }
    };

    loadGithubData();
  }, []);

  const formatRelativeTime = (date) => {
    if (!date) return "";

    const diff =
      Date.now() - new Date(date).getTime();

    const minutes = Math.floor(
      diff / (1000 * 60)
    );

    const hours = Math.floor(
      diff / (1000 * 60 * 60)
    );

    const days = Math.floor(
      diff / (1000 * 60 * 60 * 24)
    );

    if (minutes < 1) return "JUST NOW";
    if (minutes < 60) return `${minutes}M AGO`;
    if (hours < 24) return `${hours}H AGO`;
    if (days < 30) return `${days}D AGO`;

    return new Date(date)
      .toLocaleDateString()
      .toUpperCase();
  };

  const formatDate = (date) => {
    if (!date) return "";

    return new Date(date)
      .toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .toUpperCase();
  };

  return (
    <section
      className="current-build"
      id="current-build"
    >
      <div className="build-heading">
        <div>
          <p className="build-label">
            CURRENTLY BUILDING
          </p>

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
        <div className="build-main">
          <div className="build-topline">
            <span className="build-index">
              01 / ACTIVE BUILD
            </span>

            <span className="build-category">
              DEVELOPER TOOL
            </span>
          </div>

          <div className="build-title-row">
            <div>
              <h3>Repo Doctor</h3>

              <p className="build-subtitle">
                REPOSITORY HEALTH & DIAGNOSTICS TOOL
              </p>
            </div>

            <span className="build-status">
              <span className="build-status-dot"></span>
              ACTIVE
            </span>
          </div>

          <p className="build-description">
            A developer-focused CLI that scans software
            repositories, analyzes Git history, checks
            dependencies and vulnerabilities, detects
            code-quality issues, and generates an overall
            repository health diagnosis.
          </p>

          <div className="build-tech">
            {technologies.map((technology) => (
              <span key={technology}>
                {technology}
              </span>
            ))}
          </div>

          <div className="build-footer">
            <div className="build-progress">
              <div className="build-progress-header">
                <span>BUILD PROGRESS</span>

                <strong>
                  {progressPercentage}%
                </strong>
              </div>

              <div className="build-progress-track">
                <span
                  style={{
                    width: `${progressPercentage}%`,
                  }}
                ></span>
              </div>
            </div>

            <div className="build-meta">
              <span>FOCUS</span>

              <strong>
                {completedMilestones}/{totalMilestones} milestones
              </strong>
            </div>
          </div>
        </div>

        <aside className="build-side">
          <div className="build-system-status">
            <span className="build-status-dot"></span>
            LIVE REPOSITORY
          </div>

          <div className="build-side-block">
            <span className="build-side-label">
              REPOSITORY
            </span>

            <strong>
              haameedsm-ops / Repo-doc
            </strong>
          </div>

          <div className="build-side-line"></div>

          <div className="build-side-block">
            <span className="build-side-label">
              LATEST COMMIT
            </span>

            <a
              href={githubActivity.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                color: "#8d98a5",
                textDecoration: "none",
                lineHeight: "1.5",
                fontSize: "12px",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.color =
                  "#7cffc4";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.color =
                  "#8d98a5";
              }}
            >
              {githubActivity.message}

              <span
                style={{
                  marginLeft: "7px",
                  color: "#4d5965",
                }}
              >
                ↗
              </span>
            </a>
          </div>

          <div className="build-side-line"></div>

          <div className="build-side-block">
            <span className="build-side-label">
              LAST UPDATED
            </span>

            <strong>
              {formatDate(githubActivity.date)} ·{" "}
              {formatRelativeTime(
                githubActivity.date
              )}
            </strong>
          </div>

          <div className="build-side-line"></div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "4px",
              marginBottom: "8px",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#7cffc4",
                boxShadow:
                  "0 0 0 0 rgba(124, 255, 196, 0.5)",
                animation: "githubPulse 2s infinite",
                flexShrink: 0,
              }}
            ></span>

            <span
              style={{
                color: "#697582",
                fontSize: "9px",
                letterSpacing: "1.4px",
              }}
            >
              GITHUB ACTIVITY DETECTED
            </span>
          </div>

          <div className="build-side-footer">
            <span>BUILD ID</span>

            <strong>REPO-DOC-01</strong>
          </div>
        </aside>
      </div>

      <style>
        {`
          @keyframes githubPulse {
            0% {
              box-shadow: 0 0 0 0 rgba(124, 255, 196, 0.45);
            }

            70% {
              box-shadow: 0 0 0 7px rgba(124, 255, 196, 0);
            }

            100% {
              box-shadow: 0 0 0 0 rgba(124, 255, 196, 0);
            }
          }
        `}
      </style>
    </section>
  );
}

export default CurrentBuild;