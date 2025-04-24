import { Helmet } from "react-helmet";
import Footer from "../../components/Layout/Footer";
import MasterThesisHeader from "./components/MasterThesisHeader";
import MicroAdjustments from "./components/microAdjustments/MicroAdjustments";
import TripleDiamond from "./components/TripleDiamond";
import PhaseOne from "./components/phaseOne/PhaseOne";
import PhaseTwo from "./components/phaseTwo/PhaseTwo";
import ResearchQuestion from "./components/researchQuestion/ResearchQuestion";
import PhaseThree from "./components/phaseThree/PhaseThree";
import SolutionSection from "./components/finalSolution/SolutionSection";
import MasterThesisBackground from "./components/MasterThesisBackground";
import DesignGuidelines from "./components/designGuidelines/DesignGuidelines";
import ScrollToTop from "@/ScrollToTop";

interface MasterThesisPageProps {
  // Add any props you need here
}

const MasterThesisPage: React.FC<MasterThesisPageProps> = () => {
  return (
    <>
      <ScrollToTop />
      <Helmet>
        <title>Master's Thesis</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Master's Thesis in Interaction Design and Technologies - 2024"
        />
      </Helmet>
      <MasterThesisHeader />
      <MasterThesisBackground />
      <ResearchQuestion />
      <MicroAdjustments />
      <TripleDiamond />
      <PhaseOne />
      <PhaseTwo />
      <PhaseThree />
      <SolutionSection />
      <DesignGuidelines />
      <Footer />
    </>
  );
};

export default MasterThesisPage;
