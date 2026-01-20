import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import About from "./pages/About";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <nav className="navbar fade-in">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/landing">LANDING</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
