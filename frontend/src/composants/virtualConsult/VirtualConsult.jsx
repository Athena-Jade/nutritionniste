import "./VirtualConsult.css";
import { maData } from "../../assets/maData";
const VirtualConsult = () => {
  return (
    <div className="virtual-consult">
      <h1>Première consultation gratuite offerte en visio</h1>
      <p>Venez à notre rencontre, vous serez accueilli chaleureusement</p>

      <div className="containair-virtual-consult">
        <div className="box-virtual-gauche">
          <h2>Toujours présents et à votre écoute</h2>
          <p>
            Nous déterminerons ensemble le bon programme dont vous aurez besoin.
          </p>
          <p>Nous vous détaillerons un menu adapté à votre morphologie.</p>
          <p>Prendre rendez-vous au </p>
          <span style={{ fontWeight: "bolder" }}>01 23 45 67 89</span>

          <p style={{ color: "white", fontStyle: "italic" }}>
            mariedupond@gmail.com
          </p>
        </div>
        <div className="box-img-virtual-droite">
          <img src={maData.virtual_consult} alt="" />
        </div>
      </div>
    </div>
  );
};

export default VirtualConsult;
