"use client";
import React, { useState, useEffect, useRef } from 'react';
const FaqSection = () => {
    // const fadeRefs = useRef([]);
    // const titleRef = useRef(null);

    // useEffect(() => {
    //   const observer = new IntersectionObserver(
    //     (entries) => {
    //       entries.forEach((entry) => {
    //         if (entry.isIntersecting) {
    //           entry.target.classList.add('animate');
    //         } else {
    //           entry.target.classList.remove('animate');
    //         }
    //       });
    //     },
    //     { threshold: 0.5 }
    //   );

    //   const titleEl = titleRef.current;
    //   if (titleEl) observer.observe(titleEl);

    //   // Observe both fade elements (h6 and p)
    //   fadeRefs.current.forEach((el) => {
    //     if (el) observer.observe(el);
    //   });

    //   return () => {
    //     if (titleEl) observer.unobserve(titleEl);
    //     fadeRefs.current.forEach((el) => {
    //       if (el) observer.unobserve(el);
    //     });
    //   };
    // }, []);
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
        <>
            <div className=' faq-container'>
                <div className='specail-content'>
                    <div className='row justify-content-between'>
                        <div className='col-lg-4 col-md-4'>
                            <div ref={(el) => (fadeRefs.current[3] = el)} className='faq-leftdiv fadeInUp-animation'>
                                <img src="/assets/Rectangle-faq.svg" className='img-fluid' />
                                <p>Excited to collaborate with us but have some questions? We’ve compiled the most common ones for you. If there’s anything more specific you’d like to ask, we’re always here to help. Feel free to <span className='highlight-text'>reach out!</span> </p>
                                <h4 className='highlight-text'
                                    style={{ textDecoration: "none" }}
                                >Kanhiya Sharma, CEO & Founder, Wappgo</h4>
                            </div>
                        </div>
                        <div className='col-lg-7 col-md-7'>
                            <div className='faq-rightdiv position-relative'>
                                {/* <div className="faq-videodiv">
                                    <video autoPlay loop muted className="video">
                                        <source src="public\assets\faq-section.mp4" type="video/mp4" />
                                    </video>
                                    <div className="video-overlay-faq"></div>
                                </div> */}
                                <div className="faq-videodiv">
                                    <video autoPlay loop muted className="video">
                                        <source src="/assets/faq-sectiona.mp4" type="video/mp4" />
                                    </video>
                                    <div className="video-overlay-faq"></div>
                                </div>
                                <h6 ref={(el) => (fadeRefs.current[0] = el)} className="fadeInUp-animation">FOR CURIOUS MINDS</h6>
                                <div ref={(el) => (fadeRefs.current[1] = el)} className='questiondiv fadeInUp-animation'>
                                    <h5>Frequently</h5>
                                    <h5 className='askeddiv'><span className='asked-text'>ASKED</span> Questions</h5>
                                </div>
                                <div ref={(el) => (fadeRefs.current[2] = el)} className='faq-accordian fadeInUp-animation'>
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    01 How can I be certain of the progress in my project development?
                                                </button>
                                            </h2>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    02 Will I be served with both design and development services?
                                                </button>
                                            </h2>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    03 How will I get to know about the status of my project?
                                                </button>
                                            </h2>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    04 Which is the best? Dedicated developer or fixed cost project.
                                                </button>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqSection;
