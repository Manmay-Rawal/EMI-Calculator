import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "../components/Navbar.jsx";
import Home from "../page/Home.jsx";
import About from "../page/About.jsx";
import ExchangeRate from "../page/ExchangeRate.jsx";
import ErrorPage from "../page/ErrorPage.jsx";

const UseRoutes = ({ darkMode, setDarkMode }) => {
  const location = useLocation();

  const hideNavBarRoutes = ["/Error_Page"];

  const shouldShowNavBar = !hideNavBarRoutes.includes(location.pathname);

  return (
    <div>
      {shouldShowNavBar && <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/Exchange_Rate_Live"
          element={<ExchangeRate />}
        />
        <Route path="/Error_Page" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default UseRoutes;
