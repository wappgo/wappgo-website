"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import "../styles/Question.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Question = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const tl = gsap.timeline()
  const togglePanel = (index) => {
    setActiveIndex(activeIndex === index ? null : index);

  };
  useEffect(() => {
    if (activeIndex != "" || activeIndex == 0) {
      tl.from(".faq-content", {
        y: 50,
        duration: 0.5,
        opacity: 0,

      })
     
    }
  }, [activeIndex])

  return (
    <main className="question-container">
      <h6>Questions</h6>
      <h2>Frequently Asked Questions</h2>
      <article className="row">
        <div className="col-lg-12 col-12">
          <div className="faq-header" onClick={() => togglePanel(0)}>
            <h4>Innovation</h4>
            <img src="/assets/question-arrow-right.svg" className='arrowimg' />
          </div>
          {activeIndex === 0 && (
            <div className="faq-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          )}
        </div>
        <div className="col-lg-12 col-12">
          <div className="faq-header" onClick={() => togglePanel(1)}>
            <h4>Design</h4>
            <img src="/assets/question-arrow-right.svg" className='arrowimg' />

          </div>
          {activeIndex === 1 && (
            <div className="faq-content">
              <p>Content for Design FAQs...</p>
            </div>
          )}
        </div>
        <div className="col-lg-12 col-12">
          <div className="faq-header" onClick={() => togglePanel(2)}>
            <h4>Operations</h4>
            <img src="/assets/question-arrow-right.svg" className='arrowimg'/>

          </div>
          {activeIndex === 2 && (
            <div className="faq-content">
              <p>Content for Operations FAQs...</p>
            </div>
          )}
        </div>
        <div className="col-lg-12 col-12">
          <div className="faq-header" onClick={() => togglePanel(3)}>
            <h4>Maintenance</h4>
            <img src="/assets/question-arrow-right.svg" className='arrowimg' />

          </div>
          {activeIndex === 3 && (
            <div className="faq-content">
              <p>Content for Maintenance FAQs...</p>
            </div>
          )}
        </div>
      </article>
    </main>
  );
};

export default Question;
