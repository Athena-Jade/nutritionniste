import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./composants/navbar/Navbar";
import Home from "./page/home/Home";
import Contact from "./page/contact/Contact";
import Propos from "./page/propos/Propos";
import Header from "./composants/header/Header";
import Footer from "./composants/footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/propos" element={<Propos />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
