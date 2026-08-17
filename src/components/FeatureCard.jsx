import "../styles/FeatureCard.css";

const FeatureCard = ({ icon, title, subtitle }) => {
  return (
    <div className="feature-item">
      <img src={icon} alt={`${title} icon`} />
      <div className="feature-title">{title}</div>
      <div className="feature-sub">{subtitle}</div>
    </div>
  );
};

export default FeatureCard;
