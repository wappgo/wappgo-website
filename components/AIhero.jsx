import React, { useEffect, useRef } from 'react';
import "../public/styles/AIhero.css";
// import Video from '/assets/ai-videos.mp4';
// import Settingsicon from '../assets/settings.svg'
// import Graph from '../assets/graph.svg'
// import Message from '../assets/message.svg';
// import Layer from '../assets/layer.svg';
const HeroSection = () => {
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
    <div className="hero-container5">
      <video autoPlay loop muted className="hero-video">
        <source src='/assets/ai-videos.mp4' type="video/mp4" />
      </video>
      <div className="hero-content">
        {/* <p className="hero-subtitle">SMARTER . FASTER . LIMITLESS</p>
        <h1 className='hero-title'>
          <span className="ai-powered">
            <span className="ai-gradient">AI-</span>
            <span className="powered-gradient">POWERED</span>
          </span>{' '}
          INNOVATION FOR <br /> YOUR BUSINESS
        </h1> */}
        <p className="hero-subtitle">
          <span className="text-reveal">SMARTER . FASTER . LIMITLESS</span>
        </p>
        <h1 className='text-reveal hero-title'>
          <span className="ai-powered">
            <span className="text-reveal ai-gradient">AI-</span>
            <span className="text-reveal powered-gradient">POWERED</span>
          </span>{' '}
          INNOVATION FOR <br /> YOUR BUSINESS
        </h1>
        {/* <h1 className='hero-title'>
  <span className="ai-powered">
    <span className="text-reveal ai-gradient">AI-</span>
    <span className="text-reveal powered-gradient">POWERED</span>
  </span>{' '}
  <br />
  <span className="text-reveal">INNOVATION FOR</span>
  <br />
  <span className="text-reveal">YOUR BUSINESS</span>
</h1> */}

        <p ref={(el) => (fadeRefs.current[0] = el)} className="hero-description fadeInUp-animation">
          Tired Of Slow, Manual Processes? Wappgo AI Transforms The Way You Work—Automating,
          Optimizing, And Predicting So You Can Focus On What Truly Matters. Whether It's
          AI-Driven Chatbots, Predictive Analytics, Or Intelligent Automation, We Build AI
          Solutions That Actually Deliver Results.
        </p>
        <div ref={(el) => (fadeRefs.current[1] = el)} className="hero-buttons">
          {/* <button className="btn btn-light">Talk To An Expert</button> */}
          <button class="btn-light ai-btn-width">
            {/* <img src="/assets/phone-icon.svg" className="btn-icon2"/> */}
            <span className="btn-icon2" />
            <span>Talk to Expert</span>
          </button>
          <button className="animated-btn ai-btn-width">Deck For Wappgo AI
            <img src="/assets/ai-deck-download.svg" className="btn-icon"/>
          </button>
        </div>
        {/* <div  ref={(el) => (fadeRefs.current[2] = el)} className="hero-features fadeInUp-animation">
          <div className="feature-card5">
            <div className="feature-icon5"><img src='/assets/settings.svg' /></div>
            <div className="feature-text5">
              <h4 className='text5'>AI-Powered Automation</h4>
              <p>Cut the manual work & let AI handle all your repetitive tasks.</p>
            </div>
          </div>
          <div className="feature-card5">
            <div className="feature-icon5"><img src='/assets/message.svg' /></div>
            <div className="feature-text5">
              <h4 className='text5' >Smart Chatbots & Virtual Assistants</h4>
              <p>Engage customers 24/7 with AI-driven conversations.</p>
            </div>
          </div>
          <div className="feature-card5">
            <div className="feature-icon5"><img src='/assets/graph-two.svg' /></div>
            <div className="feature-text5">
              <h4 className='text5'>Predictive Analytics</h4>
              <p>Make data-driven decisions with AI-powered insights.</p>
            </div>
          </div>
          <div className="feature-card5">
            <div className="feature-icon5"><img src='/assets/layer.svg' /></div>
            <div className="feature-text5">
              <h4 className='text5'>Computer Vision</h4>
              <p>AI that sees, detects, and understands images & videos.</p>
            </div>
          </div>
        </div> */}
        <div className="hero-features overflow-hidden">
          <div className="marquee-wrapper">
            <div className="marquee-track">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  <div className="feature-card5">
                    <div className="feature-icon5"><img src="/assets/settings.svg" /></div>
                    <div className="feature-text5">
                      <h4 className="text5">AI-Powered Automation</h4>
                      <p>Cut the manual work & let AI handle all your <br />repetitive tasks.</p>
                    </div>
                  </div>
                  <div className="feature-card5">
                    <div className="feature-icon5"><img src="/assets/message.svg" /></div>
                    <div className="feature-text5">
                      <h4 className="text5">Smart Chatbots & Virtual Assistants</h4>
                      <p>Engage customers 24/7 with AI-driven <br /> conversations.</p>
                    </div>
                  </div>
                  <div className="feature-card5">
                    <div className="feature-icon5"><img src="/assets/graph-two.svg" /></div>
                    <div className="feature-text5">
                      <h4 className="text5">Predictive Analytics</h4>
                      <p>Make data-driven decisions with AI-powered <br /> insights.</p>
                    </div>
                  </div>
                  <div className="feature-card5">
                    <div className="feature-icon5"><img src="/assets/layer.svg" /></div>
                    <div className="feature-text5">
                      <h4 className="text5">Computer Vision</h4>
                      <p>AI that sees, detects, and understands <br /> images & videos.</p>
                    </div>
                  </div>
                  <div className="feature-card5">
                    <div className="feature-icon5"><img src="/assets/language-proccessing.svg" /></div>
                    <div className="feature-text5">
                      <h4 className="text5">Natural Language Processing</h4>
                      <p>Unlocking the power of human language, NLP <br /> enables machines to understand.</p>
                    </div>
                  </div>
                  <div className="feature-card5">
                    <div className="feature-icon5"><img src="/assets/generative-ai.svg" /></div>
                    <div className="feature-text5">
                      <h4 className="text5">Generative AI, LLM & VLM</h4>
                      <p>Harnessing cutting-edge advancements in <br /> Generative AI.</p>
                    </div>
                  </div>
                  <div className="feature-card5">
                    <div className="feature-icon5"><img src="/assets/data-analytics.svg" /></div>
                    <div className="feature-text5">
                      <h4 className="text5">Data Analytics Applications</h4>
                      <p>Transforming data into actionable insights <br /> through advanced analytics techniques.</p>
                    </div>
                  </div>
                  <div className="feature-card5">
                    <div className="feature-icon5"><img src="/assets/automation.svg" /></div>
                    <div className="feature-text5">
                      <h4 className="text5">AI-Powered Automation</h4>
                      <p>Cut the manual work & let AI handle all your <br /> repetitive tasks.</p>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>

    // <div className="footer-container5">
    //   <video autoPlay loop muted className="footer-video5">
    //     <source src='/assets/ai-videos.mp4' type="video/mp4" />
    //   </video>
    //   <div className="hero-content">
    //     <p className="hero-subtitle">SMARTER . FASTER . LIMITLESS</p>
    //     <h1 className='hero-title'>
    //       <span className="ai-powered">
    //         <span className="ai-gradient">AI-</span>
    //         <span className="powered-gradient">POWERED</span>
    //       </span>{' '}
    //       INNOVATION FOR <br /> YOUR BUSINESS
    //     </h1>
    //     <p className="hero-description">
    //       Tired Of Slow, Manual Processes? Wappgo AI Transforms The Way You Work—Automating,
    //       Optimizing, And Predicting So You Can Focus On What Truly Matters. Whether It's
    //       AI-Driven Chatbots, Predictive Analytics, Or Intelligent Automation, We Build AI
    //       Solutions That Actually Deliver Results.
    //     </p>
    //     <div className="hero-buttons">
    //       <button className="animated-btn">Contact Us</button>
    //       <button className="btn btn-light">Talk To An Expert</button>
    //     </div>
    //     <div className="hero-features">
    //       <div className="feature-card5">
    //         <div className="feature-icon5"><img src='/assets/settings.svg' /></div>
    //         <div className="feature-text5">
    //           <h4 className='text5'>AI-Powered Automation</h4>
    //           <p>Cut the manual work & let AI handle all your repetitive tasks.</p>
    //         </div>
    //       </div>
    //       <div className="feature-card5">
    //         <div className="feature-icon5"><img src='/assets/message.svg' /></div>
    //         <div className="feature-text5">
    //           <h4 className='text5' >Smart Chatbots & Virtual Assistants</h4>
    //           <p>Engage customers 24/7 with AI-driven conversations.</p>
    //         </div>
    //       </div>
    //       <div className="feature-card5">
    //         <div className="feature-icon5"><img src='/assets/graph-two.svg' /></div>
    //         <div className="feature-text5">
    //           <h4 className='text5'>Predictive Analytics</h4>
    //           <p>Make data-driven decisions with AI-powered insights.</p>
    //         </div>
    //       </div>
    //       <div className="feature-card5">
    //         <div className="feature-icon5"><img src='/assets/layer.svg' /></div>
    //         <div className="feature-text5">
    //           <h4 className='text5'>Computer Vision</h4>
    //           <p>AI that sees, detects, and understands images & videos.</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default HeroSection;
