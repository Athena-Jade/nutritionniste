import { useState } from "react";
import "./Propos.css";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { faq } from "../../assets/maData";
import Qui from "../../composants/qui/Qui";
import { data_qui } from "../../assets/maData";

const Propos = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);
  function toggleActive(index) {
    if (index === activeFaqIndex) {
      setActiveFaqIndex(null);
    } else {
      setActiveFaqIndex(index);
    }
  }
  return (
    <>
      <div className="whosthis">
        {data_qui.map((item, index) => {
          return (
            <Qui
              key={index}
              id={item.id}
              img_qui={item.img_qui}
              name={item.name}             
              diplome={item.diplome}
              description={item.description}
            />
          );
        })}
      </div>

      <div className="propos">
        <div>
          <h1 style={{color:"black"}}>Vous avez des questions ?</h1>
          <p>En voici quelques unes les plus fréquemment posées</p>
        </div>

        {faq.map((element, index) => {
          return (
            <>
              <div className="wrapper" key={index}>
                <div onClick={() => toggleActive(index)} className="question">
                  {element.question}
                  <span className="logo-cercle">
                    <FaArrowAltCircleDown />
                  </span>
                </div>

                <div className={index === activeFaqIndex ? "answer" : "hidden"}>
                  {element.answer}{" "}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Propos;
