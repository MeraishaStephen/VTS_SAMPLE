import React from "react";
import { useNavigate } from "react-router-dom";
import "./VideoIcon.css";

const VideoIcon = () => {
  const navigate = useNavigate();

  const handleIconClick = () => {
    navigate("/video"); // Navigates to the "/video" page
  };

  return (
    <div className="video-icon" onClick={handleIconClick}>
      🎥
    </div>
  );
};

export default VideoIcon;
