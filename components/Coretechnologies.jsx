import React, { useEffect,useRef } from "react";
import "../public/styles/Coretechnologies.css";


const CoreTechnologies = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('.card5');
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);
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
    <section className="core-technologies">
      <div className="core-container">
        <div className="content8">
          <div ref={(el) => (fadeRefs.current[0] = el)} className="heading-container fadeInUp-animation">
            <h2 className="core">
              Core Technologies That<br />
              Power our <span className="highlight">AI Enterprise</span><br /> Solutions
            </h2>
            <p className="description">
              We develop premium AI-powered solutions that derive business growth
              while resolving business roadblocks. A comprehensive range of
              transformative AI & ML services customized to align with your
              business model.
            </p>
          </div>

          <div className="cards5">
            <div className="card5">
              <div className="icon2"><img src='/assets/bot.svg' /></div>
              <h3 className="core-text">Machine Learning</h3>
              <p className="core-para8">
                Get quality solutions that foster growth with our artificial intelligence and machine learning services. Our team employs appropriate machine-learning techniques to develop intelligent solutions that automate your business processes.
              </p>
            </div>
            <div className="card5">
              <div className="icon2"><img src='/assets/deep-learning.svg' /></div>
              <h3 className="core-text">Deep Learning</h3>
              <p className="core-para8">
                Enhance your business workflow with sophisticated enterprise AI solutions that are built on multi-layered neural networks and deep learning algorithms. We design solutions powered by AI and DL that can handle intricate tasks like data analysis.
              </p>
            </div>
            <div className="card5">
              <div className="icon2"><img src='/assets/Group (1).svg' /></div>
              <h3 className="core-text">Predictive Analytics</h3>
              <p className="core-para8">
                Make the most of the data and boost revenue using data-driven insights. Our experts are well-versed in various predictive analytics techniques, including regression analysis, decision trees, & neural networks with which they develop premium solutions.
              </p>
            </div>
          </div>

          <button className="expert-btn">Talk To An Expert</button>
        </div>

        <div className="video-background">
          <video autoPlay loop muted>
            <source src='/assets/core-tech-vid.mp4' type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default CoreTechnologies;
