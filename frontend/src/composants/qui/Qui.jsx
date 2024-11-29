import './Qui.css'

const Qui = ({id, img_qui, name,diplome, description}) => {
  return (
    <div className='qui'>
      <h1>Qui suis-je ?</h1>

      <div className="containair-qui">
        <div className="box-img-qui-gauche">
            <img src={img_qui} alt="" />
        </div>
        <div className="box-qui-droite">
            <h2>{name}</h2>           
            <span>{diplome}</span>
            {description}
        </div>

      </div>
        
    </div>
  )
}

export default Qui