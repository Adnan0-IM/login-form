import React from "react";
import Form from "./Form";
import Page from "./Page";
import "./App.css";

const userIsRegister = false;
function App() {
  return <div className="container"><Form isRegistered= {userIsRegister}/> </div>
  
}

export default App;
