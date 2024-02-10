"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaAngleRight } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';
import Link from "next/link";
const Navbar = ({ NavStyle, Route }) => {
  const [isServiceVisible, setServiceVisible] = useState(false);
  const [isIndustriesVisible, setIndustriesVisible] = useState(false);
  const [showNavSlider, setShowNavSlider] = useState(false);
  const [currentPage, setCurrentPage] = useState(false)
  const ModalRef = useRef(null);
  const IndustriesRef = useRef(null);

  const router = useRouter();
  const pathname = usePathname()
  const handleShow = () => {
    ModalRef.current = setTimeout(() => {
      setServiceVisible(!isServiceVisible);
      setIndustriesVisible(false);
    }, 300);
  };

  const handleShowIndustries = () => {
    IndustriesRef.current = setTimeout(() => {
      setIndustriesVisible(!isIndustriesVisible);
      setServiceVisible(false);
    }, 300);
  };

  const handleNavSlider = () => {
    setShowNavSlider(true);
  };

  const roateiconStyle = {
    transition: "all 0.3s ease-in-out",
    color: isServiceVisible && "#1925FF",
    transform: isServiceVisible && "rotate(-180deg)",
    marginLeft: "16px",
    height: "20px",
  };

  const handleCurrentPage = () => {
    if(pathname == "/information-technology"){
      router.push("/") 
    } else {
      router.push("/information-technology");
    }

}
  return (
    <>
      <main style={{backgroundColor: NavStyle && NavStyle.backgroundColor}} className="navbar-container">
        <article>
          <img
          style={{cursor: "pointer"}}
          onClick={() => router.push("/")}
            src={
              NavStyle ? "/assets/cyber-wappgo-logo.png" : "/assets/logo.png"
            }
          />
        </article>
        <div onClick={handleNavSlider} className="menu-btn">
          <img  src={NavStyle ? "/assets/cyber-hamburger.svg" :"/assets/ham-burger.png"} />
        </div>

        <div style={{color: NavStyle && NavStyle.color}} className="navbar-items">
          <li
            style={{ color: isServiceVisible && "#1925FF" }}
            onClick={handleShow}
          >
            Services
            <FaChevronDown style={roateiconStyle} />
          </li>
          <li
            onClick={handleShowIndustries}
            style={{ color: isIndustriesVisible && "#1925FF" }}
          >
            Industries
          </li>
          <li onClick={() => router.push("/about")}>About</li>
          <li>Career</li>
          <li onClick={() => router.push("/contact")}>Contact</li>
          <li className="togglingitem">
            <span>CYBER</span>
            <img
            className="toggleimg"
            onClick={() => handleCurrentPage()}
              height={20}
              src={
                NavStyle ? "/assets/dark-mode.svg" : "/assets/light-mode.svg"
              }
            />
            <span>IT</span>
          </li>
        </div>
      </main>
      {isServiceVisible && <Services NavStyle={true}/>}
      {isIndustriesVisible && <Industries NavStyle={true}/>}
      {showNavSlider && (
        <Slider
          showNavSlider={showNavSlider}
          setShowNavSlider={setShowNavSlider}
        />
      )}
    </>
  );
};

export default Navbar;

export const Slider = ({ NavStyle, showNavSlider, setShowNavSlider }) => {
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
                    <Link className="nav-slider-route" href="/services/innovation/agile-software-development">Agile Software Devlopment </Link>
                    <Link
                      className="nav-slider-route"
                      href="/services/innovation/cyber-service"
                    >
                      Cyber Security Services
                    </Link>
                    <Link
                      className="nav-slider-route"
                      href="/services/innovation/desktop-app-development"
                    >
                      Desktop App Development
                    </Link>
                    <Link
                      className="nav-slider-route"
                      href="/services/innovation/devops-engineering"
                    >
                      DevOps Engineering
                    </Link>
                    <Link
                      className="nav-slider-route"
                      href="/services/innovation/mobile-app-development"
                    >
                      Mobile App Development
                    </Link>
                    <Link
                      className="nav-slider-route"
                      href="/services/innovation/website-development"
                    >
                      Website Development
                    </Link>
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
                    <Link
                      className="nav-slider-route"
                      href="/services/management/cloud-solution"
                    >
                      Cloud Solutions
                    </Link>
                    <Link
                      className="nav-slider-route"
                      href="/services/management/ai-machine-learning"
                    >
                      AI & Machine Learning Services
                    </Link>
                    <Link
                      className="nav-slider-route"
                      href="/services/management/solution-architecture"
                    >
                      Solution Architecture
                    </Link>
                    <Link
                      className="nav-slider-route"
                      href="/services/management/data-analytics-services"
                    >
                      Data & Analytics Consulting Services
                    </Link>
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
                    <Link
                      className="nav-slider-route"
                      href="/services/operations/managed-support"
                    >
                      Managed Support
                    </Link>
                    <Link
                      className="nav-slider-route"
                      href="/services/operations/sre"
                    >
                      SRE
                    </Link>
                    <Link
                      className="nav-slider-route"
                      href="/services/operations/security-testing-services"
                    >
                      Security Testing Services
                    </Link>
                    <Link
                      className="nav-slider-route"
                      href="/services/operations/legal-services"
                    >
                      Legal Services
                    </Link>
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
                    <Link
                      className="nav-slider-route"
                      href="/services/design/automation"
                    >
                      Automation
                    </Link>
                    <Link
                      className="nav-slider-route"
                      href="/services/design/ui-ux-design"
                    >
                      UI/UX Design & Consultation
                    </Link>
                    <Link
                      className="nav-slider-route"
                      href="/services/design/graphic-design"
                    >
                      Graphic Design
                    </Link>
                    <Link
                      className="nav-slider-route"
                      href="/services/design/promotion-product-video"
                    >
                      Promotion & Product Video
                    </Link>
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

export const Services = () => {
  return (
    <main className="services-container">
      <div className="services-items">
        <h4>Innovation</h4>
        <Link
          className="link-route"
          href="/services/innovation/agile-software-development"
        >
          Agile Software Devlopment
        </Link>
        <Link className="link-route" href="/services/innovation/cyber-service">
          Cyber Security Services
        </Link>
        <Link
          className="link-route"
          href="/services/innovation/desktop-app-development"
        >
          Desktop App Development
        </Link>
        <Link
          className="link-route"
          href="/services/innovation/devops-engineering"
        >
          DevOps Engineering
        </Link>
        <Link
          className="link-route"
          href="/services/innovation/mobile-app-development"
        >
          Mobile App Development
        </Link>
        <Link
          className="link-route"
          href="/services/innovation/website-development"
        >
          Website Development
        </Link>
      </div>
      <div className="services-items">
        <h4>Management</h4>
        <Link className="link-route" href="/services/management/cloud-solution">
          Cloud Solutions
        </Link>
        <Link
          className="link-route"
          href="/services/management/ai-machine-learning"
        >
          AI & Machine Learning Services
        </Link>
        <Link
          className="link-route"
          href="/services/management/solution-architecture"
        >
          Solution Architecture
        </Link>
        <Link
          className="link-route"
          href="/services/management/data-analytics-services"
        >
          Data & Analytics Consulting Services
        </Link>
      </div>
      <div className="services-items">
        <h4>Operations</h4>
        <Link
          className="link-route"
          href="/services/operations/managed-support"
        >
          Managed Support
        </Link>
        <Link className="link-route" href="/services/operations/sre">
          SRE
        </Link>
        <Link
          className="link-route"
          href="/services/operations/security-testing-services"
        >
          Security Testing Services
        </Link>
        <Link className="link-route" href="/services/operations/legal-services">
          Legal Services
        </Link>
      </div>
      <div className="services-items">
        <h4>Designs</h4>
        <Link className="link-route" href="/services/design/automation">
          Automation
        </Link>
        <Link className="link-route" href="/services/design/ui-ux-design">
          UI/UX Design & Consultation
        </Link>
        <Link className="link-route" href="/services/design/graphic-design">
          Graphic Design
        </Link>
        <Link
          className="link-route"
          href="/services/design/promotion-product-video"
        >
          Promotion & Product Video
        </Link>
      </div>
    </main>
  );
};

export const Industries = ({ show }) => {
  return (
    <main className="industries-container">
      <div className="industries-items">
        <Link href="/services/innovation/agile-software-development" className="link-route">Social Media</Link>
        <Link href="/services/innovation/agile-software-development" className="link-route">Chat Systems</Link>
        <Link href="/services/innovation/agile-software-development" className="link-route">E-Commerce</Link>
        <Link href="/services/innovation/agile-software-development" className="link-route">Project Management</Link>
      </div>
      <div className="industries-items">
        <Link href="/services/innovation/agile-software-development" className="link-route">Chatbot</Link>
        <Link href="/services/innovation/agile-software-development" className="link-route">Logistics</Link>
        <Link href="/services/innovation/agile-software-development" className="link-route">ERP / CRM</Link>
        <Link href="/services/innovation/agile-software-development" className="link-route">Healthcare</Link>
      </div>
      <div className="industries-items">
        <Link href="/services/innovation/agile-software-development" className="link-route">Agriculture</Link>
        <Link href="/services/innovation/agile-software-development" className="link-route">Ed-Tech</Link>
        <Link href="/services/innovation/agile-software-development" className="link-route">Security</Link>
        <Link href="/services/innovation/agile-software-development" className="link-route">Law-Tech</Link>
      </div>
      <div className="industries-items">
        <Link href="/services/innovation/agile-software-development" className="link-route">Marketplace</Link>
        <Link href="/services/innovation/agile-software-development" className="link-route">Cloud</Link>
        <Link href="/services/innovation/agile-software-development" className="link-route">Travel</Link>
        <Link href="/services/innovation/agile-software-development" className="link-route">Cyber Security</Link>
      </div>
    </main>
  );
};
