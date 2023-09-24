import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

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
          <li>About Us</li>
          <li>Contact us</li>
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
