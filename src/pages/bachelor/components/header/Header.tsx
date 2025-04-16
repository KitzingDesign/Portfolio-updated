import styles from "./Header.module.scss";
import { motion } from "framer-motion";
import headerImg from "@/assets/images/bachelor/HeaderBachelor.png";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headings}>
        <div className={styles.vertical}>
          <motion.h1
            className={styles.year}
            initial={{ opacity: 0, x: "10vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.33, 1, 0.68, 1],
              delay: 0.5,
            }}
          >
            2021
          </motion.h1>
          <motion.h2
            className={styles.season}
            initial={{ opacity: 0, x: "10vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.33, 1, 0.68, 1],
              delay: 0.7,
            }}
          >
            Spring
          </motion.h2>
        </div>
        <motion.h2
          className={styles.above}
          initial={{ opacity: 0, x: "-10vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.4,
            ease: [0.33, 1, 0.68, 1],
            delay: 0.9,
          }}
        >
          Redesign <br /> Workplace
        </motion.h2>
      </div>
      <div className={styles.img}>
        <img
          width={1000}
          height={600}
          style={{ width: "100%", height: "auto" }}
          src={headerImg}
          alt="Six Computer Screens"
        />
        <h2 className={styles.nr}>02</h2>
      </div>
    </div>
  );
};

export default Header;
