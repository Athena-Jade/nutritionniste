import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Formules from "./pages/Formules/Formules";
import Contact from "./pages/Contact/Contact";
import Navbar from "./composants/Navbar/Navbar";
import Footer from "./composants/Footer/Footer";
import LogosServices from "./composants/LogosServices/LogosServices";
import PageNoExist from "./pages/pageNoExist/PageNoExist";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formules" element={<Formules />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNoExist />} />

      </Routes>
      <LogosServices />
      <Footer />
    </>
  );
}

export default App;
