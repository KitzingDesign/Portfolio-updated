import styles from "./PhaseTwo.module.scss";

import sketchImg from "@/assets/images/mastersThesis/Sketch.png";

const PhaseTwo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.imageColumn}>
          <img
            className={styles.image}
            src={sketchImg}
            alt="Design sketches from Ideation phase"
          />
        </div>
        <div className={styles.textColumn}>
          <h2>Sketch & Decide</h2>
          <p>
            During the Ideation phase, we used a combination of brainstorming,
            sketching, and mind mapping to generate a wide range of ideas. These
            ideas were then evaluated in collaboration with a developer at
            Kognic to assess their feasibility. After narrowing down the
            options, the remaining concepts were reviewed with two UX Designers
            at the company. To finalize our choices, we listed the pros and cons
            of each concept, which led us to select five key concepts to explore
            further. The five concepts we decided to develop were: Line Assist,
            Two Pointy Adjustment, Counter Adjustment, Leaderboard, and Sequence
            Process Wizard. To explore these concepts further, we created
            wireframes, laying the groundwork for the next stages of development
            and refinement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhaseTwo;
