import React from "react";
import LeftPannel from "../LeftPannel/LeftPannel";
import Table from "../../UI/Table/Table";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="inRow">
      <div className="leftDiv">
        <LeftPannel />
      </div>
      <div className="rightDiv">
        <Table />
      </div>
    </div>
  );
}

export default Dashboard;
