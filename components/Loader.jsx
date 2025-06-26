
import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from './animations/5UXvoj7jbo.json';
import "../public/styles/Loader.css";

const Loader = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setPercentage(current);
      if (current >= 100) {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-overlay">
      <div className="loader-top-left">WAPPGO IS LOADING...</div>

      <div className="loader-animation">
        <Lottie animationData={animationData} loop autoplay />
      </div>

      <div className="loader-bottom-right">{percentage}%</div>
    </div>
  );
};

export default Loader;
