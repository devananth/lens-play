import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useVideos } from "../../contexts";
import "./searchBar.css";

const SearchBar = ({ mobileScreen }) => {
  const [searchValue, setSearchValue] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const { videoState, setVideoState, loader } = useVideos();

  const searchHandler = (e) => {
    e.preventDefault();
    setVideoState((prevState) => ({ ...prevState, searchBy: searchValue }));
    if (location?.pathname !== "/explore") {
      navigate("/");
    }
  };

  const searchChangeHandler = (event) => {
    setSearchValue(() => event.target.value);
    setVideoState((prevState) => ({ ...prevState, searchBy: searchValue }));
  };

  return (
    <form
      className={`nav__search__container ${mobileScreen && `mobile__search`}`}
      onSubmit={searchHandler}
    >
      <button className="icon nav__search__icon" type="submit">
        <i className="fa fa-search" aria-hidden="true"></i>
      </button>
      <input
        className="nav__search"
        type="search"
        placeholder="Enter to Search"
        onChange={searchChangeHandler}
      />
    </form>
  );
};

export { SearchBar };
