interface KandTextProps {
  title: string;
  text: string;
}

const KandText = ({ title, text }: KandTextProps) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{text}</p>
    </>
  );
};
export default KandText;
