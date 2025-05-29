"use client";
import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../public/styles/Navbar.css";

// Dynamically import heavy components
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
  
  const containerRef = useRef(null);
  const pathname = usePathname();
  const [isServices , setIsService] = useState(false)
   const [isIndustries , setIsIndustries] = useState(false)
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

  const handleServices=()=>{
    setIsService(!isServices)
    handleDropdown('services', isServices)
  }

   const handleIndustries=()=>{
    setIsIndustries(!isIndustries)
    handleDropdown('industries', isIndustries)
  }
  

  
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
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        closeAllDropdowns();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeAllDropdowns]);
 
  return (
    <>
 
       <nav className="navbar">
        <div className="navbar-container navbar-container-border">
          <div className="logo">
            <Link href="/" prefetch>
              <Image 
                src='/assets/wappgologo1.svg' 
                alt="Logo" 
                width={150}
                height={50}
                priority
              />
            </Link>
          </div>

          <div className="mobile-menu-btn" onClick={() => handleDropdown('mobileMenu', !dropdowns.mobileMenu)}>
            {dropdowns.mobileMenu ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={`nav-links ${dropdowns.mobileMenu ? 'mobile-menu-active' : ''}`}>
            <li className={pathname === "/" ? "activepath" : "active-item"}>
              <Link href="/" >Home</Link>
            </li>
            <li
              onMouseEnter={() => handleDropdown('services', true)}
              onClick={()=>handleServices()}
              className="active-item"
            >
              Services
              <FaChevronDown style={roateiconStyle} />
            </li>
            <li
              onMouseEnter={() => handleDropdown('industries', true)}
              onClick={()=>handleIndustries()}
              className="active-item"
            >
              Industries
            </li>
            <li className="active-item">
              <Link 
                href="/letsdiveintoAI" 
                className="active" 
                // onClick={closeAllDropdowns}
                
                prefetch
              >
                <span className="gradient-text">Let's Dive Into AI</span>
              </Link>
            </li>
            <li className={pathname === "/case-study" ? "activepath" : "active-item"}
           >
              <Link href="/case-study"  prefetch>Case studies</Link>
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
            <li className={pathname === "/about" ? "activepath" : "active-item"}>
              <Link href="/about"  prefetch>About us</Link>
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