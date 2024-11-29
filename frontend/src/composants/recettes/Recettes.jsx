import "./Recettes.css";

const Recettes = ({
  id,
  nb_person,
  name,
  menu_img,
  temps_preparation,
  temps_cuisson,
  ingred_1,
  ingred_2,
  ingred_3,
  ingred_4,
  ingred_5,
  prep_1,
  prep_2,
  prep_3,
}) => {
  return (
    <div className="recettes">
      <div className="containair-recettes">
        <div className="intro-recettes">
          <div className="box-img-recettes">
            <img src={menu_img} alt="" style={{ width: "20rem" }} />
            <h3>{name}</h3> <br />
          </div>
          <div className="box-para-recettes">
            <p>Nombre de personnes : {nb_person}</p>
            <p>Temps de preparation : {temps_preparation}</p>
            <p>
              Temps de cuisson : {temps_cuisson} <br />
            </p>
          </div>
        </div>

        <ul className="liste-ingredients">
          <h3> Ingredients:</h3>
          <li>{ingred_1}</li>
          <li>{ingred_2}</li>
          <li>{ingred_3}</li>
          <li>{ingred_4}</li>
          <li> {ingred_5}</li>        
        </ul>
        <br />
        <ul className="preparation">
          <h3>Préparation:</h3>
          <li> {prep_1}</li>
          <li>{prep_2}</li>
          <li> {prep_3}</li>
        </ul>
      </div>
    </div>
  );
};

export default Recettes;
