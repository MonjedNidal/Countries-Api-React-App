import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/App.css";
import Navbar from "./components/Navbar";
import CountriesPage from "./components/CountriesPage";
import DetailsPage from "./components/DetailsPage";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CountryProvider } from "./components/CountryContext.js";

function App() {
  const [darkModeClicked, setDarkModeClicked] = useState(() => {
    const storedDarkMode = localStorage.getItem("myAppDarkMode");
    return storedDarkMode === "true";
  });

  const handleDarkModeClicked = () => {
    setDarkModeClicked(!darkModeClicked);
  };
  useEffect(() => {
    localStorage.setItem("myAppDarkMode", JSON.stringify(darkModeClicked));
  }, [darkModeClicked]);
  return (
    <div className={`App ${darkModeClicked ? "darkApp" : ""}`}>
      <Navbar
        darkModeClicked={darkModeClicked}
        handleDarkModeClicked={handleDarkModeClicked}
      />
      <CountryProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<CountriesPage darkModeClicked={darkModeClicked} />}
            />
            <Route
              path="/details/:countryName"
              element={<DetailsPage darkModeClicked={darkModeClicked} />}
            />
          </Routes>
        </Router>
      </CountryProvider>
    </div>
  );
}

export default App;
