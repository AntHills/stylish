import { NavLink, Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-heading">
        <Link to="/">Stylish</Link>
      </div>
      <NavLink
        to="/fonts"
        className={({ isActive }) => {
          return isActive ? "active-link" : "inactive-link";
        }}
      >
        Fonts
      </NavLink>
      <NavLink
        to="/layouts"
        className={({ isActive }) => {
          return isActive ? "active-link" : "inactive-link";
        }}
      >
        Layouts
      </NavLink>
    </div>
  );
}

export default Sidebar;
