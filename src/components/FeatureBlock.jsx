import "../styles/FeatureBlock.css";
import FeatureCard from "./FeatureCard";
import premiumServiceIcon from "../assets/images/premium-service-green.png";
import fastWithdrawalIcon from "../assets/images/fast-withdrawal-green.png";
import secureIcon from "../assets/images/secure-green.png";
import supportIcon from "../assets/images/support-green.png";
import SVGConnector from "./SVGConnector";
// import { BRAND_NAME } from "../constants";

const FeatureBlock = () => {
  return (
    <div className="container feature-block">
      {/* <div className="feature-header"> */}
      {/* <h2 className="section-title">Premium Features</h2>
        <div className="green-line"></div>
        <p className="section-sub">Experience the excellence of {BRAND_NAME}</p>
      </div> */}
      <div className="row g-3 text-center align-items-center justify-content-around feature-row">
        <div className="col-6 col-md-auto">
          <FeatureCard
            icon={fastWithdrawalIcon}
            title={"Fast Withdrawal"}
            subtitle={"Instant & Reliable"}
          />
        </div>
        <SVGConnector dotColor={"var(--green-brand)"} />
        <div className="col-6 col-md-auto">
          <FeatureCard
            icon={supportIcon}
            title={"24/7 Support"}
            subtitle={"Always Available"}
          />
        </div>
        <SVGConnector dotColor={"var(--green-brand)"} />
        <div className="col-6 col-md-auto">
          <FeatureCard
            icon={secureIcon}
            title={"100% Secure"}
            subtitle={"Safe & Trusted"}
          />
        </div>
        <SVGConnector dotColor={"var(--green-brand)"} />
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
