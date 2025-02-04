import "./ActivitesItem.css";
import { useState } from "react";
import { motion } from "motion/react";

const ActivitesItem = ({ name, description, para, price, image, details }) => {
  const [clickImg, setClickImg] = useState(true);
  const handleClickImg = () => {
    setClickImg(!clickImg);
  };

  return (
    <>
      <section className="activites-item-contenair">
        <div className="activites-item">
          <div className="img-activites">
            <img src={image} alt="image" />

            <span className="price-activite">
              {name} {price}€{details}
            </span>
          </div>
          <p>{para}</p>
          <div className={clickImg ? "show-activites" : ""}>
            <p > {description.slice(0, 200)}</p>
          </div>

          <button 
            className="btn-activite-item" onClick={handleClickImg}>
            Voir détails
          </button>
        </div>
      </section>
    </>
  );
};

export default ActivitesItem;
