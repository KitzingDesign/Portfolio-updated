import styles from "./PhaseThree.module.scss";

import solutionsImg from "@/assets/images/mastersThesis/PrototypeandEvaluation.png";

const PhaseThree = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.textColumn}>
          <h2 className={styles.title}>Prototyping & Evaluation</h2>
          <p className={styles.text}>
            In the Prototyping phase, we created initial prototypes for the
            concepts to better understand how they would function. Two concepts,
            Line Assist and Two Pointy, were even developed and implemented in a
            test version of the platform, allowing us to evaluate them in a
            real-world setting. As the concepts evolved, we developed
            high-fidelity prototypes to refine the designs further. This
            included experimenting with different icons, colors, and other minor
            adjustments to achieve the desired look and feel for the tools.
            Finally, we moved to the Evaluation phase, focusing on three
            concepts: Line Assist, Two Pointy, and Sequence Process Wizard.
            These were assessed through a cognitive walkthrough and a design
            review with four Kognic designers. Additionally, Line Assist
            underwent A/B testing, where annotators used the tool and provided
            feedback through a user experience survey. The A/B testing revealed
            that Line Assist reduced annotation adjustments by 12%,
            demonstrating a significant improvement in efficiency and validating
            the potential impact of our designs.
          </p>
        </div>
        <div className={styles.imageColumn}>
          <img
            className={styles.image}
            src={solutionsImg}
            alt="Prototyping and evaluation process visuals"
          />
        </div>
      </div>
    </div>
  );
};

export default PhaseThree;
