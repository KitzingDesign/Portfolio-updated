import React from "react";
import styles from "./DesignGuidelines.module.scss";

const DesignGuidelines = () => {
  const guidelines = [
    "Follow a Design Process",
    "Incorporate Design Theories",
    "Gather Information from Multiple Sources",
    "Consider Annotator's Culture",
    "Align Stakeholders",
    "Consider all Areas of Concern",
    "Micro-Solutions for Micro-Adjustments",
    "Improve Existing Tools Over Creating New Ones",
    "Provide Clear and Efficient Feedback",
    "Use Automation when Possible",
    "Focus on Rotation Micro-Adjustments",
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Design Guidelines</h2>
      <p>
        The design guidelines were created to help guide future projects,
        allowing them to learn from our experiences. The names of the guidelines
        are listed below, but for a more in-depth explanation you can read the
        entire report at:
        <a
          className={styles.link}
          href="https://odr.chalmers.se/items/f15b9522-5042-4aa8-8755-78b12e9462a2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Micro-Solutions for Micro-Adjustments
        </a>
      </p>
      <div className={styles.guidelinesContainer}>
        {guidelines.map((guideline, index) => (
          <div key={index} className={styles.guideline}>
            <div className={styles.circle}>{index + 1}</div>
            <span className={styles.guidelineText}>{guideline}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignGuidelines;
