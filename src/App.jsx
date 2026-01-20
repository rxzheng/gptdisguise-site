import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import About from "./pages/About";
import "./App.css";
import { useEffect } from "react";

const App = () => {

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleWheel = (e) => {
      e.preventDefault(); // prevent default scroll
      const delta = e.deltaY * 0.3; // reduce scroll speed to 30%
      lastScroll += delta;
      window.scrollTo(0, lastScroll);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

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
        {/* Redirect the GitHub Pages root to Home */}
        <Route path="/gptdisguise-site" element={<Navigate to="/" replace />} />

        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
