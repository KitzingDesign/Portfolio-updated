import { useEffect, Fragment } from "react";

// import Footer from "../../components/Layout/footer";
import AOS from "aos";
import { motion } from "framer-motion";
import CalmiflyHeader from "./components/CalmiflyHeader";
import CalmiflyBakgrund from "./components/CalmiflyBackground";
import CalmiflyContent from "./components/CalmiflyContent";
import Footer from "../../components/Layout/Footer";

const CalmiflyPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Fragment>
      <CalmiflyHeader />
      <CalmiflyBakgrund />
      <CalmiflyContent />

      <Footer />
    </Fragment>
  );
};

export default CalmiflyPage;
