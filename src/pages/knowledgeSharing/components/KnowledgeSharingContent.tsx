import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import styles from "./KnowledgeSharingContent.module.scss";

import img1 from "@/assets/images/knowledgeSharing/KnowledgeFirstView.webp";
import img2 from "@/assets/images/knowledgeSharing/FirstFindHelp.webp";
import img3 from "@/assets/images/knowledgeSharing/SecondFindHelp.webp";
import img4 from "@/assets/images/knowledgeSharing/FirstFindPeople.webp";
import img5 from "@/assets/images/knowledgeSharing/SecondFindPeople.webp";
import img6 from "@/assets/images/knowledgeSharing/Archive.webp";
import img7 from "@/assets/images/knowledgeSharing/ProfilePage.webp";

const KnowledgeContent = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <h2 data-aos="fade-up">Knowledge Sharing Platform</h2>
        <p data-aos="fade-up">
          The platform was created through a thorough pre-study, including
          benchmarking, literature reviews, and interviews with professionals in
          the industry as a foundation. Subsequently, the initial prototype was
          developed and evaluated with users. Finally, the design or the
          platform was created, which can be viewed below. If you're curious
          about the process or just how it works, feel free to reach out!
        </p>
      </div>

      <div className={styles.carouselContainer} data-aos="fade-up">
        {domLoaded && (
          <Splide
            aria-label="Knowledge Sharing Platform Screenshots"
            options={{
              type: "loop",
              perPage: 1,
              pagination: true,
              arrows: true,
              drag: "snap",
              focus: "center",
              autoScroll: {
                pauseOnHover: true,
                pauseOnFocus: false,
                speed: 1,
              },
            }}
          >
            <SplideSlide>
              <div className={styles.imgContainer}>
                <img
                  src={img1}
                  alt="Help Others View"
                  className={styles.carouselImage}
                />
              </div>
            </SplideSlide>

            <SplideSlide>
              <div className={styles.imgContainer}>
                <img
                  src={img2}
                  alt="First find help page"
                  className={styles.carouselImage}
                />
              </div>
            </SplideSlide>

            <SplideSlide>
              <div className={styles.imgContainer}>
                <img
                  src={img3}
                  alt="View of second find help page"
                  className={styles.carouselImage}
                />
              </div>
            </SplideSlide>

            <SplideSlide>
              <div className={styles.imgContainer}>
                <img
                  src={img4}
                  alt="View of first find people page"
                  className={styles.carouselImage}
                />
                <p className={styles.descriptionImg}>First find people page</p>
              </div>
            </SplideSlide>

            <SplideSlide>
              <div className={styles.imgContainer}>
                <img
                  src={img5}
                  alt="View of second find people page"
                  className={styles.carouselImage}
                />
              </div>
            </SplideSlide>

            <SplideSlide>
              <div className={styles.imgContainer}>
                <img
                  src={img6}
                  alt="View of archives page"
                  className={styles.carouselImage}
                />
              </div>
            </SplideSlide>

            <SplideSlide>
              <div className={styles.imgContainer}>
                <img
                  src={img7}
                  alt="View of profile page"
                  className={styles.carouselImage}
                />
              </div>
            </SplideSlide>
          </Splide>
        )}
      </div>
    </div>
  );
};

export default KnowledgeContent;
