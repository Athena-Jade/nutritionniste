
import ExploreActivites from '../../composants/ExploreActivtes/ExploreActivites'
import Header from '../../composants/Header/Header'
import DisplayActivites from '../../composants/DisplayActivites/DisplayActivites'
import { useState } from 'react'
import Detente from '../../composants/Detente/Detente'


const Home = () => {
  const [category, setCategory]= useState("toutes les catégories")
  return (
    <>
   <Header/>
   <ExploreActivites category={category} setCategory={setCategory}/>
   <DisplayActivites category={category}/>
   <Detente/>
   
 
    </>
  )
}

export default Home