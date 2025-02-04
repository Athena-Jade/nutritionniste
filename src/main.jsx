import {BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import ActivitesContextProvider from './Context/ActivitesContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ActivitesContextProvider>
     <App />
  </ActivitesContextProvider>
   
  </BrowserRouter>,
)
