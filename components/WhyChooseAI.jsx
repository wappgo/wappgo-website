import "../public/styles/WhyChooseAI.css";
import React,{useEffect,useRef} from "react";

const WhyChooseAI = () => {
  const fadeRefs = useRef([]);

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
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('.dev-card');
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);
  return (
    <div className="ai-section5">
      <div className="ai-section5-container">
        <div className="video-overlay6"></div>
        <div className="video-container6">
     
          <img src='/assets/Rocket-layer.svg' alt="Overlay" className="overlay-image6" />

          <video autoPlay loop muted className="background-video">
            <source src='/assets/plane.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="dev-content">
          <div ref={(el) => (fadeRefs.current[2] = el)} className="row fadeInUp-animation">
            <div className="col-md-6">
              <h1 className="choose-ai">
                Why Choose Us as Your Artificial Intelligence Development Company?
              </h1>
            </div>
            <div className="col-md-6">
              <p className="domain">
                We utilize our extensive domain expertise to push the boundaries of what is possible
                for your business. Our AI software is designed to produce tangible results and unlock
                the full potential of the technology for your business.
              </p>
            </div>

          </div>
          <div className="row mt-5"
          style={{rowGap:"15px"}}
          >
            <div className="col-xl-3 col-lg-6 col-md-6 px-2">
              <div className="dev-card">
                <h3>Vendor Neutral</h3>
                <p>
                  We are an independent AI development company that is not tied to any vendor. Thus, our years of expertise in offering custom artificial intelligence development solutions to our clients are undoubtedly based on business requirements and end goals.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 px-2">
              <div className=" dev-card">
                <h3>Unmatched Technical Prowess</h3>
                <p>
                  Our team of AI app developers has extensive knowledge and experience in offering state-of-the-art AI and ML solutions based on cutting-edge technologies such as cloud, React Native, Angular, MongoDB, MySQL, Javascript, Python, and Ruby.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 px-2">
              <div className=" dev-card">
                <h3>Security-First Approach</h3>
                <p>
                  Our artificial intelligence development services are carried out keeping in mind the latest security compliances. As a dedicated custom AI development company, we ensure our development practices swiftly analyze multiple data sets and track cyber threats.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 px-2">
              <div className="dev-card">
                <h3>Strong R&D Expertise</h3>
                <p>
                  As a dedicated AI app development services company, our R&D endeavors are capable of streamlining business processes and effective in reducing marginal costs and increasing marginal productivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseAI;
