import styles from "./Background.module.scss";

// svgs
import chalmerSvg from "@/assets/images/bachelor/svgs/Chalmers.svg";
import boidSvg from "@/assets/images/bachelor/svgs/Boid.svg";
import guardSvg from "@/assets/images/bachelor/svgs/Guard.svg";
import vargonSvg from "@/assets/images/bachelor/svgs/Vargön.svg";

const Background = () => {
  return (
    <div className={styles.container}>
      <h2 data-aos="fade-up">Background</h2>

      <p data-aos="fade-up">
        © Boström Dagberg Jilsén Kitzing Kullerstrand Silberberg
      </p>

      <section data-aos="fade-up">
        In our bachelor thesis group, we were tasked with developing a new,
        modernized control room for the alloy plant Vargön Alloys AB in
        collaboration with the company Boid. Currently, Vargön has four control
        rooms, one for each furnace. The goal of the project was to consolidate
        these four control rooms into one large, shared control room, enabling
        remote control of the furnaces. <br />
        <br />
        The design involved numerous considerations due to the significant
        influence of proximity to the furnace on the work. Our role in the
        project was to conceptualize the workplace for the Smältare. The
        Smältarens responsibilities include controlling the furnace by adding
        materials, adjusting the temperature, and monitoring the furnace for
        malfunctions. In addition to Boid, the company Guard AB was also
        involved in the project, responsible for creating the automation system
        for the furnace itself.
        <br />
        <br /> Working on a larger project was highly instructive as new
        discoveries emerged throughout the project that required adaptation.
        This demanded an open-minded and flexible approach to ensure the optimal
        functioning of the new control room as a whole. Below, the different
        phases of the work are briefly outlined.
      </section>

      <h3 data-aos="fade-up">Collaberation Between</h3>
      <div data-aos="fade-up">
        <div className={styles.flexImg}>
          <div className={styles.imgContainer}>
            <img
              src={chalmerSvg}
              alt="Chalmers logo"
              className={styles.logoImage}
            />
          </div>
          <div className={styles.imgContainer}>
            <img src={boidSvg} alt="Boid logo" className={styles.logoImage} />
          </div>
          <div className={styles.imgContainer}>
            <img
              src={vargonSvg}
              alt="Vargön Alloys logo"
              className={styles.logoImage}
            />
          </div>
          <div className={styles.imgContainer}>
            <img src={guardSvg} alt="Guard logo" className={styles.logoImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
