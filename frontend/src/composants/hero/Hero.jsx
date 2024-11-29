import "./Hero.css";
import { CiClock1 } from "react-icons/ci";
import { GiWorld } from "react-icons/gi";
import { CiUnlock } from "react-icons/ci";
import { FaRegThumbsUp } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero-logos-service">
      <div className="logos-service-gauche">
        <h1>L'objectif d'un nutritionniste</h1>
        <br />
        <p>
          C'est un expert qui prévient, dépiste et traite les maladies de la
          nutrition (diabète, obésité ou encore surpoids).
        </p>
        <p>
          Les troubles alimentaires comme l'anorexie et la boulimie, mais aussi
          les maladies ayant une incidence sur la nutrition
        </p>
      </div>

      <div className="logos-service-droite">
        <div className="boxes-logos">
          <div className="sac-logos">
            <CiClock1 size={25} style={{ color: "green", fontWeight: "600" }} />
            <p>9h00 - 17h00</p>
            <p>tous les jours</p>
          </div>

          <div className="sac-logos">
            <GiWorld size={25} style={{ color: "green", fontWeight: "600" }} />
            <p>Consultation en visio</p>
            <p>tous les jours</p>
          </div>
        </div>

        <div className="boxes-logos">
          <div className="sac-logos">
            <CiUnlock size={25} style={{ color: "green", fontWeight: "600" }} />
            <p>anonymat assuré</p>
            <p>et sécurisé</p>
          </div>
          <div className="sac-logos">
            <FaRegThumbsUp
              size={25}
              style={{ color: "green", fontWeight: "600" }}
            />
            <p>Simple utilisation</p>
            <p>et rapide</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
