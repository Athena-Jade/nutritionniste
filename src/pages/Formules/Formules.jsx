import "./Formules.css";
import { nos_formules } from "../../assets/data";
import FormuleItem from "../../pages/Formules/FormuleItem";
import { Link } from "react-router-dom";
import Carousel from "../../composants/carousel/Carousel";
import { DataCarousel } from "../../composants/Carousel/DataCarousel";

const Formule = () => {
  
  return (
    <>     
      <section className="formules" >
        <div className="formules-gauche">
          <h1>Nos formules</h1>
          <p>
            Choisissez votre activité préféré parmi notre liste et
            contactez-nous pour plus d'informations
          </p>
          <button> 
            <Link to="/contact"> Contactez-nous</Link>           
          </button>
        </div>

        <div className= "formules-droite" >
          {nos_formules.map((item, index) => {
            return (
              <>
                <FormuleItem
                  key={index}
                  name={item.name}
                  image={item.image}
                  desc={item.desc}
                  price={item.price}
                  detail1={item.detail1}
                  detail2={item.detail2}
                />
              </>
            );
          })}
        </div>
      
      
      </section>
      <section className="carousel-composant-carousel">
           <Carousel images={DataCarousel}/> 
        
      </section>
    </>
  );
};

export default Formule;
