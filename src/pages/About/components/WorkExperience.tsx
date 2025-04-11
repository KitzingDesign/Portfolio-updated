import React from "react";
import styles from "./WorkExperience.module.scss"; // Note the .module.scss extension

interface WorkExperienceProps {
  company: string;
  time: string;
  description: string;
  className?: string;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({
  company,
  time,
  description,
  className = "",
}) => {
  return (
    <div className={`${styles.workExperience} ${className}`}>
      <div className={styles.header}>
        <h3 className={styles.company}>{company}</h3>
        <span className={styles.time}>{time}</span>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default WorkExperience;
