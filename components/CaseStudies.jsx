"use client";
import React, { useEffect, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from 'next/link';
export default function CaseStudies() {
    // const titleRef = useRef(null);

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach((entry) => {
    //                 if (entry.isIntersecting) {
    //                     entry.target.classList.add('animate');
    //                 } else {
    //                     entry.target.classList.remove('animate');
    //                 }
    //             });
    //         },
    //         { threshold: 0.5 }
    //     );

    //     const el = titleRef.current;
    //     if (el) {
    //         observer.observe(el);
    //     }

    //     return () => {
    //         if (el) observer.disconnect();
    //     };
    // }, []);

    // const fadeRefs = useRef([]);

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

    //   fadeRefs.current.forEach((el) => {
    //     if (el) observer.observe(el);
    //   });

    //   return () => {
    //     fadeRefs.current.forEach((el) => {
    //       if (el) observer.unobserve(el);
    //     });
    //   };
    // }, []);
    const titleRef = useRef(null);
    const fadeRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                        observer.unobserve(entry.target); // 👈 Unobserve after first trigger
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
                        entry.target.classList.add("animate");
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

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2.5, // Default
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerPadding: "50px",
        responsive: [
            {
                breakpoint: 1540,
                settings: {
                    slidesToShow: 2.5,
                    centerPadding: "50px"
                },

                breakpoint: 1440,
                settings: {
                    slidesToShow: 2.,
                    centerPadding: "50px"
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1.5,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };


    return (
        <>
            <div className='questiondiv case-container'>

                <h6 ref={(el) => (fadeRefs.current[0] = el)} className='comman-title text-center fadeInUp-animation'>Case Studies</h6>
                {/* <h5  className='text-center'>
                    Real Success Stories, <span className='real-text'>Real Impact</span>
                </h5> */}
                {/* <h5 className='text-center'>
                        Real Success Stories, <span className='real-text'>Real Impact</span>
                    </h5> */}
                <div className='animated-wrapper'>
                    <h5 ref={titleRef} className="text-center animated-title">
                        {/* First line: Real Success Stories */}
                        {["Real", "Success", "Stories,"].map((word, wordIndex) => (
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
                        ))}
                        {["Real", "Impact"].map((word, wordIndex) => (
                            <span key={wordIndex + 10} className="word real-text">
                                {[...word].map((char, charIndex) => (
                                    <span
                                        key={charIndex}
                                        style={{ '--i': (wordIndex + 3) * 10 + charIndex + 1 }}
                                    >
                                        {char}
                                    </span>
                                ))}
                                <span>&nbsp;</span>
                            </span>
                        ))}
                    </h5>


                </div>


                <div ref={(el) => (fadeRefs.current[1] = el)} className="slider-wrapper mt-5 fadeInUp-animation">
                    <Slider {...settings}>
                        <Link href="/caseinner" passHref>
                            <div className="carousel-slide">
                                <div className='thelal-container'>
                                    <div className='d-flex justify-content-between'>
                                        <div className=''>
                                            <div className='thelal-leftidv'>
                                                <img src="/assets/thelal-logo.svg" />
                                                <div className='thelal-leftidv-inside thelal-leftidv-inside2'>
                                                    <h6>TheLAL</h6>
                                                    <p>AI based Broker oriented property buying selling renting and investment app.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mobiledivthelal'>
                                            <img src="/assets/thelal-mab.svg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <div className="carousel-slide">
                            <div className='accounty-container'>
                                <div className='d-flex justify-content-between'>
                                    <div className=''>
                                        <div className='position-relative'
                                            style={{
                                                height: "310px"
                                            }}
                                        >
                                            <img src="/assets/account-logo.svg" />
                                            <div className='thelal-leftidv-inside thelal-leftidv-inside2'>
                                                <h6>Accounty.AI</h6>
                                                <p>AI based Book Keeping and Accounting Software available for you 24x7.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='accounty-leftidv-inside'>
                                        <img src="/assets/accounty-mob.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link href="/gis-study" passHref>
                            <div className="carousel-slide">
                                <div className='gis-container'>
                                    <div className='row justify-content-between'>
                                        <div className='col-md-12'>
                                            <div className='row align-items-center justify-content-between'>
                                                <div className='col-6'>
                                                    <img src="/assets/gis-logo.svg" />
                                                </div>
                                                <div className='col-6'>
                                                    <div className='thelal-leftidv-inside m-0'>
                                                        <p className='case-text-p'>AI based MP Govt. GIS portal Project for urban development planning.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-12'>
                                            <div className='mt-4 d-flex justify-content-center'>
                                                <img src="/assets/gis-case-study.svg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <div className="carousel-slide">
                            <div className='policys-container'>
                                <div className='row justify-content-between'>
                                    <div className='col-md-12'>
                                        <div className='row align-items-center justify-content-between'>
                                            <div className='col-6'>
                                                <img src="/assets/policys-logo.svg" />
                                            </div>
                                            <div className='col-6'>
                                                <div className='thelal-leftidv-inside m-0'>
                                                    <p className='case-text-p'>Growth Engine for policy innovation and political advancement.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-12 text-center'>
                                        <div className='mt-4 d-flex justify-content-center'>
                                            <img src="/assets/policys-website-ss.svg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className='d-flex justify-content-center start-btndiv mt-5'>
                    <button className="start-btn " >
                        View all case studies
                        <img src="/assets/btn-icon.svg" />
                    </button>
                </div>
            </div>
            <div className='questiondiv case-container'>
                {/* <h6 className='comman-title text-center'>Case Studies</h6>
                <h5 className='text-center'>
                    Real Success Stories, <span className='real-text'>Real Impact</span>
                </h5> */}
                {/* <div className='case-studies-cards'>
                <div className='main'>

                    <div className='case-card'>
                        <img src="/assets/maxresdefault.svg" alt="Case Study 1" />
                        <div className='content'>
                            <h6>TheLAL - Broker Oriented Real Estate App</h6>
                            <p>In this video I will answer all these above questions! Give you the plan how to move forward for generating and converting leads to potential customers.
                                Thank you.</p>
                        </div>
                    </div>


                    <div className='case-card'>
                        <img src="/assets/maxresdefault-gis.svg" alt="Case Study 2" />
                        <div className='content'>
                            <h6>Garud MP - AI GIS Software</h6>
                            <p>In this video I will discuss how to get good ideas to start business ! What are the habits that I adopted to get good ideas. I discussed the things that you can follow to get good ideas for business.</p>
                        </div>
                    </div>


                    <div className='case-card'>
                        <img src="/assets/maxresdefault-account.svg" alt="Case Study 3" />
                        <div className='content'>
                            <h6>Accounty.ai - AI based Book Keeping Software</h6>
                            <p>In this video I will discuss how to start business in 2023! Right from Process, Team Building, Legalities, Execution this video covers all. Hope you find this video helpful and meaningful for you.  </p>
                        </div>
                    </div>

                </div>
            </div> */}
                <div className='row'>
                    {/* <div className='col-md-5'>
                        <div className='thelal-container'>
                            <div className='row justify-content-between'>
                                <div className='col-md-4'>
                                    <div className='thelal-leftidv'>
                                        <img src="/assets/thelal-logo.svg" />
                                        <div className='thelal-leftidv-inside'>
                                            <h6>TheLAL</h6>
                                            <p>AI based Broker oriented property buying selling renting and investment app.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='mt-4'>
                                        <img src="/assets/thelal-mab.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <div className='accounty-container'>
                            <div className='row justify-content-between'>
                                <div className='col-md-4'>
                                    <div className='thelal-leftidv'>
                                        <img src="/assets/account-logo.svg" />
                                        <div className='thelal-leftidv-inside'>
                                            <h6>Accounty.AI</h6>
                                            <p>AI based Book Keeping and Accounting Software available for you 24x7.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='mt-4'>
                                        <img src="/assets/accounty-mob.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className='col-md-5'>
                        <div className='gis-container'>
                            <div className='row justify-content-between'>
                                <div className='col-md-12'>
                                    <div className='thelal-leftidv d-flex align-items-center justify-content-between'>
                                        <img src="/assets/gis-logo.svg" />
                                        <div className='thelal-leftidv-inside m-0'>
                                            <p>AI based MP Govt. GIS portal Project for urban development planning.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-12 text-center'>
                                    <div className='mt-4'>
                                        <img src="/assets/gis-case-study.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <div className='policys-container'>
                            <div className='row justify-content-between'>
                                <div className='col-md-12'>
                                    <div className='thelal-leftidv d-flex align-items-center justify-content-between'>
                                        <img src="/assets/policys-logo.svg" />
                                        <div className='thelal-leftidv-inside m-0'>
                                            <p>Growth Engine for policy innovation and political advancement.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-12 text-center'>
                                    <div className='mt-4'>
                                        <img src="/assets/gis-case-study.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>

            </div>
        </>
    );
}
