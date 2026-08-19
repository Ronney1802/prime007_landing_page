import "./App.css";
import AppSection from "./components/AppSection";
import ConnectSection from "./components/ConnectSection";
import FAQSection from "./components/FAQSection";
import FeatureBlock from "./components/FeatureBlock";
import GameRates from "./components/GameRates";
import Hero from "./components/Hero";
import WhatsAppChannel from "./components/WhatsAppChannel";
import HowToPlay from "./components/HowToPlay";
import FloatDownloadButton from "./components/FloatDownloadButton";

function App() {
  return (
    <div className="app-root">
      <Hero />
      <WhatsAppChannel />
      <FeatureBlock />
      <ConnectSection />
      <GameRates />
      <HowToPlay />
      <AppSection />
      <FAQSection />
      <FloatDownloadButton />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
