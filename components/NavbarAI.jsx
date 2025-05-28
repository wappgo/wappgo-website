// "use client";
// import React, { useState,useEffect,useRef } from 'react';
// import { FaAngleDown, FaBars, FaTimes } from 'react-icons/fa';
// import "../public/styles/NavbarAI.css";
// import { useRouter } from "next/navigation";
// import { usePathname } from 'next/navigation';
// // import Icon from '../public/assets/noexpose-logo.svg';
// // import Logo from '../assets/logo.svg';

// const Navbar = () => {
//   const [isMobileMenuOpen1, setIsMobileMenuOpen1] = useState(false);
//   const [isServiceVisible, setServiceVisible] = useState(false);
//   const containerRef = useRef(null);
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen1(!isMobileMenuOpen1);
//   };
//   const handleShow = () => {

//     setServiceVisible(true);
//     // setIndustriesVisible(false);
//   };
//   useEffect(() => {
//     // Function to handle clicks outside of Services and Industries divs
//     const handleClickOutside = (event) => {
//       if (
//         containerRef.current &&
//         !containerRef.current.contains(event.target)
//       ) {
//         handleHide();
//       }
//     };

//     // Add event listener to the document body
//     document.addEventListener("mousedown", handleClickOutside);

//     // Cleanup function to remove event listener when component unmounts
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);
//   const router = useRouter();
//   return (
//     <nav className="navbar2">
//       <div className="navbar-container2">
//         {/* Logo */}
//         <div className="logo2">
//           <img src='/assets/logo.svg' alt="Logo" />
//         </div>

//         {/* Mobile menu button (hamburger) */}
//         <div className="mobile-menu-btn5" onClick={toggleMobileMenu}>
//           {isMobileMenuOpen1 ? <FaTimes /> : <FaBars />}
//         </div>

//         {/* Navigation links */}
//         <ul className={`nav-links2 ${isMobileMenuOpen1 ? 'mobile-menu-active2' : ''}`}>
//           <li><a onClick={() => { setIsMobileMenuOpen1(false); router.push("/") }}>Home</a></li>
//           <li onMouseEnter={handleShow}
//               // onClick={handleShow}
//               style={{ color: isServiceVisible && "#1925FF", borderBottom: isServiceVisible && "2px solid #1925FF" }} className="dropdown">
//             <a  onClick={() => setIsMobileMenuOpen1(false)}>Services <FaAngleDown /></a>
//           </li>
//           <li className="dropdown">
//             <a href="#industries" onClick={() => setIsMobileMenuOpen1(false)}>Industries <FaAngleDown /></a>
//           </li>
//           <li><a className="active" onClick={() => {
//             setIsMobileMenuOpen1(false);
//             router.push("/letsdiveintoAI")
//           }}>
//             <span className="gradient-text">Let's Dive Into AI</span>
//           </a></li>
//           <li><a onClick={() =>{ setIsMobileMenuOpen1(false);router.push("/case-study") }}>Case studies</a></li>
//           <li className="notexpose">
//             <img src='/assets/noexpose-logo.svg' alt="NotExpose Icon" className="notexpose-icon" />
//             <span className="notexpose-text">NotExpose</span>
//           </li>
//           <li><a onClick={() => {
//             setIsMobileMenuOpen1(false);
//             router.push("/about");
//           }}>About us</a></li>
//           <li><a href="#careers" onClick={() => setIsMobileMenuOpen1(false)}>Careers</a></li>

//           {/* Mobile-only contact button */}
//           {isMobileMenuOpen1 && (
//             <li className="mobile-contact-btn2">
//               <a href="#contact" onClick={() => setIsMobileMenuOpen1(false)}>CONTACT US</a>
//             </li>
//           )}
//         </ul>

//         {/* Desktop-only contact button */}
//         {!isMobileMenuOpen1 && (
//           <a href="#contact" className="desktop-contact-btn">CONTACT US</a>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// "use client";
// import Image from "next/image";
// import { useEffect, useRef, useState, useCallback } from "react";
// import { FaChevronDown, FaAngleRight } from "react-icons/fa6";
// import { RxCross1 } from "react-icons/rx";
// import { useRouter } from "next/navigation";
// import { usePathname } from 'next/navigation';
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import Link from "next/link";
// import "../public/styles/NavbarAI.css";
// import { FaAngleDown, FaBars, FaTimes } from 'react-icons/fa';
// const Navbar = ({ NavStyle, Route, }) => {
//   const [isServiceVisible, setServiceVisible] = useState(false);
//   const [isIndustriesVisible, setIndustriesVisible] = useState(false);
//   const [showNavSlider, setShowNavSlider] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [currentPage, setCurrentPage] = useState(false)
//   const modalRef = useRef(null);
//   const industriesRef = useRef(null);
//   const containerRef = useRef(null);

//   const router = useRouter();
//   const pathname = usePathname()
//   const tl = gsap.timeline()
//   const handleShow = () => {

//     setServiceVisible(true);
//     setIndustriesVisible(false);
//   };

//   const handleShowIndustries = () => {
//     setIndustriesVisible(true);
//     setServiceVisible(false);
//   };
//   const handleNavSlider = () => {
//     setShowNavSlider(true);
//   };
//   const hideServices = () => {
//     setServiceVisible(false);
//     setIndustriesVisible(false);
//   };
//   const handleHide = () => {
//     setServiceVisible(false);
//     setIndustriesVisible(false);
//   };
//   const roateiconStyle = {
//     transition: "all 0.3s ease-in-out",
//     color: isServiceVisible && "#ffff",
//     transform: isServiceVisible && "rotate(-180deg)",
//     marginLeft: "16px",
//     height: "20px",
//   };


//   const handleCurrentPage = useCallback(() => {
//     if (pathname === "/information-technology") {
//       router.push("/");
//     } else {
//       router.push("/information-technology");
//     }
//   }, [pathname, router]);
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   useGSAP(() => {
//     tl.from(".toggleimg", {
//       x: 8,
//       duration: 0.9,
//       opacity: 0.5
//     })


//   })
//   useEffect(() => {
//     // Function to handle clicks outside of Services and Industries divs
//     const handleClickOutside = (event) => {
//       if (
//         containerRef.current &&
//         !containerRef.current.contains(event.target)
//       ) {
//         handleHide();
//       }
//     };

//     // Add event listener to the document body
//     document.addEventListener("mousedown", handleClickOutside);

//     // Cleanup function to remove event listener when component unmounts
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   console.log("pathname", pathname)
//   return (
//     <>
//       <nav className="navbar">
//         <div className={`navbar-container5 navbar-container-border3`}>
//           <div className="logo">
//           <img src='/assets/logo.svg' alt="Logo" />
//           </div>

//           <div className="mobile-menu-btn2" onClick={toggleMobileMenu}>
//             {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
//           </div>


//           {/* <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`}>
//           <li
//             onMouseEnter={handleShow}
//             style={{ color: isServiceVisible && "#1925FF" }}
//           // onClick={handleShow}
//           >
//             Services
//             <FaChevronDown style={roateiconStyle} />
//           </li>
//           <li
//             onMouseEnter={handleShowIndustries}
//             style={{ color: isIndustriesVisible && "#1925FF" }}
//           >
//             Industries
//           </li>
//           <li onClick={() => {
//             router.push("/about")
//           }} className={pathname === "/about" ? "active-navbar" : ""}>About</li>
//           <li>Career</li>
//           <li onClick={() => router.push("/contact")} className={pathname === "/contact" ? "active-navbar" : ""}>Contact</li>
          
//         </ul> */}


//           <ul className={`nav-links5 ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`}>
//             <li className={`active-item2 ${pathname === "/" ? "activepath2" : ""}`}><a onClick={() => { setIsMobileMenuOpen(false); router.push("/") }}>Home</a></li>
//             <li
//               onMouseEnter={handleShow}
//               // onClick={handleShow}
//               // style={{ color: isServiceVisible && "#1925FF", borderBottom: isServiceVisible && "2px solid #ffff" }}
//               className="active-item2"
//             >
//               Services
//               <FaChevronDown style={roateiconStyle} />
//             </li>
//             <li className="active-item2"
//               onMouseEnter={handleShowIndustries}
//               // // onClick={handleShowIndustries}
//               // style={{ color: isIndustriesVisible && "#1925FF", borderBottom: isIndustriesVisible && "2px solid #ffff" }}
//             >
//               Industries
//             </li>
//             <li
//               className={`active-item2 ${pathname === "/letsdiveintoAI" ? "activepath2" : ""}`}
//             ><a className="active" onClick={() => {
//               setIsMobileMenuOpen(false);
//               router.push("/letsdiveintoAI")
//             }}>
//                 <span className="gradient-text">Let's Dive Into AI</span>
//               </a></li>
//             <li className={`active-item2 ${pathname === "/case-study" ? "activepath2" : ""}`}>
//               <a href="#case-studies" onClick={() => { setIsMobileMenuOpen(false); router.push("/case-study") }}>
//                 Case studies
//               </a>
//             </li>

//             <li className="notexpose active-item2">
//               <img src='/assets/noexpose-logo.svg' alt="NotExpose Icon" className="notexpose-icon" />
//               <span className="notexpose-text">NoExpose</span>
//             </li>
//             <li className={`active-item2 ${pathname === "/about" ? "activepath2" : ""}`}><a onClick={() => {
//               setIsMobileMenuOpen(false);
//               router.push("/about");
//             }}>About us</a></li>
//             <li className={`active-item2 ${pathname === "/career" ? "activepath2" : ""}`}><a onClick={() => { setIsMobileMenuOpen(false); router.push("/career") }}>Careers</a></li>

//             {/* Mobile-only contact button */}
//             {isMobileMenuOpen && (
//               <li className="mobile-contact-btn">
//                 <a onClick={() => { setIsMobileMenuOpen(false); router.push("/contact") }}>CONTACT US</a>
//               </li>
//             )}
//           </ul>

//           {/* Desktop-only contact button */}
//           {!isMobileMenuOpen && (
//             <a onClick={() => { setIsMobileMenuOpen(false); router.push("/contact") }} className="desktop-contact-btn">Contact Us</a>
//           )}
//         </div>
//       </nav>

//       <div ref={containerRef}>
//         {isServiceVisible && <Services NavStyle={true} hideServices={hideServices} />}
//         {isIndustriesVisible && <Industries NavStyle={true} hideServices={hideServices} />}
//       </div>
//       {showNavSlider && (
//         <Slider
//           showNavSlider={showNavSlider}
//           setShowNavSlider={setShowNavSlider}
//         />
//       )}
//     </>
//   );
// };

// export default Navbar;

// export const Slider = ({ NavStyle, showNavSlider, setShowNavSlider }) => {
//   const [showServices, setShowServices] = useState(false);
//   const [showIndustries, setShowIndustries] = useState(false);
//   const [showInnovation, setShowInnovation] = useState(false);
//   const [showManagement, setShowManagement] = useState(false);
//   const [showOperation, setShowOperation] = useState(false);
//   const [showDesign, setShowDesign] = useState(false);
//   const pathname = usePathname()
//   const router = useRouter();
//   return (
//     <main className="nav-slider">
//       <div className="logo-cross">
//         <img
//           src={NavStyle ? "/assets/cyber-wappgo-logo.png" : "/assets/logo.png"}
//         />
//         <RxCross1 onClick={() => setShowNavSlider(false)} />
//       </div>
//       <article className="slider-items">
//         <div>
//           <div
//             className="service-heading"
//             onClick={() => setShowServices(!showServices)}
//           >
//             Services
//             <span>
//               <FaAngleRight />
//             </span>
//           </div>
//           {showServices && (
//             <>
//               <div>
//                 <div
//                   onClick={() => setShowInnovation(!showInnovation)}
//                   className="service-headers"
//                 >
//                   Innovation <FaAngleRight />
//                 </div>
//                 {showInnovation && (
//                   <div>
//                     <Link className="nav-slider-route" href="/services/innovation/agile-software-development">Agile Software Devlopment </Link>
//                     <Link
//                       className="nav-slider-route"
//                       href="/services/innovation/cyber-service"
//                     >
//                       Cyber Security Services
//                     </Link>
//                     <Link
//                       className="nav-slider-route"
//                       href="/services/innovation/desktop-app-development"
//                     >
//                       Desktop App Development
//                     </Link>
//                     <Link
//                       className="nav-slider-route"
//                       href="/services/innovation/devops-engineering"
//                     >
//                       DevOps Engineering
//                     </Link>
//                     <Link
//                       className="nav-slider-route"
//                       href="/services/innovation/mobile-app-development"
//                     >
//                       Mobile App Development
//                     </Link>
//                     <Link
//                       className="nav-slider-route"
//                       href="/services/innovation/website-development"
//                     >
//                       Website Development
//                     </Link>
//                   </div>
//                 )}
//               </div>
//               <div>
//                 <div
//                   onClick={() => setShowManagement(!showManagement)}
//                   className="service-headers"
//                 >
//                   Management <FaAngleRight />
//                 </div>
//                 {showManagement && (
//                   <div>
//                     <Link
//                       className="nav-slider-route"
//                       href="/services/management/cloud-solution"
//                     >
//                       Cloud Solutions
//                     </Link>
//                     <Link
//                       className="nav-slider-route"
//                       href="/services/management/ai-machine-learning"
//                     >
//                       AI & Machine Learning Services
//                     </Link>
//                     <Link
//                       className="nav-slider-route"
//                       href="/services/management/solution-architecture"
//                     >
//                       Solution Architecture
//                     </Link>
//                     <Link
//                       className="nav-slider-route"
//                       href="/services/management/data-analytics-services"
//                     >
//                       Data & Analytics Consulting Services
//                     </Link>
//                   </div>
//                 )}
//               </div>
//               <div>
//                 <div
//                   onClick={() => setShowOperation(!showOperation)}
//                   className="service-headers"
//                 >
//                   Operation <FaAngleRight />
//                 </div>
//                 {showOperation && (
//                   <div>
//                     <Link
//                       className="nav-slider-route"
//                       href="/services/operations/managed-support"
//                     >
//                       Managed Support
//                     </Link>
//                     <Link
//                       className="nav-slider-route"
//                       href="/services/operations/sre"
//                     >
//                       SRE
//                     </Link>
//                     <Link
//                       className="nav-slider-route"
//                       href="/services/operations/security-testing-services"
//                     >
//                       Security Testing Services
//                     </Link>
//                     <Link
//                       className="nav-slider-route"
//                       href="/services/operations/legal-services"
//                     >
//                       Legal Services
//                     </Link>
//                   </div>
//                 )}
//               </div>
//               <div>
//                 <div
//                   onClick={() => setShowDesign(!showDesign)}
//                   className="service-headers"
//                 >
//                   Design <FaAngleRight />
//                 </div>
//                 {showDesign && (
//                   <div>
//                     <Link
//                       className="nav-slider-route"
//                       href="/services/design/automation"
//                     >
//                       Automation
//                     </Link>
//                     <Link
//                       className="nav-slider-route"
//                       href="/services/design/ui-ux-design"
//                     >
//                       UI/UX Design & Consultation
//                     </Link>
//                     <Link
//                       className="nav-slider-route"
//                       href="/services/design/graphic-design"
//                     >
//                       Graphic Design
//                     </Link>
//                     <Link
//                       className="nav-slider-route"
//                       href="/services/design/promotion-product-video"
//                     >
//                       Promotion & Product Video
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             </>
//           )}
//         </div>
//         <div>
//           <div
//             onClick={() => setShowIndustries(!showIndustries)}
//             className="industries-heading"
//           >
//             Industries <FaAngleRight />
//           </div>
//           {showIndustries && (
//             <div className="industries-services-list">
//               <li>Social Media</li>
//               <li>Chat Systems</li>
//               <li>E-Commerce</li>
//               <li>Project Management</li>
//               <li>Chatbot</li>
//               <li>Logistics</li>
//               <li>ERP / CRM</li>
//               <li>Healthcare</li>
//               <li>Agriculture</li>
//               <li>Ed-Tech</li>
//               <li>Security</li>
//               <li>Law-Tech</li>
//               <li>Marketplace</li>
//               <li>Cloud</li>
//               <li>Travel</li>
//               <li>Cyber Security</li>
//             </div>
//           )}
//         </div>
//         <li className={pathname === "/about" ? "active-navbar" : ""} onClick={() => {
//           router.push("/about")
//         }}>About</li>
//         <li >Career</li>
//         <li className={pathname === "/contact" ? "active-navbar" : ""} onClick={() => {
//           router.push("/contact")
//         }}>Contact</li>
//       </article>
//     </main>
//   );
// };

// export const Services = ({ hideServices }) => {
//   const [activeService, setActiveService] = useState('Web Development');
//   const services = [
//     'Web Development',
//     'UI / UX Design',
//     'DevOps Services',
//     'QA / Testing',
//     'Chatbot Services',
//     'Data Engineering',
//     'App Development'
//   ];
//   const contentData = {
//     'Web Development': {
//       sections: {
//         'Frontend Development': [
//           { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
//           { name: 'Vue.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg' },
//           { name: 'Tailwind', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
//           { name: 'Bootstrap', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' },
//           { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
//           { name: 'Vue.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg' },
//           { name: 'Tailwind', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
//           { name: 'Bootstrap', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' },
//           { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
//           { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
//           { name: 'MySQL', logo: 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg' },
//           { name: 'MongoDB', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' }
//         ],
//         'Backend Development': [
//           { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
//           { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
//           { name: 'MySQL', logo: 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg' },
//           { name: 'MongoDB', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' }
//         ]
        
//       }
//     },
//     'UI / UX Design': {
//       sections: {
//         'Animation': [
//           { name: 'Figma', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
//           { name: 'Adobe XD', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg' }
//         ],
//         'UI Design': [
//           { name: 'Figma', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
//           { name: 'Adobe XD', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg' }
//         ],
//         'UX Design': [
//           { name: 'Figma', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
//           { name: 'Adobe XD', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg' }
//         ]
//       },
//     }
//   };
//   return (
//     <main onMouseLeave={hideServices} className="services-container">
//       <div className="industriesdiv4">
//         <div className="row align-items-start justify-content-between">
//           <div className="col-md-3">
//           <div className="header-sidebar-content2">
//             {services.map((service, idx) => (
//               <div
//                 key={idx}
//                 className={`service-sidebar2 cursor-pointer rounded ${activeService === service ? 'activeService2' : 'service-sidebar2'}`}
//                 onClick={() => setActiveService(service)}
//               >
//                 {service}
//               </div>
//             ))}
//             </div>
//           </div>

//           <div className="col-md-9">
//             <div className="header-sidebar-right2">
//             {contentData[activeService] ? (
//               Object.entries(contentData[activeService].sections).map(([section, items]) => {
//                 return (
//                   <div key={section} className="mb-8 px-5">
//                     <h3 className="service-title" style={{color:"#ffff"}} >{section}</h3>
//                     <div className="services-content2" >
//                       {items.map((item, idx) => (
//                         <div key={idx} className="item-main">
//                           <img src={item.logo} alt={item.name} />
//                           <h6 className="text-sm"  style={{color:"#ffff"}}>{item.name}</h6>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 );
//               })
//             ) : (
//               <p>No content available for this section.</p>
//             )}
//           </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export const Industries = ({ hideServices }) => {
//   return (
//     <main className="services-container2" onMouseLeave={hideServices}>
//       <div className="industriesdiv3">
//         <div className="row align-items-center">
//           <div className="services-items">
//             <div className="instries-content6">
//               <img src="/assets/chatsystem.svg" />
//               <h6>Chatsystem</h6>
//             </div>
//             <div className="instries-content6">
//               <img src="/assets/online-shopping.svg" />
//               <h6>E-Commerce</h6>
//             </div>
//             <div className="instries-content6">
//               <img src="/assets/rocket.svg" />
//               <h6>Project Management</h6>
//             </div>
//             <div className="instries-content6">
//               <img src="/assets/social-media.svg" />
//               <h6>Social Media</h6>
//             </div>
//           </div>
//           <div className="services-items">
//             <div className="instries-content6">
//               <img src="/assets/crm-erp.svg" />
//               <h6>ERP / CRM</h6>
//             </div>
//             <div className="instries-content6">
//               <img src="/assets/health-insurance.svg" />
//               <h6>Healthcare</h6>
//             </div>
//             <div className="instries-content6">
//               <img src="/assets/checklist.svg" />
//               <h6>Logistics</h6>
//             </div>
//             <div className="instries-content6">
//               <img src="/assets/chat-bot.svg" />
//               <h6>Chatbot</h6>
//             </div>
//           </div>
//           <div className="services-items">
//             <div className="instries-content6">
//               <img src="/assets/agriculture.svg" />
//               <h6>Agriculture</h6>
//             </div>
//             <div className="instries-content6">
//               <img src="/assets/insurance.svg" />
//               <h6>Security</h6>
//             </div>
//             <div className="instries-content6">
//               <img src="/assets/law.svg" />
//               <h6>Law-tech</h6>
//             </div>
//             <div className="instries-content6">
//               <img src="/assets/university.svg" />
//               <h6>Ed-Tech</h6>
//             </div>
//           </div>
//           <div className="services-items">
//             <div className="instries-content6">
//               <img src="/assets/travel.svg" />
//               <h6>Travel</h6>
//             </div>
//             <div className="instries-content6">
//               <img src="/assets/travel.svg" />
//               <h6>Cloud</h6>
//             </div>
//             <div className="instries-content6">
//               <img src="/assets/travel.svg" />
//               <h6>Marketplace</h6>
//             </div>
//           </div>
//           <div className="services-items">
//             <div className="instries-content6">
//               <img src="/assets/instries-image.svg" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };
// "use client";
// import Image from "next/image";
// import { useEffect, useRef, useState, useCallback } from "react";
// import { FaChevronDown, FaAngleRight } from "react-icons/fa6";
// import { RxCross1 } from "react-icons/rx";
// import Link from 'next/link';
// import { useRouter } from "next/navigation";
// import { usePathname } from 'next/navigation';
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import "../public/styles/Navbar.css";
// import { FaAngleDown, FaBars, FaTimes } from 'react-icons/fa';
// const Navbar = ({ NavStyle, Route, }) => {
//   const [isServiceVisible, setServiceVisible] = useState(false);
//   const [isIndustriesVisible, setIndustriesVisible] = useState(false);
//   const [showNavSlider, setShowNavSlider] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [currentPage, setCurrentPage] = useState(false)
//   const modalRef = useRef(null);
//   const industriesRef = useRef(null);
//   const containerRef = useRef(null);

//   const router = useRouter();
//   const pathname = usePathname()
//   const tl = gsap.timeline()
//   const handleShow = () => {

//     setServiceVisible(true);
//     setIndustriesVisible(false);
//   };

//   const handleShowIndustries = () => {
//     setIndustriesVisible(true);
//     setServiceVisible(false);
//   };
//   const handleNavSlider = () => {
//     setShowNavSlider(true);
//   };
//   const hideServices = () => {
//     setServiceVisible(false);
//     setIndustriesVisible(false);
//   };
//   const handleHide = () => {
//     setServiceVisible(false);
//     setIndustriesVisible(false);
//   };
//   const roateiconStyle = {
//     transition: "all 0.3s ease-in-out",
//     color: isServiceVisible && "#1925FF",
//     transform: isServiceVisible && "rotate(-180deg)",
//     marginLeft: "16px",
//     height: "20px",
//   };


//   const handleCurrentPage = useCallback(() => {
//     if (pathname === "/information-technology") {
//       router.push("/");
//     } else {
//       router.push("/information-technology");
//     }
//   }, [pathname, router]);
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   useGSAP(() => {
//     tl.from(".toggleimg", {
//       x: 8,
//       duration: 0.9,
//       opacity: 0.5
//     })


//   })
//   useEffect(() => {
//     // Function to handle clicks outside of Services and Industries divs
//     const handleClickOutside = (event) => {
//       if (
//         containerRef.current &&
//         !containerRef.current.contains(event.target)
//       ) {
//         handleHide();
//       }
//     };

//     // Add event listener to the document body
//     document.addEventListener("mousedown", handleClickOutside);

//     // Cleanup function to remove event listener when component unmounts
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   console.log("pathname", pathname)
//   return (
//     <>
//      <nav className="navbar">
//         <div className="navbar-container navbar-container-border">
//           <div className="logo">
//             <img src='/assets/wappgologo1.svg' alt="Logo" />
//           </div>

//           <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
//             {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
//           </div>

//           <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`}>
//             <li className={`${pathname === "/" ? "activepath" : "active-item"}`}><a onClick={() => { setIsMobileMenuOpen(false); router.push("/") }}>Home</a></li>
//             <li
//               onMouseEnter={handleShow}
//               className="active-item"
//             >
//               Services
//               <FaChevronDown style={roateiconStyle} />
//             </li>
//             <li
//               onMouseEnter={handleShowIndustries}
//               className="active-item"
//             >
//               Industries
//             </li>
//             <li
//               className="active-item"
//             ><a className="active" onClick={() => {
//               setIsMobileMenuOpen(false);
//               router.push("/letsdiveintoAI")
//             }}>
//                 <span className="gradient-text">Let's Dive Into AI</span>
//               </a></li>
//             <li className={`${pathname === "/case-study" ? "activepath" : "active-item"}`}><a onClick={() => { setIsMobileMenuOpen(false); router.push("/case-study") }}>Case studies</a></li>

//             <li className="notexpose active-item">
//               <img src='/assets/noexpose-logo.svg' alt="NotExpose Icon" className="notexpose-icon" />
//               <span className="notexpose-text">NoExpose</span>
//             </li>
//             <li className={`${pathname === "/about" ? "activepath" : "active-item"}`}><a onClick={() => {
//               setIsMobileMenuOpen(false);
//               router.push("/about");
//             }}>About us</a></li>
//             <li className={`${pathname === "/career" ? "activepath" : "active-item"}`}><a onClick={() => { setIsMobileMenuOpen(false); router.push("/career") }}>Careers</a></li>

//             {isMobileMenuOpen && (
//               <li className="mobile-contact-btn">
//                 <a onClick={() => { setIsMobileMenuOpen(false); router.push("/contact") }}>CONTACT US</a>
//               </li>
//             )}
//           </ul>
//           {!isMobileMenuOpen && (
//             <a onClick={() => { setIsMobileMenuOpen(false); router.push("/contact") }} className="desktop-contact-btn">Contact Us</a>
//           )}
//         </div>
//       </nav>
//       <div ref={containerRef}>
//         {isServiceVisible && <Services NavStyle={true} hideServices={hideServices} />}
//         {isIndustriesVisible && <Industries NavStyle={true} hideServices={hideServices} />}
//       </div>
//       {showNavSlider && (
//         <Slider
//           showNavSlider={showNavSlider}
//           setShowNavSlider={setShowNavSlider}
//         />
//       )}
//     </>
//   );
// };

// export default Navbar;

// export const Slider = ({ NavStyle, showNavSlider, setShowNavSlider }) => {
//   const [showServices, setShowServices] = useState(false);
//   const [showIndustries, setShowIndustries] = useState(false);
//   const [showInnovation, setShowInnovation] = useState(false);
//   const [showManagement, setShowManagement] = useState(false);
//   const [showOperation, setShowOperation] = useState(false);
//   const [showDesign, setShowDesign] = useState(false);
//   const pathname = usePathname()
//   const router = useRouter();
//   return (
//     <main className="nav-slider">
//       <div className="logo-cross">
//         <img
//           src={NavStyle ? "/assets/cyber-wappgo-logo.png" : "/assets/logo.png"}
//         />
//         <RxCross1 onClick={() => setShowNavSlider(false)} />
//       </div>
//       <article className="slider-items">
//         <div>
//           <div
//             className="service-heading"
//             onClick={() => setShowServices(!showServices)}
//           >
//             Services
//             <span>
//               <FaAngleRight />
//             </span>
//           </div>
//           {showServices && (
//             <>
//               <div>
//                 <div
//                   onClick={() => setShowInnovation(!showInnovation)}
//                   className="service-headers"
//                 >
//                   Innovation <FaAngleRight />
//                 </div>
//                 {showInnovation && (
//                   <div>
//                     <Link className="nav-slider-route" href="/services/innovation/agile-software-development">Agile Software Devlopment </Link>
//                     <Link
//                       className="nav-slider-route"
//                       href="/services/innovation/cyber-service"
//                     >
//                       Cyber Security Services
//                     </Link>
//                     <Link
//                       className="nav-slider-route"
//                       href="/services/innovation/desktop-app-development"
//                     >
//                       Desktop App Development
//                     </Link>
//                     <Link
//                       className="nav-slider-route"
//                       href="/services/innovation/devops-engineering"
//                     >
//                       DevOps Engineering
//                     </Link>
//                     <Link
//                       className="nav-slider-route"
//                       href="/services/innovation/mobile-app-development"
//                     >
//                       Mobile App Development
//                     </Link>
//                     <Link
//                       className="nav-slider-route"
//                       href="/services/innovation/website-development"
//                     >
//                       Website Development
//                     </Link>
//                   </div>
//                 )}
//               </div>
//               <div>
//                 <div
//                   onClick={() => setShowManagement(!showManagement)}
//                   className="service-headers"
//                 >
//                   Management <FaAngleRight />
//                 </div>
//                 {showManagement && (
//                   <div>
//                     <Link
//                       className="nav-slider-route"
//                       href="/services/management/cloud-solution"
//                     >
//                       Cloud Solutions
//                     </Link>
//                     <Link
//                       className="nav-slider-route"
//                       href="/services/management/ai-machine-learning"
//                     >
//                       AI & Machine Learning Services
//                     </Link>
//                     <Link
//                       className="nav-slider-route"
//                       href="/services/management/solution-architecture"
//                     >
//                       Solution Architecture
//                     </Link>
//                     <Link
//                       className="nav-slider-route"
//                       href="/services/management/data-analytics-services"
//                     >
//                       Data & Analytics Consulting Services
//                     </Link>
//                   </div>
//                 )}
//               </div>
//               <div>
//                 <div
//                   onClick={() => setShowOperation(!showOperation)}
//                   className="service-headers"
//                 >
//                   Operation <FaAngleRight />
//                 </div>
//                 {showOperation && (
//                   <div>
//                     <Link
//                       className="nav-slider-route"
//                       href="/services/operations/managed-support"
//                     >
//                       Managed Support
//                     </Link>
//                     <Link
//                       className="nav-slider-route"
//                       href="/services/operations/sre"
//                     >
//                       SRE
//                     </Link>
//                     <Link
//                       className="nav-slider-route"
//                       href="/services/operations/security-testing-services"
//                     >
//                       Security Testing Services
//                     </Link>
//                     <Link
//                       className="nav-slider-route"
//                       href="/services/operations/legal-services"
//                     >
//                       Legal Services
//                     </Link>
//                   </div>
//                 )}
//               </div>
//               <div>
//                 <div
//                   onClick={() => setShowDesign(!showDesign)}
//                   className="service-headers"
//                 >
//                   Design <FaAngleRight />
//                 </div>
//                 {showDesign && (
//                   <div>
//                     <Link
//                       className="nav-slider-route"
//                       href="/services/design/automation"
//                     >
//                       Automation
//                     </Link>
//                     <Link
//                       className="nav-slider-route"
//                       href="/services/design/ui-ux-design"
//                     >
//                       UI/UX Design & Consultation
//                     </Link>
//                     <Link
//                       className="nav-slider-route"
//                       href="/services/design/graphic-design"
//                     >
//                       Graphic Design
//                     </Link>
//                     <Link
//                       className="nav-slider-route"
//                       href="/services/design/promotion-product-video"
//                     >
//                       Promotion & Product Video
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             </>
//           )}
//         </div>
//         <div>
//           <div
//             onClick={() => setShowIndustries(!showIndustries)}
//             className="industries-heading"
//           >
//             Industries <FaAngleRight />
//           </div>
//           {showIndustries && (
//             <div className="industries-services-list">
//               <li>Social Media</li>
//               <li>Chat Systems</li>
//               <li>E-Commerce</li>
//               <li>Project Management</li>
//               <li>Chatbot</li>
//               <li>Logistics</li>
//               <li>ERP / CRM</li>
//               <li>Healthcare</li>
//               <li>Agriculture</li>
//               <li>Ed-Tech</li>
//               <li>Security</li>
//               <li>Law-Tech</li>
//               <li>Marketplace</li>
//               <li>Cloud</li>
//               <li>Travel</li>
//               <li>Cyber Security</li>
//             </div>
//           )}
//         </div>
//         <li className={pathname === "/about" ? "active-navbar" : ""} onClick={() => {
//           router.push("/about")
//         }}>About</li>
//         <li >Career</li>
//         <li className={pathname === "/contact" ? "active-navbar" : ""} onClick={() => {
//           router.push("/contact")
//         }}>Contact</li>
//       </article>
//     </main>
//   );
// };

// export const Services = ({ hideServices }) => {
//   const [activeService, setActiveService] = useState('Web Development');
//   const services = [
//     'Web Development',
//     'UI / UX Design',
//     'DevOps Services',
//     'QA / Testing',
//     'Chatbot Services',
//     'Data Engineering',
//     'App Development'
//   ];
//   const contentData = {
//     'Web Development': {
//       sections: {
//         'Frontend Development': [
//           { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
//           { name: 'Vue.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg' },
//           { name: 'Tailwind', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
//           { name: 'Bootstrap', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' },
//           { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
//           { name: 'Vue.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg' },
//           { name: 'Tailwind', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
//           { name: 'Bootstrap', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' },
//           { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
//           { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
//           { name: 'MySQL', logo: 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg' },
//           { name: 'MongoDB', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' }
//         ],
//         'Backend Development': [
//           { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
//           { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
//           { name: 'MySQL', logo: 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg' },
//           { name: 'MongoDB', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' },
//           { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
//           { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
//           { name: 'MySQL', logo: 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg' },
//           { name: 'MongoDB', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' }
//         ]
//       }
//     },
//     'UI / UX Design': {
//       sections: {
//         'Animation': [
//           { name: 'Figma', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
//           { name: 'Adobe XD', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg' }
//         ],
//         'UI Design': [
//           { name: 'Figma', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
//           { name: 'Adobe XD', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg' }
//         ],
//         'UX Design': [
//           { name: 'Figma', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
//           { name: 'Adobe XD', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg' }
//         ]
//       },
//     }
//   };
//   return (
//     <main onMouseLeave={hideServices} className="services-container">
//       <div className="industriesdiv">
//         <div className="row align-items-start justify-content-between">
//           <div className="col-md-3">
//             <div className="header-sidebar-content">
//               {services.map((service, idx) => (
//                 <div
//                   key={idx}
//                   className={`service-sidebar cursor-pointer rounded ${activeService === service ? 'activeService' : 'service-sidebar'}`}
//                   onClick={() => setActiveService(service)}
//                 >
//                   {service}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="col-md-9">
//             <div className="header-sidebar-right">
//               {contentData[activeService] ? (
//                 Object.entries(contentData[activeService].sections).map(([section, items]) => {
//                   return (
//                     <div key={section} className="mb-8">
//                       <h3 className="service-title">{section}</h3>
//                       <div className="services-content">
//                         {items.map((item, idx) => (
//                           <div key={idx} className="item-main">
//                             <img src={item.logo} alt={item.name} />
//                             <h6 className="text-sm">{item.name}</h6>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   );
//                 })
//               ) : (
//                 <p>No content available for this section.</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export const Industries = ({ hideServices }) => {
//   const router = useRouter();
//   return (
//     <main className="services-container-indus" onMouseLeave={hideServices}>
//       <div className="industriesdiv2">
//         <div className="row align-items-center">
//           <div className="services-items">
//             <div
//               onClick={(e) =>{  e.stopPropagation(); router.push("/industries")}}
//               className="instries-content"
//               style={{ cursor: "pointer" }}
//             >
//               <img src="/assets/chatsystem.svg" />
//               <h6>Chatsystem</h6>
//             </div>
//             <div onClick={() => router.push("/chatsystem")}
//               className="instries-content"
//               style={{ cursor: "pointer" }}>
//               <img src="/assets/online-shopping.svg" />
//               <h6>E-Commerce</h6>
//             </div>
//             <div  onClick={() => router.push("/projectmanagement")} className="instries-content">
//               <img src="/assets/rocket.svg" />
//               <h6>Project Management</h6>
//             </div>
//             <div  onClick={() => router.push("/social-media")}
//               className="instries-content"
//               style={{ cursor: "pointer" }}>
//               <img src="/assets/social-media.svg" />
//               <h6>Social Media</h6>
//             </div>
//           </div>
//           <div className="services-items">
//             <div onClick={() => router.push("/ERP")}
//               className="instries-content"
//               style={{ cursor: "pointer" }}>
//               <img src="/assets/crm-erp.svg" />
//               <h6>ERP / CRM</h6>
//             </div>
//             <div className="instries-content">
//               <img src="/assets/health-insurance.svg" />
//               <h6>Healthcare</h6>
//             </div>
//             <div className="instries-content">
//               <img src="/assets/checklist.svg" />
//               <h6>Logistics</h6>
//             </div>
//             <div className="instries-content">
//               <img src="/assets/chat-bot.svg" />
//               <h6>Chatbot</h6>
//             </div>
//           </div>
//           <div className="services-items">
//             <div className="instries-content">
//               <img src="/assets/agriculture.svg" />
//               <h6>Agriculture</h6>
//             </div>
//             <div className="instries-content">
//               <img src="/assets/insurance.svg" />
//               <h6>Security</h6>
//             </div>
//             <div className="instries-content">
//               <img src="/assets/law.svg" />
//               <h6>Law-tech</h6>
//             </div>
//             <div className="instries-content">
//               <img src="/assets/university.svg" />
//               <h6>Ed-Tech</h6>
//             </div>
//           </div>
//            <div className="services-items">
//             <div className="instries-content">
//               <img src="/assets/travel.svg" />
//               <h6>Travel</h6>
//             </div>
//             <div className="instries-content">
//               <img src="/assets/cloud.svg" />
//               <h6>Cloud</h6>
//             </div>
//             <div className="instries-content">
//               <img src="/assets/shopping-cart.svg" />
//               <h6>Marketplace</h6>
//             </div>
//             {/* <div className="instries-content">
//               <img src="/assets/travel.svg" />
//               <h6>Travel</h6>
//             </div> */}
//           </div>
//           <div className="services-items">
//             <div className="instries-content">
//               <img src="/assets/instries-image.svg" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };
"use client";
import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Loader from "./Loader";
import dynamic from 'next/dynamic';
import Image from 'next/image';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../public/styles/NavbarAI.css";

// Dynamically import heavy components
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
  
  const [dropdowns, setDropdowns] = useState({
    services: false,
    industries: false,
    mobileMenu: false,
    navSlider: false
  });
  
  const containerRef = useRef(null);
  const pathname = usePathname();

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
      services:false,
      industries: false,
      mobileMenu: false,
      navSlider: false
    });
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
      {/* <nav className="navbar">
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
              <Link href="/" onClick={closeAllDropdowns}>Home</Link>
            </li>
            <li
              onMouseEnter={() => handleDropdown('services', true)}
              className="active-item"
            >
              Services
              <FaChevronDown style={roateiconStyle} />
            </li>
            <li
              onMouseEnter={() => handleDropdown('industries', true)}
              className="active-item"
            >
              Industries
            </li>
            <li className="active-item">
              <Link href="/letsdiveintoAI" onClick={closeAllDropdowns} prefetch>
                <span className="gradient-text">Let's Dive Into AI</span>
              </Link>
            </li>
            <li className={pathname === "/case-study" ? "activepath" : "active-item"}>
              <Link href="/case-study" onClick={closeAllDropdowns} prefetch>Case studies</Link>
            </li>

            <li className="notexpose active-item">
              <Image 
                src='/assets/noexpose-logo.svg' 
                alt="NotExpose Icon" 
                width={24}
                height={24}
              />
              <span className="notexpose-text">NoExpose</span>
            </li>
            <li className={pathname === "/about" ? "activepath" : "active-item"}>
              <Link href="/about" onClick={closeAllDropdowns} prefetch>About us</Link>
            </li>
            <li className={pathname === "/career" ? "activepath" : "active-item"}>
              <Link href="/career" onClick={closeAllDropdowns} prefetch>Careers</Link>
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
      </nav> */}
 
       <nav className="navbar">
        <div className="navbar-container5 navbar-container-border3">
          <div className="logo">
            <Link href="/" prefetch>
              <Image 
                src='/assets/logo.svg' 
                alt="Logo" 
                width={150}
                height={50}
                priority
              />
            </Link>
          </div>

          <div className="mobile-menu-btn2" onClick={() => handleDropdown('mobileMenu', !dropdowns.mobileMenu)}>
            {dropdowns.mobileMenu ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={`nav-links5 ${dropdowns.mobileMenu ? 'mobile-menu-active' : ''}`}>
            <li className={pathname === "/" ? "activepath" : "active-item"}>
              <Link href="/" >Home</Link>
            </li>
            <li
              onMouseEnter={() => handleDropdown('services', true)}
              className="active-item"
            >
              Services
              <FaChevronDown style={roateiconStyle} />
            </li>
            <li
              onMouseEnter={() => handleDropdown('industries', true)}
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
            <li className={pathname === "/case-study" ? "activepath" : "active-item"}>
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