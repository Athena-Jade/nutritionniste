import "./DysplayAvisClients.css";


const DysplayAvisClients = ({ id, img_person, name, description }) => {
  
  return (
    <div className="dysplay-avis-clients">
      <div className="containair-dysplay-avis-clients">
        <div className="box-img-avis">
          <img src={img_person} alt="" />
        </div>
        <h4>{name}</h4>
        <p>{description}</p>       
      </div>
    </div>
  );
};

export default DysplayAvisClients;
