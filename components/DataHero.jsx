
import React, { useEffect, useRef, useState } from "react";
import "../public/styles/ServiceSection.css";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
const DataHero = () => {
    const router = useRouter()
    return (
        <div className="dataHerodiv">
            <div className="row align-items-center">
                <div className="col-md-6 p-0">
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <h3 className="home-hero-subtitle text-white">Your AI Chatbot, Your Way</h3>
                            <h1 className="home-hero-title p-0 text-white">
                                Smart Conversations, Smarter Connections
                            </h1>
                            <p className="home-hero-description">
                                Wappgo builds AI chatbots that actually feel human. Whether it's your app, website, or internal tool, we craft custom chat experiences that match your brand and goals. No templates, no fluff — just powerful AI that talks, learns, and delivers.
                            </p>

                            <div className="home-hero-buttons">
                                {/* <a href="#" className="home-hero-cta-btn">Get Consultation ⚡</a> */}
                                <button className="home-hero-cta-btn" onClick={() => router.push('/contact')}>Get Consultation ⚡</button>
                                <span className="home-hero-or">or</span>
                                <div className="home-hero-icon-buttons">
                                    {/* <a href="#"><FaWhatsapp
                                style={{
                                    color: "green"
                                }}
                            /></a>
                            <a href="#"><FaEnvelope /></a>
                            <a href="#"><FaPhoneAlt /></a> */}
                                    <a target="_blank" href="https://wa.me/917000581635?text=Hello%20Team%20Wappgo!">
                                        <FaWhatsapp style={{
                                            color: "green"
                                        }} />
                                    </a>
                                    <a href="mailto:info@wappgo.com">
                                        <FaEnvelope />
                                    </a>
                                    <a href="tel:917000581635">
                                        <FaPhoneAlt />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 p-0">
                    <video className="video2" autoPlay loop muted>
                        <source src="/assets/data-service-videos.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    );
};

export default DataHero;