import "./App.css";
import AppSection from "./components/AppSection";
import ConnectSection from "./components/ConnectSection";
import FeatureBlock from "./components/FeatureBlock";
import Hero from "./components/Hero";
import WhatsAppChannel from "./components/WhatsappChannel";

function App() {
  return (
    <>
      <Hero />
      <WhatsAppChannel />
      <FeatureBlock />
      <ConnectSection />
      <AppSection />
    </>
  );
}

export default App;
