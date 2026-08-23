import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <p className="section-label">05 / CONTACT</p>

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

        <a
          href="mailto:YOUR_EMAIL"
          className="contact-link email-link"
        >
          <FaEnvelope className="contact-icon" />
          <span>EMAIL</span>
        </a>

        <a
          href="https://github.com/haameedsm-ops"
          target="_blank"
          rel="noreferrer"
          className="contact-link github-link"
        >
          <FaGithub className="contact-icon" />
          <span>GITHUB</span>
        </a>

        <a
          href="https://www.linkedin.com/in/shaik-mohammed-haameed-08239a320?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noreferrer"
          className="contact-link linkedin-link"
        >
          <FaLinkedinIn className="contact-icon" />
          <span>LINKEDIN</span>
        </a>

      </div>
    </section>
  );
}

export default Contact;