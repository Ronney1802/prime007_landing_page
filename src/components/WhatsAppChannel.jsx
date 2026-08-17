import "../styles/WhatsAppChannel.css";
import { BRAND_NAME } from "../constants";

const WhatsAppChannel = () => {
  return (
    <section
      className="wa-channel-section"
      aria-label={`Join ${BRAND_NAME} WhatsApp Channel`}
    >
      <div className="container">
        <div className="wa-channel-panel">
          <div className="wa-channel-row">
            <div className="wa-channel-icon" aria-hidden="true">
              <i className="fab fa-whatsapp"></i>
            </div>

            <div className="wa-channel-copy">
              <p className="wa-channel-eyebrow">
                Official {BRAND_NAME} Channel
              </p>
              <h2 className="wa-channel-title">Join Our WhatsApp Channel</h2>
              <p className="wa-channel-desc">
                Get live matka results, daily jodi &amp; pana updates, market
                alerts and exclusive offers — free, one tap, no chat spam.
              </p>
              <ul className="wa-channel-perks">
                <li>
                  <i className="fas fa-bolt"></i> Instant live results
                </li>
                {/* <li>
                  <i className="fas fa-chart-line"></i> Daily chart alerts
                </li> */}
                <li>
                  <i className="fas fa-bell"></i> Market notifications
                </li>
                <li>
                  <i className="fas fa-gift"></i> Exclusive offers
                </li>
              </ul>
            </div>

            <a
              className="wa-channel-btn"
              href="https://whatsapp.com/channel/put_your_id"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Join ${BRAND_NAME} WhatsApp Channel`}
            >
              <i className="fab fa-whatsapp"></i>
              Join Channel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppChannel;
