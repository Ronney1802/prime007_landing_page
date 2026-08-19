import { APK_DOWNLOAD_URL, BRAND_NAME } from "../constants";
import "../styles/FloatDownloadButton.css";
// import prime007Logo from "../assets/images/prime007-logo.png";

const FloatDownloadButton = () => {
  return (
    <section className="float-download-bar" aria-label="Download app">
      <div className="float-download-bar__inner">
        <a href={APK_DOWNLOAD_URL} download className="float-download-btn">
          <div className="float-download-icon">
            <i className="fas fa-download"></i>
          </div>
          <span className="float-download-text">{BRAND_NAME}</span>
          {/* <div className="logo_container">
            <img
              src={prime007Logo}
              className="prime007-logo"
              alt={`${BRAND_NAME} app logo`}
            />
          </div> */}
        </a>
      </div>
    </section>
  );
};

export default FloatDownloadButton;
