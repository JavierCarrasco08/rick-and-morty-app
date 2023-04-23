import loader from "./../../assets/loader.svg";
import "./loader.css";

export default function Loader() {
  return (
    <figure className="loader">
      <img src={loader} alt="Loader de esperar el contenido" />
    </figure>
  );
}
