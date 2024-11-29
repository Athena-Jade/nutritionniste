import "./Header.css";
import { maData } from "../../assets/maData";

const Header = () => {
  return (
    <header>
      <div className="containair-header">
        <div className="box-img-header">
          <img src={maData.img_header} alt="" />
          <h1>
            Bien se nourrir est la clée <br /> pour avoir une vie saine et
            équilibrée
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
