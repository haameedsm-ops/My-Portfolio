import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <p className="section-label">06 / CONTACT</p>

        <h2>
          Have an idea?
          <br />
          <span>Let's build it.</span>
        </h2>

        <p>
          I'm always interested in learning, building new things,
          collaborating on projects, and exploring new technologies.
        </p>
      </div>

      <div className="contact-links">
        <a href="mailto:haameedsm@gmail.com">
          <FaEnvelope className="contact-icon" />
          EMAIL
        </a>

        <a
          href="https://github.com/haameedsm-ops"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="contact-icon" />
          GITHUB
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn className="contact-icon" />
          LINKEDIN
        </a>
      </div>
    </section>
  );
}

export default Contact;