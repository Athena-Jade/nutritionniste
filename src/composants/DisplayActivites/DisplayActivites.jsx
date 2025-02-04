import ActivitesItem from "../ActivitesItem/ActivitesItem";
import "./DisplayActivites.css";
import { useContext } from "react";
import { ActivitesContext } from "../../Context/ActivitesContext";
import { motion } from "motion/react";

const DisplayActivites = ({ category }) => {
  const { list_loisirs } = useContext(ActivitesContext);

  return (
    <motion.div initial={{opacity:0, x:100}} transition={{duration:1}}
      whileInView={{opacity:1, x:0}} viewport={{once:true}}
      className="activites-display" id="activites-display">
      <h2>
        Vous avez sélectionner la categorie :
        <span style={{ color: "rgb(20, 81, 20)" }}> {category} </span>
      </h2>
      <div className="activites-display-list">
        {list_loisirs.map((item, index) => {
          if (
            category === "toutes les catégories" ||
            category === item.category
          ) {
            return (
              <ActivitesItem
                key={index}
                id={item.id}
                name={item.name}
                description={item.description}
                para={item.para}
                price={item.price}
                details={item.details} 
                image={item.image}
              />
            );
          }
        })}
      </div>
    </motion.div>
  );
};

export default DisplayActivites;
