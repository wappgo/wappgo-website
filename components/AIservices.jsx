import React, { useState, useRef, useEffect } from "react";
import "../public/styles/AIservice.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const serviceCategories = [
  {
    name: "AI-Powered Automation",
    cards: [
      {
        title: "Process Automation",
        bullets: ["Robotic Process Automation", "Workflow Orchestration"],
        image: "/assets/process-automation.svg"
      },
      {
        title: "Data & Analytics Automation",
        bullets: ["Automated Data Cleansing", "Predictive Analytics"],
        image: "/assets/process-automation.svg"
      },
      {
        title: "Customer Support Automation",
        bullets: ["Sentiment Analysis", "Response Optimization"],
        image: "/assets/process-automation.svg"
      },
      {
        title: "IT & DevOps Automation",
        bullets: ["AI-Driven Incident Detection", "Automated Testing & Deployment"],
        image: "/assets/process-automation.svg"
      }
    ]
  },
  {
    name: "Smart Chatbots & Virtual Assistants",
    cards: [
      {
        title: "Customer Support Bots",
        bullets: ["24/7 Helpdesk Assistance", "Multilingual Support"],
        image: "/assets/process-automation.svg"
      },
      {
        title: "Sales & Conversion Bots",
        bullets: ["Lead Qualification Chatbots", "Product Assistant"],
        image: "/assets/process-automation.svg"
      },
      {
        title: "Scheduling Assistants",
        bullets: ["Appointment Booking Bots", "Event Registration Assistants"],
        image: "/assets/process-automation.svg"
      },
      {
        title: "Internal Workflow Assistants",
        bullets: ["HR Chatbots", "IT Helpdesk Bots"],
        image: "/assets/process-automation.svg"
      },
       {
        title: "AI-Powered Voice Assistants",
        bullets: ["Voice IVR Systems", "Smart Speaker Integration"],
        image: "/assets/process-automation.svg"
      },
      {
        title: "Analytics & Feedback Bots",
        bullets: ["Post-Interaction Feedback Bots", "Survey & Polling Assistants"],
        image: "/assets/process-automation.svg"
      },
    ]
  },
  {
    name: "Predictive Analytics",
    cards: [
      {
        title: "Sales & Marketing",
        bullets: ["Customer Churn Prediction", "Sales Forecasting"],
        image: "/assets/process-automation.svg"
      },
      {
        title: "Operations & Supply Chain",
        bullets: ["Demand Forecasting", "Inventory Optimization"],
        image: "/assets/process-automation.svg"
      },
      {
        title: "Healthcare & Life Sciences",
        bullets: ["Patient Risk Prediction", "Disease Outbreak Forecasting"],
        image: "/assets/process-automation.svg"
      },
      {
        title: "Human Resources",
        bullets: ["Employee Attrition Prediction", "Hiring Success Forecasting"],
        image: "/assets/process-automation.svg"
      },
      {
        title: "Finance & Risk",
        bullets: ["Credit Risk Modeling", "Fraud Detection"],
        image: "/assets/process-automation.svg"
      },
      {
        title: "AI-Driven Personalization",
        bullets: ["Product/Content Recommendation", "Dynamic Pricing Models"],
        image: "/assets/process-automation.svg"
      },
    ]
  },
  {
    name: "Computer Vision",
    cards: [
      {
        title: "Image & Video Analysis",
        bullets: ["Object Detection & Recognition", "Facial Recognition:"],
        image: "/assets/process-automation.svg"
      },
      {
        title: "Document & Text Extraction",
        bullets: ["Optical Character Recognition (OCR)", "Automated Document Classification"],
        image: "/assets/process-automation.svg"
      },
      {
        title: "Retail & Inventory",
        bullets: ["Smart Checkout (Scan & Go)", "Shelf Monitoring"],
        image: "/assets/process-automation.svg"
      },
      {
        title: "Security & Surveillance",
        bullets: ["Intrusion Detection", "License Plate Recognition"],
        image: "/assets/process-automation.svg"
      },
      {
        title: "Automotive & Transportation",
        bullets: ["Driver Monitoring Systems (DMS)", "Lane & Object Detection"],
        image: "/assets/process-automation.svg"
      },
      {
        title: "Industrial & Manufacturing",
        bullets: ["Visual Quality Inspection", "Equipment Monitoring"],
        image: "/assets/process-automation.svg"
      },
      {
        title: "Healthcare Imaging",
        bullets: ["Medical Image Analysis", "Surgical Navigation"],
        image: "/assets/process-automation.svg"
      },
    ]
  },
  {
    name: "Natural Language Processing",
    cards: [
      {
        title: "Intent Detection for User Queries",
        bullets: ["Use NLP to understand what users are trying to do when they type messages."],
        image: "/assets/process-automation.svg"
      },
      {
        title: "Smart Prompt Suggestions",
        bullets: ["Based on user history or current input, generate natural prompt suggestions"],
        image: "/assets/process-automation.svg"
      },
      {
        title: "Auto-Tagging Property Descriptions",
        bullets: ["When users write property details in freeform"],
        image: "/assets/process-automation.svg"
      },
      {
        title: "Conversational AI Chatbot (TheLaaL Assistant)",
        bullets: ["Power your chatbot with NLP"],
        image: "/assets/process-automation.svg"
      },
      {
        title: "Personalized Marketing Content",
        bullets: ["Generate dynamic banner headlines or emails like"],
        image: "/assets/process-automation.svg"
      },
      {
        title: "Sentiment Analysis (User Feedback)",
        bullets: ["Analyze user reviews or interaction logs"],
        image: "/assets/process-automation.svg"
      },
    ]
  },
  {
    name: "Generative AI, LLM & VLM",
    cards: [
      {
        title: "Generative AI",
        bullets: ["Content Generation", "Conversational Interfaces"],
        image: "/assets/process-automation.svg"
      },
      {
        title: "LLMs (Large Language Models)",
        bullets: ["Semantic Search", "Document Understanding"],
        image: "/assets/process-automation.svg"
      },
      {
        title: "VLMs (Vision-Language Models)",
        bullets: ["Image Captioning", "Visual Search"],
        image: "/assets/process-automation.svg"
      },
      {
        title: "Audio Generation",
        bullets: ["Podcasts", "Voiceovers for animations or videos"],
        image: "/assets/process-automation.svg"
      },
      {
        title: "Personalised Content Creation",
        bullets: ["Personalised marketing", "Customised educational materials"],
        image: "/assets/process-automation.svg"
      },
      {
        title: "3D Model Generation",
        bullets: ["Architecture", " Game design"],
        image: "/assets/process-automation.svg"
      },
    ]
  },
  {
    name: "Data Analytics Applications",
    cards: [
      {
        title: "Quality Control & Defect Detection",
        bullets: ["Aggregate defect patterns, frequencies, and locations to identify root causes."],
        image: "/assets/process-automation.svg"
      },
      {
        title: "Customer Behavior & Engagement Analysis",
        bullets: ["Use in-store camera feeds to track footfall, dwell time, and engagement hotspots."],
        image: "/assets/process-automation.svg"
      },
      {
        title: "Security Incident Analytics",
        bullets: ["Quantify incident types, times, and locations from surveillance footage."],
        image: "/assets/process-automation.svg"
      },
      {
        title: "Traffic & Urban Flow Analytics",
        bullets: ["Analyze vehicle and pedestrian patterns to optimize city planning or logistics."],
        image: "/assets/process-automation.svg"
      },
      {
        title: "Document Processing & Workflow Efficiency",
        bullets: ["Track document volumes, processing time, error rates in OCR pipelines."],
        image: "/assets/process-automation.svg"
      },
      {
        title: "Medical Imaging Efficiency & Accuracy",
        bullets: ["Measure scan analysis time, false positive/negative rates, and model performance."],
        image: "/assets/process-automation.svg"
      },
      {
        title: "AI Model Performance Monitoring",
        bullets: ["Track precision, recall, latency, and drift in visual AI models."],
        image: "/assets/process-automation.svg"
      },
    ]
  },
];

const AIServiceSection = () => {
  const [selectedService, setSelectedService] = useState("Generative AI");
  const fadeRefs = useRef([]);
  const [selectedCategory, setSelectedCategory] = useState(serviceCategories[0]);
  const scrollRef = useRef(null);
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

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} onClick={onClick}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // background: "white",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          boxShadow: "0 0 5px rgba(0,0,0,0.2)",
        }}
      >
        <img src="/assets/right-arrow-left.svg" alt="Next" style={{ width: '30px' }} />
      </div>
    );
  };

  const PrevArrow = (props) => {
   const { className, style, onClick, currentSlide } = props;
    const isHidden = currentSlide === 0;
    return (
      <div className={className} onClick={onClick}
        style={{
          ...style,
           display: isHidden ? "none" : "flex",
          justifyContent: "center",
          alignItems: "center",
          // background: "white",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          boxShadow: "0 0 5px rgba(0,0,0,0.2)",
        }}
      >
        <img src="/assets/left-arrow-ai.svg" alt="Prev" style={{ width: '30px' }} />
      </div>
    );
  };


  const settings = {
    rows: 2,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };






  const items = [
    { id: 1, content: "Slide 1" },
    { id: 2, content: "Slide 2" },
    { id: 3, content: "Slide 3" }
  ];


  return (
    <>
      {/* <div className="">
        <div ref={(el) => (fadeRefs.current[0] = el)} className="video-background-container3 fadeInUp-animation">
          <div className="video-background3">
            <video autoPlay loop muted playsInline>
              <source src="/assets/ai-dev-video.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="video-overlay3"><img
            src="/assets/Services_video_layer.svg"
            alt="Decorative overlay"
            className="overlay-image"
          /></div>
        </div>
        <h1 ref={(el) => (fadeRefs.current[2] = el)} className="aidev fadeInUp-animation">
          <span className="highlight2">Artificial Intelligence</span> Development
        </h1>
        <h2 className="we-offer2">Services We Offer</h2>
        <p className="description2">
          Our AI development services are known to unlock the potential of vast
          amounts of data for driving tangible business results. Being a renowned
          AI solutions company, we specialize in leveraging the power of AI to
          transform raw data into actionable insights, paving the way for
          operational efficiency and enhanced decision-making.
        </p>

        <div ref={(el) => (fadeRefs.current[1] = el)} className="ai-content2 fadeInUp-animation">
          <div className="sidebar2">
            {services.map((service) => (
              <div
                key={service}
                className={`service-item2 ${selectedService === service ? "active" : ""}`}
                onClick={() => setSelectedService(service)}
              >
                {service}
                <span className="arrow2">
                  <img src="/assets/arrow.png" alt="Arrow" />
                </span>
              </div>
            ))}
          </div>
          <div className="service-details2">
            <h3>{selectedService}</h3>
            <p ref={(el) => (fadeRefs.current[3] = el)} className="fadeInUp-animation">
              As one of the top-rated AI software development companies, we have
              extensive experience in developing {selectedService} solutions with
              advanced capabilities such as GPT-4, GPT-3.5, Midjourney, and
              DALL-E.
            </p>
            <div className="subscribe-box2">
              <input type="email" placeholder="Enter Your Email Here" className="email-input" />
              <button className="talk-button2">Let's Talk</button>
            </div>

            <p className="note2">Submit your email and get back a call from our experts</p>
          </div>
        </div>
      </div> */}
      <section className="ai-services-section2">
        <div ref={(el) => (fadeRefs.current[0] = el)} className="video-background-container3 fadeInUp-animation">
          <div className="video-background3">
            <video autoPlay loop muted playsInline>
              <source src="/assets/ai-dev-video.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="video-overlay3"><img
            src="/assets/Services_video_layer.svg"
            alt="Decorative overlay"
            className="overlay-image"
          /></div>
        </div>
        <h1 ref={(el) => (fadeRefs.current[2] = el)} className="aidev fadeInUp-animation">
          <span className="highlight2">Artificial Intelligence</span> Development
        </h1>
        <h2 className="we-offer2">Services We Offer</h2>
        <p className="description2">
          Our AI development services are known to unlock the potential of vast
          amounts of data for driving tangible business results. Being a renowned
          AI solutions company, we specialize in leveraging the power of AI to
          transform raw data into actionable insights, paving the way for
          operational efficiency and enhanced decision-making.
        </p>
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-12">
            <div className="row align-items-center fadeInUp-animation ai-content2"
              ref={(el) => (fadeRefs.current[1] = el)}
              style={{
                rowGap: "10px"
              }}>
              {/* Sidebar */}
              <div className="col-lg-5 col-md-6">
                <div className="sidebar2">
                  {serviceCategories.map((category) => (
                    <div
                      key={category.name}
                      className={`service-item2 ${selectedCategory.name === category.name ? "active" : ""}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category.name}
                      <span className="arrow2">
                        <img src="/assets/arrow.png" alt="Arrow" />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Card Grid */}
              <div className="col-lg-7 col-md-6">
                <div className="service-details2">
                  <div className="cards-container">
                    {/* <div className="row"
                      style={{ rowGap: "8px" }}
                    >
                      {selectedCategory.cards.map((card, index) => (
                        <div className="col-md-6">
                          <div key={index} className="service-card2">
                            <img src={card.image} alt={card.title} />
                            <h4 className="service-card-title mt-2 mb-2"
                              style={{ fontSize: "20px" }}
                            >{card.title}</h4>
                            {card.bullets.map((point, i) => (
                              <h6 key={i}
                                style={{ fontSize: "16x" }}
                                className="service-card-title card-content-text"
                              ><img src="/assets/cartserialicon.svg" alt="serial No" />{point}</h6>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div> */}
                    <div className="overflow-hidden">
                      <Slider {...settings} className="custom-slick-slider">
                        {selectedCategory.cards.map((card, index) => (
                          <div className="col-md-6">
                            <div key={index} className="service-card2">
                              <img src={card.image} alt={card.title} />
                              <h4 className="service-card-title mt-2 mb-2"
                                style={{ fontSize: "20px" }}
                              >{card.title}</h4>
                              {card.bullets.map((point, i) => (
                                <h6 key={i}
                                  style={{
                                    fontSize: "16x",
                                    color: "#C2C2C2",
                                    fontWeight: "400"
                                  }}
                                  className="service-card-title card-content-text"
                                ><img src="/assets/cartserialicon.svg" alt="serial No" />{point}</h6>
                              ))}
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </div>
                    {/* <div className="overflow-hidden">
                      <Slider {...settings}>
                        {items.map(item => (
                          <div key={item.id} className="p-4">
                            <div className="bg-blue-500 text-white text-center p-10 rounded shadow">
                              {item.content}
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>
    </>
  );
};

export default AIServiceSection;
