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

import QaProduct from "@/components/QaProduct";
import ChatbotHero from "@/components/ChatbotHero";
import WebExpertise from "@/components/AppExpertise";
import ChatbotProduct from "@/components/ChatbotProduct";
import DataHero from "@/components/DataHero";
import OurDataServices from "@/components/OurDataServices";

export default function Home() {
    return (
        <main>

            <NavbarAI />
            <DataHero />
            <Partners />
            <WebExpertise title={"Our Expertise in"} nexttitle={"Data Engineering"} />
            <CaseStudies />
            {/* <ChatbotProduct /> */}
            <OurDataServices />

        
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
