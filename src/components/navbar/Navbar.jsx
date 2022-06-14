import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";
import { SearchBar } from "../index";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav__wrapper">
        <div>
          <Link to="/explore" className="txt-3xl txt-bold cursor-ptr">
            LensPlay
          </Link>
        </div>
        <SearchBar />
        <div className="nav__links__wrapper">
          <NavLink className="nav__link hide__mobile" to="/">
            Home
          </NavLink>
          <NavLink className="nav__link hide__mobile" to="/explore">
            Explore
          </NavLink>
          <NavLink to="/login">
            <button className="btn btn-primary">Login</button>
          </NavLink>
        </div>
      </nav>
      <SearchBar mobileScreen={true} />
    </header>
  );
};

export { Navbar };
