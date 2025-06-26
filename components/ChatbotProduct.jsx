import React, { useState } from 'react';

function ChatbotProduct() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const accordionData = [
        {
            title: "Intent-Based Responses",
            content:
                "ROur chatbots don’t just answer they understand.Powered by advanced NLP and machine learning, they interpret user intent behind every message, not just the keywords. This ensures more natural, human-like conversations that feel personalized and intelligent.",
        },
        { title: "Multilingual Conversations", content: "Design process details go here." },
        { title: "Sentiment Analysis", content: "Operations insights and info." },
        { title: "Seamless Omni-Channel Integration", content: "Maintenance-related information." },
        { title: "Enterprise-Grade Security", content: "Maintenance-related information." },
    ];

    return (
        <div className='prodocutchatbotdiv'>
            <div className='row justify-content-center'>
                <div className='col-lg-8 col-md-12 text-center'>
                    <h6 className='expertise-title'>What Our Chatbots Can Do for You</h6>
                    <p className='expertise-description' style={{ fontSize: "18px",width:"100%" }}>
                        Unlock smarter, faster, and more meaningful conversations with our AI-powered chatbots. Whether it’s solving user queries, boosting sales, or delivering instant support.
                    </p>
                </div>
            </div>

            <div className='row mt-2'>
                <div className='col-xl-7 col-lg-12 col-md-12'>
                    <div className='chatchoosediv'>
                        <video autoPlay loop muted className="video" style={{
                            height: "495px", width: "100%",
                            borderRadius: "24px"
                        }}>
                            <source src="/assets/chatbotmiddlevideos.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className='chatcontentdiv'>
                            <div className='row justify-content-end'>
                                <div className='col-lg-8'>
                                    <div className='product-accordion '>
                                        <div className="row justify-content-end">
                                            <div className='col-md-10 product-accordioncontent'>
                                                {accordionData.map((item, index) => (
                                                    <div key={index} className="accordion-item2">
                                                        <div className="productdesigaccordian" onClick={() => toggleAccordion(index)} style={{
                                                            cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                                            paddingTop: "10px",
                                                            paddingBottom: "10px"
                                                        }}>
                                                            <h4>{item.title}</h4>
                                                            <img
                                                                src="/assets/accordian-arrow.svg"
                                                                alt="Arrow"
                                                                className={`arrow transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                                                            />
                                                        </div>
                                                        {openIndex === index && (
                                                            <p className="product-accordian-text">{item.content}</p>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className='mobile-chatchoosediv'>
                        {accordionData.map((item, index) => (
                            <div key={index} className="accordion-item2">
                                <div className="productdesigaccordian" onClick={() => toggleAccordion(index)} style={{
                                    cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                    paddingTop: "10px",
                                    paddingBottom: "10px"
                                }}>
                                    <h4>{item.title}</h4>
                                    <img
                                        src="/assets/accordian-arrow.svg"
                                        alt="Arrow"
                                        className={`arrow transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                                    />
                                </div>
                                {openIndex === index && (
                                    <p className="product-accordian-text">{item.content}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatbotProduct;
