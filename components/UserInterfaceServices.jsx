"use client"
import React, { useEffect, useRef, useState } from "react";
import "../public/styles/ServiceSection.css";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
const UserInterfaceServices = () => {
    const router = useRouter()
    return (
        <div className="dataHerodiv">
            <div className="dataHerodiv-inside">
                <div className="postiton-relative">
                    <div className="video-container video-container">
                        <video className="video2" autoPlay loop muted
                            style={{
                                width: "100%"
                            }}
                        >
                            <source src="/assets/uivideos.mp4" type="video/mp4" />
                        </video>
                        <div className="overlay"></div>
                    </div>
                    <div className="hero-container contentuisevices">
                        <div className="row">
                            <div className="col-xl-6 col-lg-12">
                                <h3 className="home-hero-subtitle text-white">Built to Scale. Designed to Slay.</h3>
                                <h1 className="home-hero-title p-0 text-white">
                                    Apps That Move Fast and Break Limits
                                </h1>
                                <p className="home-hero-description">
                                    We build mobile apps that aren’t just pretty — they perform, convert, and keep users coming back. Whether you’re launching your MVP or taking your app global, we’ve got the team, tech, and taste to make it happen.
                                </p>

                                <div className="home-hero-buttons">
                                    <button className="home-hero-cta-btn" onClick={() => router.push('/contact')}>Get Consultation ⚡</button>
                                    <span className="home-hero-or">or</span>
                                    <div className="home-hero-icon-buttons">
                                        <a target="_blank" href="https://wa.me/917000581635?text=Hello%20Team%20Wappgo!">
                                            <FaWhatsapp />
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
                </div>
            </div>
            <div className="dataHerodiv-mobile">
                <div>
                    <h3 className="home-hero-subtitle text-white">Built to Scale. Designed to Slay.</h3>
                    <h1 className="home-hero-title p-0 text-white">
                        Apps That Move Fast and Break Limits
                    </h1>
                    <p className="home-hero-description">
                        We build mobile apps that aren’t just pretty — they perform, convert, and keep users coming back. Whether you’re launching your MVP or taking your app global, we’ve got the team, tech, and taste to make it happen.
                    </p>

                    <div className="home-hero-buttons">
                        <button className="home-hero-cta-btn" onClick={() => router.push('/contact')}>Get Consultation ⚡</button>
                        <span className="home-hero-or">or</span>
                        <div className="home-hero-icon-buttons">
                            <a target="_blank" href="https://wa.me/917000581635?text=Hello%20Team%20Wappgo!">
                                <FaWhatsapp />
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
    );
};

export default UserInterfaceServices;