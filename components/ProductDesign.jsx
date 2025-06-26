import React, { useState } from 'react';

function ProductDesign() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const accordionData = [
        {
            title: "User Research Deep Dives",
            content:
                "Real insights > random guesswork. We talk to users, not just stakeholders. We don't just make assumptions — we get the facts straight from your users. Through interviews, surveys, usability tests, and real-world observation, we uncover what people actually need. Because when you listen better, you design smarter.",
        },
        { title: "UX Strategy That Hits", content: "Design process details go here." },
        { title: "UI That Looks So Good", content: "Operations insights and info." },
        { title: "Design Systems That Scale", content: "Maintenance-related information." },
    ];

    return (
        <div className='prodocutdesigndiv'>
            <div className='row justify-content-center '>
                <div className='col-md-6'>
                    <h6 className='section-title'>How We Design Products That Actually Matter</h6>
                    <p className='section-subtitle' style={{ fontSize: "18px" }}>
                        We blend user psychology, bold creativity, and sharp strategy to design products people actually want to use. Every click, swipe, and scroll — crafted with intent.
                    </p>
                </div>
            </div>

            <div className='row p-1'>
                <div className='col-md-6'>
                    <div className='product-accordion'>
                        <div className="row justify-content-center">
                            <div className='col-md-9'>
                                {accordionData.map((item, index) => (
                                    <div key={index} className="accordion-item2">
                                        <div className="productdesigaccordian" onClick={() => toggleAccordion(index)} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
                    <video autoPlay loop muted className="video" style={{ height: "495px", width: "100%" }}>
                        <source src="/assets/productdesignvideo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>


                </div>
                <div className='px-4'>
                    <video autoPlay loop muted className="video" style={{ marginTop: "20px", width: "100%" }}>
                        <source src="/assets/uxexamplevideos.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
}

export default ProductDesign;
