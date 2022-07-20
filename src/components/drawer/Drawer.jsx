import { NavLink } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./drawer.css";

const drawerOptions = [
  {
    id: uuid(),
    icon: "far fa-compass",
    path: "/",
    text: "Explore",
  },
  {
    id: uuid(),
    icon: "far fa-thumbs-up",
    path: "/liked",
    text: "Liked videos",
  },
  {
    id: uuid(),
    icon: "far fa-clock",
    path: "/watchlater",
    text: "Watch Later",
  },
  {
    id: uuid(),
    icon: "far fa-play-circle",
    path: "/playlists",
    text: "Playlists",
  },
  {
    id: uuid(),
    icon: "fas fa-history",
    path: "/history",
    text: "History",
  },
];

const activeStyle = ({ isActive }) => {
  return isActive
    ? {
        // color: "var(--primary-color)",
        backgroundColor: "var(--nav-background-hover-color)",
      }
    : {};
};

const DrawerItem = ({ id, icon, text, path }) => {
  return (
    <li className="drawer__options">
      <NavLink to={path} style={activeStyle}>
        <span className="drawer__icon">
          <i className={icon} aria-hidden="true"></i>
        </span>
        <span className="txt-bold drawer__text">{text}</span>
      </NavLink>
    </li>
  );
};

const Drawer = () => {
  return (
    <aside className="drawer__wrapper">
      <ul>
        {drawerOptions.map((item) => (
          <DrawerItem key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
};

export { Drawer };
