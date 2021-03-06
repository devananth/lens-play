import { createContext, useContext, useEffect, useReducer } from "react";
import { authReducer, authActions } from "../reducers";
import { useLocation, useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.pathname || "/";

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));

    if (userDetails) {
      authDispatch({
        type: authActions.SAVE_USER_DETAILS,
        payload: userDetails,
      });
      navigate(from);
    }
  }, []);

  return <Provider value={value}>{children}</Provider>;
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
