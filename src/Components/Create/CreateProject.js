import React, { useState } from "react";
import "./Create.css";

function CreateProject(props) {
  const [projectName, setprojectName] = useState("");
  const projectInput = (e) => {
    setprojectName(e.target.value);
  };
  return (
    <div>
      <div className="row">
        <p className="Label">Project</p>
        <input
          className="input"
          autoFocus
          defaultValue={projectName}
          onChange={(e) => projectInput(e)}
        />
      </div>
    </div>
  );
}

export default CreateProject;
