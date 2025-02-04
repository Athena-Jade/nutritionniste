import "./Detente.css";
import { imagerie } from "../../assets/data";
import { useState } from "react";
import { Link } from "react-router-dom";
import { detente_texte } from "../../assets/data";
import DetenteItem from "./DetenteItem";
import ScrollTopButton from "../scrollTopButton/scrollTopButton";

const Detente = () => {
  const [read, setRead] = useState(true);
  const handleRead = () => {
    setRead(!read);
  };
  return (
    <section className="detente">
      <div className="detente-gauche">
        <img src={imagerie.detente} alt="" />
      </div>

      <div className="detente-droite">
        <h2>Inoubliables moments de repos bien mérités!</h2>
        <p>
          Après avoir arpenté des montées, franchis des cours d'eau et traversé
          des forêts, Vous voilà au sommet de la montagne !
        </p>

        <p>
          Vous méritez bien un petit repos afin de contempler votre
          récompense...
        </p>

        <div className={read ? "show-texte-detente" : ""}>
          {detente_texte.map((item, index) => {
            return (
              <>
                <DetenteItem
                  key={index}
                  para1={item.para1}
                  para2={item.para2}
                />
              </>
            );
          })}
          <span className="voir-formules">
            <br />
            <Link to="/formules">Voir les formules</Link>
          </span>
        </div>

        <button onClick={handleRead}>Lire la suite</button>
      </div>
      <ScrollTopButton />
    </section>
  );
};

export default Detente;
