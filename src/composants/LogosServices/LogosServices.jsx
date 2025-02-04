import "./LogosServices.css";
import { IoRestaurant } from "react-icons/io5";
import { MdElectricalServices } from "react-icons/md";
import { MdForest } from "react-icons/md";
import { BsBadgeWcFill } from "react-icons/bs";

const LogosServices = () => {
  return (
    <section className="logos-services">
      <div className="details-services">
        <p>Restauration rapide</p>
        <IoRestaurant style={{ color: "white" }} />
      </div>

      <div className="details-services">
        <p>Prise électrique</p>
        <MdElectricalServices style={{ color: "white" }} />
      </div>

      <div className="details-services">
        <p> Cadre agréable</p>
        <MdForest style={{ color: "white" }} />
      </div>

      <div className="details-services">
        <p> Sanitaires propres</p>
        <BsBadgeWcFill style={{ color: "white" }}/>
      </div>

    </section>
  );
};

export default LogosServices;
