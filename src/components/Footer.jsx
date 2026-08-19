import "../styles/Footer.css";
import { BRAND_NAME } from "../constants";
import ConnectButton from "./ConnectButton";

function Footer() {
  return (
    <footer className="footer py-4">
      <div className="footer_button_container">
        <ConnectButton
          // href="downloads/sikka999-1.0.2-1.apk"
          download
          label="Download App"
          icon="fas fa-download"
          bgColor="var(--green-brand)"
          borderColor="var(--green-deep)"
          textColor="var(--white)"
          // arrowBg="var(--white-soft)"
          // arrowColor="var(--green-brand)"
        />

        <ConnectButton
          href="tel:put-your-number"
          label="Call Now"
          icon="fas fa-phone-alt"
          bgColor="var(--green-soft)"
          borderColor="var(--green-border-soft)"
          textColor="var(--green-deep)"
          // arrowBg="var(--green-brand)"
          // arrowColor="var(--white)"
        />

        <ConnectButton
          href="https://wa.me/put-your-number"
          label="Whatsapp"
          icon="fab fa-whatsapp"
          bgColor="var(--white-off)"
          borderColor="var(--green-border-soft)"
          textColor="var(--green-brand)"
          // arrowBg="var(--green-brand)"
          // arrowColor="var(--white)"
        />

        <p style={{ color: "var(--green-pale)" }}>
          This app is for users 18 years and older only. Play responsibly.
        </p>
      </div>

      <div className="container">
        <div className="row align-items-center mt-5">
          {/* Left Side - Copyright */}

          {/* Bootstrao utility classes are explained in the README.md file go and read the details whats happening
          in these left and right div classes under ks-online section */}
          {/* <div className="col-12 col-md-6 text-center text-md-start order-2 order-md-1">
          -> Right now to have this copyright into right side of the site we changed the grid column into col-md-12,
           you can change it back to col-md-6*/}

          <div className="col-12 col-md-12 text-center text-md-center">
            <div>
              <p className="mb-0">
                &copy;2026 {BRAND_NAME}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
