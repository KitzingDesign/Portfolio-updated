import { Fragment, useEffect } from "react";

import AOS from "aos";
import styled from "@emotion/styled";
import MasterThesisHeader from "../../components/masterTheses/matersThesisHeader";
import MasterThesisBackground from "../../components/masterTheses/masterThesisBackground";
import ResearchQuestion from "../../components/masterTheses/researchQuestion/ResearchQuestion";
import MicroAdjustments from "../../components/masterTheses/microAdjustments/MicroAdjustments";
import TripleDiamond from "../../components/masterTheses/tripleDiamond/TripleDiamond";
import PhaseOne from "../../components/masterTheses/phase1/PhaseOne";
import PhaseTwo from "../../components/masterTheses/phase2/PhaseTwo";
import PhaseThree from "../../components/masterTheses/phase3/PhaseThree";
import SolutionSection from "../../components/masterTheses/finalSolution/SolutionSection";
import DesignGuidelines from "../../components/masterTheses/designGuidelines/DesignGuidelines";
import { Helmet } from "react-helmet";
import Footer from "../../components/Layout/Footer";

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

export default withTransition(MasterThesisPage);
