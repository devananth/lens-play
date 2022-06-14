const FormButton = ({ btnText, btnClickHandler }) => {
  return (
    <button
      className="btn btn-primary w-100 txt-bold mb-1"
      type="submit"
      onClick={btnClickHandler}
    >
      {btnText}
    </button>
  );
};

export { FormButton };
