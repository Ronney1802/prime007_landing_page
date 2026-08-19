import "../styles/HowToPlayCard.css";

const HowToPlayCard = ({ icon, step, description }) => {
  return (
    <div className="row g-4 how-to-play">
      <div className="step-card">
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
