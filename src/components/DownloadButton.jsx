import "../styles/DownloadButton.css";
import { BRAND_NAME } from "../constants";

const DownloadButton = () => {
  return (
    <div className="hero-cta-wrap">
      <a
        className="download-btn"
        // href="/downloads/prime007.apk"
        // download
      >
        <span className="download-btn-shine" aria-hidden="true"></span>
        <span className="download-btn-icon" aria-hidden="true">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.4629 0V13.4297H24.2344L15 23.8125L5.77148 13.4297H11.543V0C4.92773 1.56445 0 7.49414 0 14.584C0 22.8691 6.71484 29.584 15 29.584C23.2852 29.584 30 22.8691 30 14.584C30 7.49414 25.0723 1.56445 18.4629 0Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <span className="download-btn-text">
          <span className="download-btn-label">Free APK</span>
          <span className="download-btn-title">Download {BRAND_NAME} App</span>
        </span>
      </a>
    </div>
  );
};

export default DownloadButton;
