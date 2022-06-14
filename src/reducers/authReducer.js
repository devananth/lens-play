const authReducer = (authState, authDispatch) => {
  const { type, payload } = authDispatch;

  switch (type) {
    case authActions.SAVE_USER_DETAILS:
      const { authToken, isUserLoggedIn, userName } = payload;
      localStorage.setItem(
        "loginDetails",
        JSON.stringify({
          authToken,
          isUserLoggedIn,
          userName,
        })
      );
      return { ...payload };
    case authActions.DELETE_USER_DETAILS:
      localStorage.removeItem("loginDetails");
      return { authToken: null, userName: null, isUserLoggedIn: false };
  }
};

const authActions = {
  SAVE_USER_DETAILS: "SAVE_USER_DETAILS",
  DELETE_USER_DETAILS: "DELETE_USER_DETAILS",
};

export { authActions, authReducer };
