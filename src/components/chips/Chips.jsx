import "./chips.css";

const Chips = ({ text, type, categoryHandler }) => {
  return (
    <button className={`chip ${type} txt-bold`} onClick={categoryHandler}>
      {text}
    </button>
  );
};

export { Chips };
