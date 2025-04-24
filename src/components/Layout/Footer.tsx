import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.cta}>
        <h3 className={styles.ctaText}>Want to know more about me?</h3>
        <a href="mailto:Jakob.Kitzing@gmail.com" className={styles.ctaButton}>
          LET'S CONNECT
        </a>
      </div>

      <div className={styles.socials}>
        <a
          href="https://github.com/KitzingDesign"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          GITHUB
        </a>
        <a
          href="https://www.matmatmaten.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          MATMATMATEN
        </a>
        <a
          href="https://www.linkedin.com/in/jakob-kitzing-27b4991b7/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          LINKEDIN
        </a>
      </div>

      <div className={styles.credits}>
        <p>© 2025 Jakob Kitzing</p>
      </div>
    </footer>
  );
};

export default Footer;
