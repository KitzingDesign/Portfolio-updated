import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import styles from "./DigiContent.module.scss";

//images
import FirstImage from "@/assets/images/digitalization/EldlerStorLogo.webp";
import SecondImage from "@/assets/images/digitalization/ElyStorLogo.webp";
import ThirdImage from "@/assets/images/digitalization/JuryArm.png";
import FourthImage from "@/assets/images/digitalization/GynoStor.jpg";
import FifthImage from "@/assets/images/digitalization/BoiStorGIF.gif";

const DigiContent = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2 data-aos="fade-up">
          Let me present the future of the digitalization:
        </h2>
        <p data-aos="fade-up"></p>
      </div>

      <div className={styles.carouselContainer} data-aos="fade-up">
        <Splide
          options={{
            type: "loop",
            perPage: 1,
            lazyLoad: "nearby",
            pagination: true,
            arrows: true,
            autoWidth: false,
            fixedHeight: "auto",
            drag: "snap",

            focus: "center",

            height: "auto",
            paginationKeyboard: true,

            breakpoints: {
              768: {
                fixedWidth: "100%", // Full width on mobile too
              },
            },

            easing: "cubic-bezier(0.25, 1, 0.5, 1)",
          }}
        >
          <SplideSlide>
            <div className={styles.imgContainer}>
              <img
                src={FirstImage}
                alt="Eldler commercial at a bus stop."
                loading="lazy"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.imgContainer}>
              <img
                src={SecondImage}
                alt="Ely commercial outside on a commercial screen."
                loading="lazy"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.imgContainer}>
              <img
                src={ThirdImage}
                alt="Jury commercial on a phone."
                loading="lazy"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.imgContainer}>
              <img
                src={FourthImage}
                alt="Gyno commercial at a tram."
                loading="lazy"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.imgContainer}>
              <img
                src={FifthImage}
                alt="Boi commercial on a led screen by Svänska Mässan"
                loading="lazy"
              />
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default DigiContent;
