"use client";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import Link from 'next/link';
import Image from 'next/image';
import "../public/styles/Navbar.css";

const NavSlider = ({ showNavSlider, setShowNavSlider }) => {
  const [expandedSections, setExpandedSections] = useState({
    services: false,
    industries: false,
    innovation: false,
    management: false,
    operation: false,
    design: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <main className="nav-slider">
      <div className="logo-cross">
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width={150}
          height={50}
        />
        <RxCross1 onClick={() => setShowNavSlider(false)} />
      </div>
      <article className="slider-items">
        <div>
          <div
            className="service-heading"
            onClick={() => toggleSection('services')}
          >
            Services
            <span>
              <FaAngleRight />
            </span>
          </div>
          {expandedSections.services && (
            <>
              <div>
                <div
                  onClick={() => toggleSection('innovation')}
                  className="service-headers"
                >
                  Innovation <FaAngleRight />
                </div>
                {expandedSections.innovation && (
                  <div>
                    <Link className="nav-slider-route" href="/services/innovation/agile-software-development" prefetch>
                      Agile Software Development
                    </Link>
                    <Link className="nav-slider-route" href="/services/innovation/cyber-service" prefetch>
                      Cyber Security Services
                    </Link>
                    <Link className="nav-slider-route" href="/services/innovation/desktop-app-development" prefetch>
                      Desktop App Development
                    </Link>
                  </div>
                )}
              </div>
              {/* Other service sections... */}
            </>
          )}
        </div>
        <div>
          <div
            onClick={() => toggleSection('industries')}
            className="industries-heading"
          >
            Industries <FaAngleRight />
          </div>
          {expandedSections.industries && (
            <div className="industries-services-list">
              {['Social Media', 'Chat Systems', 'E-Commerce', 'Project Management', 
                'Chatbot', 'Logistics', 'ERP / CRM', 'Healthcare'].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </div>
          )}
        </div>
        <Link href="/about" className="slider-link" prefetch>About</Link>
        <Link href="/career" className="slider-link" prefetch>Career</Link>
        <Link href="/contact" className="slider-link" prefetch>Contact</Link>
      </article>
    </main>
  );
};

export default NavSlider;