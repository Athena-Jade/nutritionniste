import "./PageNoExist.css"
import {Link}from "react-router-dom"
export default function PageNoExist() {
  return (
    <div className="page-no-exist">
      <p style={{margin:"2rem", fontStyle:"italic"}}>Désolé la page que vous recherchez n'existe pas</p>
      <Link to="/"> retour Accueil </Link>
    </div>
  )
}
