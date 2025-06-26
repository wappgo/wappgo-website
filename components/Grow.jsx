"use client";
import Image from "next/image";
import React, { useRef } from 'react';
import "../public/styles/Grow.css";
import { useEffect, useState } from "react";
const Grow = () => {
  const [br, setBr] = useState(false);
  const titleRef = useRef(null);
  const fadeRefs = useRef([]);
  
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
    if (titleEl) {
      observer.observe(titleEl);
    }
  
    return () => {
      if (titleEl) observer.unobserve(titleEl);
    };
  }, []);
  
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
  
    fadeRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
  
    return () => {
      fadeRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  return (
    <main ref={(el) => (fadeRefs.current[0] = el)} className="grow-container fadeInUp-animation">
      <div className="grow-container-inside">
        <div className="row">
          <div className="col-xl-9 grow-texts">
            {/* <h1 ref={titleRef}>Grow your business with us</h1> */}
            <h1 ref={titleRef} className="animated-title">
              {
                "Grow your business with us".split(" ").map((word, wordIndex) => (
                  <span key={wordIndex} className="word">
                    {[...word].map((char, charIndex) => (
                      <span
                        key={charIndex}
                        style={{ '--i': wordIndex * 10 + charIndex + 1 }}
                      >
                        {char}
                      </span>
                    ))}
                    <span>&nbsp;</span>
                  </span>
                ))
              }
            </h1>
            <p ref={(el) => (fadeRefs.current[1] = el)} className="fadeInUp-animation">
              Our experts are ready to guide you through your next big move.{" "}
              {br ? <br></br> : ""} Let us know how we can help.
            </p>
          </div>
          <div className="col-xl-3 col-sm-12 grow-btn">
            <button className="grow-touch-btn">
              Get In Touch <img src="/assets/call-icon.svg" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Grow;
