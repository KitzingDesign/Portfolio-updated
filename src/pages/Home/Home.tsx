// src/pages/Home/Home.tsx
import { motion } from "framer-motion";
import styles from "./Home.module.scss";
import HomeHeader from "./components/HomeHeader";

import ReactFullpage from "@fullpage/react-fullpage";
import MasterThesisSection from "./components/MastersThesis";
import KnowledgeSection from "./components/KowledgeSection";
import EmotionSection from "./components/EmotionSection";
import DigitalizationSection from "./components/DigitalizationSection";
import BachelorThesisSection from "./components/BachelorThesisSection";
import ProsexSection from "./components/ProsexSection";

// FullPage.js
const fullPageToken = import.meta.env.VITE_FULLPAGE_KEY;

const HomePage = () => {
  return (
    <>
      <ReactFullpage
        scrollingSpeed={800}
        navigation={true}
        licenseKey={fullPageToken}
        credits={{
          enabled: false, // Disable default credits
          label: "", // Empty label
          position: "right", // Position doesn't matter since it's disabled
        }}
        anchors={[
          "home",
          "thesis",
          "knowledge",
          "calmifly",
          "digitalization",
          "bachelorThesis",
          "prosex",
        ]}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <HomeHeader />
              </div>
              <div className="section">
                <MasterThesisSection />
              </div>
              <div className="section">
                <KnowledgeSection />
              </div>
              <div className="section">
                <EmotionSection />
              </div>
              <div className="section">
                <DigitalizationSection />
              </div>
              <div className="section">
                <BachelorThesisSection />
              </div>
              <div className="section">
                <ProsexSection />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
      ;
    </>
  );
};

export default HomePage;
