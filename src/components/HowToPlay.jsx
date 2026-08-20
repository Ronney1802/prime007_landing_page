import "../styles/HowToPlay.css";
import HowToPlayCard from "./HowToPlayCard";
import SVGConnector from "./SVGConnector";

const HowToPlay = () => {
  return (
    <section style={{ background: "var(--gray-bg)" }}>
      <div className="container">
        <h2 className="section-title">How to Play</h2>
        <div className="green-line"></div>
        <p className="section-sub">
          Start your premium gaming journey in 3 simple steps
        </p>
        <div className="how-to-play_grid">
          <HowToPlayCard
            icon="fas fa-download"
            step="Download App"
            description="Download our premium app from the website"
          />
          <SVGConnector dotColor={"var(--gold)"} />
          <HowToPlayCard
            icon="fas fa-user-plus"
            step="Create Account"
            description="Register with your details securely"
          />
          <SVGConnector dotColor={"var(--gold)"} />
          <HowToPlayCard
            icon="fas fa-play-circle"
            step="Start Playing"
            description="Choose your game and start winning"
          />
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;
