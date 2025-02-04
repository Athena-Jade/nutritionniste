import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="footer-background"></div>
      <div className="contenair-footer">
        <ul className="footer-gauche">
          <li>Conditions d'utilisation</li>
          <li>Plan du site</li>
          <li>CGV</li>
          <li>Mentions légales</li>
        </ul>

        <div className="footer-milieu">
          <h3>Base Loisirs</h3>
          <p style={{ fontStyle: "italic" }}> baseloisirs@gmail.com</p>
          <p>5 Rue Lorem ipsum 95000 Cergy</p>
          <p>
            <FaPhone /> 0123456789
          </p>
        </div>

        <ul className="footer-droite">
          <h3>Suivez-moi</h3>
          <li>
            <FaFacebookF style={{ color:"rgb(20, 81, 20)" }} />
          </li>
          <li>
            <FaInstagramSquare style={{ color:"rgb(20, 81, 20)" }} />
          </li>
          <li>
            <FaLinkedin style={{ color:"rgb(20, 81, 20)" }} />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
