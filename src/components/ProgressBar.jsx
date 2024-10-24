import React from 'react';
import './ProgressBar.css'; 

const ProgressBar = ({ progress }) => {
  const progressStyle = {
    width: `${progress}%`,
  };

  return (
    <div className="progress-bar-container">
      <center><h1>75%</h1></center>
      <div className="progress-bar" style={progressStyle}>
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
