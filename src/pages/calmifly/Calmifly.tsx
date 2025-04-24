import { Helmet } from "react-helmet";
import CalmiflyHeader from "./components/CalmiflyHeader";
import CalmiflyBakgrund from "./components/CalmiflyBackground";
import CalmiflyContent from "./components/CalmiflyContent";
import Footer from "../../components/Layout/Footer";

const CalmiflyPage = () => {
  return (
    <>
      <Helmet>
        <title>Calmifly</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Digitalization project showcase" />
      </Helmet>

      <CalmiflyHeader />
      <CalmiflyBakgrund />
      <CalmiflyContent />

      <Footer />
    </>
  );
};

export default CalmiflyPage;
