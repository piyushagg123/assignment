import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import Sidebar from "./components/Sidebar";
import NewHome from "./pages/NewHome";
import Payouts from "./pages/Payouts";
import Account from "./pages/Account";
import Contact from "./pages/Contact";
import VendorPayments from "./pages/VendorPayments";
import TaxPayments from "./pages/TaxPayments";
import PayoutLink from "./pages/PayoutLink";
import Payroll from "./pages/Payroll";
import Reports from "./pages/Reports";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Sidebar>
      </BrowserRouter> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payouts" element={<Payouts />} />
          <Route path="/account" element={<Account />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vendorPayments" element={<VendorPayments />} />
          <Route path="/taxPayments" element={<TaxPayments />} />
          <Route path="/payoutLink" element={<PayoutLink />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
