import { useEffect, useState } from "react";

const achievements = [
  {
    number: "01",
    category: "HACKATHON",
    title: "Bharatiya Antariksh Hackathon 2026",
    organization: "ISRO",
    year: "2026",
    status: "COMPLETED",
    featured: true,
    description:
      "Participated in the Bharatiya Antariksh Hackathon 2026, working on an innovation-focused problem in a competitive environment.",
    image: "/certificates/isro-hackathon.jpg",
  },

  {
    number: "02",
    category: "IDEATHON",
    title: "NAIN Batch 2.0 Ideathon",
    organization: "NAIN",
    year: "2026",
    status: "TOP 15 TEAM",
    featured: true,
    description:
      "Selected among the Top 15 teams with Village Doc and presented the project before NAIN officials for consideration for final government funding.",
    note: "Final funding selection pending.",
    image: null,
  },

  {
    number: "03",
    category: "HACKATHON",
    title: "Neo Nexus 36.0",
    organization: "National-Level Hackathon",
    year: "2026",
    status: "COMPLETED",
    featured: true,
    description:
      "Participated in a national-level hackathon, developing and presenting a technology-driven solution in a competitive environment.",
    image: "/certificates/neo-nexus.jpg",
  },

  {
    number: "04",
    category: "CERTIFICATION",
    title: "Deloitte Data Analytics Job Simulation",
    organization: "Deloitte",
    year: "2026",
    status: "CERTIFIED",
    description:
      "Completed a practical data analytics job simulation focused on solving business-oriented analytical problems.",
    image: "/certificates/deloitte-data-analytics.jpg",
  },

  {
    number: "05",
    category: "WORKSHOP",
    title: "IoT & Robotics",
    organization: "Adverk",
    year: "2026",
    status: "COMPLETED",
    description:
      "Completed an IoT and Robotics learning experience focused on practical exposure to connected systems and robotics concepts.",
    image: "/certificates/iot-robotics.jpg",
  },

  {
    number: "06",
    category: "CERTIFICATION",
    title: "QuizOff 2026",
    organization: "AI Quiz",
    year: "2026",
    status: "COMPLETED",
    description:
      "Participated in QuizOff 2026, an AI-focused quiz activity testing knowledge and problem-solving ability.",
    image: "/certificates/quizoff-2026.png",
  },

  {
    number: "07",
    category: "CERTIFICATION",
    title: "Introduction to Cybersecurity Awareness",
    organization: "HP LIFE",
    year: "2026",
    status: "CERTIFIED",
    description:
      "Completed HP LIFE's Introduction to Cybersecurity Awareness course, strengthening foundational cybersecurity knowledge.",
    image: "/certificates/hp-cybersecurity.jpg",
  },

  {
  number: "08",
  category: "CERTIFICATION",
  title: "DSA for DeepTech",
  organization: "BrainOvision Solutions India Pvt. Ltd.",
  year: "2026",
  status: "CERTIFICATE OF PARTICIPATION",
  description:
    "Participated in the International Level Bootcamp on DSA for DeepTech, a one-month intensive virtual training program focused on Data Structures & Algorithms for DeepTech applications (student Co-ordinator for CSE dept) .",
  image: "/certificates/dsa-for-deeptech.jpg",
},
];

function Achievements() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [hoveredAchievement, setHoveredAchievement] = useState(null);

  const filters = [
    "ALL",
    "HACKATHON",
    "IDEATHON",
    "CERTIFICATION",
    "WORKSHOP",
  ];

  const filteredAchievements =
    activeFilter === "ALL"
      ? achievements
      : achievements.filter(
          (achievement) => achievement.category === activeFilter
        );

  useEffect(() => {
    document.body.style.overflow = selectedAchievement ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedAchievement]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedAchievement(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const competitionCount = achievements.filter(
    (item) =>
      item.category === "HACKATHON" || item.category === "IDEATHON"
  ).length;

  const certificationCount = achievements.filter(
    (item) => item.category === "CERTIFICATION"
  ).length;

  return (
    <section className="achievements" id="achievements">
      <div className="achievements-header">
        <div>
          <p className="section-label">04 / ACHIEVEMENTS</p>

          <h2>
            Things I've
            <span> earned.</span>
          </h2>

          <p className="achievements-intro">
            Competitions, recognitions, certifications, and experiences
            that mark the progress of my journey as a developer.
          </p>
        </div>

        <div className="achievement-stats">
          <div>
            <strong>{achievements.length}</strong>
            <span>RECOGNITIONS</span>
          </div>

          <div>
            <strong>{competitionCount}</strong>
            <span>COMPETITIONS</span>
          </div>

          <div>
            <strong>{certificationCount}</strong>
            <span>CERTIFICATIONS</span>
          </div>
        </div>
      </div>

      <div className="achievement-filters">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={activeFilter === filter ? "active" : ""}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="achievement-grid">
        {filteredAchievements.map((achievement) => (
          <article
            className={`achievement-card ${
              achievement.featured ? "featured" : ""
            }`}
            key={achievement.number}
            onMouseEnter={() =>
              setHoveredAchievement(achievement.number)
            }
            onMouseLeave={() => setHoveredAchievement(null)}
            onClick={() => setSelectedAchievement(achievement)}
          >
            <div className="achievement-card-top">
              <span className="achievement-number">
                {achievement.number}
              </span>

              <span className="achievement-category">
                {achievement.category}
              </span>

              <span className="achievement-year">
                {achievement.year}
              </span>
            </div>

            <div className="achievement-card-content">
              <div className="achievement-title-row">
                <div>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.organization}</p>
                </div>

                <span className="achievement-arrow">↗</span>
              </div>

              <p className="achievement-description">
                {achievement.description}
              </p>

              <div className="achievement-card-footer">
                <span className="achievement-status">
                  <span></span>
                  {achievement.status}
                </span>

                <span className="view-certificate">
                  {achievement.image
                    ? "VIEW CERTIFICATE"
                    : "VIEW DETAILS"}
                  <span>→</span>
                </span>
              </div>
            </div>

            {hoveredAchievement === achievement.number &&
              achievement.image && (
                <div className="certificate-preview">
                  <div className="certificate-preview-label">
                    <span>PREVIEW</span>
                    <span>CLICK TO EXPAND</span>
                  </div>

                  <img
                    src={achievement.image}
                    alt={`${achievement.title} certificate`}
                  />
                </div>
              )}
          </article>
        ))}
      </div>

      {selectedAchievement && (
        <div
          className="certificate-modal-overlay"
          onClick={() => setSelectedAchievement(null)}
        >
          <div
            className="certificate-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="certificate-modal-header">
              <div>
                <span>{selectedAchievement.category}</span>

                <h3>{selectedAchievement.title}</h3>

                <p>{selectedAchievement.organization}</p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedAchievement(null)}
              >
                ×
              </button>
            </div>

            <div className="certificate-modal-content">
              {selectedAchievement.image ? (
                <div className="certificate-full-image">
                  <img
                    src={selectedAchievement.image}
                    alt={`${selectedAchievement.title} certificate`}
                  />
                </div>
              ) : (
                <div className="achievement-detail-panel">
                  <span>ACHIEVEMENT STATUS</span>

                  <strong>{selectedAchievement.status}</strong>

                  <p>{selectedAchievement.description}</p>

                  {selectedAchievement.note && (
                    <small>{selectedAchievement.note}</small>
                  )}
                </div>
              )}
            </div>

            <div className="certificate-modal-footer">
              <span>
                {selectedAchievement.year} / WORK LABS RECORD
              </span>

              <button
                type="button"
                onClick={() => setSelectedAchievement(null)}
              >
                CLOSE
                <span>×</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Achievements;