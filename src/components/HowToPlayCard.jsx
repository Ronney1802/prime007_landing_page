import "../styles/HowToPlayCard.css";

const HowToPlayCard = ({ icon, number, step, description }) => {
  return (
    <div className="row g-4 how-to-play">
      <div className="step-card">
        <div className="step-number">{number}</div>
        <div className="step-icon">
          <i className={icon}></i>
        </div>
        <h4>{step}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default HowToPlayCard;
