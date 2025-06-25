"use client"

import Announcement from "@/components/Announcement";
import Blogs from "@/components/Blogs";

import GlobeImage from "@/components/GlobeImage";
import Grow from "@/components/Grow";
import Hero from "@/components/Hero";
import NavbarAI from "@/components/NavbarAI";
import Partners from "@/components/Partners";
import Services from "@/components/Service";
import Transform from "@/components/Transform";
import DevopsExpertise from "@/components/DevopsExpertise";
import Testimonial from "@/components/Testimonial";
import Testing, { Slider } from "@/components/Testing";
import Vision from "@/components/Vision";
import RealDevops from "@/components/RealDevops";
import Image from "next/image";
import CaseStudies from "@/components/CaseStudies";
import DevopsRelated from "@/components/DevopsRelated";
import DevopsService from "@/components/DevopsService"
import DevopsSec from "@/components/DevopsSec";
import WhyBrands from "@/components/WhyBrands";
import Footer2 from "@/components/Footer2";
import { useEffect } from "react";
import RelatedServices from "@/components/RelatedServices";
import ScaleDesign from "@/components/ScaleDesign";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";
import TestingHero from "@/components/TestingHero";
import ProductDesign from "@/components/ProductDesign";
import QaProduct from "@/components/QaProduct";

export default function Home() {
    return (
        <main>

            <NavbarAI />
            <TestingHero />
            <Partners />
            <DevopsExpertise />
            <DevopsRelated />
            <CaseStudies />

            <div className="qa-section">
                <div className="qa-hero text-center py-5 px-3">
                    <div className="row justify-content-center">
                        <div className="col-md-5">
                            <h2 className="fw-bold">Testing Every Pixel, Every Click, Every Line of Code</h2>
                            <p className="text-muted mt-3">
                                We go beyond surface-level checks diving deep into real-world scenarios, device chaos, and user behavior.
                                Your product deserves to be stress-proof, scale-ready.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-between mt-5">
                        <div className="col-md-3 col-sm-6 mb-4 px-3">
                            <div className="qa-card p-3 h-100 text-start">
                                <div className="qa-icon mb-2">🚀</div>
                                <h6 className="fw-bold">Functional Testing</h6>
                                <p className="text-muted small">
                                    Every click, swipe, and interaction tested till it's bulletproof.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4 px-3">
                            <div className="qa-card p-3 h-100 text-start">
                                <div className="qa-icon mb-2">⚡</div>
                                <h6 className="fw-bold">Performance Testing</h6>
                                <p className="text-muted small">
                                    We push your app to the limit, so users never feel a lag.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4 px-3">
                            <div className="qa-card p-3 h-100 text-start">
                                <div className="qa-icon mb-2">📱</div>
                                <h6 className="fw-bold">Mobile Testing</h6>
                                <p className="text-muted small">
                                    iOS, Android, all the weird screen sizes—we test across it all.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4 px-3">
                            <div className="qa-card p-3 h-100 text-start">
                                <div className="qa-icon mb-2">🔒</div>
                                <h6 className="fw-bold">Security Testing</h6>
                                <p className="text-muted small">
                                    No leaks, no loopholes. We lock it down before hackers even try.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row py-5 justify-content-between align-items-center qa-section-bottom">
                    <div className="col-lg-6 col-md-12">
                        <div className="usertext">
                            <h3>Test early. Test often.<br />Break it before users do.</h3>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <div className="text-center text-md-start qa-philosophy">
                            <h6 className="mb-2">Our QA Philosophy</h6>
                            <p>
                                QA isn’t a checkbox at the end — it’s baked into every sprint, every feature, every build.
                                We believe in proactive testing, real-user scenarios, and catching issues when they’re tiny.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
             <QaProduct />
            {/* <DevopsSec /> */}
            {/* <RealDevops /> */}
            {/* <AppServices/> */}
            {/* <WhyBrands/> */}

            {/* <Footer2 /> */}

            {/* <RelatedServices /> */}
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
            <FaqSection />
            <Grow />
            <Footer />

        </main>
    );
}
