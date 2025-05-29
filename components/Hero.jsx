"use client"

import Image from "next/image";
import "../public/styles/Hero.css";
import "../public/styles/CyberHero.css";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Hero = ({ HeroStyle, HeroTexts }) => {

  // var tl = gsap.timeline()


  // useGSAP(() => {
  //   if (HeroStyle) {
  //     tl.from(".hero-items-wrapper", {
  //       y: 100,
  //       opacity: 0,
  //       duration: 0.8
  //     })
  //   }
  //   else {
  //     tl.from(".hero-items-wrapper", {
  //       y: 100,
  //       opacity: 0,
  //       duration: 0.8
  //     })
  //   }


  // })


  return (

    // <main
    //   style={{
    //     backgroundColor: HeroStyle && HeroStyle.backgroundColor,
    //     backgroundImage: HeroStyle && "",
    //     transition: "all 4s ease-in-out"

    //   }}
    //   className={`row ${HeroStyle ? 'cyber-container1' : 'hero-container'}`}

    // >
    //    <video autoPlay loop muted className="hero-video">
    //     <source src='/assets/hero-main-video.mp4' type="video/mp4" />
    //   </video>

    //   <article className="row hero-items-wrapper">
    //     <div className="col-lg-12 hero-items">
    //       <div className="row">
    //         <div className="col-lg-9">
    //           {HeroTexts ? (
    //             <h1
    //               className="hero-heading"
    //               style={{ color: HeroStyle && HeroStyle.textColor }}
    //             >
    //               {HeroTexts.heading}
    //               <span className="cyber-masterpiece"> Masterpiece</span>
    //             </h1>
    //           ) : (
    //             <h1 className="hero-heading">
    //               Technology and design serve as our means to create
    //               <span className="masterpiece"> MASTERPIECE</span>{" "}
    //               <span> .</span>
    //             </h1>
    //           )}
    //         </div>
    //       </div>

    //       <div className="row">
    //         <div className="col-lg-6 col-md-9">
    //           <p
    //             className="desc"
    //             style={{ color: HeroStyle && HeroStyle.subHeadingColor }}
    //           >
    //             {HeroTexts
    //               ? HeroTexts.desc
    //               : "By applying innovative approaches, we collaborate with corporations and stakeholders to transform and enhance their experience"}
    //           </p>
    //         </div>
    //       </div>
    //       <ButtonMedia HeroStyle={HeroStyle} HeroTexts={HeroTexts} />
    //     </div>
    //     <div className="round-text-container">
    //       {HeroTexts ? "" : <HeroLogo />}
    //     </div>
    //   </article>
    // </main>

    <div className="hero-container">
      {/* Video Background on the Right */}
      <div className="video-container video-container">
        <video className="video2" autoPlay loop muted playsInline preload="auto">
          <source src="/assets/hero-main-video.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="blurfixer">
          <img src="/assets/bluer-fix.svg" />
        </div>
      </div>

      {/* Content on the Left */}
      <div className="content2">
        <article className="row hero-items-wrapper">
          <div className="col-lg-12 hero-items">
            <div className="row masterpiecediv">
              <div className="col-xl-9 col-lg-12 col-md-12">
                {HeroTexts ? (
                  <h1
                    className="hero-heading"
                    style={{ color: HeroStyle && HeroStyle.textColor }}
                  >
                    {HeroTexts.heading}
                    <span className="cyber-masterpiece"> Masterpiece</span>
                  </h1>
                ) : (
                  <h1 className="hero-heading">
                    <span style={{ color: "black" }} className="zoom-in-once delay-1">Technology and design</span> <br />
                    <span style={{ color: "black" }} className="zoom-in-once delay-1">serve as our means to</span> <br />
                    <span style={{ color: "black" }} className="zoom-in-once delay-1">
                      create <span className="cyber-masterpiece">MASTERPIECE</span><span> .</span>
                    </span>
                  </h1>

                )}
              </div>
            </div>

            <div className="row masterpiecediv">
              <div className="col-xl-9 col-lg-12 col-md-12">
                <p
                  className="desc zoom-in-once delay-2"
                  style={{ color: HeroStyle && HeroStyle.subHeadingColor }}
                >
                  {HeroTexts
                    ? HeroTexts.desc
                    : "By applying innovative approaches, we collaborate with corporations and stakeholders to transform and enhance their experience"}
                </p>
              </div>
            </div>
            <ButtonMedia HeroStyle={HeroStyle} HeroTexts={HeroTexts} />
          </div>
        </article>
      </div>
    </div>


  );
};

export default Hero;

export const HeroLogo = () => {
  return (
    <div className="hero-logo">
      <div className="inner-square">
        <img className="spin" src="/assets/rotate-text-home.svg" />
        <img src="/assets/send.svg" />
      </div>
    </div>
  );
};
export const CyberHeroLogo = () => {
  return (
    <div className="cyber-hero-logo">
      <img className="cyber-spin" src="/assets/cyber-rotate-text.svg" />
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.13)",
          border: "1px solid rgba(230, 231, 233, 0.07)",
        }}
        className="inner-square"
      >
        <img src="/assets/send.svg" />
      </div>
    </div>
  );
};

export const ButtonMedia = ({ HeroStyle, HeroTexts }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="btn-icon-container zoom-in-once delay-3">
        <Link href="/Consultation" style={{ textDecoration: "none" }}>
          <button className="start-btn front-btn-with" >
            {HeroTexts ? HeroTexts.btnText : "Get Consultation"}
            <img src="/assets/btn-icon.svg" />
          </button>
        </Link>
        <Link href="/letsdiveintoAI" style={{ textDecoration: "none" }}>
          {/* <button className="btn-diveai btn-diveai-text gradient-text-btn front-btn-with btn-diveai-inner" >
            {HeroTexts ? HeroTexts.btnText : "Wappgo For Your AI"}
            <img src="/assets/divebtn.svg" className="mx-3" />
          </button> */}
          <button className="btn-diveai front-btn-with">
            <div className="btn-diveai-inner gradient-text-btn"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: '8px'
              }}
            >
              {HeroTexts ? HeroTexts.btnText : "Wappgo For Your AI"}
              <img src="/assets/divebtn.svg" />
            </div>
          </button>
        </Link>
        <img src="/assets\Animation - 1718616128029.json" alt="" />
        {/* <div className="or" style={{ color: HeroStyle && HeroStyle.orColor }}>
        or
      </div> */}

        {HeroTexts && <CyberHeroLogo />}
      </div>
      <div className="media-container">
        <div className="media-btns">
          <button
            style={{
              backgroundColor: HeroStyle && HeroStyle.iconsBg,
              border: HeroStyle && HeroStyle.border,
            }}
            className="icon-container"
          >
            <img src="/assets/wp.svg" />
          </button>
          <button
            style={{
              backgroundColor: HeroStyle && HeroStyle.iconsBg,
              border: HeroStyle && HeroStyle.border,
            }}
            className="icon-container"
          >
            <img
              src={HeroStyle ? "/assets/cyber-mail-icon.svg" : "/assets/mail.svg"}
            />
          </button>
          <button
            style={{
              backgroundColor: HeroStyle && HeroStyle.iconsBg,
              border: HeroStyle && HeroStyle.border,
            }}
            className="icon-container"
          >
            <img
              src={HeroStyle ? "/assets/cyber-call-icon.svg" : "/assets/call.svg"}
            />
          </button>
        </div>
        <div className="downloadbtndiv">
          <button className="download-btn" onClick={handleShow}>
            Download Wappgo Deck
            <img
              src="/assets/download-deck.svg"
            />
          </button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}
        size="xl"
        centered
        aria-labelledby="example-modal-sizes-title-xl"
      >
        {/* <Modal.Header closeButton>
          <Modal.Title>React Bootstrap Modal</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='get-in-touch2 '>
              <div className="row">
                <div className="col-lg-5">
                  <div className="contact-bg contact-info">
                    <div className="contact-details">
                      <h3>Get in touch</h3>
                      {/* Email */}
                      <div className="contact-item">
                        <div className="icon-wrapper">
                          <img src="/assets/envelope.svg" alt="Email" className="icon" />
                        </div>
                        <div>
                          <p className="contact-heading">Email us</p>
                          <a href="mailto:info@wappgo.com">info@wappgo.com</a>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="contact-item">
                        <div className="icon-wrapper">
                          <img src="/assets/phone-call.svg" alt="Email" className="icon" />
                        </div>
                        <div>
                          <p className="contact-heading">Phone number</p>
                          <a href="tel:+917000581635">(+91) 70005-81635</a>
                        </div>
                      </div>

                      {/* Address */}
                      <div className="contact-item">
                        {/* <img src="/assets/map-pin-line.svg" alt="Location" className="icon" /> */}
                        <div className="icon-wrapper">
                          <img src="/assets/map-pin-line.svg" alt="Location" className="icon" />
                        </div>
                        <div>
                          <p className="contact-heading">Address</p>
                          <p>
                            403, The View Tower,<br /> Yashwant Niwas Road,<br /> Indore MP 452001
                          </p>
                        </div>
                      </div>


                      <div className="social-section">
                        <p>- Connect with us:</p>
                        <div className="social-icons">

                          <a href="#" aria-label="Facebook">
                            <div className='socialdiv'>
                              <img src="/assets/facebook-contact.svg" alt='facebook' />
                            </div>
                          </a>


                          <a href="#" aria-label="Twitter">
                            <div className='socialdiv'>
                              <img src="/assets/linkedin-contact.svg" alt='linkedin' />
                            </div>
                          </a>

                          <a href="#" aria-label="LinkedIn">
                            <div className='socialdiv'>
                              <img src="/assets/x-contact.svg" alt='x' />
                            </div>
                          </a>


                          <a href="#" aria-label="Instagram">
                            <div className='socialdiv'>
                              <img src="/assets/instagram-contact.svg" alt='x' />
                            </div>
                          </a>
                          <a href="#" aria-label="Instagram">
                            <div className='socialdiv'>
                              <img src="/assets/driven-contact.svg" alt='x' />
                            </div>
                          </a>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className='contact-form'>
                    <Button className="contactcross-btn" onClick={handleClose}>
                       <img src="/assets/btn-cross.svg" alt="cross" />
                    </Button>
                    <form>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className="form-group me-3">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Full name" required />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter email address" required />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="subject">Company Name</label>
                        <input type="text" id="subject" placeholder="Write subject here" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="company">Designation</label>
                        <input type="text" id="company" placeholder="Brand/Company/Product Name" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Tell us about your project" required></textarea>
                      </div>
                      <button type="submit">
                        Submit Details
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};
