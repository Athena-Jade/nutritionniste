import { createContext } from "react";
import { menu_list } from "../assets/data.jsx";
import { list_loisirs } from "../assets/data.jsx";


export const ActivitesContext = createContext(null);
const ActivitesContextProvider = (props) => {

    const contextValue = {
        list_loisirs,
        menu_list
      
      };

      return (
        <ActivitesContext.Provider value={contextValue}>
          {props.children}
        </ActivitesContext.Provider>
      );
}

export default ActivitesContextProvider;