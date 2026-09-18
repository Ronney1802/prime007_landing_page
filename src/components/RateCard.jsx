import "../styles/GameRates.css";

const RateCard = ({ icon, name, ka, amt, rateList, isFullWidth = false }) => {
  const marketType =
    name === "STARLINE"
      ? "Special Market"
      : name === "JACKPOT"
        ? "Maha Market"
        : null;

  if (rateList && rateList.length) {
    return (
      <div className={`rate-card full-width starline-card`}>
        <div className="starline-row">
          <div className="starline-header">
            <div className="rate-left">
              {/* <div className="rate-ico">
                <i className={icon}></i>
              </div> */}
              <div className="rate-name-group">
                <div className="rate-name">{name}</div>
                {marketType && <div className="market-type">{marketType}</div>}
              </div>
            </div>
          </div>

          <div className="starline-box-grid">
            {rateList.map((item) => (
              <div className="starline-box" key={item.name}>
                <div className="starline-box-left">
                  <div className="starline-box-name">{item.name}</div>
                </div>
                <div className="starline-box-right">
                  <span className="starline-box-ka">{item.ka}</span>
                  <span className="starline-box-amt">{item.amt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`rate-card${isFullWidth ? " full-width" : ""} ${marketType === "Maha Market" ? "jackpot-card" : ""}`}
    >
      <div className="rate-left">
        <div className="rate-ico">
          <i className={icon}></i>
        </div>
        <div className="rate-name-group">
          <div className="rate-name">{name}</div>
          {marketType && <div className="market-type">{marketType}</div>}
        </div>
      </div>
      <div className="rate-right">
        <span className="rate-ka">{ka}</span>
        <span className="rate-amt">{amt}</span>
      </div>
    </div>
  );
};

export default RateCard;
