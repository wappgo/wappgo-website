"use client"
import gsap from "gsap";
import { useEffect, useState, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BiSearch } from "react-icons/bi";
import { useGSAP } from "@gsap/react";
import "../styles/Global.css";
gsap.registerPlugin(ScrollTrigger);
const GlobeImage = () => {
  const [text, setText] = useState('BUSINESS');
  const element = useRef(null);
  const verticalRef = useRef(null);
  const boxItemsRef = useRef([]);
  const SectionCenterRef = useRef(null);
  const marqueeRef = useRef(null);

  const handleText = () => {

    const tl = new gsap.timeline();

    tl.from(element.current, {
      duration: 1,
      call: () => {
        setText('STARTUP');
      }
    })
      .from(element.current, {
        duration: 1,
        call: () => {
          setText('EVERYTHING');
        }
      })
      .from(element.current, {
        duration: 1,
        call: () => {
          setText('BUSINESS');
        }
      })
  };



  useEffect(() => {
    const timeOut = setTimeout(() => {
      handleText()
    }, 1000)
    return () => clearTimeout(timeOut)
  }, [text])

  function getXPercent() {
    const viewportWidth = window.innerWidth;
    if (viewportWidth < 1280) {
      return -500; // For smaller screens
    } else {
      return -602
    }
  }

  useEffect(() => {
    const SectionCenter = SectionCenterRef.current;
    const boxItems = boxItemsRef.current;

    const timeline = gsap.timeline({ paused: true });

    ScrollTrigger.create({
      animation: timeline,
      trigger: verticalRef.current,
      start: 'top top',
      end: 'bottom center',
      scrub: true
    });
    console.log("hello", getXPercent())
    gsap.to(boxItems, {
      xPercent: getXPercent(),
      scrollTrigger: {
        trigger: SectionCenter,
        pin: true,
        scrub: 3,
        // snap: 1 / (boxItems.length - 1),
        // end: "+=" + SectionCenter.offsetWidth

      }
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const loop = horizontalLoop(".marquee__part", {
      repeat: -1,
      paused: false,
      speed: 0.2
    });

    return () => {
      loop.kill();
    };
  }, []);


  return (
    <div ref={verticalRef}>
      <div className="row">
        <div className="col-1"><hr className="cardsectionhr1" /></div>
        <div className="col-10">
          <h2 className="cardsectionhrheading">We offer & work on more than an IT service</h2>
        </div>
        <div className="col-1">
          <hr className="cardsectionhr2" />
        </div>
      </div>
      <h2 className="letshandleheading">Let us Handle IT For Your</h2>
      <div ref={element}>
        <h3 className="text-animate">{text}</h3>
      </div>
      <div id="horizontal" ref={SectionCenterRef} className="scroll-container">
        <div className="d-flex">
          <div className="firstscrolldiv" ref={el => boxItemsRef.current[0] = el}>
            <div className="cool-link">
              <div className="row paddingmarginzero">
                <div className="col-lg-7 col-md-12 paddingmarginzero changewidthcol7">
                  <img src="/assets/Web_app.png" className="webappimage" />
                </div>
                <div className="col-lg-5 col-md-12 changewidthcol5 paddingmarginzero">
                  <p className="scrollcardheading">Web Application</p>
                  <p className="scrollcardsubheading">Best fit to implement your idea and let the world know your play. </p>
                  <p className="scrollcardtext"> These applications are accessible via browser, some of them are dynamic which requires server-side processing and some are static which doesn't . Let's build Web Apps. </p>
                  <p className="cardexample">Examples:-</p>
                  <div className="row">
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Airbnb.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Facebook.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Cnn.png" className="horitrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Starbucks_Coffee.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Pinterest.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Google_Drive.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Youtube.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/ESPN.png" className="horitrectangleproductlogo" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="boutton-chat">
                <div>
                  <a className="getstartedwithgobutton">Get a Quote
                    <img src="/assets/Groupget.svg" className="getstartedwithgobuttonimg mx-2" />
                  </a>
                  <button className="callbutton">
                    <img src="/assets/noun_call_1078211.svg" width="25px" />
                  </button>
                  <button className="callbutton">
                    <img src="/assets/noun_chat_2518709 .svg" width="25px" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="secondscrolldiv" ref={el => boxItemsRef.current[1] = el}>
            <div className="cool-link">
              <div className="row paddingmarginzero">
                <div className="col-lg-7 paddingmarginzero changewidthcol7">
                  <img src="/assets/Web_app.png" className="webappimage" />
                </div>
                <div className="col-lg-5 changewidthcol5 paddingmarginzero">
                  <p className="scrollcardheading">Web Application</p>
                  <p className="scrollcardsubheading">Best fit to implement your idea and let the world know your play. </p>
                  <p className="scrollcardtext"> These applications are accessible via browser, some of them are dynamic which requires server-side processing and some are static which doesn't . Let's build Web Apps. </p>
                  <p className="cardexample">Examples:-</p>
                  <div className="row">
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Airbnb.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Facebook.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Cnn.png" className="horitrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Starbucks_Coffee.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Pinterest.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Google_Drive.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Youtube.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/ESPN.png" className="horitrectangleproductlogo" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="boutton-chat">
                <div>
                  <a className="getstartedwithgobutton">Get a Quote
                    <img src="/assets/Groupget.svg" className="getstartedwithgobuttonimg mx-2" />
                  </a>
                  <button className="callbutton">
                    <img src="/assets/noun_call_1078211.svg" width="25px" />
                  </button>
                  <button className="callbutton">
                    <img src="/assets/noun_chat_2518709 .svg" width="25px" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="secondscrolldiv" ref={el => boxItemsRef.current[2] = el}>
            <div className="cool-link">
              <div className="row paddingmarginzero">
                <div className="col-lg-7 paddingmarginzero changewidthcol7">
                  <img src="/assets/Web_app.png" className="webappimage" />
                </div>
                <div className="col-lg-5 changewidthcol5 paddingmarginzero">
                  <p className="scrollcardheading">Web Application</p>
                  <p className="scrollcardsubheading">Best fit to implement your idea and let the world know your play. </p>
                  <p className="scrollcardtext"> These applications are accessible via browser, some of them are dynamic which requires server-side processing and some are static which doesn't . Let's build Web Apps. </p>
                  <p className="cardexample">Examples:-</p>
                  <div className="row">
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Airbnb.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Facebook.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Cnn.png" className="horitrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Starbucks_Coffee.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Pinterest.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Google_Drive.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Youtube.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/ESPN.png" className="horitrectangleproductlogo" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="boutton-chat">
                <div>
                  <a className="getstartedwithgobutton">Get a Quote
                    <img src="/assets/Groupget.svg" className="getstartedwithgobuttonimg mx-2" />
                  </a>
                  <button className="callbutton">
                    <img src="/assets/noun_call_1078211.svg" width="25px" />
                  </button>
                  <button className="callbutton">
                    <img src="/assets/noun_chat_2518709 .svg" width="25px" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="secondscrolldiv  bg-secondscrolldiv" ref={el => boxItemsRef.current[3] = el}>
            <div className="cool-link">
              <div className="row paddingmarginzero">
                <div className="col-lg-7 paddingmarginzero changewidthcol7">
                  <img src="/assets/Web_app.png" className="webappimage" />
                </div>
                <div className="col-lg-5 changewidthcol5 paddingmarginzero">
                  <p className="scrollcardheading">Web Application</p>
                  <p className="scrollcardsubheading">Best fit to implement your idea and let the world know your play. </p>
                  <p className="scrollcardtext"> These applications are accessible via browser, some of them are dynamic which requires server-side processing and some are static which doesn't . Let's build Web Apps. </p>
                  <p className="cardexample">Examples:-</p>
                  <div className="row">
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Airbnb.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Facebook.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Cnn.png" className="horitrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Starbucks_Coffee.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Pinterest.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Google_Drive.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Youtube.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/ESPN.png" className="horitrectangleproductlogo" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="boutton-chat">
                <div>
                  <a className="getstartedwithgobutton">Get a Quote
                    <img src="/assets/Groupget.svg" className="getstartedwithgobuttonimg mx-2" />
                  </a>
                  <button className="callbutton">
                    <img src="/assets/noun_call_1078211.svg" width="25px" />
                  </button>
                  <button className="callbutton">
                    <img src="/assets/noun_chat_2518709 .svg" width="25px" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="secondscrolldiv  bg-thirdscrolldiv" ref={el => boxItemsRef.current[4] = el}>
            <div className="cool-link">
              <div className="row paddingmarginzero">
                <div className="col-lg-7 paddingmarginzero changewidthcol7">
                  <img src="/assets/Web_app.png" className="webappimage" />
                </div>
                <div className="col-lg-5 changewidthcol5 paddingmarginzero">
                  <p className="scrollcardheading">Web Application</p>
                  <p className="scrollcardsubheading">Best fit to implement your idea and let the world know your play. </p>
                  <p className="scrollcardtext"> These applications are accessible via browser, some of them are dynamic which requires server-side processing and some are static which doesn't . Let's build Web Apps. </p>
                  <p className="cardexample">Examples:-</p>
                  <div className="row">
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Airbnb.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Facebook.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Cnn.png" className="horitrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Starbucks_Coffee.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Pinterest.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Google_Drive.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Youtube.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/ESPN.png" className="horitrectangleproductlogo" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="boutton-chat">
                <div>
                  <a className="getstartedwithgobutton">Get a Quote
                    <img src="/assets/Groupget.svg" className="getstartedwithgobuttonimg mx-2" />
                  </a>
                  <button className="callbutton">
                    <img src="/assets/noun_call_1078211.svg" width="25px" />
                  </button>
                  <button className="callbutton">
                    <img src="/assets/noun_chat_2518709 .svg" width="25px" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="secondscrolldiv bg-fourscrolldiv" ref={el => boxItemsRef.current[5] = el}>
            <div className="cool-link">
              <div className="row paddingmarginzero">
                <div className="col-lg-7 paddingmarginzero changewidthcol7">
                  <img src="/assets/Web_app.png" className="webappimage" />
                </div>
                <div className="col-lg-5 changewidthcol5 paddingmarginzero">
                  <p className="scrollcardheading">Web Application</p>
                  <p className="scrollcardsubheading">Best fit to implement your idea and let the world know your play. </p>
                  <p className="scrollcardtext"> These applications are accessible via browser, some of them are dynamic which requires server-side processing and some are static which doesn't . Let's build Web Apps. </p>
                  <p className="cardexample">Examples:-</p>
                  <div className="row">
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Airbnb.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Facebook.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Cnn.png" className="horitrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Starbucks_Coffee.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Pinterest.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Google_Drive.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Youtube.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/ESPN.png" className="horitrectangleproductlogo" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="boutton-chat">
                <div>
                  <a className="getstartedwithgobutton">Get a Quote
                    <img src="/assets/Groupget.svg" className="getstartedwithgobuttonimg mx-2" />
                  </a>
                  <button className="callbutton">
                    <img src="/assets/noun_call_1078211.svg" width="25px" />
                  </button>
                  <button className="callbutton">
                    <img src="/assets/noun_chat_2518709 .svg" width="25px" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="secondscrolldiv bg-fivescrolldiv" ref={el => boxItemsRef.current[6] = el}>
            <div className="cool-link">
              <div className="row paddingmarginzero">
                <div className="col-lg-7 paddingmarginzero changewidthcol7">
                  <img src="/assets/Web_app.png" className="webappimage" />
                </div>
                <div className="col-lg-5 changewidthcol5 paddingmarginzero">
                  <p className="scrollcardheading">Web Application</p>
                  <p className="scrollcardsubheading">Best fit to implement your idea and let the world know your play. </p>
                  <p className="scrollcardtext"> These applications are accessible via browser, some of them are dynamic which requires server-side processing and some are static which doesn't . Let's build Web Apps. </p>
                  <p className="cardexample">Examples:-</p>
                  <div className="row">
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Airbnb.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Facebook.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Cnn.png" className="horitrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Starbucks_Coffee.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Pinterest.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Google_Drive.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/Youtube.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="firstexamplediv">
                        <img src="/assets/ESPN.png" className="horitrectangleproductlogo" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="boutton-chat">
                <div>
                  <a className="getstartedwithgobutton">Get a Quote
                    <img src="/assets/Groupget.svg" className="getstartedwithgobuttonimg mx-2" />
                  </a>
                  <button className="callbutton">
                    <img src="/assets/noun_call_1078211.svg" width="25px" />
                  </button>
                  <button className="callbutton">
                    <img src="/assets/noun_chat_2518709 .svg" width="25px" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="secondscrolldiv  cool-link2" ref={el => boxItemsRef.current[7] = el}>
            <div className="container-search">
              <input placeholder="Search for something..." className="searchbar" />
              <div className="scroll-animate" ref={marqueeRef}>
                <div className="searchcraoselinside">
                  <div className="morquecont">
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/assets/Airbnb.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/assets/Facebook.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/assets/Cnn.png" className="horitrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/assets/Starbucks_Coffee.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/assets/Starbucks_Coffee.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/assets/Airbnb.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/assets/Facebook.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                  </div>
                  <div className="morquecont1">
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/assets/Airbnb.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/assets/Facebook.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/assets/Cnn.png" className="horitrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/assets/Starbucks_Coffee.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/assets/Starbucks_Coffee.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/assets/Airbnb.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/assets/Facebook.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                  </div>
                  <div className="morquecont2">
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/assets/Airbnb.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/assets/Facebook.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/assets/Cnn.png" className="horitrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/assets/Starbucks_Coffee.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/assets/Starbucks_Coffee.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/assets/Airbnb.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/assets/Facebook.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="techmaindiv">
        <div className="techmainpadding techfordes">
          <div className="row">
            <div className="col-lg-5">
              <p className="everreadyplayheading">
                Ever Ready
                <br />
                To Play With
                <br />
                Your Favourite
                <br />
                Technology Stack...
              </p>
              <div>
                <img src="/assets/Web_app.png" className="webappimage" />
              </div>
            </div>
            <div className="col-lg-7 techcol2">
              <div className="commontech tech1">
                <center>
                  <img src="/assets/Airbnb.png" className="techicon1" />
                </center>
              </div>
              <div className="commontech tech2">
                <center>
                  <img src="/assets/Airbnb.png" className="techicon2" />
                </center>
              </div>
              <div className="commontech tech3">
                <center>
                  <img src="/assets/Airbnb.png" className="techicon3" />
                </center>
              </div>
              <div className="commontech tech4">
                <center>
                  <img src="/assets/Airbnb.png" className="techicon4" />
                </center>
              </div>
              <div className="commontech tech5">
                <center>
                  <img src="/assets/Airbnb.png" className="techicon1" />
                </center>
              </div>
              <div className="commontech tech6">
                <center>
                  <img src="/assets/Airbnb.png" className="techicon1" />
                </center>
              </div>
              <div className="commontech tech7">
                <center>
                  <img src="/assets/Airbnb.png" className="techicon7" />
                </center>
              </div>
              <div className="commontech tech8">
                <center>
                  <img src="/assets/Airbnb.png" className="techicon1" />
                </center>
              </div>
              <div className="commontech tech9">
                <center>
                  <img src="/assets/Airbnb.png" className="techicon9" />
                </center>
              </div>
              <div className="commontech tech10">
                <center>
                  <img src="/assets/Airbnb.png" className="techicon10" />
                </center>
              </div>
              <div className="commontech tech11">
                <center>
                  <img src="/assets/Airbnb.png" className="techicon11" />
                </center>
              </div>
              <div className="commontech tech12">
                <center>
                  <img src="/assets/Airbnb.png" className="techicon12" />
                </center>
              </div>
              <div className="commontech tech13">
                <center>
                  <img src="/assets/Airbnb.png" className="techicon1" />
                </center>
              </div>
              <div className="commontech tech14">
                <center>
                  <img src="/assets/Airbnb.png" className="techicon14" />
                </center>
              </div>
              <div className="commontech tech15">
                <center>
                  <img src="/assets/Airbnb.png" className="techicon15" />
                </center>
              </div>
              <div className="commontech tech16">
                <center>
                  <img src="/assets/Airbnb.png" className="techicon16" />
                </center>
              </div>
              <div className="commontech tech17">
                <center>
                  <img src="/assets/Airbnb.png" className="techicon1" />
                </center>
              </div>
              <div className="commontech tech18">
                <center>
                  <img src="/assets/Airbnb.png" className="techicon18" />
                </center>
              </div>
              <div className="commontech tech19">
                <center>
                  <img src="/assets/Airbnb.png" className="techicon1" />
                </center>
              </div>
              <div className="commontech tech20">
                <center>
                  <img src="/assets/Airbnb.png" className="techicon20" />
                </center>
              </div>
            </div>
          </div>
          <div>
            {/* <img src="/assets/Up.svg" className="mt-5 downloadimga" /> */}
          </div>
        </div>
        <div className="techformob">
          <p className="everreadyplayheading">
            Ever Ready
            <br />
            To Play With
            <br />
            Your Favourite
            <br />
            Technology Stack...
          </p>
          <div className="text-center">
            <img src="/assets/Web_app.png" className="webappimage" />
          </div>
          <div>
            <div className="smallcard">
              <div className="commontech1 commontech10 ">
                <img src="/assets/Airbnb.png" className="techicon188" />
              </div>
              <div className="commontech1 commontech11">
                <img src="/assets/Airbnb.png" className="techicon188" />
              </div>
              <div className="commontech1 commontech13">
                <img src="/assets/Airbnb.png" className="techicon188" />
              </div>
            </div>
            <div className="smallcard">
              <div className="commontech1 commontech10 ">
                <img src="/assets/Airbnb.png" className="techicon188" />
              </div>
              <div className="commontech1 commontech11">
                <img src="/assets/Airbnb.png" className="techicon188" />
              </div>
              <div className="commontech1 commontech13">
                <img src="/assets/Airbnb.png" className="techicon188" />
              </div>
            </div>
            <div className="smallcard">
              <div className="commontech1 commontech10 ">
                <img src="/assets/Airbnb.png" className="techicon188" />
              </div>
              <div className="commontech1 commontech11">
                <img src="/assets/Airbnb.png" className="techicon188" />
              </div>
              <div className="commontech1 commontech13">
                <img src="/assets/Airbnb.png" className="techicon188" />
              </div>
            </div>
          </div>
          <div>
            <img src="/assets/Up.svg" className="mt-5 downloadimga" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobeImage;




{/* <img className="col" src="/assets/globe-section-image.svg" /> */ }
{/* <video  style={{width:"100%", height:"100%"}} src="/vedios\172170-846731303_small.mp4" autoPlay loop muted/> */ }


function horizontalLoop(items, config) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({ repeat: config.repeat, paused: config.paused, defaults: { ease: "none" }, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100) }),
    length = items.length,
    startX = items[0].offsetLeft,
    times = [],
    widths = [],
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1),
    totalWidth, curX, distanceToStart, distanceToLoop, item, i;

  gsap.set(items, {
    xPercent: (i, el) => {
      let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
      xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
      return xPercents[i];
    }
  });

  gsap.set(items, { x: 0 });
  totalWidth = items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0);

  for (i = 0; i < length; i++) {
    item = items[i];
    curX = xPercents[i] / 100 * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
    tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
      .fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }

  function toIndex(index, vars) {
    vars = vars || {};
    (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length);
    let newIndex = gsap.utils.wrap(0, length, index),
      time = times[newIndex];
    if (time > tl.time() !== index > curIndex) {
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }

  tl.next = vars => toIndex(curIndex + 1, vars);
  tl.previous = vars => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.times = times;
  tl.progress(1, true).progress(0, true);
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
  return tl;
}

