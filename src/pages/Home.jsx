import React, { useState, useEffect } from "react";
import { FaChrome } from "react-icons/fa";
import "../App.css";

const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0); // 0 → 1
  const [typedText, setTypedText] = useState("");
  const message = "Have no shame in using AI.";

  // Capture scroll and normalize progress
  useEffect(() => {
    let progress = 0;

    const handleWheel = (e) => {
      e.preventDefault(); // prevent normal scrolling
      progress += e.deltaY * 0.0015; // adjust scroll sensitivity
      progress = Math.min(Math.max(progress, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  // Typing effect based on scroll phase
  useEffect(() => {
    // Phase 1: fade out header (0 → 0.3)
    // Phase 2: typing effect (0.3 → 0.6)
    const typingStart = 0.3;
    const typingEnd = 0.6;

    if (scrollProgress < typingStart) {
      setTypedText("");
    } else {
      const phaseProgress = (scrollProgress - typingStart) / (typingEnd - typingStart);
      const charsToShow = Math.floor(phaseProgress * message.length);
      setTypedText(message.slice(0, charsToShow));
    }
  }, [scrollProgress]);

  return (
    <div className="animation-container">
      {/* Header fades out first */}
      <div
        className="header-section"
        style={{
          opacity: 1 - Math.min(scrollProgress / 0.3, 1),
          transform: `translateY(${scrollProgress * 50}px)`,
        }}
      >
        <h1>GPTDisguise</h1>
        <a
          className="download-btn"
          href="https://chromewebstore.google.com/detail/gptdisguise/bccghhjlejbkimijdkdfoboamcjgpefg?hl=en-GB"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaChrome className="chrome-icon" /> Download
        </a>
      </div>

      {/* Typing effect appears after header */}
      <div
        className="typing-section"
        style={{
          opacity:
            scrollProgress < 0.3
              ? 0
              : scrollProgress < 0.6
              ? (scrollProgress - 0.3) / 0.3
              : 1,
        }}
      >
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
          ☕ Buy me a coffee
        </a>
      </div>

      {/* Laptop animation appears after typing */}
      <div
        className="laptop"
        style={{
          transform: `
            translateY(${scrollProgress < 0.6 ? 100 : 100 - (scrollProgress - 0.6) * 166}px)
            rotateX(${scrollProgress < 0.6 ? 30 : 30 - (scrollProgress - 0.6) * 75}deg)
            scale(${scrollProgress < 0.6 ? 1 : 1 + (scrollProgress - 0.6) * 1})
          `,
          opacity: scrollProgress < 0.6 ? 0 : 1,
        }}
      >
        <div className="screen-content">
          {/* Video hidden for now */}
        </div>
      </div>
    </div>
  );
};

export default Home;
