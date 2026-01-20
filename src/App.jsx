import React, { useState, useEffect } from "react";
import "./App.css";
import { FaChrome } from "react-icons/fa";

const App = () => {
  const [showNav, setShowNav] = useState(false);
  const [typedText, setTypedText] = useState("");

  const message = "Have no shame in using AI.";

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY === 0);

      const maxScroll = 400; // how much scroll completes the typing
      const scrollY = Math.min(window.scrollY, maxScroll);
      const progress = scrollY / maxScroll;

      const charsToShow = Math.floor(progress * message.length);
      setTypedText(message.slice(0, charsToShow));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <nav className={`navbar ${showNav ? "fade-in" : ""}`}>
        <ul>
          <li>HOME</li>
          <li>LANDING</li>
          <li>ABOUT</li>
        </ul>
      </nav>

      <header className="landing">
        <h1>GPTDisguise</h1>
        <button className="download-btn">
          <FaChrome className="chrome-icon" /> Download
        </button>
      </header>

      <section className="typing-section">
        <div className="typing">
          {typedText}
          <span className="cursor">|</span>
        </div>

        <a
          href="https://www.buymeacoffee.com/gptdisguise"
          target="_blank"
          rel="noopener noreferrer"
          className="coffee-btn"
        >
          Buy me a coffee
        </a>
      </section>

      <section className="video-section">
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/1mYHk7xwJlk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default App;
