// import Koncept from "../UI/koncept";
import ConceptPart from "./ConceptPart";
import styles from "./Concept.module.scss";

import conceptA from "@/assets/images/bachelor/concepts/ConceptA.jpg";
import conceptB from "@/assets/images/bachelor/concepts/ConceptB.jpg";
import conceptC from "@/assets/images/bachelor/concepts/ConceptC.jpg";

const Concept = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.titel} data-aos="fade-up">
        Ideegenerering
      </h2>
      <p className={styles.text} data-aos="fade-up">
        After creating a requirements list from the collected data, we started
        with the ideation process. We began to develop as many concepts as
        possible, spanning from practical to futuristic, amusing to feasible.
        Subsequently, three realistic solutions were formulated, drawing upon
        influences from the earlier ideation phase. These solutions can be
        viewed below
      </p>
      <div className={styles.koncepts} data-aos="fade-up">
        <ConceptPart title="Concept A" img={conceptA} />
        <ConceptPart title="Concept B" img={conceptB} />
        <ConceptPart title="Concept C" img={conceptC} />
      </div>
    </div>
  );
};

export default Concept;
