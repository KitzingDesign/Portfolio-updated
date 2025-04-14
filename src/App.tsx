import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "@/styles/global.scss";
import NavBar from "./components/Layout/NavBar";

const App = () => {
  return (
    <>
      {/* <Nav /> */}
      <main>
        <NavBar />
        <Outlet />
        {/* <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence> */}
      </main>
    </>
  );
};

export default App;
