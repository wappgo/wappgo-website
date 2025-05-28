"use client";
import React, { useRef, useEffect } from 'react';
const FaqSection = () => {
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
      <div className='faq-container2'>
        <div className='container specail-content'>
          <div className='row justify-content-between'>
            <div className='col-lg-4 col-md-4'>
              <div ref={(el) => (fadeRefs.current[3] = el)} className='faq-leftdiv2 fadeInUp-animation'>
                <img src="/assets/Rectangle-faq.svg" className='img-fluid' />
                <p>Excited to collaborate with us but have some questions? We’ve compiled the most common ones for you. If there’s anything more specific you’d like to ask, we’re always here to help. Feel free to <span className='highlight-text'>reach out!</span> </p>
                <h4 className='highlight-text2'
                  style={{ textDecoration: "none" }}
                >Kanhiya Sharma, CEO & Founder, Wappgo</h4>
              </div>
            </div>
            <div className='col-lg-7 col-md-7'>
              <div className='faq-rightdiv2'>
                {/* <h6>FOR CURIOUS MINDS</h6> */}
                {/* <div className='questiondiv2'>
                                    <h5>Frequently</h5>
                                    <h5 className='askeddiv2'><span className='asked-text2'>ASKED</span> Questions</h5>
                                </div> */}
                <div ref={(el) => (fadeRefs.current[2] = el)} className="questiondiv2 fadeInUp-animation">
                  <h5>Frequently</h5>
                  <h5 className="askeddiv2">
                    asked<span className="asked-text2"> Questions </span>
                  </h5>
                </div>

                {/* <div className='faq-accordian2'>
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
                                </div> */}
                <div ref={(el) => (fadeRefs.current[1] = el)} className="faq-accordian2 fadeInUp-animation">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                          01 How can I be certain of the progress in my project development?
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          Content for question 1 goes here...
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                          02 Will I be served with both design and development services?
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          Content for question 2 goes here...
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                          03 How will I get to know about the status of my project?
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          Content for question 3 goes here...
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                          04 Which is the best? Dedicated developer or fixed cost project.
                        </button>
                      </h2>
                      <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          Content for question 4 goes here...
                        </div>
                      </div>
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
