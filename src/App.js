import "./App.css";
import "../node_modules/bootstrap/dist//css/bootstrap.min.css";
import Login from "./Components/Login/Login";
import Table from "./UI/Table/Table";
import CreateProject from "./Components/Create/CreateProject";
import LeftPannel from "./Components/LeftPannel/LeftPannel";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
