import styles from "./Melter.module.scss";

const Melter = () => {
  return (
    <div className={styles.container}>
      <h2>Evaluation</h2>
      <p>
        The three concepts were evaluated by the Smältare through a survey. It
        emerged that Concept A was the preferred concept among the Smältare. The
        reasons were that the concept was open, clear, professional, had a good
        solution with hooks for daily storage, and a good control panel. The
        concept was iterated upon, and several sub-solutions from the other
        concepts were implemented. Altogether, it eventually became{" "}
        <b>The Arc...</b>
      </p>
    </div>
  );
};

export default Melter;
