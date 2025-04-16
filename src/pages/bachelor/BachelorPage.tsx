import Footer from "../../components/Layout/Footer";
import { Helmet } from "react-helmet";
import Header from "./components/header/Header";
import Background from "./components/background/Backgound";
import Problem from "./components/problem/Problem";

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
