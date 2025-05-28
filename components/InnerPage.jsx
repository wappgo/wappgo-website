"use client";
import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import { useRouter } from "next/navigation";
export default function InnerPage() {
    const fadeRefs = useRef([]);
    const router = useRouter();
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
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        const cards = document.querySelectorAll('.feature-card');
        cards.forEach((card) => observer.observe(card));

        return () => {
            cards.forEach((card) => observer.unobserve(card));
        };
    }, []);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        const cards = document.querySelectorAll('.project-card');
        cards.forEach((card) => observer.observe(card));

        return () => {
            cards.forEach((card) => observer.unobserve(card));
        };
    }, []);
    const projects = [
        {
            title: 'Garud MP',
            description: 'AI based MP Govt. GIS portal Project for urban development planning.',
            tags: ['Research', 'Artificial Intelligence', 'Development', 'Design'],
            image: "/assets/maxresdefault-gis.svg",
            likeLink: "/gis-study"
        },
        {
            title: 'Accounty.AI',
            description: 'AI based Book Keeping and Accounting Software available for you 24x7.',
            tags: ['Artificial Intelligence', 'Research', 'Development', 'Design'],
            image: "/assets/graud.svg",
            likeLink: "/accountyai-study"
        },
        {
            title: 'TheLAL',
            description: 'AI based Broker oriented property buying selling renting and investment app.',
            tags: ['Artificial Intelligence', 'Research', 'Development', 'Design'],
            image: "/assets/maxresdefault.svg",
            likeLink: "/caseinner"
        },
        {
            title: 'Polisys',
            description: 'Growth Engine for policy innovation and political advancement.',
            tags: ['Research', 'Development'],
            image: "/assets/poly.svg"
        },
    ];
    return (
        <>
            <div className="case-study-hero">
                <div className="container2">
                    <div className="row align-items-center">
                        <div className="col-md-6 slide-in-left">
                            <h2 className="case-study-title">
                                <span className="case-study-highlight">Case Study:</span> TheLaL –<br />
                                Revolutionizing Real Estate with AI-Driven Insights
                            </h2>
                            <div className="d-flex flex-wrap gap-2 mt-3">
                                <span className="case-study-badge">Research</span>
                                <span className="case-study-badge">Artificial Intelligence</span>
                                <span className="case-study-badge">Development</span>
                                <span className="case-study-badge">Design</span>
                            </div>
                            <div className="case-study-overview mt-4">
                                <h5 className="case-study-overview-title">PROJECT OVERVIEW</h5>
                                <p>
                                    TheLaL is a comprehensive real estate platform designed to streamline property
                                    transactions and fractional investments in the Indian and Dubai markets. With a
                                    vision to simplify real estate investments, TheLaL integrates AI-driven insights
                                    to offer a seamless, data-backed user experience.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center slide-in-right ">
                            <Image
                                src="/assets/case-studies-mobile.svg"
                                alt="Phone"
                                width={440}
                                height={552}
                                className="case-study-phone"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div ref={(el) => (fadeRefs.current[0] = el)} className="project-scope-section fadeInUp-animation">
                <div className="row align-items-center justify-content-center gisoscope-right"
                style={{rowGap:"20px"}}>
                    <div className="col-xxl-5 col-xl-6 col-lg-12">
                        <img  src="/assets/project-scope.svg" alt='the-lal' className='project-scope-img'/>
                    </div>

                    <div className="col-xxl-5 col-xl-5 col-lg-12">
                        <h3 className="project-scope-title">PROJECT SCOPE</h3>
                        <p className="project-scope-text">
                            Design and develop a robust application for both web and mobile platforms, ensuring seamless
                            performance across devices. Integrate AI-driven data analytics to provide users with accurate
                            and insightful market information. Build a scalable backend architecture to handle extensive property data,
                            user interactions, and secure transactions. Develop and implement an AI-powered query system
                            for real-time, intelligent responses to real estate inquiries. Create a user-friendly, modern
                            interface that caters to both novice and experienced real estate investors.
                        </p>
                        <p className="project-scope-text">
                            Design a user-friendly, modern interface that caters to both novice and experienced real estate investors.
                            Integrate an AI-powered query system to provide accurate, data-driven insights to users.
                            Develop detailed user personas, journey maps, and prototypes for both web and mobile platforms.
                            Create a responsive and accessible design, ensuring scalability for future expansions.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container feature-section2">
                <div className="row gx-lg-4">
                   
                    <div className="col-md-5 col-lg-6">
                       
                        <h5 ref={(el) => (fadeRefs.current[1] = el)} className="feature-title fadeInUp-animation">RESEARCH AND ANALYSIS</h5>
                        <div className="feature-card feature-card-purple">
                            <div className="feature-card-icon">
                                <img src="/assets/research.svg" alt="Research Icon" />
                            </div>
                            <ul className="feature-card-list mt-4" style={{ listStyleType: 'disc', color: 'black' }}>
                                <li>Conducted in-depth market research to understand the needs, pain points, and expectations of real estate investors.</li>
                                <li>Analyzed competitor platforms to identify gaps and opportunities.</li>
                                <li>Collaborated with stakeholders to define project goals, technical requirements.</li>
                            </ul>
                        </div>

                    
                        <h5 ref={(el) => (fadeRefs.current[2] = el)} className="feature-title fadeInUp-animation">AI-DRIVEN INSIGHTS</h5>
                        <div className="feature-card feature-card-purple">
                            <div className="feature-card-icon">
                                <img src="/assets/intelligence.svg" alt="AI Icon" />
                            </div>
                            <ul className="feature-card-list mt-4">
                                <li>Designed and integrated an AI-powered query interface, allowing users to ask real estate-related questions and receive intelligent, data-backed responses.</li>
                                <li>Implemented machine learning models for property price predictions, market insights, and investment analysis.</li>
                            </ul>
                        </div>

                        
                        <h5 ref={(el) => (fadeRefs.current[3] = el)} className="feature-title fadeInUp-animation">TESTING AND QUALITY ASSURANCE</h5>
                        <div className="feature-card feature-card-purple mt-4">
                            <div className="feature-card-icon">
                                <img src="/assets/check.svg" alt="Testing Icon" />
                            </div>
                            <ul className="feature-card-list">
                                <li>Conducted multiple rounds of usability testing, A/B testing, and functional testing to ensure a flawless user experience.</li>
                                <li>Conducted in-depth market research to understand the needs, pain points, and expectations of real estate investors.</li>
                                <li>Collaborated with stakeholders to define project goals and prioritize features.</li>
                            </ul>
                        </div>
                    </div>

                   
                    <div className="col-md-6 col-lg-6">
                       
                        <h5 ref={(el) => (fadeRefs.current[4] = el)} className="feature-title fadeInUp-animation">TECHNICAL ARCHITECTURE AND AI INTEGRATION</h5>
                        <div className="feature-card feature-card-purple mt-4">
                            <div className="feature-card-icon">
                                <img src="/assets/artificial-intelligence.svg" alt="Tech Icon" />
                            </div>
                            <ul className="feature-card-list mt-3">
                                <li>Designed a secure and scalable backend architecture using modern technologies to handle high traffic and secure transactions.</li>
                                <li>Developed an AI-powered recommendation engine.</li>
                                <li>Implemented AI-driven chat functionality for real-time, intelligent user support.</li>

                            </ul>
                        </div>

                     
                        <div ref={(el) => (fadeRefs.current[5] = el)} className="col-md-5 text-center fadeInUp-animation">
                            <Image
                                src="/assets/pixel-true-mockup-two.svg"
                                alt="Mockup"
                                width={350}
                                height={700}
                                className="feature-mockup"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <section className="outcome-section">
                <div ref={(el) => (fadeRefs.current[6] = el)} className="fadeInUp-animation">
                    <div className='row align-items-center justify-content-center gisoscope-right'
                     style={{rowGap:"20px"}}
                    >
                        <div className="col-xxl-5 col-xl-5 col-lg-5">
                            <img src="/assets/pixel-true-mockup.svg" alt="Mobile Mockup" width="100%" height="100%"/>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <h2 className="outcome-title">OUTCOME AND IMPACT</h2>
                            <ul className="outcome-list">
                                <li>Successfully developed a fully functional, AI-integrated web and mobile application, revolutionizing property transactions in the target markets.</li>
                                <li>Improved user engagement and satisfaction through a seamless, data-driven interface and intelligent insights.</li>
                                <li>Enhanced decision-making capabilities for users through AI-powered analytics, boosting investor confidence.</li>
                                <li>Onboarded brokers and property consultants effectively, expanding the user base and market reach.</li>
                                <li>Achieved a high level of data security, maintaining user trust and platform credibility.</li>
                                <li>Improved user engagement through a seamless, data-driven interface.</li>
                                <li>Enhanced decision-making for users through AI-driven insights.</li>
                                <li>Successful onboarding of brokers and property consultants, expanding the user base.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="get-in-touch-container2 ">
                {/* Centered Heading and Description */}
                <div className="heading-section">
                    <h2>
                        Our Case Studies
                    </h2>

                </div>
            </div>
            <div className="container project-showcase mt-5">
                <div className="row"> {/* Removed gx-2 as we're handling it in CSS */}
                    {projects.map((project, index) => (
                        <div key={index} className="col-md-6 mb-4 d-flex"> {/* Added d-flex */}
                            <div onClick={(e) => {
                                e.stopPropagation(); // Prevent triggering parent card click
                                if (project.likeLink) {
                                    router.push(project.likeLink);
                                }
                            }} style={{ cursor: project.likeLink ? 'pointer' : 'not-allowed' }} className="card project-card w-100"> {/* Added w-100 */}
                                <Image
                                    src={project.image || '/default-image.png'}
                                    alt={project.title}
                                    width={636}
                                    height={300}
                                    className="card-img-top2"
                                />
                                <div className="card-body2 mb-4">
                                    <h5 className="card-title3">{project.title}</h5>
                                    <p className="card-text3">{project.description}</p>
                                    <div className="d-flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="tag-badge">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}