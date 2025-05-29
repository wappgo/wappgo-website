import React, { useState } from 'react';

function AppResults() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const accordionData = [
        {
            title: "🎨 Seamless Design & Development",
            content:
                "Designers and developers in perfect sync from day one—smooth collaboration, zero friction.",
        },
        { title: "🚀 Speed Meets Reliability", content: "Design process details go here." },
        { title: "📈 Engineered for Growth", content: "Operations insights and info." },
        { title: "💡 Transparency Without the Tech Jargon", content: "Maintenance-related information." },
    ];

    return (
        <div className='prodocutdesigndiv mt-5 mb-5'>
            <div className='row align-items-center justify-content-center'>
                <div className='col-md-4'>
                    <img
                        src="/assets/brand-app.svg"
                        alt="app"
                    />
                </div>
                <div className='col-md-5'>
                    <div className='product-accordion'>
                        <h6 className='section-title text-start brandtexttitle'
                        >Why Brands Choose Wappgo, Speed Meets Reliability</h6>
                        <div className="row">
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

                
            </div>
        </div>
    );
}

export default AppResults;
