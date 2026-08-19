import "./App.css";
import AppSection from "./components/AppSection";
import ConnectSection from "./components/ConnectSection";
import FAQSection from "./components/FAQSection";
import FeatureBlock from "./components/FeatureBlock";
import Footer from "./components/Footer";
import GameRates from "./components/GameRates";
import Hero from "./components/Hero";
import WhatsAppChannel from "./components/WhatsAppChannel";
import prime007Logo from "./assets/images/prime007-logo(1).png";
import { BRAND_NAME } from "./constants";
import HowToPlay from "./components/HowToPlay";

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
      {/* <FloatDownloadButton /> */}
      <div className="logo_container">
        <img
          src={prime007Logo}
          className="prime007-logo"
          alt={`${BRAND_NAME} app logo`}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
