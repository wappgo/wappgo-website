// components/WebExpertise.js
// import React from 'react';
// import "../public/styles/WebExpertise.css";
// const WebExpertise = () => {
//   return (
//     <section className="expertise-section">
//       <div className="expertise-container">
//         <div className="expertise-header">
//           <h2 className="expertise-title">
//             Our Web Development <br />
//             <span>Expertise</span>
//           </h2>
//           <p className="expertise-description">
//             Our team has partnered with brands across industries to craft secure, reliable,
//             and conversion-optimized platforms that users love.
//           </p>
//         </div>
//         <div className="expertise-cards">
//           <div className="expertise-card">
//             <h3 className="card-stat"><span>50+</span></h3>
//             <p className="card-text">
//               Projects launched across SaaS, eCommerce, and enterprise platforms.
//             </p>
//           </div>
//           <div className="expertise-card">
//             <h3 className="card-stat"><span>10,000,000+</span></h3>
//             <p className="card-text">
//               0M+ users. Every month. Using products we proudly built — from high-traffic
//               platforms to niche web apps.
//             </p>
//           </div>
//           <div className="expertise-card">
//             <h3 className="card-stat"><span>85%</span></h3>
//             <p className="card-text">
//               85% of clients partner with us again — not just for our code, but for the speed,
//               and scalability.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WebExpertise;
import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import "../public/styles/WebExpertise.css";

const WebExpertise = (props) => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="expertise-section" ref={sectionRef}>
      <div className="expertise-container">
        <div className="expertise-header">
          <h2 className="expertise-title">
            {/* Our Web Development <br />
            <span>Expertise</span> */}
            {props?.title} <br/>
            <span>{props?.nexttitle}</span>
          </h2>
          <p className="expertise-description">
            Our team has partnered with brands across industries to craft secure, reliable,
            and conversion-optimized platforms that users love.
          </p>
        </div>
        <div className="expertise-cards">
          <div className="expertise-card">
            <h3 className="card-stat">
              <span>
                {startCount ? <CountUp end={50} duration={2} /> : 0}+
              </span>
            </h3>
            <p className="card-text">
              Projects launched across SaaS, eCommerce, and enterprise platforms.
            </p>
          </div>
          <div className="expertise-card">
            <h3 className="card-stat">
              <span>
                {startCount ? <CountUp end={10000000} duration={3} separator="," /> : 0}+
              </span>
            </h3>
            <p className="card-text">
              0M+ users. Every month. Using products we proudly built — from high-traffic
              platforms to niche web apps.
            </p>
          </div>
          <div className="expertise-card">
            <h3 className="card-stat">
              <span>
                {startCount ? <CountUp end={85} duration={2} /> : 0}%
              </span>
            </h3>
            <p className="card-text">
              85% of clients partner with us again — not just for our code, but for the speed,
              and scalability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebExpertise;
