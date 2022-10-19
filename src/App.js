import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
// import Navbar from "./components/Navbar";

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
