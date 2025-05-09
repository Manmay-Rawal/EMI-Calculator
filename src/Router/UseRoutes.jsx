import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "../components/Navbar.jsx";
import Home from "../page/Home.jsx";
import About from "../page/About.jsx";
import ExchangeRate from "../page/ExchangeRate.jsx";
import ErrorPage from "../page/ErrorPage.jsx";

const UseRoutes = ({ darkMode, setDarkMode }) => {
  const location = useLocation();

  const hideNavBarRoutes = ["/EMI-Calculator/Error_Page"];

  const shouldShowNavBar = !hideNavBarRoutes.includes(location.pathname);

  return (
    <div>
      {shouldShowNavBar && <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />}
      <Routes>
        <Route path="/EMI-Calculator/" element={<Home />} />
        <Route path="/EMI-Calculator/about" element={<About />} />
        <Route
          path="/EMI-Calculator/Exchange_Rate_Live"
          element={<ExchangeRate />}
        />
        <Route path="/EMI-Calculator/Error_Page" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default UseRoutes;
