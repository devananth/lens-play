import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import {
  Navbar,
  FormContainer,
  FormInput,
  FormButton,
  PasswordInput,
} from "../../../components";
import { useState, useReducer } from "react";
import { useDocumentTitle } from "../../../custom-hooks";
import { focusHandler } from "../authUtils";
import { signupFormValidation } from "./signupFormValidation";
import { errorReducer, errorActions } from "../../../reducers/errorReducer";
import { useAuth } from "../../../contexts";
import { authActions } from "../../../reducers/authReducer";

const signupFormInitialErrorState = {
  emailError: null,
  passwordError: null,
  firstNameError: null,
};

const SignUp = () => {
  useDocumentTitle("SignUp | Lens-Store");

  const { authDispatch } = useAuth();

  const [signupForm, setSignupForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [signupFormErrorState, signupFormErrorDispatch] = useReducer(
    errorReducer,
    signupFormInitialErrorState
  );

  const [apiError, setApiError] = useState(null);

  const navigate = useNavigate();

  const signupHandler = async (event) => {
    event.preventDefault();

    if (signupFormValidation(signupForm, signupFormErrorDispatch)) {
    }
  };

  const signupInputHandler = (event) => {
    setSignupForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const signupFocusHandler = (event) => {
    focusHandler(event, signupFormErrorDispatch);
  };

  return (
    <>
      <section className="d-flex xy-center authentication__wrapper">
        <FormContainer formHeadingText={"SignUp"} submitHandler={signupHandler}>
          <FormInput
            label={"First Name"}
            type={"text"}
            placeholder={"John"}
            name={"firstName"}
            id={uuid()}
            inputHandler={signupInputHandler}
            required={true}
            error={signupFormErrorState.firstNameError}
            focusHandler={signupFocusHandler}
          />
          <FormInput
            label={"Last Name"}
            type={"text"}
            placeholder={"Doe"}
            name={"lastName"}
            id={uuid()}
            inputHandler={signupInputHandler}
            focusHandler={signupFocusHandler}
          />
          <FormInput
            label={"Email Address"}
            type={"email"}
            placeholder={"john@gemail.com"}
            name={"email"}
            id={uuid()}
            inputHandler={signupInputHandler}
            required={true}
            error={signupFormErrorState.emailError}
            focusHandler={signupFocusHandler}
          />
          <PasswordInput
            label={"Password"}
            placeholder={"********"}
            name={"password"}
            id={uuid()}
            inputHandler={signupInputHandler}
            error={signupFormErrorState.passwordError}
            focusHandler={signupFocusHandler}
          />

          {apiError && (
            <span className="txt-bold danger mb-sm d-inline-block">
              {apiError}
            </span>
          )}

          <div className="d-flex space-bw wrap">
            <div className="form-group width-content d-flex y-center gap-1">
              <input
                type="checkbox"
                className="form-input"
                id="declaration"
                required
              />
              <label
                className="form-label txt-sm d-inline-block"
                htmlFor="declaration"
              >
                I accept all Terms and Conditions
              </label>
            </div>
          </div>

          <FormButton
            btnText={"Create New Account"}
            btnClickHandler={signupHandler}
          />

          <div>
            <span>Already have an account ?</span>
            <Link to={"/login"} className="btn btn-link btn-link-primary">
              Login Here
            </Link>
          </div>
        </FormContainer>
      </section>
    </>
  );
};

export { SignUp };
