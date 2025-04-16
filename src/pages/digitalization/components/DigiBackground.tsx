import styles from "./DigiBackground.module.scss";

import icon1 from "@/assets/images/home/digitalization/eldlerLogo.svg";
import icon3 from "@/assets/images/home/digitalization/boiLogo.svg";
import icon2 from "@/assets/images/home/digitalization/juryLogo.svg";
import icon4 from "@/assets/images/home/digitalization/elyLogo.svg";
import icon5 from "@/assets/images/home/digitalization/gynoLogo.svg";

interface DigiBackgroundProps {
  // Add any props you might need
}

const DigiBackground: React.FC<DigiBackgroundProps> = () => {
  return (
    <div className={styles.container} data-aos="new-animation">
      <h2 data-aos="new-animation">Background</h2>
      <div data-aos="new-animation">
        <div className={styles.divider} />
      </div>

      <span data-aos="new-animation">Hobby Project - Spring 2020</span>

      <section data-aos="new-animation">
        <p>
          As everyone knows, spring 2021 didn't turn out entirely as planned.
          The pandemic knocked on the door, and many hours were subsequently
          spent in solitude. To prevent myself from going completely crazy, I
          started working on some small projects to have something to do
          alongside my studies. This resulted in the creation of five new
          virtual companies. We 're living in a time where physical contact is
          starting to be replaced, especially during the pandemic, something
          that I see both advantages and disadvantages to. This made me wonder,
          how far can one really take it? <br />
          <br />
          The "companies" below are created by me to play with the idea of how
          far virtualization can go before it becomes unreasonable. The project
          is also intended to provoke some thought; how much is really lost when
          you digitalize human interactions?
        </p>
      </section>

      <h3 data-aos="new-animation">Featured Companies</h3>
      <div data-aos="new-animation">
        <div className={styles.flexImg}>
          <div className={styles.imgBox}>
            <img src={icon1} alt="Eldler" className={styles.companyLogo} />
          </div>
          <div className={styles.imgBox}>
            <img src={icon2} alt="Jury" className={styles.companyLogo} />
          </div>
          <div className={styles.imgBox}>
            <img src={icon3} alt="Boi" className={styles.companyLogo} />
          </div>
          <div className={styles.imgBox}>
            <img src={icon4} alt="Ely" className={styles.companyLogo} />
          </div>
          <div className={styles.imgBox}>
            <img src={icon5} alt="Time Line" className={styles.companyLogo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigiBackground;
