import "./card.css";

export default function Card({
  name,
  gender,
  avatar,
  species,
  status,
  origin,
}) {
  return (
    <div className="container__card">
      <figure className="container__figure">
        <img src={avatar} alt={name} className="container__avatar" />
        <figcaption className="container__name">{name}</figcaption>
      </figure>
      <p className="container__status">
        <span>{status === "Alive" ? "🟢" : "🔴"}</span> - {species} - {gender}
      </p>
      <p className="container__origin">{origin.name}</p>
    </div>
  );
}
