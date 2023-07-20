import React, { useState, useEffect } from "react";
import data from "../data/data.json";
import CountryCard from "./CountryCard";
import FilterDropdown from "./FilterDropdown";

function CountriesPage({ darkModeClicked }) {
  const [selectedFilterRegion, setSelectedFilterRegion] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const filtered =
      selectedFilterRegion && selectedFilterRegion !== "All"
        ? data.filter((country) => country.region === selectedFilterRegion)
        : data;
    setFilteredCountries(filtered);
  }, [selectedFilterRegion]);

  const searchedCountries = filteredCountries.filter((country) =>
    country.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <div className="mainForm d-flex row flex-row justify-content-between align-items-center">
        <div className="search-container col-md-6">
          <input
            type="text"
            className={`countrySearchInput ${
              darkModeClicked ? "darkInput" : ""
            }`}
            placeholder="Search for a country.."
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="col-sm-12 divider col-md"></div>
        <FilterDropdown
          darkModeClicked={darkModeClicked}
          className={darkModeClicked ? "darkDropdown" : ""}
          selectedFilterRegion={selectedFilterRegion}
          setSelectedFilterRegion={setSelectedFilterRegion}
        />
      </div>
      <div className="countriesContainer row gy-5">
        {searchedCountries.map((country) => (
          <div className="col col-xxl-3" key={country.name}>
            <CountryCard darkModeClicked={darkModeClicked} country={country} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountriesPage;
