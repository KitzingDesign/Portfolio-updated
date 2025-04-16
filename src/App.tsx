import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import "@/styles/global.scss";
import NavBar from "./components/Layout/NavBar";

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
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  );
};

export default App;
