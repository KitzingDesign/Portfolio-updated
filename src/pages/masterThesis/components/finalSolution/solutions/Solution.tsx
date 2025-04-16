import styles from "./Solution.module.scss";

interface SolutionProps {
  title: string;
  text: string;
  videoLink: string;
  videoOnLeft?: boolean;
}

const Solution = ({
  title,
  text,
  videoLink,
  videoOnLeft = false,
}: SolutionProps) => {
  return (
    <>
      {videoOnLeft ? (
        <div className={styles.containerLeft}>
          <video autoPlay loop muted playsInline className={styles.videoColumn}>
            <source src={videoLink} type="video/mp4" />
          </video>
          <div className={styles.textColumn}>
            <h2>{title}</h2>
            <p className={styles.text}>{text}</p>
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.textColumn}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>
          </div>
          <video autoPlay loop muted playsInline className={styles.videoColumn}>
            <source src={videoLink} type="video/mp4" />
          </video>
        </div>
      )}
    </>
  );
};

export default Solution;
