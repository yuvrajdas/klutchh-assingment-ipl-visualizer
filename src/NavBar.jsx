import React, { useState } from "react";
import DashBoard from "./DashBoard";

const NavBar = () => {
  const [tableView, setTableView] = useState(false);

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <span class="navbar-brand" href="#">
            IPL Live Data visualizer
          </span>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor01"></div>
        </div>
      </nav>
      <div class="container mt-3">
        {tableView ? (
          <button
            className="btn btn-primary float-end"
            onClick={() => {
              setTableView(!tableView);
            }}
          >
            Graph View
          </button>
        ) : (
          <button
            className="btn btn-info float-end ms-2"
            onClick={() => {
              setTableView(!tableView);
            }}
          >
            Table View
          </button>
        )}
          </div>
          <DashBoard toggle={tableView} />
    </>
  );
};

export default NavBar;
