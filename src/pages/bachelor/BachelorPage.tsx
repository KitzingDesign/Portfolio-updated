import Footer from "../../components/Layout/Footer";
import { Helmet } from "react-helmet";
import Header from "./components/header/Header";
import Background from "./components/background/Backgound";
import Problem from "./components/problem/Problem";
import Solution from "./components/solution/Solution";
import Melter from "./components/melter/Melter";
import Concept from "./components/concept/Concept";

const KandidatarbetePage = () => {
  return (
    <div>
      <Helmet>
        <title>Bachelor</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <Header />
      <Background />
      <Problem />
      <Concept />
      <Melter />
      <Solution />

      <Footer />
    </div>
  );
};

export default KandidatarbetePage;
