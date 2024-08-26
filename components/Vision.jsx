"use client";
import React, { useState, useEffect } from 'react';
import '../public/styles/Vision.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Vision = () => {
  const [showInfo, setShowInfo] = useState(false); // State to manage when to show info
  const [currentFeature, setCurrentFeature] = useState(''); // State to manage which feature's info to show

  useEffect(() => {
    let intervalId; // Variable to hold the interval ID

    // Function to cycle through features after 3 seconds
    const cycleFeatures = () => {
      const features = ['Innovation', 'Design', 'Operations', 'Maintenance'];
      let index = 0;
      intervalId = setInterval(() => {
        setCurrentFeature(features[index]);
        setShowInfo(true);
        index = (index + 1) % features.length;
      }, 3000);
    };

    cycleFeatures(); // Start cycling through features

    // Clean up on unmount
    return () => {
      clearInterval(intervalId); // Clear interval when component unmounts
    };
  }, []); // Empty dependency array means this effect runs once on mount


  useEffect(() => {
    if (showInfo) {
      // GSAP animation timeline
      const tl = gsap.timeline();

      // Define animation for feature images
      tl.from(".feature img", {
        duration: 1.5,
        opacity: 0.5,
        rotate: 180,
        x: -80,
        stagger:3.5,
        repeat:-1
      });
    }
  }, [showInfo]); 
  return (
    <div className="vision-container">
      <div className="row vision">
        <div className="col-xl-5">
          <h6 className="sub-head">Our Vision</h6>
          <p className="sub-desc">
            Turn visionary concepts into tangible products ready for use.
          </p>
        </div>
        <div className="col-xl-2"></div>
        <div className="col-xl-5 second">
          <p className="sec-head">
            {showInfo && (
              <>
                {currentFeature === 'Innovation' && (
                  <>
                    We have assisted a wide range of clients, from small,
                    emerging startups to large enterprise organizations, in
                    developing products by simplicity and user-friendliness.
                  </>
                )}
                {currentFeature === 'Design' && (
                  <>
                   Design Another feature-specific information here...
                  </>
                )}
                {currentFeature === 'Operations' && (
                  <>
                Operations    Another feature-specific information here...
                  </>
                )}
                {currentFeature === 'Maintenance' && (
                  <>
                Maintenance    Another feature-specific information here...
                  </>
                )}
              </>
            )}
          </p>
          <div className={`feature ${showInfo && currentFeature === 'Innovation' ? 'scale-1-3' : ''}`}>
            <h4>Innovation</h4>
            <img src="/assets/arrow-down-right.svg" className='arrow' alt="Arrow" />
          </div>
          <div className={`feature ${showInfo && currentFeature === 'Design' ? 'scale-1-3' : ''}`}>
            <h4>Design</h4>
            <img src="/assets/arrow-down-right.svg" className='arrow' alt="Arrow" />
          </div>
          <div className={`feature ${showInfo && currentFeature === 'Operations' ? 'scale-1-3' : ''}`}>
            <h4>Operations</h4>
            <img src="/assets/arrow-down-right.svg" className='arrow' alt="Arrow" />
          </div>
          <div className={`feature ${showInfo && currentFeature === 'Maintenance' ? 'scale-1-3' : ''}`}>
            <h4>Maintenance</h4>
            <img src="/assets/arrow-down-right.svg" className='arrow' alt="Arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
