"use client";
import React, { useState, useEffect, useRef } from 'react';
import '../public/styles/Vision.css';

const Vision = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(''); 
  const fadeRefs = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const titleEl = titleRef.current;
    if (titleEl) observer.observe(titleEl);

    fadeRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      if (titleEl) observer.unobserve(titleEl);
      fadeRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

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
  const contentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Innovation",
      content:
        "We have assisted a wide range of clients, from small, emerging startups to large enterprise organizations, in developing products by simplicity and user-friendliness.",
    },
    { title: "Design", content: "Design process details go here." },
    { title: "Operations", content: "Operations insights and info." },
    { title: "Maintenance", content: "Maintenance-related information." },
  ];
  return (
    <div className="vision-container">
      <div className='vision-inside'>
        <div className="row vision justify-content-between">
          <h6 ref={titleRef} className="sub-head mb-4 fadeInUp-animation">Our Vision</h6>
          <div className="col-xl-5">
            <p ref={(el) => fadeRefs.current[0] = el} className="sub-desc fadeInUp-animation">
              Turn visionary concepts into tangible products ready for use.
            </p>
            {/* <video autoPlay loop muted className="video">
                    <source src="/assets/landingpage-raket.mp4" type="video/mp4" />
                </video> */}
            <div className="position-relative offervidedivvision">
              <video autoPlay loop muted className="video">
                <source src="/assets/landingpage-raket.mp4" type="video/mp4" />
              </video>
              {/* <div className="video-overlay-offer"></div> */}
            </div>
          </div>
          <div  ref={contentRef}
              className={`col-xl-6 second ${
                isVisible ? "col-xl-6 second-animate" : ""
              }`}
            >
            <p className='sec-head mt-2'>We have assisted a wide range of clients, from small, emerging startups to large enterprise organizations, in developing products by simplicity and user-friendliness.</p>
            
            <div>
              {accordionData.map((item, index) => (
                <div key={index} className="accordion-item2">
                  {/* Accordion Header */}
                  <div className="feature" onClick={() => toggleAccordion(index)}>
                    <h4>{item.title}</h4>
                    <img
                      src="/assets/arrow-down-right.svg"
                      className={`arrow transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                        }`}
                      alt="Arrow"
                    />
                  </div>

                  {openIndex === index && (
                    <p className="text-white mt-2">{item.content}</p>
                  )}
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
