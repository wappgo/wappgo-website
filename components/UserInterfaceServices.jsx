
// import React, { useEffect, useRef, useState } from "react";
// import "../public/styles/ServiceSection.css";
// import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
// const UserInterfaceServices = () => {
//     return (
//         <div className="postiton-relative">
//             <div className="video-container video-container">
//                 <video className="video2" autoPlay loop muted
//                     style={{
//                         width: "100%"
//                     }}
//                 >
//                     <source src="/assets/uivideos.mp4" type="video/mp4" />
//                 </video>
//                 <div className="overlay"></div>
//             </div>
//             <div className="hero-container contentuisevices">
//                 <div className="content2 ">
//                     <div className="row">
//                         <div className="col-md-6">
//                             <h3 className="home-hero-subtitle text-white">Built to Scale. Designed to Slay.</h3>
//                             <h1 className="home-hero-title p-0 text-white">
//                                 Apps That Move Fast and Break Limits
//                             </h1>
//                             <p className="home-hero-description">
//                                 We build mobile apps that aren’t just pretty — they perform, convert, and keep users coming back. Whether you’re launching your MVP or taking your app global, we’ve got the team, tech, and taste to make it happen.
//                             </p>

//                             <div className="home-hero-buttons">
//                                 <a href="#" className="home-hero-cta-btn">Get Consultation ⚡</a>
//                                 <span className="home-hero-or">or</span>
//                                 <div className="home-hero-icon-buttons">
//                                     <a href="#"><FaWhatsapp
//                                         style={{
//                                             color: "green"
//                                         }}
//                                     /></a>
//                                     <a href="#"><FaEnvelope /></a>
//                                     <a href="#"><FaPhoneAlt /></a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UserInterfaceServices;



import React, { useEffect, useRef, useState } from "react";
import "../public/styles/ServiceSection.css";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
const UserInterfaceServices = () => {
    return (
        <div className="dataHerodiv">
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
                            <div className="col-md-6">
                                <h3 className="home-hero-subtitle text-white">Built to Scale. Designed to Slay.</h3>
                                <h1 className="home-hero-title p-0 text-white">
                                    Apps That Move Fast and Break Limits
                                </h1>
                                <p className="home-hero-description">
                                    We build mobile apps that aren’t just pretty — they perform, convert, and keep users coming back. Whether you’re launching your MVP or taking your app global, we’ve got the team, tech, and taste to make it happen.
                                </p>

                                <div className="home-hero-buttons">
                                    <a href="#" className="home-hero-cta-btn">Get Consultation ⚡</a>
                                    <span className="home-hero-or">or</span>
                                    <div className="home-hero-icon-buttons">
                                        <a href="#"><FaWhatsapp
                                            style={{
                                                color: "green"
                                            }}
                                        /></a>
                                        <a href="#"><FaEnvelope /></a>
                                        <a href="#"><FaPhoneAlt /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default UserInterfaceServices;