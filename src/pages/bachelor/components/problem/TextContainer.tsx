import styles from "./TextContainer.module.scss";

interface TextContainerProps {
  title: string;
  text: string;
}

const KandText = ({ title, text }: TextContainerProps) => {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};
export default KandText;
