import styles from "./TripleDiamond.module.scss";
import tripleDiamondImg from "@/assets/images/mastersThesis/TripleDiamondThesis.png";

const TripleDiamond = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2>Design Approach</h2>
        <p>
          For our thesis project with Kognic, we used the Triple Diamond design
          approach to tackle the issue of micro-adjustments in annotations. This
          approach helped us structure the design process into three distinct
          phases.
        </p>
      </div>
      <img
        className={styles.image}
        src={tripleDiamondImg}
        alt="Triple Diamond"
      />
    </div>
  );
};

export default TripleDiamond;
