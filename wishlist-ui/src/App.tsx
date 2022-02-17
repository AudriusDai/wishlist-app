import React from "react";
import "./App.css";
import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {
  return (
    <div className="App">
      <Login />
      <br />
      <Logout />
    </div>
  );
}

export default App;
