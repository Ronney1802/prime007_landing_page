import "../styles/FAQ.css";
import { BRAND_NAME } from "../constants";
import FAQBox from "./FAQBox";

const faqs = [
  {
    question: `How do I download the ${BRAND_NAME} app?`,
    answer: `Visit the official ${BRAND_NAME} website and click Download Now. Supports Android and iOS, installs in minutes.`,
  },
  {
    question: `How do I deposit money into my account?`,
    answer: `You can deposit money using UPI, bank transfer, and e-wallets. Go to the Wallet section in the app and select Deposit. 
      Minimum deposit is ₹100.`,
  },
  {
    question: `How long does it take to withdraw my winnings?`,
    answer: `Withdrawals are processed instantly in most cases. Maximum processing time is 4 minutes.`,
  },
  {
    question: `Is ${BRAND_NAME} legal and safe to use?`,
    answer: `${BRAND_NAME} uses advanced security measures to protect all user data and transactions.`,
  },
  {
    question: `How do I contact customer support?`,
    answer: `Reach our support team 24/7 via WhatsApp, phone, or email.`,
  },
];

const FAQSection = () => {
  return (
    <section style={{ background: "var(--gray-bg)" }} className="home-faq-wrap">
      <div className="container">
        <div className="row g-4 align-items-start">
          {/* Left Side */}
          <div className="col-lg-5">
            <div className="faq-left">
              <span className="faq-tag">
                <i className="fas fa-circle-check"></i> FAQS
              </span>
              <h2 className="faq-left-title">
                Find quick answers about <br /> {BRAND_NAME} Questions
              </h2>
              <p>
                Find quick answers to common questions about {BRAND_NAME} gaming
                platform
              </p>
              <a
                className="faq-dl-btn"
                //   href="/downloads/sikka999-1.0.2-1.apk"
              >
                Download App{" "}
                <span>
                  <i className="fas fa-chevron-right"></i>
                </span>
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-7">
            {faqs.map((faq, idx) => (
              <FAQBox key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
