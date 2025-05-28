"use client";
import Image from "next/image";
import React, { useRef, useEffect } from 'react';
import "../public/styles/Service.css";
const Services = () => {
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
    <>
      <section ref={(el) => (fadeRefs.current[0] = el)} className="service-container-main fadeInUp-animation">
        <div className="service-container-top">
          <div className="service-container">
            <article className="service-items-wrapper">
              <h4 ref={(el) => (fadeRefs.current[1] = el)} className="fadeInUp-animation">Our Services</h4>
              {/* <h1>Turn visionary concepts into tangible 
            <br/>
            products ready for use.</h1> */}
              <h1 className="animated-title" ref={titleRef}>
                {
                  [
                    "Turn", "visionary", "concepts", "into", "tangible",
                    "<br/>",
                    "products", "ready", "for", "use."
                  ].map((word, wordIndex) => {
                    if (word === "<br/>") {
                      return <br key={wordIndex} />;
                    }

                    return (
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
                    );
                  })
                }
              </h1>

              {/* <h1 ref={titleRef} className="animated-title">
              {
                "Turn visionary concepts into tangible products ready for use.".split(" ").map((word, wordIndex) => (
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
            </h1> */}
              <p>
                Whether you need a full IT team or specialized consultation, Wappgo
                can help.
              </p>
              <div className="row">
                <div className="col-xxl-5">
                  <div className="service-item">
                    <h2>
                      <span>01</span>
                      Managed IT Services
                    </h2>
                    <img src="/assets/arrow-down.svg" />
                  </div>
                  <div className="service-item">
                    <h2>
                      <span>02</span>
                      Cyber Security
                    </h2>
                    <img src="/assets/arrow-down.svg" />
                  </div>
                  <div className="service-item">
                    <h2>
                      <span>03</span>
                      Marketing Solutions
                    </h2>
                    <img src="/assets/arrow-down.svg" />
                  </div>
                </div>
                <div className="col-xxl-2"></div>
                <div className="col-xxl-5">
                  <div className="service-item">
                    <h2>
                      <span>04</span>
                      Legal Services
                    </h2>
                    <img src="/assets/arrow-down.svg" />
                  </div>
                  <div className="service-item">
                    <h2>
                      <span>05</span>
                      UI/UX Design Services
                    </h2>
                    <img src="/assets/arrow-down.svg" />
                  </div>
                  <div className="service-item">
                    <h2>
                      <span>06</span>
                      Content Solutions
                    </h2>
                    <img src="/assets/arrow-down.svg" />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      {/* <AboutComponent /> */}
    </>
  );
};

export default Services;

// export const AboutComponent = () => {
//   return (
//     <section className="about-container">
//       <div className="row">
//         <div className="col-xl-6">
//           <img src="/assets/abtImg.svg" height="100%" width="100%" />
//         </div>
//         <div className="col-xl-1"></div>
//         <div className="col-xl-5">
//           <div className="pt-3 pl-3">
//             <div className="about-texts">
//               <p>
//                 For over 05 years, we’ve provided vital IT support for our
//                 clients
//               </p>
//               <div className="btn-container">
//               <Button />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

export const Button = ({ text, btnStyle }) => {
  return (
    <button style={btnStyle} className="common-btn">
      {text ? text : "Know About Us"}{" "}
      <img src={btnStyle ? "/assets/form-loader.svg" : "/assets/loader.svg"} />
    </button>
  );
};
