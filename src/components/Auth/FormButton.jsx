const FormButton = ({ btnText, btnClickHandler, btnType }) => {
  return (
    <button
      className={`btn ${btnType} w-100 txt-bold mb-1`}
      type="submit"
      onClick={btnClickHandler}
    >
      {btnText}
    </button>
  );
};

export { FormButton };
