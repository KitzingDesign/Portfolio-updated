import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
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
          href="https://www.linkedin.com/in/jakob-kitzing-27b4991b7/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin className={`${styles.icon} ${styles.linkedin}`} />
        </a>

        <a
          href="https://github.com/KitzingDesign"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Account"
        >
          <FaGithub className={styles.icon} />
        </a>
      </div>
    </div>
  );
};

export default Contacts;
