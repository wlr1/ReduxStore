import React from "react";

import "./scss/app.scss";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
