import { useState, useEffect } from "react";
import styles from "./DigiHeader.module.scss";
// Import icons
import {
  HeartIcon,
  ChatBubbleOvalLeftIcon as ChatIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";

import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Update CSS imports to use direct paths
import "swiper/swiper-bundle.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";
// import SwipeArrow from "../UI/swipe-arrow";

import phoneImg from "@/assets/images/digitalization/phone.png";
import img3 from "@/assets/images/digitalization/KryStorJury.webp";
import img4 from "@/assets/images/digitalization/GynoStor.jpg";
import img1 from "@/assets/images/digitalization/EldlerStor.jpg";
import img2 from "@/assets/images/digitalization/ElyStor.jpg";

import headImg from "@/assets/images/home/Startbild.svg";

SwiperCore.use([Pagination, Navigation]);

interface DigiHeaderProps {
  // Add any props you need here
}

const DigiHeader: React.FC<DigiHeaderProps> = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <div className={styles.upperContainer}>
      <div className={styles.kryImg}>
        <div>
          <div className={styles.phone}>
            <img src={phoneImg} alt="Iphone" className={styles.phoneImage} />
          </div>
          {domLoaded && (
            <div className={styles.swipes}>
              <Swiper
                id="swiper-color"
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                className={styles.carousell}
              >
                <SwiperSlide>
                  <div className={styles.swipe}>
                    <div className={styles.firstSlide}>
                      <div className={styles.whiteSide}>
                        <div className={styles.orangeCicle} />
                        <div className={styles.leftArrow}>
                          {/* <SwipeArrow /> */}
                        </div>
                      </div>
                      <div className={styles.orangeSide}>
                        <div className={styles.whiteCicle} />
                        <div className={styles.rightArrow}>
                          {/* <SwipeArrow /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.swipe}>
                    <div className={styles.secondSlide}>
                      <div className={styles.profileInfo}>
                        <div className={styles.profileImg}>
                          <img src={headImg} alt="Jakob Kitzing" />
                        </div>
                        <p>
                          <b>JakobKitzingDesign</b> <br /> sponsored
                        </p>
                      </div>
                      <div className={styles.swiperImg}>
                        <Swiper
                          id="swiper-color"
                          slidesPerView={1}
                          spaceBetween={0}
                          pagination={{
                            clickable: false,
                          }}
                          loop={true}
                          className={styles.carousell}
                        >
                          <SwiperSlide>
                            <div className={styles.imgContainer}>
                              <img src={img1} alt="Eldler commercial" />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className={styles.imgContainer}>
                              <img src={img2} alt="Ely commercial" />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className={styles.imgContainer}>
                              <img src={img3} alt="Jury commercial" />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className={styles.imgContainer}>
                              <img src={img4} alt="Gyno commercial" />
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </div>
                      <div className={styles.iconer}>
                        <div>
                          <HeartIcon className={styles.heartImg} />
                          <ChatIcon className={styles.chatImg} />
                          <PaperAirplaneIcon className={styles.planeImg} />
                        </div>
                        <BookmarkIcon className={styles.bookMarkImg} />
                      </div>
                      <p className={styles.textLikes}>
                        <b>4m likes</b> <br /> Häng med in i framtiden, alla
                        appar går att finna på JakobKitzingDesign.com
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          )}
        </div>
      </div>

      <div className={styles.textContainer}>
        <h2 className={styles.textLeft}>SWI</h2>
        <h2 className={styles.textRight}>PE</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.whiteBackground} />
        <div className={styles.orangeBackground} />
      </div>
    </div>
  );
};

export default DigiHeader;
