import data from "../data/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";

function DetailsPage({ darkModeClicked }) {
  const { countryName } = useParams();
  const foundCountry = data.find((country) => {
    return country.name === countryName;
  });
  const selectedCountry = foundCountry;

  if (!selectedCountry) {
    return null;
  }
  let borderCountries = [];
  if (selectedCountry.borders) {
    for (let i = 0; i < selectedCountry.borders.length; i++) {
      borderCountries[i] = data.find((country) => {
        if (country.alpha3Code === selectedCountry.borders[i]) {
          return country;
        }
        return null;
      });
    }
  }
  const arrowColor = darkModeClicked ? { color: "#111517" } : {};
  return (
    <div className="container">
      <div className="d-flex">
        <Link
          to={`/`}
          className={`backBtn ${darkModeClicked ? "darkBackBtn" : ""}`}
        >
          <a href="#ss">
            <FontAwesomeIcon
              icon={faArrowLeftLong}
              style={{ arrowColor, paddingRight: ".5rem" }}
            />
            Back
          </a>
        </Link>
      </div>
      <div
        className={`detailsPage d-flex align-items-center ${
          darkModeClicked ? "darkDetailsPage" : ""
        }`}
      >
        <img
          className="countryImg col-6"
          src={selectedCountry.flags.png}
          alt=""
        />
        <div className="col-6 mx-5 countryDetails">
          <h3 className="countryName">{selectedCountry.name}</h3>
          <div className="row col-sm-12">
            <div className="col">
              <p>
                Native Name: <span>{selectedCountry.nativeName}</span>
              </p>
              <p>
                Population: <span>{selectedCountry.population}</span>
              </p>
              <p>
                Region: <span>{selectedCountry.region}</span>
              </p>
              <p>
                Sub Region: <span>{selectedCountry.subregion}</span>
              </p>
              <p>
                Capital: <span>{selectedCountry.capital}</span>
              </p>
            </div>
            <div className="col-12 col-md-6">
              <p>
                Top Level Domain: <span>{selectedCountry.topLevelDomain}</span>
              </p>
              <p>
                Currencies:{" "}
                <span>
                  {selectedCountry.currencies.map((currency) => {
                    return currency.name + ", ";
                  })}
                </span>
              </p>
              <p>
                Languages:{" "}
                <span>
                  {selectedCountry.languages.map((language) => {
                    return `${language.name}. `;
                  })}
                </span>
              </p>
            </div>
            {console.log(borderCountries)}
            {borderCountries.length > 0 ? (
              <div className="borderCountries row ">
                <p
                  className="col d-flex align-items-center"
                  style={{ padding: "0px", margin: "0px" }}
                >
                  Border Countries:{" "}
                </p>
                {borderCountries.map((country) => (
                  <span
                    className={`borderCountry ${
                      darkModeClicked ? "darkBorderCountry" : ""
                    } col-4 my-1 d-flex align-items-center`}
                  >
                    {country.name}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
