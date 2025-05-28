import React from 'react';

export default function CaseStudies2() {
    return (
        <div className='questiondiv case-container2'>
            <h6 className='comman-title text-center'>Case Studies</h6>
            <h5 className='text-center'>
                Real Success Stories, <span className='real-text'>Real Impact</span>
            </h5>
            <div className='case-studies-cards'>
                <div className='main'>

                    <div className='case-card'>
                        <img src="/assets/maxresdefault.svg" alt="Case Study 1" />
                        <div className='content'>
                            <h6>TheLAL - Broker Oriented Real Estate App</h6>
                            <p>In this video I will answer all these above questions! Give you the plan how to move forward for generating and converting leads to potential customers.
                                Thank you.</p>
                        </div>
                    </div>


                    <div className='case-card'>
                        <img src="/assets/maxresdefault-gis.svg" alt="Case Study 2" />
                        <div className='content'>
                            <h6>Garud MP - AI GIS Software</h6>
                            <p>In this video I will discuss how to get good ideas to start business ! What are the habits that I adopted to get good ideas. I discussed the things that you can follow to get good ideas for business.</p>
                        </div>
                    </div>


                    <div className='case-card'>
                        <img src="/assets/maxresdefault-account.svg" alt="Case Study 3" />
                        <div className='content'>
                            <h6>Accounty.ai - AI based Book Keeping Software</h6>
                            <p>In this video I will discuss how to start business in 2023! Right from Process, Team Building, Legalities, Execution this video covers all. Hope you find this video helpful and meaningful for you.  </p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='d-flex justify-content-center start-btndiv'>
                <button className="start-btn " >
                    View all case studies
                    <img src="/assets/btn-icon.svg" />
                </button>
            </div>
        </div>
    );
}
