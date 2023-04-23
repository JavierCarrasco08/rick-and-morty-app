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
      <figure>
        <img src={avatar} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
      <p>
        {status === "Alive" ? "🟢" : "🔴"} - {species} - {gender}
      </p>
      <p>{origin.name}</p>
    </div>
  );
}
