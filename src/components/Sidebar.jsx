import { NavLink, Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-heading">
        <Link to="/">Stylish</Link>
      </div>
      <NavLink
        to="/text"
        className={({ isActive }) => {
          return isActive ? "active-link" : "inactive-link";
        }}
      >
        Text
      </NavLink>
      <NavLink
        to="/layouts"
        className={({ isActive }) => {
          return isActive ? "active-link" : "inactive-link";
        }}
      >
        Layout
      </NavLink>
    </div>
  );
}

export default Sidebar;
