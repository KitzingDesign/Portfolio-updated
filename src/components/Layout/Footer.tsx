import { useState, useEffect } from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());

  return (
    <footer className={styles.footer}>
      <div className={styles.year}>{currentYear}</div>

      <div className={styles.cta}>
        <h3 className={styles.ctaText}>HAVE A PROJECT IN MIND?</h3>
        <a href="mailto:Jakob.Kitzing@gmail.com" className={styles.ctaButton}>
          LET'S TALK
        </a>
      </div>

      <div className={styles.socials}>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          GITHUB
        </a>
        <a
          href="https://linkedin.com/in/jakob-kitzing"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          LINKEDIN
        </a>
        <a
          href="https://twitter.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          TWITTER
        </a>
      </div>

      <div className={styles.credits}>
        <p>Design & Development by Jakob Kitzing</p>
      </div>
    </footer>
  );
};

export default Footer;
