import React from "react";

const Contact = ({ h = 24 }) => {
  return (
    <div>
      <svg //contacts
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height={h}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-user"
        style={{ color: "white" }}
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    </div>
  );
};

export default Contact;
