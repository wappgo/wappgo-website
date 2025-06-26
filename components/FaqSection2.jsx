"use client";
import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from "react-icons/fa";
const accordionData = [
  {
    title: " How can I be certain of the progress in my project development?",
    content:
      " Wappgo provides complete transparency throughout the project lifecycle. Our dedicated project manager ensures that you have the most up-to-date data and visibility via emails, reports, or phone calls. They will plan time-to-time meetings and let you know about the progress of your project",
  },
  { title: " What is the requirement document?", content: "A requirement document is a document containing all the requirements for a certain product. It is written to allow people to understand what a product should do. Starting from your home page to all the functionality that you want in your product. Requirement Document helps us to understand your needs & it also helps you in having the right vision related to your product" },
  { title: " What payment method we prefer?", content: " We prefer Bank Wire Transfers & Cheque as well." },
  { title: "Which is the best option? hiring a dedicated developer or fixed cost project", content: "Fixed cost project is suitable when you need a perfect team for handling all of the Information Technology parts for you .!! whereas hiring developers gives you complete control over your resource and they will work as per your commands daily. So if you or your team have good knowledge in the IT domain and can plan the development process well then go for dedicated developers else a fixed-cost project is the best fit for you" },
];
const FaqSection = () => {
  const fadeRefs = useRef([]);
  const [openIndex, setOpenIndex] = useState();
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
                <div ref={(el) => (fadeRefs.current[2] = el)} className="questiondiv2 fadeInUp-animation">
                  <h5>Frequently</h5>
                  <h5 className="askeddiv2">
                    asked<span className="asked-text2"> Questions </span>
                  </h5>
                </div>
                <div ref={(el) => (fadeRefs.current[1] = el)} className="faq-accordian2 fadeInUp-animation">
                  {/* <div className="accordion" id="accordionExample">
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
                  </div> */}
                  <div className="accordion">
                    {accordionData.map((item, index) => (
                      <div key={index} className="aidiveaccordian py-3 px-2 mb-3">
                        <div className="d-flex justify-content-between" onClick={() => toggleAccordion(index)}>
                          <h5 className='text-white text-base m-0'>{item.title}</h5>
                          <FaChevronDown className={`arrow text-white transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                            }`} />
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
        </div>
      </div>
    </>
  );
};

export default FaqSection;
