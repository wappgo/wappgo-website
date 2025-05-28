"use client";

import Image from 'next/image';

export default function CaseStudyHero() {
    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.3 }
        );
    
        const left = document.querySelector('.case-left');
        const right = document.querySelector('.case-right');
    
        if (left) observer.observe(left);
        if (right) observer.observe(right);
    
        return () => {
          if (left) observer.unobserve(left);
          if (right) observer.unobserve(right);
        };
      }, []);
    return (
        <>
            <div className="case-study-hero">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Section */}
                        <div className="col-md-6 slide-in-left">
                            <h2 className="case-study-title">
                                <span className="case-study-highlight">Case Study:</span> TheLaL –<br />
                                Revolutionizing Real Estate with AI-Driven Insights
                            </h2>
                            <div className="d-flex flex-wrap gap-2 mt-3">
                                <span className="case-study-badge">Research</span>
                                <span className="case-study-badge">Artificial Intelligence</span>
                                <span className="case-study-badge">Development</span>
                                <span className="case-study-badge">Design</span>
                            </div>
                            <div className="case-study-overview mt-4">
                                <h5 className="case-study-overview-title">PROJECT OVERVIEW</h5>
                                <p>
                                    TheLaL is a comprehensive real estate platform designed to streamline property
                                    transactions and fractional investments in the Indian and Dubai markets. With a
                                    vision to simplify real estate investments, TheLaL integrates AI-driven insights
                                    to offer a seamless, data-backed user experience.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end slide-in-right">
                            <Image
                                src="/assets/case-studies-mobile.svg"
                                alt="Phone"
                                width={440}
                                height={552}
                                className="case-study-phone"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-scope-section">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Section with Image */}
                        <div className="col-md-6 d-flex justify-content-start">
                            <Image
                                src="/assets/project-scope.svg" // Change to your actual image path
                                alt="Project Scope"
                                width={400}
                                height={450}
                                className="project-scope-image"
                            />
                        </div>

                        {/* Right Section with Text */}
                        <div className="col-md-6">
                            <h3 className="project-scope-title">PROJECT SCOPE</h3>
                            <p className="project-scope-text">
                                Design and develop a robust application for both web and mobile platforms, ensuring seamless
                                performance across devices. Integrate AI-driven data analytics to provide users with accurate
                                and insightful market information. Build a scalable backend architecture to handle extensive property data,
                                user interactions, and secure transactions. Develop and implement an AI-powered query system
                                for real-time, intelligent responses to real estate inquiries. Create a user-friendly, modern
                                interface that caters to both novice and experienced real estate investors.
                            </p>
                            <p className="project-scope-text">
                                Design a user-friendly, modern interface that caters to both novice and experienced real estate investors.
                                Integrate an AI-powered query system to provide accurate, data-driven insights to users.
                                Develop detailed user personas, journey maps, and prototypes for both web and mobile platforms.
                                Create a responsive and accessible design, ensuring scalability for future expansions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    );
}
