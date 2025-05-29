import React, { useState } from 'react';

function QaProduct() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const accordionData = [
        {
            title: "User Research Deep Dives",
            content:
                "RBy spotting bugs during development and testing phases, we reduce delays, avoid last-minute scrambles, and help you maintain a smooth, predictable release cycle. Faster feedback loops mean faster fixes, and faster fixes mean faster shipping.",
        },
        { title: "Cut down costs on rework and hotfixes", content: "Design process details go here." },
        { title: "Build trust with flawless, high-quality releases", content: "Operations insights and info." },
        { title: "Keep users happy and coming back for more", content: "Maintenance-related information." },
    ];

    return (
        <div className='prodocutdesigndiv mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <h6 className='section-title'>Why Choose QA with Wappgo?</h6>
                    <p className='section-subtitle' style={{ fontSize: "18px" }}>
                        Our streamlined QA process not only saves time and money it builds user trust and brand reputation through flawless, high-performing experiences.
                    </p>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-6'>
                    <div className='product-accordion'>
                        <div className="row justify-content-center">
                            <div className='col-md-9'>
                                {accordionData.map((item, index) => (
                                    <div key={index} className="accordion-item2">
                                        <div className="productdesigaccordian
                                        "
                                            onClick={() => toggleAccordion(index)} style={{
                                                cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                                paddingBottom: "15px",
                                                paddingTop: "15px"
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

                <div className='col-md-6'>
                    <img
                        src="/assets/qaimage.svg"
                        alt="Qa"
                    />
                </div>
            </div>
        </div>
    );
}

export default QaProduct;
