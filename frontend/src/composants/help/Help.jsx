import "./Help.css";
import { maData } from "../../assets/maData";

import Recettes from "../../composants/recettes/Recettes";
import { recette_list } from "../../assets/maData";

const Help = () => {
  return (
    <div className="help">
      <div className="containair-help">
        <div className="box-img-help">
          <img src={maData.patiente} alt="" />
        </div>

        <div className="box-texte">
          <h1>Nous aidons des centaines de personnes </h1>
          <br />
          <p>
            Un amaigrissement est une perte de poids, il témoigne d'un
            déséquilibre entre les apports et les dépenses énergétiques. 
          </p>
          <br />

          <p>
            Il peut
            être volontaire, avec un régime amaigrissant dans un but esthétique
            ou thérapeutique, 
          </p><br />
          <p>
            ou involontaire, pouvant alors révéler certaines
            maladies organiques évolutives, ou des troubles du comportement
            alimentaire.
          </p>
        </div>
      </div>

      <div className="breakfast">
        <div className="containair-breakfast">
          <div className="box-breakfast-gauche">
            <h1>Pour bien démarrer la journée</h1>
            <p>
              Prenez le temps de prendre votre petit déjeuner, voici 2 recettes
              simples
            </p>
            <br />
          </div>
          <div className="liste-recettes">
            {recette_list.map((item, index) => {
              return (
                <>
                  <Recettes
                    key={index}
                    id={item.id}
                    nb_person={item.nb_person}
                    name={item.menu_name}
                    menu_img={item.menu_img}
                    temps_preparation={item.temps_preparation}
                    temps_cuisson={item.temps_cuisson}
                    ingred_1={item.ingred_1}
                    ingred_2={item.ingred_2}
                    ingred_3={item.ingred_3}
                    ingred_4={item.ingred_4}
                    ingred_5={item.ingred_5}
                    
                    prep_1={item.prep_1}
                    prep_2={item.prep_2}
                    prep_3={item.prep_3}
                    prep_4={item.prep_4}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
