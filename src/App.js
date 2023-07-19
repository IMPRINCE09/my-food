import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navabar from "./Components/Navbar";
import Home from "./Components/Home";
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navabar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
