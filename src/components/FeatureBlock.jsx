import "../styles/FeatureBlock.css";
import FeatureCard from "./FeatureCard";
import premiumServiceIcon from "../assets/images/premium-service.png";
import fastWithdrawalIcon from "../assets/images/fast-withdrawal.png";
import secureIcon from "../assets/images/secure.png";
import supportIcon from "../assets/images/support.png";
import SVGConnector from "./SVGConnector";

const FeatureBlock = () => {
  return (
    <div className="container feature-block">
      <div className="row g-3 text-center align-items-center justify-content-around feature-row">
        <div className="col-6 col-md-auto">
          <FeatureCard
            icon={fastWithdrawalIcon}
            title={"Fast Withdrawal"}
            subtitle={"Instant & Reliable"}
          />
        </div>
        <SVGConnector />
        <div className="col-6 col-md-auto">
          <FeatureCard
            icon={supportIcon}
            title={"24/7 Support"}
            subtitle={"Always Available"}
          />
        </div>
        <SVGConnector />
        <div className="col-6 col-md-auto">
          <FeatureCard
            icon={secureIcon}
            title={"100% Secure"}
            subtitle={"Safe & Trusted"}
          />
        </div>
        <SVGConnector />
        <div className="col-6 col-md-auto">
          <FeatureCard
            icon={premiumServiceIcon}
            title={"Premium Service"}
            subtitle={"Top Quality Service"}
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureBlock;
