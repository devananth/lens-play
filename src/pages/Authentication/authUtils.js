import { errorActions } from "../../reducers/errorReducer";

const isValidEmail = (email) => {
  const emailRegexFormat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return emailRegexFormat.test(email);
};

const isValidPassword = (password) => {
  const passwordRegexFormat =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,50}$/;
  return passwordRegexFormat.test(password);
  console.log(password);
};

const focusHandler = (event, errorDispatch) => {
  errorDispatch({
    type: errorActions.CLEAR_ERROR,
    payload: event.target.name + "Error",
  });
};

export { isValidEmail, isValidPassword, focusHandler };
