import Help from "../../composants/help/Help";
import Hero from "../../composants/hero/Hero";
import VirtualConsult from "../../composants/virtualConsult/VirtualConsult";
import Programme from "../../composants/programme/Programme";

import AvisClients from "../../composants/avisClients/AvisClients";


const Home = () => {
 
  return (
    <div>
     
      <Hero />
      <Help />
      <Programme/>
      <VirtualConsult/>    
      <AvisClients/>          
    </div>
  );
};

export default Home;
