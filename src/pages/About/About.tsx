// src/pages/About/About.tsx
import { motion } from "framer-motion";
import { useEffect } from "react";
import styles from "./About.module.scss";

const AboutPage = () => {
  // Simple fade animation on mount
  useEffect(() => {
    document.body.classList.add("page-loaded");
    return () => document.body.classList.remove("page-loaded");
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      <section className={styles.hero}>
        <h1>About Me</h1>
        <p className={styles.subtitle}>Designer & Developer</p>
      </section>

      <section className={styles.content}>
        <div className={styles.bio}>
          <h2>My Journey</h2>
          <p>
            With 5+ years in digital design and frontend development, I bridge
            aesthetics and functionality...
          </p>
        </div>

        <div className={styles.skills}>
          <h2>Core Skills</h2>
          <ul>
            <li>UI/UX Design</li>
            <li>React & TypeScript</li>
            <li>Design Systems</li>
          </ul>
        </div>
      </section>
    </motion.main>
  );
};

export default AboutPage;
