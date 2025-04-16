import { Splide, SplideSlide } from "@splidejs/react-splide";
import styles from "./CalmiflyContent.module.scss";

//images
import FirstImage from "@/assets/images/calmifly/FirstView.png";
import SecondImage from "@/assets/images/calmifly/SecondView.png";
import ThirdImage from "@/assets/images/calmifly/ThirdView.png";
import FourthImage from "@/assets/images/calmifly/FourthView.png";

const CalmiflyContent = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2>Calmifly the App</h2>
        <p></p>
      </div>

      <div className={styles.carouselContainer}>
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
                alt="First view of the app"
                loading="lazy"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.imgContainer}>
              <img
                src={SecondImage}
                alt="Second view of the app"
                loading="lazy"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.imgContainer}>
              <img
                src={ThirdImage}
                alt="Third view of the app"
                loading="lazy"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.imgContainer}>
              <img src={FourthImage} alt="Payment Page New" loading="lazy" />
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default CalmiflyContent;
