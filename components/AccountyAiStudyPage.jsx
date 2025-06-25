"use client";
import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import Partners from './Partners';
import { useRouter } from "next/navigation";
export default function AccountyAiStudyPage() {
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
            <div className="case-study-accounty">
                <div>
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xxl-6  col-xl-6 col-lg-12 col-md-12 slide-in-left">
                            <h2 className="case-study-title">
                                <span className="case-study-highlight highlight-accounty">Case Study:</span> Accounty
                                AI Powered Business Accounting for India's <br /> MSMEs
                            </h2>
                            <div className="d-flex flex-wrap gap-2 mt-3">
                                <span className="case-study-badge">Research</span>
                                <span className="case-study-badge">Artificial Intelligence</span>
                                <span className="case-study-badge">Development</span>
                                <span className="case-study-badge">Design</span>
                            </div>
                            <div className="case-study-overview mt-4">
                                <h5 className="case-study-overview-title highlight-accounty">PROJECT OVERVIEW</h5>
                                <p>
                                    Accounty is a next-generation business accounting software designed specifically for India’s vast network of Micro, Small, and Medium Enterprises (MSMEs). Taking inspiration from popular platforms like Vyapar, Accounty reimagines traditional billing and accounting by integrating Artificial Intelligence (AI) to deliver intelligent financial insights, smart automation, and seamless compliance.
                                </p>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 account-hero-right text-xxl-end">
                            <img src="/assets/account-group.svg" alt='accounty' />
                        </div>
                    </div>
                </div>
            </div>
            <Partners />
            <div ref={(el) => (fadeRefs.current[0] = el)} className="project-scope-section fadeInUp-animation">
                <div className="row align-items-center justify-content-center gisoscope-right"
                style={{rowGap:"20px"}}
                >
                    <div className="col-xxl-5 col-xl-5 col-lg-6 text-xxl-center">
                        <div className='accountimgdiv'>
                            <img src="/assets/account-voice-chat.svg" alt="Voice-chat" className='account-voice-chat'/>
                            <img src="/assets/account-phone.svg" alt="phone" />
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-5">
                        <h3 className="project-scope-title">PROJECT SCOPE</h3>
                        <p className="project-scope-text">
                            The scope of the Accounty project encompasses the design, development, deployment, and continuous enhancement of a smart, AI-integrated accounting and business management platform tailored for India’s micro, small, and medium enterprises (MSMEs). The project aims to provide a mobile-first, user-friendly solution for core business functions such as billing, invoicing, inventory management, GST compliance, expense tracking, and financial reporting.
                        </p>
                        <p className="project-scope-text">
                            At its core, Accounty differentiates itself through the integration of Artificial Intelligence (AI) to deliver real-time insights, automated forecasts, anomaly detection, intelligent reminders, and a conversational AI chatbot for seamless user interaction. The platform will support multiple user roles, industries, and regional languages to ensure accessibility and scalability across urban and rural markets.
                        </p>
                    </div>
                </div>
            </div>

            <div className="gisobjective-right">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5 col-md-6 px-2">
                        <h5 ref={(el) => (fadeRefs.current[1] = el)} className="feature-title fadeInUp-animation">Objectives</h5>
                        <div className="feature-card feature-card-purple">
                            <div className="feature-card-icon">
                                <img src="/assets/research.svg" alt="Research Icon" />
                            </div>
                            <ul className="feature-card-list mt-4" style={{ listStyleType: 'disc', color: 'black' }}>
                                <li>To provide an intuitive and efficient billing and accounting platform tailored for Indian SMEs and retailers</li>
                                <li>To leverage AI for real-time financial insights, forecasting, and automation</li>
                                <li>To simplify GST compliance, invoicing, and inventory management</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 px-2">
                        <h5 ref={(el) => (fadeRefs.current[4] = el)} className="feature-title fadeInUp-animation">Challenges Overcome</h5>
                        <div className="feature-card feature-card-purple mt-4">
                            <div className="feature-card-icon">
                                <img src="/assets/perseverance.svg" alt="Tech Icon" />
                            </div>
                            <ul className="feature-card-list mt-3">
                                <li>Lack of digital fluency among small business owners</li>
                                <li>Manual accounting errors and data loss risks</li>
                                <li>Limited cash flow visibility and unpredictable expenses</li>
                                <li>Complex tax filing process without a dedicated accountant</li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-lg-5 col-md-6 px-2">
                        <h5 ref={(el) => (fadeRefs.current[2] = el)} className="feature-title fadeInUp-animation">Key Features & Tools</h5>
                        <div className="feature-card feature-card-purple">
                            <div className="feature-card-icon">
                                <img src="/assets/intelligence.svg" alt="AI Icon" />
                            </div>
                            <ul className="feature-card-list mt-4">
                                <li>AI-Driven Insightsl</li>
                                <li>Smart Billing & Invoicin</li>
                                <li>Inventory & Stock Managemen</li>
                                <li>Tax Compliance</li>
                                <li>Reports & Dashboards</li>
                                <li>AI Chat Assistant – “Accounty Bot”</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 px-2">
                        <div className='position-relative'>
                            <div ref={(el) => (fadeRefs.current[5] = el)} className="col-md-5 d-flex align-items-center fadeInUp-animation accounty-objective-left">
                                <img src="/assets/account-phonegroup.svg" alt='accounty' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="outcome-section outcome-section-gis">
                <div ref={(el) => (fadeRefs.current[6] = el)} className="fadeInUp-animation">
                    <div className='row justify-content-between align-items-center'
                    style={{rowGap:"20px"}}
                    >
                        <div className='col-xxl-5 col-xl-7 col-lg-12 col-md-12'>
                            <div className='accounty-objective-left'>
                                <img src="/assets/account-outcome.svg" alt="outcome"  />
                            </div>
                        </div>
                        <div className='col-xxl-6 col-xl-5 col-lg-12 col-md-12'>
                            <div>
                                <h3 className="project-scope-title">PROJECT SCOPE</h3>
                                <p className="project-scope-text">
                                    The implementation of Accounty has significantly transformed how India’s MSMEs manage their financial operations, resulting in measurable improvements in efficiency, compliance, and business decision-making. By integrating AI-driven automation into everyday accounting tasks, Accounty has helped users reduce manual bookkeeping errors by over 60%, while automating up to 70% of routine financial activities such as invoice generation, expense categorization, and payment follow-ups.
                                </p>
                                <p className="project-scope-text">
                                    Users have reported a 40% increase in cash flow visibility, thanks to real-time dashboards and AI-powered cash flow forecasts. GST return filings have become more accurate and timely, with over 95% of users successfully submitting error-free returns without needing external accountants.
                                </p>
                                <p className="project-scope-text">
                                    Overall, Accounty has not only streamlined compliance and reporting but has empowered small business owners to make smarter, data-backed decisions—boosting growth, reducing stress, and enabling a stronger, more digitally confident entrepreneurial ecosystem.
                                </p>
                            </div>
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