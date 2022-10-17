import React from "react";
import GraphView from "./GraphView";
import TableView from "./TableView";

const DashBoard = (props) => {
  return <>{props.toggle ? <TableView /> : <GraphView />}</>;
};

export default DashBoard;
