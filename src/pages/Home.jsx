import React from "react";
import Search from "../assets/Search";
import Signal from "../assets/Signal";
import Contact from "../assets/Contact";
import "./Home.css";
import Down from "../assets/Down";
import Reload from "../assets/Reload";
import Dot from "../assets/Dot";
import Download from "../assets/Download";
const Home = () => {
  return (
    <div style={{ background: "#1D2345", height: "100vh" }}>
      <div
        className="flex justify-between p-3"
        style={{ background: "#080D29", color: "white" }}
      >
        <div className="flex justify-between" style={{ width: "395px" }}>
          <p style={{ padding: " 5px 2px" }}>Payouts /</p>
          <p style={{ padding: " 5px 2px" }} className="selected">
            Single
          </p>
          <div className="flex items-center" style={{ padding: " 5px 2px" }}>
            <p>Bulk</p>
            <p className="new">NEW</p>
          </div>
          <p style={{ padding: " 5px 2px" }}>Tally</p>
          <p style={{ padding: " 5px 2px" }}>Payout Links</p>
        </div>
        <div className="flex">
          <div className="flex justify-around " style={{ width: "200px" }}>
            <button
              style={{ padding: " 5px 2px", color: "#79a0ff", border: "solid" }}
            >
              + PAYOUT
            </button>
            <button style={{ padding: " 5px 2px", color: "#79a0ff" }}>
              <Search />
            </button>
            <button style={{ padding: " 5px 2px", color: "orange" }}>
              {" "}
              <Signal />
            </button>
            <button style={{ padding: " 5px 2px", color: "#79a0ff" }}>
              <Contact h="15" />
            </button>
          </div>
        </div>
      </div>

      <div
        style={{ background: "#111739", color: "white" }}
        className="p-3 flex justify-between"
      >
        <div
          className="flex justify-between items-center"
          style={{ width: "660px" }}
        >
          <p>Quick Filters:</p>
          <div
            style={{ background: "white", width: "2px", height: "10px" }}
          ></div>
          <div>
            <label>
              <input type="checkbox" checked />
              All Payouts
            </label>
          </div>
          <div
            style={{ background: "orange", width: "2px", height: "10px" }}
          ></div>
          <div>
            <label>
              <input type="checkbox" />
              Scheduled For Next 2 Days
            </label>
          </div>
          <div
            style={{ background: "orange", width: "2px", height: "10px" }}
          ></div>
          <div>
            <label>
              <input type="checkbox" />
              Queued RazorpayX A/c
            </label>
          </div>
        </div>
        <div>View More Filters</div>
      </div>

      <div
        style={{ background: "#282D4D", fontSize: "10px" }}
        className="m-4 flex p-6"
      >
        <p style={{ background: "orange" }} className="mr-3">
          TEST
        </p>
        <p style={{ color: "white" }}>
          These are test payouts and do not affect the actual balance. They are
          used only for the purpose of integrating events.
        </p>
        <p>
          <a href="#" style={{ color: "#79a0ff" }} className="ml-3">
            Learn More
          </a>
        </p>
      </div>

      <div
        className="flex items-center p-3 justify-between"
        style={{ color: "white", fontSize: "10px" }}
      >
        <div className="flex items-center">
          <input type="checkbox" />
          <p>Showing 1-5 payouts</p>
          <div>
            <Dot />
          </div>
          <p className="flex ml-1">
            Sort by{" "}
            <span style={{ color: "#79a0ff" }} className="ml-1">
              {" "}
              latest creation date
            </span>
          </p>
        </div>
        <div className="flex items-center">
          <button>
            <Reload />
          </button>
          <button
            className="flex"
            style={{
              border: "solid #79a0ff",
              padding: "5px",
              margin: "0px 10px",
            }}
          >
            <Download />
            <p style={{ color: "#79a0ff" }}>Export</p>
          </button>
          <button
            className="flex"
            style={{ background: "#79a0ff", padding: "7px" }}
          >
            <p>+ Payout</p> <Down />
          </button>
        </div>
      </div>

      <br />
      <div
        style={{ background: "#707070", width: "100%", height: "1px" }}
      ></div>
      <br />
      <div className="flex justify-evenly" style={{ color: "white" }}>
        <div>
          <p>CREATED AT</p>
          <br />
          <div style={{ fontSize: "15px" }}>
            <p>Fri 9 Feb, 2:32PM</p>
            <p>Fri 9 Feb, 2:32PM</p>
            <p>Fri 9 Feb, 2:32PM</p>
            <p>Fri 9 Feb, 2:32PM</p>
            <p>Fri 9 Feb, 2:32PM</p>
          </div>
        </div>
        <div>
          <p>AMOUNT</p>
          <br />
          <div style={{ fontSize: "15px" }}>
            <p>Rs 10,000</p>
            <p>Rs 10,000</p>
            <p>Rs 10,000</p>
            <p>Rs 10,000</p>
            <p>Rs 10,000</p>
          </div>
        </div>
        <div>
          <p>STATUS</p>
          <br />
          <div style={{ fontSize: "15px" }}>
            <p style={{ color: "orange" }}> Queued</p>
            <p style={{ color: "orange" }}>Queued</p>
            <p style={{ color: "orange" }}>Queued</p>
            <p style={{ color: "orange" }}>Queued</p>
            <p style={{ color: "orange" }}>Queued</p>
          </div>
        </div>
        <div>
          <p>CONTACT</p>
          <br />
          <div style={{ fontSize: "15px" }}>
            <p>Shivam Arora</p>
            <p>Shivam Arora</p>
            <p>Shivam Arora</p>
            <p>Shivam Arora</p>
            <p>Shivam Arora</p>
          </div>
        </div>
        <div>
          <p>CREATED BY</p>
          <br />
          <div style={{ fontSize: "15px" }}>
            <p>Aditya Sharma</p>
            <p>Aditya Sharma</p>
            <p>Aditya Sharma</p>
            <p>Aditya Sharma</p>
            <p>Aditya Sharma</p>
          </div>
        </div>
        <div>
          <p>UTR</p>
          <br />
          <div style={{ fontSize: "15px" }}>
            <p>--</p>
            <p>--</p>
            <p>--</p>
            <p>--</p>
            <p>--</p>
          </div>
        </div>
      </div>
      <br />
      <div
        style={{ background: "#707070", width: "100%", height: "1px" }}
      ></div>

      <div className="flex justify-end p-5">
        <div style={{ background: "#161D40", color: "white" }} className="mr-2">
          <button className="flex items-center">
            <p>10</p>
            <Down />
          </button>
        </div>
        <p style={{ color: "white" }}>rows/page</p>
      </div>
      <br />
    </div>
  );
};

export default Home;
