import LightMoonImg from "../assets/icons8-moon-64.png";
import DarkMoonImg from "../assets/icons8-moon-64 (1).png";
function Navbar({ darkModeClicked, handleDarkModeClicked }) {
  return (
    <nav className={`navbar ${darkModeClicked ? "darkNav" : ""}`}>
      <div className="container">
        <a className="navbar-brand" href="/">
          Where in the world?
        </a>
        <div
          className={`darkModeBtn ${
            darkModeClicked ? "darkModeBtnOnDark" : ""
          }`}
          onClick={handleDarkModeClicked}
        >
          <img
            width={16}
            src={darkModeClicked ? DarkMoonImg : LightMoonImg}
            alt=""
          />
          <h6 className="darkModeBtnText">Dark Mode</h6>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
