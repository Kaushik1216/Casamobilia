import React from "react";
// import {Navigate, Route,Routes} from 'react-router-dom';
import { render } from "react-dom";

function App() {
  return <h1>Hello I am Kaushik</h1>;
}

export default App;

const appDiv = document.getElementById("app");
render(<App />, appDiv);