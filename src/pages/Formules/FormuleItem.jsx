import "./FormuleItem.css";
import { useState } from "react";
const FormuleItem = ({ name, image, desc, price, detail1, detail2 }) => {
  const [showFormules, setShowFormules] = useState(true);
  const handleShowFormules = () => {
    setShowFormules(!showFormules);
  };
  return (
    <section className="formuleItem">
      <div className="contenair-formule-item">
        <div className="img-formule-item">
          <img src={image} alt="" /> 
          <h3> {name}</h3>                    
            <span className="details-formules"> {price}€{detail1}</span>             
        </div>
        
      </div>
 
      <div className={showFormules ? "formuleitem-description" : ""}>
        <p>{desc}</p>
        <span>{detail2.slice(0, 150)}</span> 
      </div>
    <button style={{width:"8rem"}} onClick={handleShowFormules}>voir formule</button>
    </section>
  );
};

export default FormuleItem;
