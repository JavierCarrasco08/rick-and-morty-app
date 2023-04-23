import "./buttons.css";

export default function Buttons({ count, next, prev }) {
  return (
    <div className="buttons">
      {count > 1 && (
        <button className="buttons__prev" onClick={prev}>
          Previos
        </button>
      )}
      <button className="buttons__next" onClick={next}>
        Next
      </button>
    </div>
  );
}
