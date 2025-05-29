// import React, { useEffect, useState } from "react";
// import "../public/styles/Loader.css";

// const FullScreenLoader = () => {
//   const [hide, setHide] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setHide(true), 1800); // Hide after 3s
//     return () => clearTimeout(timer);
//   }, []);

//   if (hide) return null;

//   return (
//     <div className="loader-wrapper">
//       <div className="bar bar1" />
//       <div className="bar bar2" />
//       <div className="bar bar3" />
//       <div className="bar bar4" />
//       <div className="bar bar5" />
//     </div>
//   );
// };

// export default FullScreenLoader;
// import React, { useEffect, useState } from "react";
// import "../public/styles/Loader.css";

// const Loader = () => {
//   const [hide, setHide] = useState(false);


//   useEffect(() => {
//     const timer = setTimeout(() => setHide(true), 3000); 
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className={`loader-wrapper ${hide ? "hidden" : ""}`}>
//       <div className="bar bar1" />
//       <div className="bar bar2" />
//       <div className="bar bar3" />
//       <div className="bar bar4" />
//       <div className="bar bar5" />
//     </div>
//   );
// };

// export default Loader;

// import React from 'react';
// import Lottie from 'lottie-react';
// import animationData from './animations/5UXvoj7jbo.json';
// import "../public/styles/Loader.css";

// const Loader = () => {
//   return (
//     <div className="loader-overlay">
//       <div className="loader-animation">
//         <Lottie animationData={animationData} loop={true} autoplay={true} />
//       </div>
//     </div>
//   );
// };

// export default Loader;

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
