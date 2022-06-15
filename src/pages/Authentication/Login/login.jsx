import axios from "axios";
import { useState, useReducer } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";
import {
  FormContainer,
  FormInput,
  FormButton,
  PasswordInput,
  Loader,
} from "../../../components";
import { loginFormValidation } from "./loginFormValidation";
import { useDocumentTitle } from "../../../custom-hooks";
import { errorReducer, errorActions } from "../../../reducers/errorReducer";
import { focusHandler } from "../authUtils";
import { useAuth } from "../../../contexts";
import { authActions } from "../../../reducers/authReducer";

const loginFormInitialErrorState = {
  emailError: null,
  passwordError: null,
};

const Login = () => {
  useDocumentTitle("Login | Lens-Store");

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const [loginFormErrorState, loginFormErrorDispatch] = useReducer(
    errorReducer,
    loginFormInitialErrorState
  );

  const { authDispatch } = useAuth();

  const [apiError, setApiError] = useState(null);
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from.pathname || "/";

  const loginHandler = async (event) => {
    event.preventDefault();

    if (loginFormValidation(loginForm, loginFormErrorDispatch)) {
      setLoader(true);
      try {
        const response = await axios.post("/api/auth/login", loginForm);

        if (response?.status === 200) {
          toast.success("Successfully logged in!");
          const { encodedToken: authToken, firstName: userName } =
            response?.data;
          authDispatch({
            type: authActions.SAVE_USER_DETAILS,
            payload: { authToken, isUserLoggedIn: true, userName },
          });
          setLoader(false);
          navigate(from, { replace: true });
        }
      } catch (err) {
        setApiError("Invalid Credentials");
        setLoader(false);
      }
    }
  };

  const loginInputHandler = (event) => {
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const guestLoginHandler = () => {
    setLoginForm(() => ({
      email: "test@gmail.com",
      password: "test@123",
    }));
  };

  const loginFocusHandler = (event) => {
    focusHandler(event, loginFormErrorDispatch);
  };

  return (
    <>
      <section className="d-flex xy-center authentication__wrapper">
        <FormContainer formHeadingText={"Login"} submitHandler={loginHandler}>
          <FormInput
            label={"Email Address"}
            type={"email"}
            placeholder={"john@gemail.com"}
            name={"email"}
            id={uuid()}
            value={loginForm.email}
            inputHandler={loginInputHandler}
            required={true}
            error={loginFormErrorState.emailError}
            focusHandler={loginFocusHandler}
          />
          <PasswordInput
            label={"Password"}
            placeholder={"********"}
            name={"password"}
            id={uuid()}
            value={loginForm.password}
            inputHandler={loginInputHandler}
            error={loginFormErrorState.passwordError}
            focusHandler={loginFocusHandler}
          />

          {apiError && (
            <span className="txt-bold danger mb-sm d-inline-block">
              {apiError}
            </span>
          )}

          <div className="d-flex space-bw wrap">
            <div className="form-group width-content d-flex y-center gap-1">
              <input type="checkbox" className="form-input" id="rememberMe" />
              <label
                className="form-label txt-sm d-inline-block"
                htmlFor="rememberMe"
              >
                Remember Me
              </label>
            </div>
            <Link
              to={"#"}
              className="mb-1 txt-bold txt-sm d-inline-block txt-primary"
            >
              Forgot your password?
            </Link>
          </div>

          <FormButton
            btnText={"Login"}
            btnClickHandler={loginHandler}
            btnType={"btn-primary"}
          />

          <FormButton
            btnText={"Guest Login"}
            btnClickHandler={guestLoginHandler}
            btnType={"btn-primary-outline"}
          />

          <div>
            <span className="txt-bold">Not a user yet ?</span>
            <Link to={"/signup"} className="btn btn-link btn-link-primary">
              Create New Account
            </Link>
          </div>
        </FormContainer>
        {loader && <Loader />}
      </section>
    </>
  );
};

export { Login };
