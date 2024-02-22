import React from "react";

const Payout = () => {
  return (
    <div>
      <svg //payout links
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-arrow-up-right-square"
        style={{ color: "white" }}
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M8 8h8v8" />
        <path d="m8 16 8-8" />
      </svg>
    </div>
  );
};

export default Payout;
