import React, { useEffect, useState } from 'react';
import './CircularProgressBar.css';

const CircularProgressBar = ({ percentage, color }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const progress = ((100 - percentage) / 100) * circumference;
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
  }, []);

  return (
    <div className="circular-progressbar">
      <svg viewBox="0 0 100 100">
        <circle
          className="circle bg"
          r={radius}
          cx="50"
          cy="50"
          strokeDasharray={circumference}
        />
        <circle
          className={`circle ${isAnimating ? 'animating' : ''}`}
          r={radius}
          cx="50"
          cy="50"
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          stroke={color}
        />
      </svg>
      <div className="percentage">{percentage}%</div>
    </div>
  );
};

export default CircularProgressBar;
