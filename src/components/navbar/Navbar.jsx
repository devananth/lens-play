import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth, useTheme } from "../../contexts";
import { authActions } from "../../reducers";
import "./navbar.css";
import { SearchBar } from "../index";

const Navbar = () => {
  const {
    authState: { isUserLoggedIn },
    authDispatch,
  } = useAuth();

  const { theme, changeTheme } = useTheme();

  const logoutHandler = () => {
    authDispatch({
      type: authActions.DELETE_USER_DETAILS,
    });
    toast.success("Logged out successfully");
  };

  return (
    <header className="header">
      <nav className="nav__wrapper">
        <div>
          <Link to="/" className="txt-3xl txt-bold cursor-ptr">
            LensPlay
          </Link>
        </div>
        <SearchBar />
        <div className="nav__links__wrapper">
          {theme === "light" ? (
            <i className="fas fa-moon theme__icon" onClick={changeTheme}></i>
          ) : (
            <i className="fas fa-sun theme__icon" onClick={changeTheme}></i>
          )}
          {isUserLoggedIn ? (
            <NavLink to="/">
              <button className="btn btn-primary" onClick={logoutHandler}>
                Logout
              </button>
            </NavLink>
          ) : (
            <NavLink to="/login">
              <button className="btn btn-primary">Login</button>
            </NavLink>
          )}
        </div>
      </nav>
      <SearchBar mobileScreen={true} />
    </header>
  );
};

export { Navbar };
