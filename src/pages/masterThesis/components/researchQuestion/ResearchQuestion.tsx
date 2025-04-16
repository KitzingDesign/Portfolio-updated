import styles from "./ResearchQuestion.module.scss";

const ResearchQuestion = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Research Question</h1>
      <p className={styles.question}>
        "How can interaction design support the reduction of micro-adjustments
        (small repetitive unnecessary adjustments of annotations of already
        sufficient quality) in annotations of 3D point clouds?"
      </p>
    </div>
  );
};

export default ResearchQuestion;
