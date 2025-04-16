import styles from "./WorkExperience.module.scss"; // Note the .module.scss extension

interface WorkExperienceProps {
  company: string;
  time: string;
  className?: string;
}

const WorkExperience = ({
  company,
  time,
  className = "",
}: WorkExperienceProps) => {
  return (
    <div className={`${styles.workExperience} ${className}`}>
      <div className={styles.header}>
        <p className={styles.company}>{company}</p>
        <span className={styles.time}>{time}</span>
      </div>
    </div>
  );
};

export default WorkExperience;
