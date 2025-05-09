import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "../components/Navbar.jsx";
import Home from "../page/Home.jsx";
import About from "../page/About.jsx";
import ExchangeRate from "../page/ExchangeRate.jsx";
import ErrorPage from "../page/ErrorPage.jsx";

const UseRoutes = ({ darkMode, setDarkMode }) => {
  const location = useLocation();

  const hideNavBarRoutes = ["/Loan-calculator/Error_Page"];

  const shouldShowNavBar = !hideNavBarRoutes.includes(location.pathname);

  return (
    <div>
      {shouldShowNavBar && <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />}
      <Routes>
        <Route path="/Loan-calculator" element={<Home />} />
        <Route path="/Loan-calculator/about" element={<About />} />
        <Route
          path="/Loan-calculator/Exchange_Rate_Live"
          element={<ExchangeRate />}
        />
        <Route path="/Loan-calculator/Error_Page" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default UseRoutes;
