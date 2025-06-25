"use client";
import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../public/styles/NavbarAI.css";

// Lazy load heavy dropdowns
const ServicesDropdown = dynamic(() => import('./ServiceDropdown2'), {
  loading: () => <div className="services-container"></div>,
  ssr: false
});
const IndustriesDropdown = dynamic(() => import('./IndustriesDropdowns'), {
  loading: () => <div className="services-container-indus"></div>,
  ssr: false
});
const NavSlider = dynamic(() => import('./NavSlider'), {
  ssr: false
});

const Navbar = () => {
  const pathname = usePathname();
  const containerRef = useRef(null);

  const [dropdowns, setDropdowns] = useState({
    services: false,
    industries: false,
    mobileMenu: false,
    navSlider: false,
  });

  const [isServices, setIsService] = useState(false);
  const [isIndustries, setIsIndustries] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  const handleDropdown = useCallback((key, value) => {
    setDropdowns(prev => ({
      ...prev,
      services: key === 'services' ? value : false,
      industries: key === 'industries' ? value : false,
      [key]: value
    }));
  }, []);

  const closeAllDropdowns = useCallback(() => {
    setDropdowns({
      services: false,
      industries: false,
      mobileMenu: false,
      navSlider: false
    });
    setMobileServicesOpen(false);
    setMobileIndustriesOpen(false);
  }, []);

  const roateiconStyle = useMemo(() => ({
    transition: "all 0.3s ease-in-out",
    color: dropdowns.services ? "#1925FF" : undefined,
    transform: dropdowns.services ? "rotate(-180deg)" : undefined,
    marginLeft: "16px",
    height: "20px",
  }), [dropdowns.services]);

  useGSAP(() => {
    gsap.from(".toggleimg", {
      x: 8,
      duration: 0.9,
      opacity: 0.5
    });
  }, []);

  const handleServices = () => {
    setIsService(!isServices);
    handleDropdown('services', !isServices);
  };

  const handleIndustries = () => {
    setIsIndustries(!isIndustries);
    handleDropdown('industries', !isIndustries);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        closeAllDropdowns();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeAllDropdowns]);

  useEffect(() => {
    closeAllDropdowns();
  }, [pathname]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container5 navbar-container-border3">
          <div className="logo">
            <Link href="/" prefetch>
              <Image src='/assets/logo.svg' alt="Logo" width={150} height={50} priority />
            </Link>
          </div>

          <div className="mobile-menu-btn2" onClick={() => handleDropdown('mobileMenu', !dropdowns.mobileMenu)}>
            {dropdowns.mobileMenu ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={`nav-links5 ${dropdowns.mobileMenu ? 'd-none mobile-menu-active' : ''}`}>
            <li className={pathname === "/" ? "activepath" : "active-item"}>
              <Link href="/">Home</Link>
            </li>
            <li
              onMouseEnter={() => handleDropdown('services', true)}
              onClick={handleServices}
              className="active-item"
            >
              Services
              <FaChevronDown style={roateiconStyle} />
            </li>
            <li
              onMouseEnter={() => handleDropdown('industries', true)}
              onClick={handleIndustries}
              className="active-item"
            >
              Industries
            </li>
            <li className="active-item">
              <Link href="/letsdiveintoAI" prefetch>
                <span className="gradient-text">Let's Dive Into AI</span>
              </Link>
            </li>
            <li className={pathname === "/case-study" ? "activepath" : "active-item"}>
              <Link href="/case-study" prefetch>Case studies</Link>
            </li>
            <li className="notexpose active-item">
              <Image src='/assets/noexpose-logo.svg' alt="NotExpose Icon" className="notexpose-icon" width={24} height={24} />
              <span className="notexpose-text">NoExpose</span>
            </li>
            <li className={pathname === "/about" ? "activepath" : "active-item"}>
              <Link href="/about" prefetch>About us</Link>
            </li>
            <li className={pathname === "/career" ? "activepath" : "active-item"}>
              <Link href="/career" prefetch>Careers</Link>
            </li>

            {dropdowns.mobileMenu && (
              <li className="mobile-contact-btn">
                <Link href="/contact" onClick={closeAllDropdowns} prefetch>CONTACT US</Link>
              </li>
            )}
          </ul>

          {!dropdowns.mobileMenu && (
            <Link href="/contact" className="desktop-contact-btn" onClick={closeAllDropdowns} prefetch>Contact Us</Link>
          )}
        </div>
      </nav>

      <div ref={containerRef}>
        {/* Mobile View Dropdowns */}
        {dropdowns.mobileMenu && (
          <ul className="nav-links mobile-menu-active">
            <li onClick={closeAllDropdowns}><Link href="/">Home</Link></li>

            <li
              onClick={() => {
                setMobileServicesOpen(prev => {
                  if (!prev) setMobileIndustriesOpen(false);
                  return !prev;
                });
              }}
              className="dropdown-toggle"
              style={{ fontSize: "14px" }}
            >
              Services
            </li>
            {mobileServicesOpen && (
              <ul className="mobile-submenu p-0 m-0">
                <li onClick={closeAllDropdowns}><Link href="/web-development-services">Web Development</Link></li>
                <li onClick={closeAllDropdowns}><Link href="/ui-ux-services">UI/UX Design</Link></li>
                <li onClick={closeAllDropdowns}><Link href="/devops-services">DevOps Services</Link></li>
                <li onClick={closeAllDropdowns}><Link href="/qa-testing-services">QA / Testing</Link></li>
                <li onClick={closeAllDropdowns}><Link href="/chatbot-development-services">Chatbot Services</Link></li>
                <li onClick={closeAllDropdowns}><Link href="/data-engineering-services">Data Engineering</Link></li>
                <li onClick={closeAllDropdowns}><Link href="/app-development-services">App Development</Link></li>
              </ul>
            )}

            <li
              onClick={() => {
                setMobileIndustriesOpen(prev => {
                  if (!prev) setMobileServicesOpen(false);
                  return !prev;
                });
              }}
              className="dropdown-toggle"
              style={{ fontSize: "14px" }}
            >
              Industries
            </li>
            {mobileIndustriesOpen && (
              <ul className="mobile-submenu p-0 m-0">
                <li onClick={closeAllDropdowns}><Link href="/chatsystem">Chatsystem</Link></li>
                <li onClick={closeAllDropdowns}><Link href="/ecommerce">E-Commerce</Link></li>
                <li onClick={closeAllDropdowns}><Link href="/projectmanagement">Project Management</Link></li>
                <li onClick={closeAllDropdowns}><Link href="/social-media">Social Media</Link></li>
                <li onClick={closeAllDropdowns}><Link href="/erp-crm">ERP / CRM</Link></li>
                <li onClick={closeAllDropdowns}><Link href="/healthcare">Healthcare</Link></li>
                <li onClick={closeAllDropdowns}><Link href="/logistics">Logistics</Link></li>
              </ul>
            )}

            {/* <li onClick={closeAllDropdowns}><Link href="/letsdiveintoAI"><span className="gradient-text">Let's Dive Into AI</span></Link></li> */}
            <li onClick={closeAllDropdowns}><Link href="/case-study">Case studies</Link></li>
            <li onClick={closeAllDropdowns}><Link href="/about">About us</Link></li>
            <li onClick={closeAllDropdowns}><Link href="/career">Careers</Link></li>
            <li className="desktop-contact-btn start-btn mt-2" style={{ width: "200px" }} onClick={closeAllDropdowns}>
              <Link href="/contact">CONTACT US</Link>
            </li>
          </ul>
        )}

        {/* Desktop Dropdowns */}
        {dropdowns.services && <ServicesDropdown hideServices={closeAllDropdowns} />}
        {dropdowns.industries && <IndustriesDropdown hideServices={closeAllDropdowns} />}
      </div>

      {dropdowns.navSlider && (
        <NavSlider
          showNavSlider={dropdowns.navSlider}
          setShowNavSlider={(val) => handleDropdown('navSlider', val)}
        />
      )}
    </>
  );
};

export default Navbar;
