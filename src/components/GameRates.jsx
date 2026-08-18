import "../styles/GameRates.css";
import RateCard from "./RateCard";

const rates = [
  { icon: "fas fa-bolt", name: "Single Digit", ka: "1 KA", amt: "9.5" },
  { icon: "fas fa-star", name: "Jodi Digits", ka: "1 KA", amt: "95" },
  { icon: "fas fa-gem", name: "Single Pana", ka: "1 KA", amt: "150" },
  { icon: "fas fa-crown", name: "Double Pana", ka: "1 KA", amt: "300" },
  { icon: "fas fa-trophy", name: "Triple Pana", ka: "1 KA", amt: "900" },
  { icon: "fas fa-sun", name: "Half Sangam A", ka: "1 KA", amt: "1000" },
  { icon: "fas fa-sun", name: "Half Sangam B", ka: "1 KA", amt: "1000" },
  { icon: "fas fa-dice", name: "Full Sangam", ka: "1 KA", amt: "10000" },
];

const GameRates = () => {
  return (
    // We have a common styling for section, section-title, green-line and section-subtitle in App.css
    <section style={{ background: "var(--gray-bg)" }}>
      <div className="container">
        <h2 className="section-title">Game Rates</h2>
        <div className="green-line"></div>
        <p className="section-sub">Live market game rates.</p>
        <div className="rates-grid">
          {rates.map((rate, idx) => (
            <RateCard
              key={idx}
              icon={rate.icon}
              name={rate.name}
              ka={rate.ka}
              amt={rate.amt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameRates;
