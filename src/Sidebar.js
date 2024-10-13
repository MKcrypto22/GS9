import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { AppContext } from "./context";

const Sidebar = () => {
  const { isSideBarOpen, closeSideBar } = useContext(AppContext);

  return (
    <aside className={`sidebar ${isSideBarOpen ? "show-sidebar" : ""}`}>
      <div className="sidebar-header">
        <img src="./logo.svg" alt="logo" className="logo" />
        <button className="close-btn" onClick={closeSideBar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon} {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((socialIcon) => {
          const { id, url, icon } = socialIcon;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
