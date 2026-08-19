import "../styles/Hero.css";
// import prime007BannerImg from "../assets/images/prime007-banner-new.png";
import prime007BannerImg from "../assets/images/prime007-banner.png";
import girlImg from "../assets/images/hero-girl(1).png";
import DownloadButton from "./DownloadButton";
import { BRAND_NAME } from "../constants";

const Hero = () => {
  return (
    <div style={{ marginBottom: "50px" }}>
      <section className="hero">
        <div className="container hero-wrap">
          {/* Hidden title for SEO */}
          <h1 className="hero-page-title">
            {BRAND_NAME} Online Matka App – Live Results, Jodi & Pana Charts
          </h1>

          <div className="row align-items-end g-0">
            <div className="col-lg-6">
              <div className="hero-copy-wrap">
                <img
                  src={prime007BannerImg}
                  className="hero-copy"
                  alt={`${BRAND_NAME} play big win big banner`}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-girl-wrap">
                <img
                  src={girlImg}
                  className="hero-girl"
                  alt={`${BRAND_NAME} matka app promotional model`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <DownloadButton />
      <p class="hero-page-lead text-center">
        India's trusted online matka app with starline games, live market
        results and starline records.
      </p>
    </div>
  );
};

export default Hero;
