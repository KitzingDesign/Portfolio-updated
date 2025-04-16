import { useEffect } from "react";

import Footer from "../../components/Layout/Footer";
import AOS from "aos";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Header from "./components/header/Header";
import Background from "./components/background/Backgound";
import Problem from "./components/problem/Problem";

const KandidatarbetePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Bachelor</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <Header />
      <Background />
      <Problem />
      {/* <KandidatarbeteBakgrund />
      <KandidatarbeteProblem />
      <KandidatarbeteKoncept />
      <KandidatarbeteSmalter />
      <KandidatarbeteSlutkocept /> */}
      <Footer />
    </div>
  );
};

export default KandidatarbetePage;
