import { useEffect, useState } from "react";
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Search from "./pages/Search";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/profile/" element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
