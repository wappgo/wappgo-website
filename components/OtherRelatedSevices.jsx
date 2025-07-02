"use client"; // for app router only
import React, { useEffect, useState } from 'react';

function OtherRelatedSevices() {
    const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null; 
    return (
        <div className="overlap-container">
            <div className="card-layer card-layer--first"
                style={{
                    boxShadow: "none",
                    paddingBottom: "20px"
                }}
            >
                <h2 className="section-title">Other Related Services</h2>
                <p className="section-subtitle">
                    We don’t believe in tech snobbery.<br />
                    We use what works best for you and your project.
                </p>
                <div className="services-grid">
                    <div className="service-card pink"
                        style={{
                            boxShadow: "none"
                        }}
                    >
                        <div className="icon"><img src="/assets/code1.svg" /></div>
                        <h3 className="user">User Interface & User Experience</h3>
                        <a href="#">Explore now ↗</a>
                    </div>
                    <div className="service-card mint"
                        style={{
                            boxShadow: "none"
                        }}
                    >
                        <div className="icon"><img src="/assets/user-interface.svg" /></div>
                        <h3 className="user">Mobile App Development</h3>
                        <a href="#">Explore now ↗</a>
                    </div>
                    <div className="service-card peach"
                        style={{
                            boxShadow: "none"
                        }}
                    >
                        <div className="icon"><img src="/assets/chatbot.svg" /></div>
                        <h3 className="user">AI & ChatBot Development</h3>
                        <a href="#">Explore now ↗</a>
                    </div>
                    <div className="service-card blue"
                        style={{
                            boxShadow: "none"
                        }}
                    >
                        <div className="icon"><img src="/assets/infinity.svg" /></div>
                        <h3 className="user">DevOps & Infra Development</h3>
                        <a href="#">Explore now ↗</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtherRelatedSevices