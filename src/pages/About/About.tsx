"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import styles from "./About.module.scss";
import WorkExperience from "./components/WorkExperience";
import HeroImg from "@/assets/images/about/actionFigure.png";
import Footer from "../../components/Layout/Footer";
import Contacts from "./components/Contacts";

const AboutPage = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  // Animation sequences
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

  // Animation controls
  const firstCoverControls = useAnimation();
  const firstContentControls = useAnimation();
  const secondCoverControls = useAnimation();
  const secondContentControls = useAnimation();
  const thirdCoverControls = useAnimation();
  const thirdContentControls = useAnimation();

  const animateHeaders = () => {
    // Start all cover animations with overlapping delays
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
        delay: DELAYS.betweenSections * 0.8, // Reduced delay for overlap
      },
    });

    thirdCoverControls.start({
      width: "6px",
      transition: {
        duration: ANIMATION_DURATION.cover,
        ease: [0.16, 1, 0.3, 1],
        delay: DELAYS.betweenSections * 1.8, // Reduced delay for overlap
      },
    });

    // Start content animations after covers are mostly done
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

      // Fade in content
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
    }, ANIMATION_DURATION.cover * 1500); // Start content animations halfway through cover animations
  };

  useEffect(() => {
    if (isInView) {
      // Initial setup - covers full width
      firstCoverControls.set({ width: "100%" });
      secondCoverControls.set({ width: "100%" });
      thirdCoverControls.set({ width: "100%" });

      // Start animation sequence
      animateHeaders();
    }
  }, [isInView]);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container} ref={containerRef}>
        <div className={styles.textContainer}>
          {/* Section 1 */}
          <div className={styles.textSection}>
            <motion.div
              className={styles.coverBox}
              initial={{ width: "45%" }}
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
                My name is Jakob, and I'm a UX/UI designer, Frontend Developer,
                human researcher, product developer, and music lover; everything
                from electronic music to jazz resonates through my headphones.
                As a person, I'm outgoing and caring about my surroundings,
                believing that everything is more enjoyable when those around me
                are happy. My philosophy is that having fun reflects on the
                results.
              </p>
            </motion.div>
          </div>

          {/* Section 2 */}
          <div className={styles.textSection}>
            <motion.div
              className={styles.coverBox}
              initial={{ width: "65%" }}
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
                company="Master's Thesis - Kognic"
                time="January 2024 - June 2024"
              />
              <WorkExperience
                company="UX Designer - Kognic"
                time="June 2023 - July 2023"
              />
              <WorkExperience
                company="Photoshop Instructor - Chalmers University of Technology"
                time="August 2019 & August 2020"
              />
              <WorkExperience
                company="Driver - Västra Götalandsregionen"
                time="2019 - 2022"
              />
            </motion.div>
          </div>

          {/* Section 3 */}
          <div className={styles.textSection}>
            <motion.div
              className={styles.coverBox}
              initial={{ width: "35%" }}
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
                time="2022 - 2024"
              />
              <WorkExperience
                company="Exchange Studies, Computer Science - Instituto Superior Técnico, Lisbon"
                time="August 2023 - January 2023"
              />
              <WorkExperience
                company="B.Sc. Industrial Design Engineering - Chalmers University of Technology"
                time="2018 - 2021"
              />
            </motion.div>
          </div>
        </div>

        <div className={styles.imgContainer}>
          <img
            src={HeroImg}
            alt="Action figure of Jakob Kitzing in collectible packaging"
            loading="lazy"
          />
        </div>
      </div>
      <Contacts />

      <Footer />
    </div>
  );
};

export default AboutPage;
