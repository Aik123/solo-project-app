import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import PostMood from "./PostMood";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PostMood" element={<PostMood />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
