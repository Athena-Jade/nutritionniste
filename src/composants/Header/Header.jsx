import "./Header.css";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import HeaderItem from "./HeaderItem";
import { ParaHeader } from "../../assets/data";
import { useState } from "react";
const Header = () => {
  const [showPara, setShowPara] = useState(true);
  const handleShow = () => setShowPara(!showPara);

  return (
    <>
      <section className="header">
        <div className="bloc-header">
          <motion.div
            animate={{
              scale: 1.5,
              transition: { duration: 2 },
            }}
            className="enfants-bloc-header"
          >           
            <h2> Venez expérimenter nos nombreux activités</h2>
            <div className={showPara ? "montrer-para" : ""}>
              {ParaHeader.map((item) => {
                return <HeaderItem key={item.id} texte={item.texte} />;
              })}
            </div>
            <button onClick={handleShow}>Lire la suite</button>

            <Link className="lien-contact" to="/contact">
              <p>Contact</p>
            </Link>
          </motion.div>
         
        </div>        
      </section>  
      <h1 className="header-bienvenue">BIENVENUE A TOUS !</h1>
     
    </>
  );
};

export default Header;
