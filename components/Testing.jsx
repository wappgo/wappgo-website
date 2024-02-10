"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaChevronDown, FaAngleRight } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { Industries, Services } from "./Navbar";
const Testing = ({ NavStyle }) => {
  const [isServiceVisible, setServiceVisible] = useState(false);
  const [isIndustriesVisible, setIndustriesVisible] = useState(false);
  const [showNavSlider, setShowNavSlider] = useState(false);
  const ModalRef = useRef(null);
  const IndustriesRef = useRef(null);

  const handleShow = () => {
    ModalRef.current = setTimeout(() => {
      setServiceVisible(!isServiceVisible);
    }, 500);
  };

  const handleShowIndustries = () => {
    IndustriesRef.current = setTimeout(() => {
      setIndustriesVisible(!isIndustriesVisible)
    },500)
  }
  const roateiconStyle = {
    transition: "all 0.5s ease-in-out",
    color: isServiceVisible && "#1925FF",
    transform: isServiceVisible && "rotate(-180deg)",
    marginLeft: "16px",
    height: "20px",
  };
  return (
    <>
      <main className="navbar-container">
        <article>
          <img
            src={
              NavStyle ? "/assets/cyber-wappgo-logo.png" : "/assets/logo.png"
            }
          />
        </article>

        <div onClick={() => setShowNavSlider(true)} className="menu-btn">
          <img src="/assets/ham-burger.png" />
        </div>

        <ul className="navbar-items">
          <li
            style={{ color: isServiceVisible && "#1925FF" }}
            onClick={handleShow}
          >
            Services
            <FaChevronDown style={roateiconStyle} />
          </li>
          <li onClick={handleShowIndustries} style={{ color: isIndustriesVisible && "#1925FF" }}>
            Industries
          </li>
          <li>About</li>
          <li>Career</li>
          <li>Contact</li>
          <li>
            <img
              height={20}
              src={
                NavStyle ? "/assets/dark-mode.svg" : "/assets/light-mode.svg"
              }
            />
          </li>
        </ul>
      </main>
      {isServiceVisible && <Services />}
      {isIndustriesVisible && <Industries />}
      {showNavSlider && <Slider setShowNavSlider={setShowNavSlider} />}
    </>
  );
};

export default Testing;

export const Slider = ({ NavStyle, setShowNavSlider }) => {
  const [showServices, setShowServices] = useState(false);
  const [showIndustries, setShowIndustries] = useState(false);
  const [showInnovation, setShowInnovation] = useState(false);
  const [showManagement, setShowManagement] = useState(false);
  const [showOperation, setShowOperation] = useState(false);
  const [showDesign, setShowDesign] = useState(false);

  return (
    <main className="nav-slider">
      <div className="logo-cross">
        <img
          src={NavStyle ? "/assets/cyber-wappgo-logo.png" : "/assets/logo.png"}
        />
        <RxCross1 onClick={() => setShowNavSlider(false)} />
      </div>
      <article className="slider-items">
        <div>
          <div
            className="service-heading"
            onClick={() => setShowServices(!showServices)}
          >
            Services
            <span>
              <FaAngleRight />
            </span>
          </div>
          {showServices && (
            <>
              <div>
                <div
                  onClick={() => setShowInnovation(!showInnovation)}
                  className="service-headers"
                >
                  Innovation <FaAngleRight />
                </div>
                {showInnovation && (
                  <div>
                    <li>Agile Software Development</li>
                    <li>DevOps Enginnering</li>
                    <li>Cyber Security Services</li>
                    <li>Website Development</li>
                    <li>Desktop App Development</li>
                    <li>Mobile App Development</li>
                  </div>
                )}
              </div>
              <div>
                <div
                  onClick={() => setShowManagement(!showManagement)}
                  className="service-headers"
                >
                  Management <FaAngleRight />
                </div>
                {showManagement && (
                  <div>
                    <li>Cloud Solutions</li>
                    <li>AI & Machine Learning Services</li>
                    <li>Solution Archietecture</li>
                    <li>Data & Analytics Consulting Services</li>
                  </div>
                )}
              </div>
              <div>
                <div
                  onClick={() => setShowOperation(!showOperation)}
                  className="service-headers"
                >
                  Operation <FaAngleRight />
                </div>
                {showOperation && (
                  <div>
                    <li>Managed Support</li>
                    <li>SRE</li>
                    <li>Security Testing Services</li>
                    <li>Legal Services</li>
                  </div>
                )}
              </div>
              <div>
                <div
                  onClick={() => setShowDesign(!showDesign)}
                  className="service-headers"
                >
                  Design <FaAngleRight />
                </div>
                {showDesign && (
                  <div>
                    <li>Automation</li>
                    <li>UI/UX Design Consultation</li>
                    <li>Graphic Design</li>
                    <li>Promotion & Product Video</li>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
        <div>
          <div
            onClick={() => setShowIndustries(!showIndustries)}
            className="industries-heading"
          >
            Industries <FaAngleRight />
          </div>
          {showIndustries && (
            <div className="industries-services-list">
              <li>Social Media</li>
              <li>Chat Systems</li>
              <li>E-Commerce</li>
              <li>Project Management</li>
              <li>Chatbot</li>
              <li>Logistics</li>
              <li>ERP / CRM</li>
              <li>Healthcare</li>
              <li>Agriculture</li>
              <li>Ed-Tech</li>
              <li>Security</li>
              <li>Law-Tech</li>
              <li>Marketplace</li>
              <li>Cloud</li>
              <li>Travel</li>
              <li>Cyber Security</li>
            </div>
          )}
        </div>
        <li>About</li>
        <li>Career</li>
        <li>Contact</li>
      </article>
    </main>
  );
};
