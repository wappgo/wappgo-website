import { useEffect, useRef, useState } from "react";
import "../public/styles/Transform.css";
import "../public/styles/AIhero.css"
// import Transformvideo from '../assets/transform-video.mp4'
const Transform = () => {
  const contentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);
  const videoRef = useRef(null);
  const [videoVisible, setVideoVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoVisible(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section className="transform">
      <div className="container-lg">
      {/* Left Side: Video */}
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="transform-video">
          <video
                ref={videoRef}
                className={videoVisible ? "video-animate" : ""}
                autoPlay
                loop
                muted
              >
              <source src='/assets/transform-video.mp4' type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {/* Right Side: Text Content */}
        <div className="col-md-6">
        <div
              ref={contentRef}
              className={`transform-content ${
                isVisible ? "transform-content-animate" : ""
              }`}
            >
            <h1>
              Transform Your Business with <span className="gradient-text">AI</span>
            </h1>
            <p>
              Why do things the old-school way when AI can supercharge your business? Wappgo AI isn’t just smart—it’s a game-changer. Automate workflows, analyze data like a pro, and make decisions faster than ever. Embrace the future with Wappgo's AI services. Contact us today to discover how our AI solutions can drive growth, enhance efficiency, and position your business as a leader in the digital age.
            </p>
            <p>
              At Wappgo, we empower businesses to harness the transformative power of Artificial Intelligence (AI), driving innovation, efficiency, and growth. Our comprehensive AI development services are tailored to meet the unique needs of your organization, ensuring seamless integration and tangible results.
            </p>
            <button className="transform-button">Contact Us</button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Transform;
