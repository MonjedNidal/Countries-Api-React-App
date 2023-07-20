function FilterDropdown({
  className,
  selectedFilterRegion,
  setSelectedFilterRegion,
  darkModeClicked,
}) {
  const handleOptionChange = (e) => {
    e.preventDefault();
    setSelectedFilterRegion(e.target.innerText);
  };
  return (
    <div className={`dropdown col `}>
      <button
        className={`btn dropdownBtn dropdown-toggle ${className} `}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selectedFilterRegion ? selectedFilterRegion : "Filter by Region"}
      </button>
      <ul className={`dropdown-menu ${className}`}>
        <li>
          <a
            className={`dropdown-item ${darkModeClicked ? "darkItem" : ""}`}
            href="/"
            onClick={handleOptionChange}
          >
            Africa
          </a>
        </li>
        <li>
          <a
            className={`dropdown-item ${darkModeClicked ? "darkItem" : ""}`}
            href="/"
            onClick={handleOptionChange}
          >
            Americas
          </a>
        </li>
        <li>
          <a
            className={`dropdown-item ${darkModeClicked ? "darkItem" : ""}`}
            href="/"
            onClick={handleOptionChange}
          >
            Asia
          </a>
        </li>
        <li>
          <a
            className={`dropdown-item ${darkModeClicked ? "darkItem" : ""}`}
            href="/"
            onClick={handleOptionChange}
          >
            Europe
          </a>
        </li>
        <li>
          <a
            className={`dropdown-item ${darkModeClicked ? "darkItem" : ""}`}
            href="/"
            onClick={handleOptionChange}
          >
            Oceania
          </a>
        </li>
        <li>
          <a
            className={`dropdown-item ${darkModeClicked ? "darkItem" : ""}`}
            href="/"
            onClick={handleOptionChange}
          >
            All
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FilterDropdown;
