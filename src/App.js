import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Movies from "./pages/Movies";

function App() {
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/series/" element={<Series/>} />
      </Routes>
    </div>
  );
}

export default App;
