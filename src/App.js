import { useEffect, useState } from "react";
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Search from "./pages/Search";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/profile/" element={<Profile/>} />
      </Routes>
      {/* <Navbar/> */}
    </div>
  );
}

export default App;
