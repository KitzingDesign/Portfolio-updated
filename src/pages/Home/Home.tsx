import HomeHeader from "./components/HomeHeader";
import ReactFullpage from "@fullpage/react-fullpage";
import MasterThesisSection from "./components/MastersThesis";
import KnowledgeSection from "./components/KowledgeSection";
import EmotionSection from "./components/EmotionSection";
import DigitalizationSection from "./components/DigitalizationSection";
import BachelorThesisSection from "./components/BachelorThesisSection";
import { Helmet } from "react-helmet";

// FullPage.js
// const fullPageToken = import.meta.env.VITE_FULLPAGE_KEY || null;

// Section titles mapping
const SECTION_TITLES = {
  home: "Home",
  thesis: "Master's Thesis",
  knowledge: "Knowledge Platform",
  calmifly: "Emotion Design",
  digitalization: "Digitalization",
  bachelorThesis: "Bachelor Thesis",
};

const HomePage = () => {
  const handleSectionLeave = (destination: any) => {
    const sectionName =
      SECTION_TITLES[destination.anchor as keyof typeof SECTION_TITLES];
    document.title = `${sectionName} | Jakob Kitzing`;
  };

  return (
    <>
      {/* Single Helmet at the root level */}
      <Helmet>
        <title>Projects | Jakob Kitzing</title>
      </Helmet>

      <ReactFullpage
        scrollingSpeed={800}
        navigation={true}
        credits={{
          enabled: false,
        }}
        anchors={[
          "home",
          "thesis",
          "knowledge",
          "calmifly",
          "digitalization",
          "bachelorThesis",
        ]}
        onLeave={handleSectionLeave}
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
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default HomePage;
