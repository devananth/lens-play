import { errorActions } from "../../../reducers/errorReducer";
import { isValidEmail, isValidPassword } from "../authUtils";

const loginFormValidation = (loginForm, loginFormErrorDispatch) => {
  const { email, password } = loginForm;

  if (!isValidEmail(email)) {
    loginFormErrorDispatch({
      type: errorActions.EMAIL_ERROR,
      payload: "Please enter a valid email ID",
    });
  } else if (!isValidPassword(password)) {
    loginFormErrorDispatch({
      type: errorActions.PASSWORD_ERROR,
      payload:
        "Password should be alphanumeric, 1 special character and minimum of length 8",
    });
  } else {
    loginFormErrorDispatch({
      type: errorActions.CLEAR_LOGIN_FORM_ERRORS,
    });
    return true;
  }
};

export { loginFormValidation };
