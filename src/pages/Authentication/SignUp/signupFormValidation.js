import { errorActions } from "../../../reducers/errorReducer";
import { isValidEmail, isValidPassword } from "../authUtils";

const signupFormValidation = (signupForm, signupFormErrorDispatch) => {
  const { email, password, firstName } = signupForm;

  if (firstName.trim() === "") {
    signupFormErrorDispatch({
      type: errorActions.FIRSTNAME_ERROR,
      payload: "Enter your first name",
    });
  } else if (!isValidEmail(email)) {
    signupFormErrorDispatch({
      type: errorActions.EMAIL_ERROR,
      payload: "Please enter a valid email ID",
    });
  } else if (!isValidPassword(password)) {
    signupFormErrorDispatch({
      type: errorActions.PASSWORD_ERROR,
      payload:
        "Password should be alphanumeric, 1 special character and minimum of length 8",
    });
  } else {
    signupFormErrorDispatch({
      type: errorActions.CLEAR_SIGNUP_FORM_ERRORS,
    });
    return true;
  }
};

export { signupFormValidation };
