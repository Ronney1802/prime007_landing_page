import "../styles/ConnectButton.css";

const ConnectButton = ({
  href,
  label,
  icon,
  arrowBg,
  arrowColor,
  bgColor,
  borderColor,
  textColor,
}) => {
  return (
    <a
      href={href}
      className="connect-btn"
      style={{
        background: bgColor,
        border: `1px solid ${borderColor}`,
        color: textColor,
      }}
      aria-label={label}
    >
      <span className="btn-label">
        <i className={icon}></i> {label}
      </span>
      <span
        className="btn-arrow"
        style={{
          background: arrowBg,
          color: arrowColor,
        }}
      >
        <i className="fas fa-chevron-right"></i>
      </span>
    </a>
  );
};

export default ConnectButton;
