import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import styles from "./Contacts.module.scss";

const Contacts: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Don't hesitate to reach out to me!</h2>

      <div className={styles.icons}>
        <a href="mailto:jakob.kitzing@gmail.com" aria-label="Email">
          <FiMail className={styles.icon} />
        </a>

        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className={`${styles.icon} ${styles.linkedin}`} />
        </a>

        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className={styles.icon} />
        </a>
      </div>
    </div>
  );
};

export default Contacts;
