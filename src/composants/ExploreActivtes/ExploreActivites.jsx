import './ExploreActivites.css'
import { useContext } from 'react'
import { ActivitesContext } from '../../Context/ActivitesContext'


import { motion } from "motion/react"
const ExploreActivites = ({category, setCategory}) => {
  const{menu_list}=useContext(ActivitesContext)
  return (
    <div className="explore-activites" id="explore-activites">
        <h1>Nos activités</h1>
        <p className="explore-activites-text">
          Choisissez vos activités préférés parmi nos nombreux loisirs.          
        </p>
        <div className="explore-activites-list">
          {menu_list.map((item, index) => {
            return (
              <motion.div whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => console.log('hover started!')}
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.menu_name ? "Toutes les activités" : item.menu_name
                  )
                }
                key={index}
                className="explore-activites-list-item"
              >
                <img
                  className={category === item.menu_name? "active" : ""}
                  src={item.menu_image}
                  alt=""
                />
                <p>{item.menu_name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
  )
}

export default ExploreActivites