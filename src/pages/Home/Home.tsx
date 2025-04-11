// src/pages/Home/Home.tsx
import { motion } from "framer-motion";
import styles from "./Home.module.scss";
import HomeHeader from "./components/HomeHeader";

import ReactFullpage from "@fullpage/react-fullpage";
import MasterThesisSection from "./components/MastersThesis";

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
        anchors={["home"]}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <HomeHeader />
              </div>
              <div className="section">
                <MasterThesisSection />
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
