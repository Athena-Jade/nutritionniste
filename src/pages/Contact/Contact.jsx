import "./Contact.css";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [object, setObject] = useState(null);
  const [message, setMessage] = useState(null);

  const values = {
    name,
    email,
    phone,
    object,
    message,
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b7266315-a253-432d-86e1-ae8c1b5eaad7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);

      setName("");
      setEmail("");
      setPhone("");
      setObject("");
      setMessage("");

      alert(res.message);
    }
  };








  return (
    <section className="formulaire-contact">
      <form onSubmit={onSubmit} className="formulaire-container">
        <div className="login-popup-title">
          <h1>Laissez-nous votre message</h1>
        </div>
        <div className="infos-inputs">
          <input
            name="name"
            onChange={(e) => setName(e.target.name)}
            type="text"
            placeholder="Votre nom et prénom"
            required
          />

          <input
            name="email"
            onChange={(e) => setEmail(e.target.email)}
            type="email"
            placeholder="votre adresse mail"
            required
          />
          <input
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            placeholder="votre n° téléphone"
            required
          />

          <select
            className="select-contact"
            name="Subject"
            onChange={(e) => setObject(e.target.value)}
          >
            <option selected>Sélectionner l'objet de votre demande</option>
            <option value="devis">Devis</option>
            <option value="questions">Questions</option>
            <option value="Autre">Autre</option>
          </select>

          <textarea
            onChange={(e) => setEmail(e.target.value)}
            name="message"
            cols="10"
            rows="10"
            placeholder="Merci de renseigner vos questions ou commentaires ici."
          ></textarea>

          <label className="label-contact1">
            {" "}
            <input type="checkbox" /> En cochant cette case, j'accepte de
            recevoir des informations sur les différentes offres disponibles.
          </label>
        </div>

        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;
