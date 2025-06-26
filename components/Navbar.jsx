"use client";
import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import "../public/styles/Navbar.css";
import { useRouter } from "next/navigation";

const ServicesDropdown = dynamic(() => import('./ServicesDropdown'), {
  loading: () => <div className="services-container"></div>,
  ssr: false
});
const IndustriesDropdown = dynamic(() => import('./IndustriesDropdown'), {
  loading: () => <div className="services-container-indus"></div>,
  ssr: false
});
const NavSlider = dynamic(() => import('./NavSlider'), {
  ssr: false
});

const Navbar = () => {
  const [dropdowns, setDropdowns] = useState({
    services: false,
    industries: false,
    mobileMenu: false,
    navSlider: false
  });
  const router = useRouter()
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const pathname = usePathname();
  const containerRef = useRef(null);
  const [isServices, setIsService] = useState(false);
  const [isIndustries, setIsIndustries] = useState(false);

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
  }, []);

  const handleServices = () => {
    setIsService(!isServices);
    handleDropdown('services', isServices);
  };

  const handleIndustries = () => {
    setIsIndustries(!isIndustries);
    handleDropdown('industries', isIndustries);
  };

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target) &&
        !dropdowns.mobileMenu // Don’t close on mobile menu interactions
      ) {
        closeAllDropdowns();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeAllDropdowns, dropdowns.mobileMenu]);

  const handleNavigation = (path) => {
    closeAllDropdowns();
    router.push(path);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container navbar-container-border">
          <div className="logo" type="button" onClick={() => router.push('/')}>
            <Image
              src='/assets/wappgologo1.svg'
              alt="Logo"
              width={150}
              height={50}
              priority
            />
          </div>

          <div className="mobile-menu-btn" onClick={() => handleDropdown('mobileMenu', !dropdowns.mobileMenu)}>
            {dropdowns.mobileMenu ? <FaTimes /> : <FaBars />}
          </div>

          {/* Desktop Menu */}
          <ul className={`nav-links ${dropdowns.mobileMenu ? 'mobile-menu-active d-none' : ''}`}>
            <li className={pathname === "/" ? "activepath" : "active-item"} type="button" onClick={() => router.push('/')}>
              Home
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

            <li className="active-item" type="button" onClick={() => router.push('/letsdiveintoAI')}>
              <span className="gradient-text">Let's Dive Into AI</span>
            </li>

            <li className={pathname === "/case-study" ? "activepath" : "active-item"} type="button" onClick={() => router.push('/case-study')}>
              Case studies
            </li>

            <li className="notexpose active-item">
              <Image
                src='/assets/noexpose-logo.svg'
                alt="NotExpose Icon"
                className="notexpose-icon"
                width={24}
                height={24}
              />
              <span className="notexpose-text">NoExpose</span>
            </li>

            <li className={pathname === "/about" ? "activepath" : "active-item"} type="button" onClick={() => router.push('/about')}>
              About us
            </li>

            <li className={pathname === "/career" ? "activepath" : "active-item"} type="button" onClick={() => router.push('/career')}>
              Careers
            </li>
          </ul>

          {!dropdowns.mobileMenu && (
            <span type="button" onClick={() => { router.push('/contact'), closeAllDropdowns }} className="desktop-contact-btn start-btn" >
              Contact Us
            </span>
          )}
        </div>
      </nav>

      {/* Mobile and Dropdown Menus */}
      <div ref={containerRef}>
        {/* Mobile Menu Items */}
        {dropdowns.mobileMenu && (
          <ul className="nav-links mobile-submenu mobile-menu-active">
            <li onClick={() => handleNavigation("/")}>Home</li>

            {/* Services */}
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
                <li onClick={() => handleNavigation("/web-development-services")}>Web Development</li>
                <li onClick={() => handleNavigation("/ui-ux-services")}>UI/UX Design</li>
                <li onClick={() => handleNavigation("/devops-services")}>DevOps Services</li>
                <li onClick={() => handleNavigation("/qa-testing-services")}>QA / Testing</li>
                <li onClick={() => handleNavigation("/chatbot-development-services")}>Chatbot Services</li>
                <li onClick={() => handleNavigation("/data-engineering-services")}>Data Engineering</li>
                <li onClick={() => handleNavigation("/app-development-services")}>App Development</li>
              </ul>
            )}

            {/* Industries */}
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
                <li onClick={closeAllDropdowns}><Link href="/industries">E-Commerce</Link></li>
                <li onClick={closeAllDropdowns}><Link href="/projectmanagement">Project Management</Link></li>
                <li onClick={closeAllDropdowns}><Link href="/social-media">Social Media</Link></li>
                <li onClick={closeAllDropdowns}><Link href="/ERP">ERP / CRM</Link></li>
                {/* <li onClick={closeAllDropdowns}><Link href="/healthcare">Healthcare</Link></li>
                <li onClick={closeAllDropdowns}><Link href="/logistics">Logistics</Link></li> */}
              </ul>
            )}

            {/* Other links */}
            <li onClick={closeAllDropdowns}><Link href="/letsdiveintoAI"><span className="gradient-text">Let's Dive Into AI</span></Link></li>
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

      {/* NavSlider */}
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
