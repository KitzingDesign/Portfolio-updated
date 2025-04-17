import styles from "./Collage.module.scss";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import img1 from "@/assets/images/bachelor/solution/collage/Bild1.jpg";
import img2 from "@/assets/images/bachelor/solution/collage/Bild2.jpg";
import img3 from "@/assets/images/bachelor/solution/collage/Bild3.jpg";
import img4 from "@/assets/images/bachelor/solution/collage/Bild4.jpg";
import img5 from "@/assets/images/bachelor/solution/collage/Bild5.jpg";
import img6 from "@/assets/images/bachelor/solution/collage/Bild6.jpg";
import img7 from "@/assets/images/bachelor/solution/collage/Bild7.jpg";
import img8 from "@/assets/images/bachelor/solution/collage/Bild8.jpg";
import img9 from "@/assets/images/bachelor/solution/collage/Bild9.jpg";

const Collage = () => {
  const images = [
    { src: img1, alt: "prototyping" },
    { src: img2, alt: "prototyping" },
    { src: img3, alt: "prototyping" },
    { src: img4, alt: "Surrounding" }, // Fixed typo in "Surrounding"
    { src: img5, alt: "Surrounding" },
    { src: img6, alt: "Surrounding" },
    { src: img7, alt: "Concept" },
    { src: img8, alt: "Concept" },
    { src: img9, alt: "Concept" },
  ];

  return (
    <div className={styles.container}>
      {images.map((image, index) => {
        // The second image should be wrapped in the hide div
        if (index === 1) {
          return (
            <div key={index} className={styles.hide}>
              <Zoom>
                <img
                  src={image.src}
                  style={{ width: "100%" }}
                  alt={image.alt}
                />
              </Zoom>
            </div>
          );
        }
        return (
          <Zoom key={index}>
            <img src={image.src} style={{ width: "100%" }} alt={image.alt} />
          </Zoom>
        );
      })}
    </div>
  );
};

export default Collage;
