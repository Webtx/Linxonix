/**
 * @description A card for the Avatars list
 */
import "./Card.css";

export default function Card(props = { name: "", src: "" }) {
  const name = props.name;
  if (name.trim().length === 0) {
    throw new TypeError("No specified name");
  }
  if (props.src.length === 0) {
    throw new TypeError("Empty source value");
  }
  return (
    <div className="Card">
      <a href={`${name}`}>
        <img src={`${props.src}`} alt={`${name}'s preview`} />
      </a>
      <p>{name}</p>
    </div>
  );
}
