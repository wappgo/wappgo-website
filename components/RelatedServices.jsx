import React,{useState} from "react";
import "../public/styles/RelatedService.css";

const OverlapCards = () => {
    const [activeStep, setActiveStep] = useState(0);
    const stepsData = [
        {
            title: '1 Discovery & Strategy',
            content:
                'We begin by understanding your vision.',
        },
        {
            title: '2 Design Collaboration',
            content:
                'We work closely with your team.',
        },
        {
            title: '3 Development & Testing',
            content:
                'Our devs code, test, and refine.',
        },
        {
            title: '4 Deployment & Optimization',
            content:
                'We launch your product.',
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
                        <h2 className="process-title3">Our Dev Process, Deconstructed</h2>
                        <p className="process-subtitle">It’s more than just writing code</p>
                        <p className="process-description">
                            Clean code, sharp design, zero fluff. Just real results, step by step.
                        </p>
                        <div className="blue-divider"></div>
                    </div>

                    <div className="process-main">
                        <div className="process-steps">
                            {stepsData.map((step, index) => (
                                <div
                                    key={index}
                                    className={`step ${activeStep === index ? 'active' : ''}`}
                                    onClick={() => setActiveStep(index)}
                                >
                                    <h4>{step.title}</h4>
                                    {activeStep === index && (
                                        <>
                                            <p>{step.content}</p>
                                            <div className="blue-step-border"></div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="image-content">
                            <img src="/assets/ias.svg" alt="Server and code visuals" />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default OverlapCards;


