import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "./About.module.scss";
import WorkExperience from "./components/WorkExperience";
import HeroImg from "@/assets/images/about/aboutImg.jpg";
import Footer from "../../components/Layout/Footer";
import Contacts from "./components/Contacts";
import ScrollToTop from "@/ScrollToTop";

const skillCategories = [
  {
    title: "Design",
    skills: [
      "Figma",
      "UX/UI Design",
      "User Research",
      "User Testing",
      "A/B Testing",
      "Creative Problem-Solving",
      "Adobe Suite",
      "WCAG",
      "Requirement Elicitation",
      "Scaling Design Systems",
      "Technical Presentations",
      "Task Breakdown",
      "Role Based Access Control Design",
      "Service Design",
      "Workshop Facilitation",
      "Wireframing / Prototyping",
      "FigJam",
      "Miro",
    ],
  },
  {
    title: "AI",
    skills: [
      "Kiro",
      "Claude Code",
      "Copilot",
      "Figma Make",
      "Prototyping using AI and Storybook Components",
      "AI Skill Creation",
      "AI Agent Design & Development",
    ],
  },
  {
    title: "Programming",
    skills: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "SCSS",
      "Python",
      "Java",
      "Node.js",
      "TypeScript",
      "Git",
      "GitHub",
      "Version Management",
    ],
  },
  {
    title: "Other",
    skills: [
      "Atlassian",
      "Jira",
      "Confluence",
      "Scrum",
      "Agile",
      "SAFe Framework",
      "Product Management",
      "Project Planning",
      "Cross-functional Collaboration",
      "Stakeholder Management",
    ],
  },
];

const AboutPage = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });
  const [activeCategory, setActiveCategory] = useState(0);

  const ANIMATION_DURATION = {
    cover: 1,
    height: 0.3,
    fade: 0.5,
  };

  const DELAYS = {
    betweenSections: 0.4,
    childrenStagger: 0.15,
    firstChildren: 0.2,
    secondChildren: 0.2,
  };

  const firstCoverControls = useAnimation();
  const firstContentControls = useAnimation();
  const secondCoverControls = useAnimation();
  const secondContentControls = useAnimation();
  const thirdCoverControls = useAnimation();
  const thirdContentControls = useAnimation();

  const animateHeaders = () => {
    firstCoverControls.start({
      width: "6px",
      transition: {
        duration: ANIMATION_DURATION.cover,
        ease: [0.16, 1, 0.3, 1],
      },
    });

    secondCoverControls.start({
      width: "6px",
      transition: {
        duration: ANIMATION_DURATION.cover,
        ease: [0.16, 1, 0.3, 1],
        delay: DELAYS.betweenSections * 0.8,
      },
    });

    thirdCoverControls.start({
      width: "6px",
      transition: {
        duration: ANIMATION_DURATION.cover,
        ease: [0.16, 1, 0.3, 1],
        delay: DELAYS.betweenSections * 1.8,
      },
    });

    setTimeout(() => {
      firstContentControls.start({
        height: "auto",
        transition: {
          duration: ANIMATION_DURATION.height,
          ease: "easeOut",
        },
      });

      secondContentControls.start({
        height: "auto",
        transition: {
          duration: ANIMATION_DURATION.height,
          ease: "easeOut",
          delay: DELAYS.betweenSections * 0.3,
        },
      });

      thirdContentControls.start({
        height: "auto",
        transition: {
          duration: ANIMATION_DURATION.height,
          ease: "easeOut",
          delay: DELAYS.betweenSections * 0.6,
        },
      });

      firstContentControls.start({
        opacity: 1,
        transition: {
          staggerChildren: DELAYS.childrenStagger,
          delayChildren: DELAYS.firstChildren,
          duration: ANIMATION_DURATION.fade,
          ease: "easeOut",
          delay: DELAYS.betweenSections * 1,
        },
      });

      secondContentControls.start({
        opacity: 1,
        transition: {
          staggerChildren: DELAYS.childrenStagger,
          delayChildren: DELAYS.secondChildren,
          duration: ANIMATION_DURATION.fade,
          ease: "easeOut",
          delay: DELAYS.betweenSections * 1,
        },
      });

      thirdContentControls.start({
        opacity: 1,
        transition: {
          staggerChildren: DELAYS.childrenStagger,
          delayChildren: DELAYS.secondChildren,
          duration: ANIMATION_DURATION.fade,
          ease: "easeOut",
          delay: DELAYS.betweenSections * 1,
        },
      });
    }, ANIMATION_DURATION.cover * 1500);
  };

  useEffect(() => {
    if (isInView) {
      firstCoverControls.set({ width: "100%" });
      secondCoverControls.set({ width: "100%" });
      thirdCoverControls.set({ width: "100%" });
      animateHeaders();
    }
  }, [isInView]);

  return (
    <>
      <ScrollToTop />
      <div className={styles.outerContainer}>
        <div className={styles.container} ref={containerRef}>
          <div className={styles.textContainer}>
            <div className={styles.textSection}>
              <motion.div
                className={styles.coverBox}
                initial={{ width: "var(--initial-width-1)" }}
                animate={firstCoverControls}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
              <h3>Who am I?</h3>
              <motion.div
                animate={firstContentControls}
                initial={{ opacity: 0, height: 0 }}
                className={styles.contentWrapper}
              >
                <p>
                  My name is Jakob, and I'm a UX/UI designer, Frontend
                  Developer, human researcher, product developer, and music
                  lover; everything from electronic music to jazz resonates
                  through my headphones. As a person, I'm outgoing and caring
                  about my surroundings, believing that everything is more
                  enjoyable when those around me are happy. My philosophy is
                  that having fun reflects on the results.
                </p>
              </motion.div>
            </div>

            <div className={styles.textSection}>
              <motion.div
                className={styles.coverBox}
                initial={{ width: "var(--initial-width-2)" }}
                animate={secondCoverControls}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
              <h3>Selected Work Experience</h3>
              <motion.div
                animate={secondContentControls}
                initial={{ opacity: 0, height: 0 }}
                className={styles.contentWrapper}
              >
                <WorkExperience
                  company="UX Designer - Ericsson"
                  time="Jun 2025 - "
                />
                <WorkExperience
                  company="UX Design Intern - SystemWeaver"
                  time="Maj 2025 - Jun 2025"
                />
                <WorkExperience
                  company="Master's Thesis - Kognic"
                  time="Jan 2024 - Jun 2024"
                />
                <WorkExperience
                  company="UX Designer - Kognic"
                  time="Jun 2023 - Jul 2023"
                />
                <WorkExperience
                  company="Photoshop Instructor - Chalmers University of Technology"
                  time="Aug 2019 & Aug 2020"
                />
              </motion.div>
            </div>

            <div className={styles.textSection}>
              <motion.div
                className={styles.coverBox}
                initial={{ width: "var(--initial-width-3)" }}
                animate={thirdCoverControls}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
              <h3>Education</h3>
              <motion.div
                animate={thirdContentControls}
                initial={{ opacity: 0, height: 0 }}
                className={styles.contentWrapper}
              >
                <WorkExperience
                  company="M.Sc. Interaction Design and Technologies - Chalmers University of Technology"
                  time="Aug 2022 - Jun 2024"
                />
                <WorkExperience
                  company="Exchange Studies, Computer Science - Instituto Superior Técnico, Lisbon"
                  time="Aug 2023 - Jan 2024"
                />
                <WorkExperience
                  company="B.Sc. Industrial Design Engineering - Chalmers University of Technology"
                  time="Aug 2018 - Jun 2021"
                />
              </motion.div>
            </div>
          </div>

          <div className={styles.imgContainer}>
            <img src={HeroImg} alt="Picture of Jakob" loading="lazy" />
          </div>
        </div>

        <section className={styles.skillsSection}>
          <h3 className={styles.skillsTitle}>Skills</h3>
          <div className={styles.skillsLayout}>
            <nav className={styles.skillsNav}>
              {skillCategories.map((category, i) => (
                <button
                  key={category.title}
                  className={`${styles.navItem} ${i === activeCategory ? styles.navItemActive : ""}`}
                  onClick={() => setActiveCategory(i)}
                >
                  {category.title}
                </button>
              ))}
            </nav>

            <div className={styles.skillsContent}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  className={styles.skillsPanel}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <div className={styles.tagsContainer}>
                    {skillCategories[activeCategory].skills.map((skill) => (
                      <span key={skill} className={styles.skillTag}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        <Contacts />
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
