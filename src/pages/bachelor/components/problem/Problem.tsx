import { useRef, useEffect, useState } from "react";
import styles from "./Problem.module.scss";
import TextcontainerKand from "./TextContainer";

const Problem = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div
        className={
          isVisible ? `${styles.green} ${styles.animation}` : styles.green
        }
      >
        <div
          className={
            isVisible
              ? `${styles.greenContent} ${styles.fade}`
              : styles.greenContent
          }
        >
          <div className={styles.heading}>
            <h2>Areas of Concern</h2>
            <p>
              To understand the work situation of the Smältare, various data
              collection methods were employed and subsequently analyzed. These
              methods included a digital walkthrough, a pilot interview with a
              shift leader who had previously been a Smältare, market analysis,
              literature reviews on workplace ergonomics, and five detailed
              interviews with current smältare. The collected data was analyzed,
              and a requirement specification was then created. Below, four of
              the most important components are presented.
            </p>
          </div>
          <div className={styles.lists}>
            <TextcontainerKand
              title="Dirt"
              text="Because of the high activity levels in the control room, significant amounts of dirt and dust were frequently drawn in."
            />
            <TextcontainerKand
              title="Proximity to the furnace"
              text="An important aspect of the work requires proximity to the furnace, something that must be maintained despite the increased distance."
            />
            <TextcontainerKand
              title="Communication with other work roles"
              text="As a Smältare, active communication with other job roles is essential. It must be easy to communicate with each other."
            />
            <TextcontainerKand
              title="Alarms and Safety"
              text="If an alarm goes off, it may require action within minutes in some cases, hence clear representation of the alarms is essential."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;
