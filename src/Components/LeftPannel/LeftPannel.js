import React from "react";
import "./LeftPannel.css";

function LeftPannel() {
  return (
    <div className="leftPannel">
      <h1>Logo</h1>
      <div className="options">
        <ul>
          <p className="pannelLabel">Project</p>
          <p className="pannelLabel">Team</p>
          <p className="pannelLabel">Project Status</p>
          <p className="pannelLabel">Timesheet</p>
          <p className="pannelLabel">Expense Management </p>
        </ul>
      </div>
      <div className="footer">
        <div className="logoutbtn">Log Out</div>
      </div>
    </div>
  );
}

export default LeftPannel;
