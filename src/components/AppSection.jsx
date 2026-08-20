import "../styles/AppSection.css";
import { BRAND_NAME } from "../constants";
import appImage from "../assets/images/app-screen.png";

const AppSection = () => {
  return (
    <section className="app-section">
      <div className="container">
        <div className="row align-items-center g-4 app-row">
          <div className="col-lg-6 text-lg-start app-copy">
            <h2 className="app-download-title">
              Download <br />
              the <span>{BRAND_NAME}</span> App
            </h2>
            <p>
              Download the {BRAND_NAME} app now and join thousands of players
              enjoying the ultimate Matka gaming experience.
            </p>
            <a
              className="btn-dl-big"
              // href={APK_DOWNLOAD_URL}
              // download
              aria-label={`Download ${BRAND_NAME} App`}
            >
              <i className="fas fa-download"></i> Get {BRAND_NAME} App
            </a>
          </div>

          {/* Phone Mockup */}
          <div className="col-lg-6">
            <div className="app-phone-wrap">
              <div className="app-ring"></div>
              <img
                src={appImage}
                alt={`${BRAND_NAME} matka app on mobile phone`}
                className="app-phone-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
