import "../../public/style.css";

function Card(props) {
  return (
    <div className="box">
      <div className="emote">{props.img}</div>
      <h2>{props.name}</h2>
      <div className="font">
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default Card;
