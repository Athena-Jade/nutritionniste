import "./DetenteItem.css";

const DetenteItem = ({ para1, para2 }) => {
  return (
    <section className="detenteItem">
      <p>{para1}</p>
      <br />
      <p>{para2}</p>
    </section>
  );
};

export default DetenteItem;
