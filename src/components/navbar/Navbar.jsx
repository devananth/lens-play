import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts";
import { authActions } from "../../reducers";
import "./navbar.css";
import { SearchBar } from "../index";

const Navbar = () => {
  const {
    authState: { isUserLoggedIn },
    authDispatch,
  } = useAuth();

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
          <NavLink className="nav__link hide__mobile" to="/">
            Home
          </NavLink>
          <NavLink className="nav__link hide__mobile" to="/">
            Explore
          </NavLink>
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
