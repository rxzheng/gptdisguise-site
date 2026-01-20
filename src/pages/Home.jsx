import React, { useState, useEffect, useRef } from "react";
import { FaChrome } from "react-icons/fa";
import "../App.css";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const videoRef = useRef(null);
  const message = "Have no shame in using AI.";

  // Typing effect
  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 400;
      const scrollY = Math.min(window.scrollY, maxScroll);
      const progress = scrollY / maxScroll;
      const charsToShow = Math.floor(progress * message.length);
      setTypedText(message.slice(0, charsToShow));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Video scroll animation
  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current) return;

      const videoTop = videoRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (videoTop < windowHeight - 100) {
        videoRef.current.classList.add("slide-in");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="landing">
        <h1>GPTDisguise</h1>
        <a
          className="download-btn"
          href="https://chromewebstore.google.com/detail/gptdisguise/bccghhjlejbkimijdkdfoboamcjgpefg?hl=en-GB"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaChrome className="chrome-icon" /> Download
        </a>
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
          ☕ Buy me a coffee
        </a>
      </section>

      <section className="video-section">
        <div className="video-container" ref={videoRef}>
          <iframe
            src="https://www.youtube.com/embed/1mYHk7xwJlk?autoplay=1&mute=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Home;
