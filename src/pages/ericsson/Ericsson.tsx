import { Helmet } from "react-helmet";
import styles from "./Ericsson.module.scss";
import StyledLink from "@/components/ui/Link";
import ConstructionImg from "@/assets/images/home/404_img.png";

const EricssonPage = () => {
  return (
    <>
      <Helmet>
        <title>Ericsson – Private 5G Platform | Jakob Kitzing</title>
      </Helmet>
      <div className={styles.container}>
        <div className={styles.textSide}>
          <h1>404-Error</h1>
          <p>
            This page is still in my head(Aka under construction). Check back
            soon.
          </p>
          <StyledLink to="/">Back to projects</StyledLink>
        </div>
        <div className={styles.imageSide}>
          <img
            src={ConstructionImg}
            alt="Under construction illustration"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default EricssonPage;
