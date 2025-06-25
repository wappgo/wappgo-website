"use client";
import React, { useState, useEffect, useRef } from 'react';
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
    const [openIndex, setOpenIndex] = useState(0);
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
                                        <source src="/assets/faq-sectiona.mp4" type="video/mp4" />
                                    </video>
                                    <div className="video-overlay-faq"></div>
                                </div> */}
                                <h6 ref={(el) => (fadeRefs.current[0] = el)} className="fadeInUp-animation">FOR CURIOUS MINDS</h6>
                                <div ref={(el) => (fadeRefs.current[1] = el)} className='questiondiv fadeInUp-animation'>
                                    <h5>Frequently</h5>
                                    <h5 className='askeddiv'><span className='asked-text'>ASKED</span> Questions</h5>
                                </div>
                                <div ref={(el) => (fadeRefs.current[2] = el)} className='faq-accordian fadeInUp-animation'>
                                    {accordionData.map((item, index) => (
                                        <div key={index} className="accordion-item">
                                            <div className="d-flex justify-content-between mt-3" onClick={() => toggleAccordion(index)}>
                                                <h5 className='text-black text-base'>{item.title}</h5>
                                                <FaChevronDown className={`arrow transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                                    }`} />
                                            </div>

                                            {openIndex === index && (
                                                <p className="text-black mt-2">{item.content}</p>
                                            )}
                                        </div>
                                    ))}
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
