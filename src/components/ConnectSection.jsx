import ConnectButton from "./ConnectButton";
import "../styles/ConnectSection.css";

const ConnectSection = () => {
  return (
    <section className="connect-section-wrap">
      <div className="container">
        <div className="connect-panel">
          <div className="row align-items-center g-4 connect">
            <h2 className="col-lg-6 mb-0">
              Connect With Our{" "}
              <span>
                Team <br /> Instantly
              </span>
            </h2>
            <p className="col-lg-6 mb-0">
              Have questions or ready to play? Chat with us on WhatsApp or give
              us a call for fast and reliable assistance.
            </p>
          </div>

          <div className="connect-cta-row">
            <ConnectButton
              href="tel:put-your-number"
              label="Call Now"
              icon="fas fa-phone-alt"
              bgColor="var(--green-brand)"
              borderColor="var(--green-deep)"
              textColor="var(--white)"
              arrowBg="var(--white-soft)"
              arrowColor="var(--green-brand)"
            />

            <ConnectButton
              href="https://wa.me/put-your-number"
              label="Whatsapp"
              icon="fab fa-whatsapp"
              bgColor="var(--white-off)"
              borderColor="var(--green-border-soft)"
              textColor="var(--green-brand)"
              arrowBg="var(--green-brand)"
              arrowColor="var(--white)"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
