import React from "react";

const Arrow = () => {
  return (
    <div>
      <svg //arrow
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-move-up-right"
        style={{ color: "white" }}
      >
        <path d="M13 5H19V11" />
        <path d="M19 5L5 19" />
      </svg>
    </div>
  );
};

export default Arrow;
