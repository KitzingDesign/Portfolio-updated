import styles from "./PhaseOne.module.scss";

import affinityDiagram from "@/assets/images/mastersThesis/AffinityDiagram.png";

const PhaseOne = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.textColumn}>
          <h2>Understand & Define</h2>
          <p>
            In the understand and define phase of our project, we focused on
            understanding the problem space and defining a requirement
            specification that would serve as the foundation for generating
            ideas. To achieve this, we gathered information from multiple
            sources: a literature review to explore the field of annotation,
            hands-on exploration of the platform to deepen our domain knowledge,
            user research with stakeholders, and task analysis. <br />
            <br /> A key part of this phase was the user research, which
            involved observing annotators when they worked, interviewing expert
            annotators, and conducting a workshop with knowledgeable team
            members from Kognic. We synthesized the insights from these
            activities using Affinity Diagrams, which allowed us to uncover
            valuable patterns and insights that directly informed our design
            direction. The resulting knowledge was consolidated into a clear
            requirement specification, ensuring we had a solid foundation for
            the next phases of the project.
          </p>
        </div>
        <div className={styles.imageColumn}>
          <img
            className={styles.image}
            src={affinityDiagram}
            alt="Affinity Diagram from Phase One"
          />
        </div>
      </div>
    </div>
  );
};

export default PhaseOne;
