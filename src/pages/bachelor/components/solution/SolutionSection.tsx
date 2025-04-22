import KandRender from "./KandRender";
import KandText from "./KandText";
import styles from "./SolutionSection.module.scss";

interface SolutionSectionProps {
  title: string;
  divider: "dividerR" | "dividerL";
  urlFirst: string;
  firstTitel: string;
  firstText: string;
  urlSecond: string;
  secondTitel: string;
  secondText: string;
  alt?: string;
}

const SolutionSection = ({
  title,
  divider,
  urlFirst,
  firstTitel,
  firstText,
  urlSecond,
  secondTitel,
  secondText,
  alt,
}: SolutionSectionProps) => {
  return (
    <div className={styles.textContainer}>
      <h2>{title}</h2>
      <div className={styles[divider]}></div>

      <div className={styles.flex}>
        <div className={styles.imgContainer}>
          <KandRender url={urlFirst} altText={alt} />
        </div>
        <div className={styles.smutsAbove}>
          <div>
            <KandText title={firstTitel} text={firstText} />
          </div>
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.smutsAvg}>
          <div>
            <KandText title={secondTitel} text={secondText} />
          </div>
        </div>
        <div className={styles.imgContainer}>
          <KandRender url={urlSecond} altText={alt} />
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
