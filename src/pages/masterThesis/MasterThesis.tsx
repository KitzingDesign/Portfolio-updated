import { useEffect } from "react";

import AOS from "aos";
import styled from "@emotion/styled";

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

// Emotion styles
const Sticky = styled.p`
  writing-mode: vertical-rl;
  bottom: 1%;
  left: 1%;
  position: fixed;
  text-transform: uppercase;
  transform: rotate(180deg);
`;

interface MasterThesisPageProps {
  // Add any props you need here
}

const MasterThesisPage: React.FC<MasterThesisPageProps> = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Helmet>
        <title>Master's Thesis</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Master's Thesis in Interaction Design and Technologies - 2024"
        />
      </Helmet>

      <MasterThesisHeader />
      {/* <MasterThesisBackground /> */}
      <ResearchQuestion />
      <MicroAdjustments />
      <TripleDiamond />
      <PhaseOne />
      <PhaseTwo />
      <PhaseThree />

      <SolutionSection />
      {/*
      <DesignGuidelines /> */}
      <Footer />
    </>
  );
};

export default MasterThesisPage;
