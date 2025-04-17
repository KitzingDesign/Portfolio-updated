import styles from "./ConceptPart.module.scss";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface ConceptProps {
  title: string;
  img: string;
}

const ConceptPart = ({ title, img }: ConceptProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>

      <Zoom>
        <div className={styles.img}>
          <img
            src={img}
            alt={title}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </Zoom>
    </div>
  );
};

export default ConceptPart;
