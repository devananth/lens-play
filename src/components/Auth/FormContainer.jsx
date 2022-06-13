import "./auth.css";

const FormContainer = ({ children, submitHandler, formHeadingText }) => {
  return (
    <form
      className="form authentication__container box-shadow"
      onSubmit={submitHandler}
    >
      <h5 className="txt-center txt-bold">{formHeadingText}</h5>
      {children}
    </form>
  );
};

export { FormContainer };
