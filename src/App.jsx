import "./App.css";
import AppSection from "./components/AppSection";
import ConnectSection from "./components/ConnectSection";
import FAQSection from "./components/FAQSection";
import FeatureBlock from "./components/FeatureBlock";
import FloatDownloadButton from "./components/FloatDownloadButton";
import GameRates from "./components/GameRates";
import Hero from "./components/Hero";
import WhatsAppChannel from "./components/WhatsAppChannel";

function App() {
  return (
    <>
      <Hero />
      <WhatsAppChannel />
      <FeatureBlock />
      <ConnectSection />
      <GameRates />
      <AppSection />
      <FAQSection />
      <FloatDownloadButton />
    </>
  );
}

export default App;
