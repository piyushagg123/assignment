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
import "./Navbar.css";

import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <Home />,
    },
    {
      path: "/payouts",
      name: "Payouts",
      icon: <Payout />,
    },
    {
      path: "/account",
      name: "Account",
      icon: <Account />,
    },
    {
      path: "/contact",
      name: "Contact",
      icon: <Contact />,
    },
    {
      path: "/vendorPayments",
      name: "Vendor Payments",
      icon: <Payements />,
    },
    {
      path: "/taxPayments",
      name: "Tax Payments",
      icon: <TaxPayments />,
    },
    {
      path: "/payoutLink",
      name: "Payout Links",
      icon: <Payout />,
    },
    {
      path: "/payroll",
      name: "Payroll",
      icon: <Payroll />,
    },
    {
      path: "/reports",
      name: "Reports",
      icon: <Report />,
    },
  ];
  return (
    <div
      style={{ background: "#242A4A", width: "fit-content", height: "100vh" }}
      className="fixed"
    >
      <div
        className="flex items-center p-2 justify-center"
        style={{ height: "44px" }}
      >
        <div
          style={{
            display: openMenu ? "block" : "none",
            background: "white",
            marginRight: "10px",
          }}
          className="w-36"
        >
          <Razor />
        </div>
        <div style={{ fontSize: "25px" }} className="bars">
          <FaBars
            style={{ color: "white" }}
            onClick={() => {
              setOpenMenu(() => !openMenu);
            }}
          />
        </div>
      </div>
      <br />
      {menuItem.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className="link  p-3"
          activeclassname="active"
          onClick={() => {
            setOpenMenu(false);
          }}
          style={{ gap: "15px" }}
        >
          <div className="icon " style={{ color: "black", height: "30px" }}>
            {item.icon}
          </div>
          <div
            style={{ display: openMenu ? "flex" : "none", color: "white" }}
            className="link_text pl-3"
          >
            {item.name}
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
