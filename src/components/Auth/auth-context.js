import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducers";

const initialAuthState = {
  authToken: null,
  userName: null,
  isUserLoggedIn: null,
};

const AuthContext = createContext(initialAuthState);

const AuthProvider = ({ children }) => {
  const { Provider } = AuthContext;

  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);

  const value = { authState, authDispatch };

  return <Provider value={value}>{children}</Provider>;
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
