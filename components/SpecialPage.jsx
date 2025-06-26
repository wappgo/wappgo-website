"use client";
import CountUp from 'react-countup';
import React, { useRef, useEffect, useState } from 'react';
import "../public/styles/Global.css";
import { useRouter } from 'next/navigation';
const SpecialPage = () => {
  const titleRef = useRef(null);
  const fadeRefs = useRef([]);
  const router = useRouter()
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
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    companies: 0,
    years: 0
  });

  // IntersectionObserver to trigger count
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // stop observing after trigger
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Manual Count Animation
  useEffect(() => {
    if (!startCount) return;

    let proj = 0, comp = 0, yrs = 0;

    const interval = setInterval(() => {
      proj += 5;
      comp += 10;
      yrs += 1;

      setCounts({
        projects: proj > 150 ? 150 : proj,
        companies: comp > 250 ? 250 : comp,
        years: yrs > 12 ? 12 : yrs
      });

      if (proj >= 150 && comp >= 250 && yrs >= 12) {
        clearInterval(interval);
      }
    }, 30); // slow enough to see it grow

    return () => clearInterval(interval);
  }, [startCount]);

  return (
    <>
      <div className='specail-container position-relative'>
        <div className="specail-video">
          {/* <video autoPlay loop muted className="video">
            <source src="/assets/rihgt-side.mp4" type="video/mp4" />
          </video> */}
          <div className="video-overlay-faq"></div>
        </div>
        <div ref={(el) => (fadeRefs.current[2] = el)} className='specail-content '>
          {/* fadeInUp-animation */}
          <div className='row align-items-center'>
            <div className='col-md-5'>
              <div className='specail-leftdiv' ref={sectionRef}>
                <img src="/assets/special-image.svg" className='img-fluid' />
                <div className='project-content'>
                  <div>
                    <h4>{counts.projects}+</h4>
                    <p>Projects Completed</p>
                  </div>
                  <div>
                    <h4>{counts.companies}+</h4>
                    <p>Leading Companies</p>
                  </div>
                  <div>
                    <h4>{counts.years}+</h4>
                    <p>Years of Experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-7'>
              <div className='special-rightdiv'>
                <h6 ref={(el) => (fadeRefs.current[0] = el)} className="fadeInUp-animation">Who are we?</h6>
                {/* <h4 ref={titleRef} className="animated-title">What makes us special?</h4> */}
                <h4 ref={titleRef} className="animated-title">
                  {
                    "What makes us special?".split(" ").map((word, wordIndex) => (
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
                </h4>
                <div ref={(el) => (fadeRefs.current[1] = el)} className="fadeInUp-animation">
                  <h5>A team of Passionate Designers, Awesome Creators & Professional Product Leads are always ready to build your dreams.</h5>
                  <p>We have assisted a wide range of clients, from small, emerging startups to large enterprise organizations, in developing products by simplicity and user-friendliness.</p>
                  <p>We seek the craziest ideas and eagerly wait to bring them into existence, the ideas that create an eternal difference. Let's start working on them and mend realities.</p>
                </div>
              </div>
              <button ref={(el) => (fadeRefs.current[2] = el)} className="common-btn mt-2" onClick={()=> router.push("/about")}>
                Know About Us
                <img src="/assets/loader.svg" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialPage;
