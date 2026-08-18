import "../styles/GameRates.css";

const RateCard = ({ icon, name, ka, amt }) => {
  return (
    <div className="rate-card">
      <div className="rate-left">
        <div className="rate-ico">
          <i className={icon}></i>
        </div>
        <div className="rate-name">{name}</div>
      </div>
      <div className="rate-right">
        <span className="rate-ka">{ka}</span>
        <span className="rate-amt">{amt}</span>
      </div>
    </div>
  );
};

export default RateCard;
