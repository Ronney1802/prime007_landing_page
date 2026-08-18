import { BRAND_NAME } from "../constants";
import "../styles/FloatDownloadButton.css";

const FloatDownloadButton = () => {
  return (
    <section className="float-download-bar" aria-label="Download app">
      <div className="float-download-bar__inner">
        <a
          //   href="/downloads/sikka999-1.0.2-1.apk"
          className="float-download-btn"
        >
          <div className="float-download-icon">
            <i className="fas fa-download"></i>
          </div>
          <span className="float-download-text">{BRAND_NAME}</span>
        </a>
      </div>
    </section>
  );
};

export default FloatDownloadButton;
