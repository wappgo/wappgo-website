"use client"
import gsap from "gsap";
import { useEffect, useState, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BiSearch } from "react-icons/bi";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
const GlobeImage = () => {
  const [text, setText] = useState('BUSINESS');
  const element = useRef(null);
  const verticalRef = useRef(null);
  const boxItemsRef = useRef([]);
  const SectionCenterRef = useRef(null);
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

  useGSAP(() => {
    gsap.to(".marque", {
      // transform: 'translateX(-200%)',
      duration: 50,
      delay: 1,
      repeat: -1,
      ease: "none"
    })
  })

  useEffect(() => {
    const timeOut = setTimeout(() => {
      handleText()
    }, 1000)
    return () => clearTimeout(timeOut)
  }, [text])

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

    gsap.to(boxItems, {
      xPercent: -600,
      ease: "sine.out",
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



  return (
    <div className="mb-5" ref={verticalRef}>
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
          <div className="secondscrolldiv bg-fivescrolldiv1" ref={el => boxItemsRef.current[7] = el}>
            <div className="herocon">
              <img src="/assets/Mask_Group_11.jpg" className="herosection" />
              <BiSearch className="searchbaricon" />
              <input placeholder="Search for something..." className="searchbar" />

              <div className="scroll-animate">
                <div className="marque">
                  <div className="morquecont">
                    <div className="">
                      <div className="firstexamplediv">
                        <img src="/assets/Airbnb.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="">
                      <div className="firstexamplediv">
                        <img src="/assets/Facebook.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="">
                      <div className="firstexamplediv">
                        <img src="/assets/Cnn.png" className="horitrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="">
                      <div className="firstexamplediv">
                        <img src="/assets/Starbucks_Coffee.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="">
                      <div className="firstexamplediv">
                        <img src="/assets/Starbucks_Coffee.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="marque">
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
                </div>
                <div className="marque">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="techmaindiv">
        <div className="techmainpadding">
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
        </div>
      </div>
    </div>
  );
};

export default GlobeImage;




{/* <img className="col" src="/assets/globe-section-image.svg" /> */ }
{/* <video  style={{width:"100%", height:"100%"}} src="/vedios\172170-846731303_small.mp4" autoPlay loop muted/> */ }