import React, { useState } from "react";
import Account from "../assets/Account";
import Arrow from "../assets/Arrow";
import Contact from "../assets/Contact";
import Home from "../assets/Home";
import Payements from "../assets/Payements";
import Payout from "../assets/Payout";
import Payroll from "../assets/Payroll";
import Report from "../assets/Report";
import TaxPayments from "../assets/TaxPayments";
import Razor from "../assets/RazorLogo";

import { FaBars } from "react-icons/fa";

import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/path",
      name: "Home",
      icon: <Home />,
    },
    {
      path: "/",
      name: "Payouts",
      icon: <Payout />,
    },
    {
      path: "/path",
      name: "Account",
      icon: <Account />,
    },
    {
      path: "/path",
      name: "Contact",
      icon: <Contact />,
    },
    {
      path: "/path",
      name: "Vendor Payments",
      icon: <Payements />,
    },
    {
      path: "/path",
      name: "Tax Payments",
      icon: <TaxPayments />,
    },
    {
      path: "/path",
      name: "Payout Links",
      icon: <Payout />,
    },
    {
      path: "/path",
      name: "Payroll",
      icon: <Payroll />,
    },
    {
      path: "/path",
      name: "Reports",
      icon: <Report />,
    },
  ];

  return (
    <div className="containerr">
      <div style={{ width: isOpen ? "285px" : "50px" }} className="sidebar">
        <div className="top_section" style={{ height: "80px" }}>
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            <img
              src={
                "https://razorpay.com/build/browser/static/razorpayX.95bbd041.svg"
              }
              alt=""
            />
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassname="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "flex" : "none", color: "white" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
