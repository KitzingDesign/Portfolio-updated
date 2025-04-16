import Koncept from "../UI/koncept";
import styles from "./kandidatarbeteKoncept.module.scss";

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
        <Koncept titel="Concept A" img="/Kandidat/KonceptA.jpg" />
        <Koncept titel="Concept B" img="/Kandidat/KonceptB.jpg" />
        <Koncept titel="Concept C" img="/Kandidat/KonceptC.webp" />
      </div>
    </div>
  );
};

export default Concept;
