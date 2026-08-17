const SVGConnector = () => {
  return (
    <div className="d-none d-md-flex col-md-auto justify-content-center align-items-center">
      <svg
        width="10"
        height="195"
        viewBox="0 0 10 195"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.86328 0V86.149"
          stroke="url(#paint0_linear)"
          strokeWidth="1.6674"
        />
        <path
          d="M4.86328 111.16L4.86328 194.53"
          stroke="url(#paint1_linear)"
          strokeWidth="1.6674"
        />
        <rect
          y="92.4023"
          width="9.7265"
          height="9.7265"
          rx="4.86325"
          fill="#28A66B"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="5.36328"
            y1="0"
            x2="5.36328"
            y2="86.149"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#797979" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="5.36328"
            y1="111.16"
            x2="5.36328"
            y2="194.53"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#797979" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default SVGConnector;
