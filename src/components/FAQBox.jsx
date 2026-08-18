import "../styles/FAQ.css";
import { useState } from "react";

const FAQBox = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? "active" : ""}`}>
      <div className="faq-q" onClick={() => setOpen(!open)}>
        {question}
        <i className="fas fa-chevron-down faq-ico"></i>
      </div>
      <div className={`faq-ans ${open ? "open" : ""}`}>{answer}</div>
    </div>
  );
};

export default FAQBox;
