import { Helmet } from "react-helmet";
import Footer from "../../components/Layout/Footer";
import KnowledgeHeader from "./components/KnowledgeSharingHeader";
import KnowledgeBackground from "./components/KnowledgeSharingBackground";
import KnowledgeContent from "./components/KnowledgeSharingContent";

const KnowledgeSharingPage = () => {
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
