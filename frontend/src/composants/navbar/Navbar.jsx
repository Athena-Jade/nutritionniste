import { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="logo-navbar">
        <h1>Marie Dupont, Nutritionniste  </h1> 
        <p style={{color:"white",paddingTop:"0.5rem"}}>prendre rendez-vous  01 23 45 67 89</p>
        <p style={{fontStyle:"italic",color:"white"}}>mariedupont@gmail.com</p>
      </div>

      <div className="menu" onClick={handleClick}>
        {click ? (
          <FaBars className="small-logo" />
        ) : (
          <TiDeleteOutline className="small-logo" />
        )}
      </div>

      <ul className={click ? "open" : ""}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              "nav-links" + (isActive ? "activated" : "")
            }
            onClick={closeMobileMenu}
          >
            Accueil
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/propos"
            className={({ isActive }) =>
              "nav-links" + (isActive ? "activated" : "")
            }
            onClick={closeMobileMenu}
          >
            A Propos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              "nav-links" + (isActive ? "activated" : "")
            }
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>












    
  );
};

export default Navbar;
