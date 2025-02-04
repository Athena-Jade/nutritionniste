import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { GiMountainRoad } from "react-icons/gi";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMenu = () => {
    setClick(false);
  };

  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/">
            <h1>
              <GiMountainRoad style={{ color: "#52a60b", fontSize: "3rem" }} />
              Base De Loisirs
            </h1>
          </Link>
        </div>

        <ul className={click ? "navbar-menu " : ""}>
          <li onClick={closeMenu}>
            <Link to="/">Accueil</Link>
          </li>

          <li onClick={closeMenu}>
            <Link to="/formules">Nos formules</Link>
          </li>

          <li onClick={closeMenu}>
            <Link to="/contact">contact</Link>
          </li>
        </ul>

        <div className="logos-reduits" onClick={handleClick}>
          {click ? <IoMdClose size={15} /> : <FaBars size={15} />}
        </div>
      </nav>
      <br />
      <br />

      <a
        className="lien-retour-portfolio"
        href="https://monportfolio.anitadefendiniportfolio.eu/"
      >
        Retour mon portfolio
      </a>
    </>
  );
};

export default Navbar;
