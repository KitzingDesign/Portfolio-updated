import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "@/styles/global.scss";

const App = () => {
  return (
    <>
      {/* <Nav /> */}
      <main>
        <Outlet />
        {/* <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence> */}
      </main>
    </>
  );
};

export default App;
