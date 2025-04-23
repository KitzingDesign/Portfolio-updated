import { Outlet, useLocation, ScrollRestoration } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import "@/styles/global.scss";
import NavBar from "./components/Layout/NavBar";
import ToastModal from "./components/Layout/ToastModal";

const pageVariants = {
  initial: {
    opacity: 0.2,
  },
  in: {
    opacity: 1,
  },
};

const pageTransition = {
  type: "tween",
  ease: "linear",
  duration: 0.3,
};

const App = () => {
  const location = useLocation();
  const [matPopup, setMatPopup] = useState(true);
  const closePopup = () => {
    setMatPopup(false);
  };

  return (
    <>
      <NavBar />
      <main>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="in"
            variants={pageVariants}
            transition={pageTransition}
          >
            <ScrollRestoration />
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      {matPopup && (
        <ToastModal
          message="I’ve coded an online cookbook! Want to check it out?"
          buttonText="Bring me there!"
          onButtonClick={() => {}}
          onClose={closePopup}
        />
      )}
    </>
  );
};

export default App;
