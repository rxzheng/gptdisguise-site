import React, { useState } from "react";
import "./Landing.css"; // separate CSS for this page

const Landing = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="page landing-page">
      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="close-btn" onClick={handleClose}>
              ×
            </button>
            <p className="popup-text">please watch a video to help me</p>
            <a
              className="watch-video-btn"
              href="https://www.youtube.com/watch?v=1mYHk7xwJlk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Video
            </a>
          </div>
        </div>
      )}

      {/* Landing page content */}
      <h2>This is the landing page.</h2>
    </div>
  );
};

export default Landing;
