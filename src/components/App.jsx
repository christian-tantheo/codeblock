import React from "../../public/index.html";
import Card from "./Card.jsx";
import contacts from "../Contacts.js";
function createCard(contacts) {
  return <Card name={contacts.name} desc={contacts.desc} img={contacts.img} />;
}
function App() {
  return (
    <>
      <div>
        <h2 className="heading">emojipedia</h2>
        <div className="card">{contacts.map(createCard)}</div>
      </div>
    </>
  );
}

export default App;
