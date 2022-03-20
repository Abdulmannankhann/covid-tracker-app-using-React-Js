import Navbar from "./components/Navbar";
import Global from "./components/Global";
import India from "./components/India";
import Search from "./components/Search";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Global />} />
        <Route path="/india" element={<India />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
