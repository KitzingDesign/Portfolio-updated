import { useEffect } from "react";
import AOS from "aos";
import { Helmet } from "react-helmet";
import Footer from "../../components/Layout/Footer";
import DigiContent from "./components/DigiContent";
import DigiBackground from "./components/DigiBackground";
import DigiHeader from "./components/DigiHeader";

interface DigitalizationPageProps {
  // Add any props you need here
}

const DigitalizationPage: React.FC<DigitalizationPageProps> = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Helmet>
        <title>Digitalization</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Digitalization project showcase" />
      </Helmet>
      <DigiHeader />
      <DigiBackground />
      <DigiContent />

      <Footer />
    </>
  );
};

export default DigitalizationPage;
