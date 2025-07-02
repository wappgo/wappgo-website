"use client"

import Grow from "@/components/Grow";
import NavbarAI from "@/components/NavbarAI";
import Partners from "@/components/Partners";
import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";
import ChatbotHero from "@/components/ChatbotHero";
import WebExpertise from "@/components/AppExpertise";
import ChatbotProduct from "@/components/ChatbotProduct";
import OtherRelatedSevices from "@/components/OtherRelatedSevices";


export default function Home() {
    return (
        <main>

            <NavbarAI />
            <ChatbotHero />
            <Partners />
            <WebExpertise title={"Our Expertise in"} nexttitle={"Chatbot Services"} />
            <ChatbotProduct />
            <CaseStudies />

            <div>
                <div className="qa-hero text-center py-5 px-3">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <h2 className="fw-bold">Smart and Intelligent Chatbot Services That we Provide</h2>
                            <p className="text-muted mt-3">
                                we build intelligent, intent-driven chatbot solutions designed to elevate customer experiences and simplify business operations.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-between mt-5">
                        <div className="col-md-3 col-sm-6 mb-4 px-3">
                            <div className="qa-card chatbot-card p-3 h-100 text-start">
                                <div className="qa-icon mb-2">🚀</div>
                                <h6 className="fw-bold">Tailor-Made Chatbot Design</h6>
                                <p className="text-muted small">
                                    We craft chatbots as unique as your brand designed to know your users, solve their queries, and make interactions effortless.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4 px-3">
                            <div className="qa-card p-3 chatbot-card h-100 text-start">
                                <div className="qa-icon mb-2">⚡</div>
                                <h6 className="fw-bold">Powerful Chatbot Architecture</h6>
                                <p className="text-muted small">
                                    Our bots integrate easily across websites, apps, CRMs, and more — ensuring you meet your users wherever they are.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4 px-3">
                            <div className="qa-card chatbot-card p-3 h-100 text-start">
                                <div className="qa-icon mb-2">📱</div>
                                <h6 className="fw-bold">Conversational Intelligence</h6>
                                <p className="text-muted small">
                                    We give your chatbot real conversational superpowers: understanding emotions, and context to respond smarter and quicker.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4 px-3">
                            <div className="qa-card chatbot-card p-3 h-100 text-start">
                                <div className="qa-icon mb-2">🔒</div>
                                <h6 className="fw-bold">Chatbot Consultation</h6>
                                <p className="text-muted small">
                                   From ideation to optimization, we guide you on how to make chatbots your 24/7 digital team.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* <div className="overlap-container">
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
            </div> */}
            <OtherRelatedSevices />
            <FaqSection />
            <Grow />
            <Footer />

        </main>
    );
}
