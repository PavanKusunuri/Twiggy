import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="logo
                "
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact"> Contact us</Link>
          </li>
          <li>Cart</li>
          <button
            onClick={() =>
              btnText === "Login" ? setBtnText("logout") : setBtnText("Login")
            }
          >
            {btnText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
