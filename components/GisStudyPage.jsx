"use client";
import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import Partners from './Partners';
import { useRouter } from "next/navigation";
export default function GisStudyPage() {
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
            title: 'Garud MP1',
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
            <div className="case-study-gis">
                <div className="">
                    <div className="row align-items-center">
                        <div className="col-xxl-6 col-xl-12 slide-in-left">
                            <h2 className="case-study-title">
                                <span className="case-study-highlight highlight-gis">Case Study:</span> GIS Garud MP –<br />
                                Pioneering Urban Data Intelligence in Madhya Pradesh
                            </h2>
                            <div className="d-flex flex-wrap gap-2 mt-3">
                                <span className="case-study-badge">Research</span>
                                <span className="case-study-badge">Artificial Intelligence</span>
                                <span className="case-study-badge">Development</span>
                                <span className="case-study-badge">Design</span>
                            </div>
                            <div className="case-study-overview mt-4">
                                <h5 className="case-study-overview-title highlight-gis">PROJECT OVERVIEW</h5>
                                <p>
                                    GIS Garud MP is a flagship initiative of the Urban Development and Housing Department, Government of Madhya Pradesh, serving as a centralized Urban Data Analytics Center. The platform leverages Geographic Information Systems (GIS) to support data-driven decision-making across urban planning, infrastructure development, and resource management.
                                </p>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-12 col-lg-12">
                            <div className="">
                                <video className="gis-videostag" autoPlay loop muted
                                >
                                    <source src="/assets/gis-videos.mp4" type="video/mp4" />
                                </video>
                                <div className="overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Partners />
            <div ref={(el) => (fadeRefs.current[0] = el)} className="project-scope-section fadeInUp-animation">
                <div className="row align-items-center justify-content-center"
                    style={{ rowGap: "20px" }}
                >

                    <div className="col-xl-6 col-lg-12 col-md-12 d-flex justify-content-center">
                        <div className='gisobjective-left'>
                            <img src='/assets/gis-group.svg' alt='gis' />
                        </div>
                    </div>


                    <div className="col-xl-5 col-lg-12 col-md-12 d-flex flex-column justify-content-center align-items-start gisobjective-right gisoscope-right">
                        <h3 className="project-scope-title">PROJECT SCOPE</h3>
                        <p className="project-scope-text">
                            The scope of the GIS Garud MP project encompasses the development and implementation of a centralized Urban Data Analytics Center for the state of Madhya Pradesh, designed to harness the power of geospatial technologies to support data-driven urban governance, infrastructure planning, and citizen-centric service delivery. The project includes the integration of spatial data from over 400 Urban Local Bodies (ULBs), development of a comprehensive web-based GIS platform, and deployment of analytical tools such as buffer analysis, solar capacity estimation, route optimization, change detection, 3D visualization, and a dynamic GIS query engine.
                        </p>
                        <p className="project-scope-text">
                            The platform is designed for multi-stakeholder use, providing customized dashboards and access levels for government officials, planners, and citizens, enabling interactive mapping, decision support, and public transparency. In addition to technology deployment, the project also involves capacity building through training programs for ULB staff, creation of user manuals, and ongoing technical support.
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
                                <li>Enhance Urban Governance through geospatial insights</li>
                                <li>Enable Evidence-Based Planning across departments</li>
                                <li>Improve Infrastructure Delivery and monitoring</li>
                                <li>Support Environmental Sustainability with spatial tools</li>
                                <li>Empower Citizens and Officials with open, visualized data</li>
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
                                <li>Data Silos: Integrated datasets from multiple departments using standardized geospatial formats.</li>
                                <li>Skill Gaps: Capacity-building programs for ULB officials to interpret GIS data.</li>
                                <li>Interoperability: Ensured compatibility with national geospatial platforms and open-source standards.</li>
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
                                <li>🧭 Buffer Tool</li>
                                <li>☀️ Solar Capacity Estimator</li>
                                <li>🛣 Route Analysis</li>
                                <li>📈 Change Analysis</li>
                                <li>🔍 GIS Query Tool</li>
                                <li>🏙 3D Urban Modeling</li>
                                <li>🧾 Layered Data Integration</li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-lg-5 col-md-6 px-2">
                        <div className='position-relative'>
                            <div ref={(el) => (fadeRefs.current[5] = el)} className="col-md-5 d-flex align-items-center fadeInUp-animation">
                                <img src="/assets/garud-logo.svg" alt='garud' className='gis-logodiv' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="outcome-section outcome-section-gis">
                <div ref={(el) => (fadeRefs.current[6] = el)} className="fadeInUp-animation">
                    <div className='row justify-content-center align-items-center'
                        style={{ rowGap: "20px" }}
                    >
                        <div className='col-xxl-4 col-xl-5 col-lg-6 col-md-12'>
                            <img src="/assets/gis-aichatbot.svg" alt="chatbot" className='gis-aichatbot-img' />
                        </div>
                        <div className='col-xxl-8 col-xl-7 col-lg-6 col-md-12'>
                            <div>
                                <h3 className="project-scope-title">PROJECT SCOPE1</h3>
                                <p className="project-scope-text">
                                    As part of the ongoing digital transformation and user accessibility enhancements, GIS Garud MP has introduced an AI-powered chatbot assistant to make geospatial services more intuitive, accessible, and responsive for both government officials and citizens. The chatbot acts as a conversational interface that simplifies interactions with the complex GIS system, enabling users to retrieve location-based information, generate spatial queries, and receive insights without needing advanced technical knowledge.
                                </p>
                                <p className="project-scope-text">
                                    Through natural language processing (NLP), the chatbot allows users to ask questions like “Show all green spaces within 1 km of my location,” or “Find solar rooftop potential for my house,” and receive interactive map responses instantly. This tool supports both voice and text input, available in English and Hindi, enhancing inclusivity and usability across diverse user demographics. For administrators, it facilitates quick access to urban indicators, ongoing projects, and data summaries through intelligent prompts.
                                </p>
                                <p className="project-scope-text">
                                    Integrated with real-time GIS data and public layers, the AI chatbot serves as a 24/7 virtual GIS assistant, reducing support burden, accelerating service delivery, and driving citizen engagement. Future enhancements include predictive suggestions, integration with complaint systems, and multilingual support to expand its utility and impact across Madhya Pradesh’s urban ecosystem.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="get-in-touch-container2 ">
                <div className="heading-section">
                    <h2>
                        Our Case Studies
                    </h2>

                </div>
            </div>
            <div className=" project-showcase mt-5">
                <div className="row">
                    {projects.map((project, index) => (
                        <div key={index} className="col-md-6 mb-4 d-flex"> {/* Added d-flex */}
                            <div onClick={(e) => {
                                e.stopPropagation();
                                if (project.likeLink) {
                                    router.push(project.likeLink);
                                }
                            }} style={{ cursor: project.likeLink ? 'pointer' : 'not-allowed' }}

                                className="card project-card w-100">
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