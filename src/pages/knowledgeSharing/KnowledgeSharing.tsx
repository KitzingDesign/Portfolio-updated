import { Fragment, useEffect } from "react";

import AOS from "aos";

import { Helmet } from "react-helmet";
import Footer from "../../components/Layout/Footer";
import KnowledgeHeader from "./components/KnowledgeSharingHeader";
import KnowledgeBackground from "./components/KnowledgeSharingBackground";
import KnowledgeContent from "./components/KnowledgeSharingContent";

interface HertzPageProps {
  // Add any props you need here
}

const KnowledgeSharingPage: React.FC<HertzPageProps> = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Helmet>
        <title>Knowledge Sharing</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Individual Project - IxD - 2023" />
      </Helmet>

      <KnowledgeHeader />
      <KnowledgeBackground />

      <KnowledgeContent />
      <Footer />
    </>
  );
};

export default KnowledgeSharingPage;
