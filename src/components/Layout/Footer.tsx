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
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          GITHUB
        </a>
        <a
          href="https://twitter.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          MATMATMATEN
        </a>
        <a
          href="https://linkedin.com/in/jakob-kitzing"
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
