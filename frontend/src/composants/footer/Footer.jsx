import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="containair-footer">
        <div className="footer-gauche">
          <ul>
            <li>Conditions d'utilisation</li>
            <li>Plan du site</li>
            <li>CGV</li>
            <p>Mentions légales</p>
          </ul>
        </div>

        <div className="footer-milieu">
          <h3 >Marie Dupont, Nutrionniste</h3>
          <p style={{ fontStyle: "italic" }}> mariedupont@gmail.com</p>
          <p>5 Rue Lorem ipsum 95000 Cergy</p>
          <p>
            <FaPhone /> 0123456789
          </p>
        </div>

        <div className="footer-droite">
          <h3 >Suivez-moi</h3>
          <ul className="footer-reseaux">
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaInstagramSquare />
            </li>
            <li>
              <FaLinkedin />
            </li>
          </ul>
        </div>

      </div>
      <div className="footer-droits">
        <p>&#169; - Marie Dupont Tous droits réservés</p>
      </div>
    </footer>
  );
};

export default Footer;
