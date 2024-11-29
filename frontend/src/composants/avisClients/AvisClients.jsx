import "./AvisClients.css";
import { data_avis } from "../../assets/maData";
import DysplayAvisClients from "../dysplayAvisClients/DysplayAvisClients";

const AvisClients = () => {

  return (
    <div className="avis-clients">
      <h1>Les avis de nos clients</h1>
    
      <div className="containair-avis-clients">
        {data_avis.map((item, index) => {
          return (
            <DysplayAvisClients
              key={index}
              id={item.id}
              img_person={item.img_person}
              name={item.name}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AvisClients;
