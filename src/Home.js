import React, { useContext } from "react";
import { AppContext } from "./context";

const Home = () => {
  const { openModal, openSideBar } = useContext(AppContext);

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSideBar}>
        Open Sidebar
      </button>
      <button className="btn" onClick={openModal}>
        Open Modal
      </button>
    </main>
  );
};

export default Home;
