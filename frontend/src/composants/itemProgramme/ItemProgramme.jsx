import "./ItemProgramme.css";

const ItemProgramme = ({ id, name, img_programme, description }) => {
  return (
    <div className="item-programme">
      <div className="containair-item-programme">
        <div className="item-box-img-programme">
          <img className="img-item-programme" src={img_programme} alt="" />
        </div>

        <div className="item-info-programme">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        
      </div>
    </div>
  );
};

export default ItemProgramme;
