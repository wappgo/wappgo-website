import React, { useState } from "react";
import "../public/styles/AppService.css";

const OverlapCards = () => {
    const [activeStep, setActiveStep] = useState(0);
    const services2 = [
        {
            icon: "/assets/rocket.svg",
            title: "MVPs",
            description: "Start lean, move fast. We help you test ideas and get to market in weeks – not quarters.",
        },
        {
            icon: "/assets/smartphones.svg",
            title: "Full-Stack Mobile Products",
            description: "Scalable backends, slick frontends, cloud-powered everything. End-to-end builds that just work.",
        },
        {
            icon: "/assets/cross.svg",
            title: "Cross-Platform Apps",
            description: "One codebase, all platforms. React Native, Flutter — we write once, run everywhere, and keep it snappy.",
        },
        {
            icon: "/assets/mobile-app.svg",
            title: "Native Apps",
            description: "Need top-tier performance? We build native apps that feel buttery smooth and look on every device.",
        },
    ];
    return (
        <div className="overlap-container">
            <div className="card-layer card-layer--first">
                <h2 className="section-title">Other Related Services</h2>
                <p className="section-subtitle">
                    We don’t believe in tech snobbery.<br />
                    We use what works best for you and your project.
                </p>
                <div className="services-grid">
                    <div className="service-card pink">
                        <div className="icon"><img src="/assets/code1.svg" /></div>
                        <h3 className="user">User Interface & User Experience</h3>
                        <a href="#">Explore now ↗</a>
                    </div>
                    <div className="service-card mint">
                        <div className="icon"><img src="/assets/user-interface.svg" /></div>
                        <h3 className="user">Mobile App Development</h3>
                        <a href="#">Explore now ↗</a>
                    </div>
                    <div className="service-card peach">
                        <div className="icon"><img src="/assets/chatbot.svg" /></div>
                        <h3 className="user">AI & ChatBot Development</h3>
                        <a href="#">Explore now ↗</a>
                    </div>
                    <div className="service-card blue">
                        <div className="icon"><img src="/assets/infinity.svg" /></div>
                        <h3 className="user">DevOps & Infra Development</h3>
                        <a href="#">Explore now ↗</a>
                    </div>
                </div>
            </div>

            {/* <div className="card-layer card-layer--second">
                <h2>Second Card</h2>
                <p>This is the second card. It will overlap and cover the first one while scrolling.</p>
            </div> */}
            <div className="card-layer card-layer--second">
                <div className="second-card-content column-layout">
                    <div className="intro-text">
                        <h2 className="process-title3">What We Build<br />
                            Real Products. Real Users. Real Fast.</h2>
                        <p className="process-subtitle">we craft digital products that launch fast, feel great, and grow with you.</p>
                        <p className="process-description">
                            Whether you're validating a bold new idea or scaling an app to thousands, we’ve got your back.
                        </p>
                        <div className="blue-divider"></div>
                    </div>
                    <div className="mobile-solutions8">
                        <div className="cards-container8">
                            {services2.map((service, index) => (
                                <div className="service-card8" key={index}>
                                    <img src={service.icon} alt={service.title} className="service-icon" />
                                    <h4>{service.title}</h4>
                                    <p>{service.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="cta-container8">
                            <button className="cta-button8">
                                Get Consultation <span className="lightning8">⚡</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default OverlapCards;


