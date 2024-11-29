import "./Programme.css";
import { all_programme } from "../../assets/maData";
import ItemProgramme from "../../composants/itemProgramme/ItemProgramme";
import { useState } from "react";
import { maData } from "../../assets/maData";

const Programme = () => {
  const [show, setShow] = useState(true);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="programme">
        <div className="programme-gauche">
          <h1>Suivez un programme adapté</h1>
          <h2>et perdez du poids <br /> sans stress et à votre rythme</h2>
          <p>prendre rendez-vous </p>
          <span style={{ fontWeight: "bolder" }}>01 23 45 67 89</span>
          <p style={{color:"white", fontStyle:"italic"}}>
            mariedupont@gmail.com
          </p>
          <button onClick={handleShow}>Voir les programmes</button>
        </div>

        <div className="box-img-programme-droite">
          <img src={maData.femme_dejeuner} alt="" />
        </div>
      </div>

      <div className={show ? "containair-programme" : ""}>
        {all_programme.map((item, index) => {
          return (
            <ItemProgramme
              key={index}
              id={item.id}
              name={item.name}
              img_programme={item.img_programme}
              description={item.description}
            />
          );
        })}
      </div>
    </>
  );
};

export default Programme;
