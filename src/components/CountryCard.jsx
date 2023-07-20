import { useContext } from "react";
import { Link } from "react-router-dom";
import { CountryContext } from "./CountryContext";

function CountryCard({ darkModeClicked, country }) {
  const { name, flags, population, region, capital } = country;
  const { setSelectedCountry } = useContext(CountryContext);

  const handleCardClick = () => {
    setSelectedCountry(country);
  };

  return (
    <Link
      to={`/details/${name}`}
      onClick={handleCardClick}
      className={`countryCard d-flex flex-column ${
        darkModeClicked ? "darkCountryCard" : ""
      }`}
    >
      <div onClick={() => {}} className="">
        <img src={`${flags.png}`} alt="" />
        <div className="cardText">
          <h5>{name}</h5>
          <p>
            Population: <span>{population}</span>
          </p>
          <p>
            Region: <span>{region}</span>
          </p>
          <p>
            Capital: <span>{capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;
