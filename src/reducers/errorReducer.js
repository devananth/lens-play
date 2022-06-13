const errorReducer = (errorState, errorDispatch) => {
  const { type, payload } = errorDispatch;

  switch (type) {
    case errorActions.EMAIL_ERROR:
      return { ...errorState, emailError: payload };
    case errorActions.PASSWORD_ERROR:
      return { ...errorState, passwordError: payload };
    case errorActions.FIRSTNAME_ERROR:
      return { ...errorState, firstNameError: payload };
    case errorActions.CLEAR_ERROR:
      return { ...errorState, [payload]: null };
    case errorActions.CLEAR_LOGIN_FORM_ERRORS:
      return { emailError: null, passwordError: null };
    case errorActions.CLEAR_SIGNUP_FORM_ERRORS:
      return { emailError: null, passwordError: null, firstNameError: null };
  }
};

const errorActions = {
  EMAIL_ERROR: "EMAIL_ERROR",
  PASSWORD_ERROR: "PASSWORD_ERROR",
  CLEAR_ERROR: "CLEAR_ERROR",
  FIRSTNAME_ERROR: "FIRSTNAME_ERROR",
  CLEAR_LOGIN_FORM_ERRORS: "CLEAR_LOGIN_FORM_ERRORS",
  CLEAR_SIGNUP_FORM_ERRORS: "CLEAR_SIGNUP_FORM_ERRORS",
};

export { errorReducer, errorActions };
