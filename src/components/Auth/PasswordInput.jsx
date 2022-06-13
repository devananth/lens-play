import { useState } from "react";
import "./Password.css";

const PasswordInput = ({
  label,
  name,
  id,
  placeholder,
  value,
  inputHandler,
  error,
  focusHandler,
}) => {
  const [passwordType, setPasswordType] = useState("password");

  const passwordTypeHandler = () => {
    setPasswordType((prevType) => (prevType === "text" ? "password" : "text"));
  };

  return (
    <div className="form-group ">
      <label
        className={`form-label txt-sbold form-input-required`}
        htmlFor={id}
      >
        {label}
      </label>
      <div className="password-field">
        <input
          className="form-input "
          type={passwordType}
          name={name}
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={inputHandler}
          required
          onFocus={focusHandler}
        />
        <span className="password-icon" onClick={passwordTypeHandler}>
          <i
            className={`fas ${
              passwordType === "text" ? "fa-eye-slash" : "fa-eye"
            }`}
          ></i>
        </span>
      </div>

      {error && (
        <span className={`danger mt-sm ${error ? "d-block" : "d-none"}`}>
          <i className="fas fa-exclamation-circle"></i>
          {error}
        </span>
      )}
    </div>
  );
};

export { PasswordInput };
