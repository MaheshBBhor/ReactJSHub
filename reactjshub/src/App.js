// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Home from "./components/Home";
import Project1 from "./components/Project1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/ReactJSHub" element={<Home />} />
          <Route path="/project1" element={<Project1 />} />
          {/* <Route /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
