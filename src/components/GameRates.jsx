import "../styles/GameRates.css";
import RateCard from "./RateCard";

const rates = [
  { icon: "fas fa-dice", name: "Single Digit", ka: "₹10 KA", amt: "₹95" },
  { icon: "fas fa-star", name: "Jodi Digits", ka: "₹10 KA", amt: "₹950" },
  { icon: "fas fa-trophy", name: "Single Pana", ka: "₹10 KA", amt: "₹1500" },
  { icon: "fas fa-diamond", name: "Double Pana", ka: "₹10 KA", amt: "₹3000" },
  { icon: "fas fa-crown", name: "Triple Pana", ka: "₹10 KA", amt: "₹6000" },
  { icon: "fas fa-bolt", name: "Half Sangam A", ka: "₹10 KA", amt: "₹12000" },
  { icon: "fas fa-bolt", name: "Half Sangam B", ka: "₹10 KA", amt: "₹12000" },
  { icon: "fas fa-gem", name: "Full Sangam", ka: "₹10 KA", amt: "₹120000" },
  {
    icon: "fas fa-sun",
    name: "STARLINE",
    ka: "₹10 KA",
    amt: "₹100",
  },
  { icon: "fas fa-sun", name: "JACKPOT", ka: "₹10 KA", amt: "₹1000" },
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
