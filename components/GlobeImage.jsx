"use client"
import gsap from "gsap";
import { useEffect, useState, useRef, useCallback } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BiSearch } from "react-icons/bi";
import { useGSAP } from "@gsap/react";
import Lottie from 'react-lottie';
import animationData from '../public/mobile.json';
import "../styles/Global.css";
import { PiCaretRightBold } from "react-icons/pi";
import Tilt from 'react-parallax-tilt';
import { WebApp } from "@/app/Data/WebApp";
import { MobApp } from "@/app/Data/WebApp";
import { DesApp } from "@/app/Data/WebApp";
import { EcommerceApp } from "@/app/Data/WebApp";
import { aimlApp } from "@/app/Data/WebApp";
import { chatApp } from "@/app/Data/WebApp";
// import './TrackOnWindow.demozap.css'
gsap.registerPlugin(ScrollTrigger);

const GlobeImage = () => {
  const [text, setText] = useState('BUSINESS');
  const [count, setCount] = useState(null);
  const element = useRef(null);
  const verticalRef = useRef(null);
  const boxItemsRef = useRef([]);
  const SectionCenterRef = useRef(null);
  const marqueeRef = useRef(null);
  const loopRef = useRef(null);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const handleCard = (index) => {
    if (index) {
      setCount(index)
    }
    console.log("index", index, count)
  }

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
      return -502
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
    loopRef.current = horizontalLoop(".marquee__part", {
      repeat: -1,
      paused: false,
      speed: 0.3
    });

    return () => {
      loopRef.current.kill();
    };
  }, []);

  // const handleMouseEnter = () => {
  //   if (loopRef.current) {
  //     loopRef.current.pause();
  //   }
  // };
  // const handleMouseLeave = () => {
  //   loopRef.current = horizontalLoop(".marquee__part", {
  //     repeat: -1,
  //     paused: false,
  //     speed: 0.3
  //   });
  //   return () => {
  //     loopRef.current.kill();
  //   };
  // }

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
                  <Tilt
                    tiltMaxAngleX={25}
                    tiltMaxAngleY={25}
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={false}
                    gyroscope={true}
                    trackOnWindow={true}
                    transitionSpeed={1500}
                  >
                    <img src="/assets/Web_app.png" className="webappimage" />
                  </Tilt>
                </div>
                <div className="col-lg-5 col-md-12 changewidthcol5 paddingmarginzero">
                  <p className="scrollcardheading">Web Application</p>
                  <p className="scrollcardsubheading">Best fit to implement your idea and let the world know your play. </p>
                  <p className="scrollcardtext"> These applications are accessible via browser, some of them are dynamic which requires server-side processing and some are static which doesn't . Let's build Web Apps. </p>
                  <p className="cardexample">Examples:-</p>
                  <div className="row appexamplecarddes">
                    {WebApp?.map((item, index) => (
                      <div className="col-lg-3" key={index}>
                        <div className={count === index ? "firstexampledivactive" : count !== index && count !== null ? "carddeactive" : "firstexamplediv"} type="button" onClick={() => handleCard(index)}>
                          <img src={item.image} className={item.className} />
                        </div>
                        {count === index && (
                          <div className="cardtextexample">
                            <p className="caroselproductname">{item.name}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="row appexamplecard">
                    <div className="col-2">
                      <div className="firstexamplediv">
                        <img src="/assets/Airbnb.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="firstexamplediv">
                        <img src="/assets/Facebook.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="firstexamplediv">
                        <img src="/assets/Cnn.png" className="horitrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="firstexamplediv">
                        <img src="/assets/Starbucks_Coffee.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="firstexamplediv">
                        <img src="/assets/Pinterest.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="firstexamplediv">
                        <img src="/assets/Google_Drive.png" className="vertrectangleproductlogo" />
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
                    <img src="/assets/noun_call_1078211.svg" className="btnimg" />
                  </button>
                  <button className="callbutton">
                    <img src="/assets/noun_chat_2518709 .svg" className="btnimg" />
                  </button>
                </div>
              </div>

            </div>
          </div>
          <div className="secondscrolldiv" ref={el => boxItemsRef.current[1] = el}>
            <div className="cool-link">
              <div className="row paddingmarginzero">
                <div className="col-lg-7 paddingmarginzero changewidthcol7">
                  <Tilt
                    className="background-stripes track-on-window"
                    tiltMaxAngleX={30}
                    tiltMaxAngleY={25}
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={false}
                    gyroscope={true}
                    trackOnWindow={true}
                    transitionSpeed={1500}
                  >
                    <img src="/mobapplication/Mobile_application.png" className="mobappimg" />
                  </Tilt>
                </div>
                <div className="col-lg-5 changewidthcol5 paddingmarginzero">
                  <p className="scrollcardheading">Mobile Application</p>
                  <p className="scrollcardsubheading">Give wings to your idea by serving it directly to the user's phone.  </p>
                  <p className="scrollcardtext"> Around 80% of mobile users prefer app for their needs. These apps can be native or hybrid with a single codebase for both IOS and Android. Let's build Mobile Applications.  </p>
                  <p className="cardexample">Examples:-</p>
                  <div className="row appexamplecarddes">
                    <div className="col-lg-3">
                      <div className="firstexamplediv">
                        <img src="/mobapplication/Instagram.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="firstexamplediv">
                        <img src="/mobapplication/Zomato.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="firstexamplediv">
                        <img src="/mobapplication/Tinder.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="firstexamplediv">
                        <img src="/mobapplication/Dropbox.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                  </div>
                  <div className="row appexamplecarddes">
                    <div className="col-lg-3">
                      <div className="firstexamplediv">
                        <img src="/mobapplication/Spotify.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="firstexamplediv">
                        <img src="/mobapplication/Netflix.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="firstexamplediv">
                        <img src="/mobapplication/Flipboard.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="firstexamplediv">
                        <img src="/mobapplication/Google_Maps.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                  </div>

                  <div className="row appexamplecard">
                    <div className="col-2">
                      <div className="firstexamplediv">
                        <img src="/mobapplication/Instagram.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="firstexamplediv">
                        <img src="/mobapplication/Zomato.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="firstexamplediv">
                        <img src="/mobapplication/Tinder.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="firstexamplediv">
                        <img src="/mobapplication/Dropbox.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="firstexamplediv">
                        <img src="/mobapplication/Spotify.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="firstexamplediv">
                        <img src="/mobapplication/Netflix.png" className="vertrectangleproductlogo" />
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
                    <img src="/assets/noun_call_1078211.svg" className="btnimg" />
                  </button>
                  <button className="callbutton">
                    <img src="/assets/noun_chat_2518709 .svg" className="btnimg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="secondscrolldiv bg-secondscrolldiv" ref={el => boxItemsRef.current[2] = el}>
            <div className="cool-link">
              <div className="row paddingmarginzero">
                <div className="col-lg-7 paddingmarginzero changewidthcol7">
                  <Tilt
                    className="background-stripes track-on-window"
                    tiltMaxAngleX={25}
                    tiltMaxAngleY={25}
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={false}
                    gyroscope={true}
                    trackOnWindow={true}
                    transitionSpeed={1500}
                  >
                    <img src="/desktopapplication/Desktop_application.png" className="desktopappimage" />
                  </Tilt>
                </div>
                <div className="col-lg-5 changewidthcol5 paddingmarginzero">
                  <p className="scrollcardheading">Desktop Application</p>
                  <p className="scrollcardsubheading">Enhance user experience by delivering installable software & applications right into your PC </p>
                  <p className="scrollcardtext"> Remove browser hassle and their dependency. These Apps are installed once & exists until you uninstall them, having in-app manual & auto update features. </p>
                  <p className="cardexample">Examples:-</p>
                  <div className="row appexamplecarddes">
                    <div className="col-lg-3">
                      <div className="firstexamplediv">
                        <img src="/desktopapplication/Slack.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="firstexamplediv">
                        <img src="/desktopapplication/Zoho.png" className="horitrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="firstexamplediv">
                        <img src="/desktopapplication/Skype.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="firstexamplediv">
                        <img src="/desktopapplication/Asana.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                  </div>
                  <div className="row appexamplecarddes">
                    <div className="col-lg-3">
                      <div className="firstexamplediv">
                        <img src="/desktopapplication/Vlc.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="firstexamplediv">
                        <img src="/desktopapplication/Whatsapp.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="firstexamplediv">
                        <img src="/desktopapplication/Amazon_Music.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="firstexamplediv">
                        <img src="/desktopapplication/Duolingo.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                  </div>

                  <div className="row appexamplecard">
                    <div className="col-2">
                      <div className="firstexamplediv">
                        <img src="/desktopapplication/Slack.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="firstexamplediv">
                        <img src="/desktopapplication/Zoho.png" className="horitrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="firstexamplediv">
                        <img src="/desktopapplication/Skype.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="firstexamplediv">
                        <img src="/desktopapplication/Asana.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="firstexamplediv">
                        <img src="/desktopapplication/Vlc.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="firstexamplediv">
                        <img src="/desktopapplication/Whatsapp.png" className="vertrectangleproductlogo" />
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
                    <img src="/assets/noun_call_1078211.svg" className="btnimg" />
                  </button>
                  <button className="callbutton">
                    <img src="/assets/noun_chat_2518709 .svg" className="btnimg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="secondscrolldiv   bg-thirdscrolldiv" ref={el => boxItemsRef.current[3] = el}>
            <div className="cool-link">
              <div className="row paddingmarginzero">
                <div className="col-lg-7 paddingmarginzero changewidthcol7">
                  <Tilt
                    tiltMaxAngleX={25}
                    tiltMaxAngleY={25}
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={false}
                    gyroscope={true}
                    trackOnWindow={true}
                    transitionSpeed={1500}
                  >
                    <img src="/ecommerceapp/Ecommerce.png" className="ecommerceappimage" />
                  </Tilt>
                </div>
                <div className="col-lg-5 changewidthcol5 paddingmarginzero">
                  <p className="scrollcardheading">E-commerce</p>
                  <p className="scrollcardsubheading">Set up your very own giant marketplace. </p>
                  <p className="scrollcardtext">An online shopping platform that is accessible from anywhere around the world. Order Management, Delivery options, Online payment collection, etc. Make your dream come true and become an entrepreneur. </p>
                  <p className="cardexample">Examples:-</p>
                  <div className="row appexamplecarddes">
                    <div className="col-lg-3">
                      <div className="firstexamplediv">
                        <img src="/ecommerceapp/Amazon.png" className="horitrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="firstexamplediv">
                        <img src="/ecommerceapp/Flipkart.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="firstexamplediv">
                        <img src="/ecommerceapp/Olx.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="firstexamplediv">
                        <img src="/ecommerceapp/Netmeds.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                  </div>
                  <div className="row appexamplecarddes">
                    <div className="col-lg-3">
                      <div className="firstexamplediv">
                        <img src="/ecommerceapp/Shein.png" className="horitrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="firstexamplediv">
                        <img src="/ecommerceapp/Zara.png" className="horitrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="firstexamplediv">
                        <img src="/ecommerceapp/Offerup.png" className="horitrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="firstexamplediv">
                        <img src="/ecommerceapp/Ebay.png" className="horitrectangleproductlogo" />
                      </div>
                    </div>
                  </div>

                  <div className="row appexamplecard">
                    <div className="col-2">
                      <div className="firstexamplediv">
                        <img src="/ecommerceapp/Amazon.png" className="horitrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="firstexamplediv">
                        <img src="/ecommerceapp/Flipkart.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="firstexamplediv">
                        <img src="/ecommerceapp/Olx.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="firstexamplediv">
                        <img src="/ecommerceapp/Netmeds.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="firstexamplediv">
                        <img src="/ecommerceapp/Shein.png" className="horitrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="firstexamplediv">
                        <img src="/ecommerceapp/Zara.png" className="horitrectangleproductlogo" />
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
                    <img src="/assets/noun_call_1078211.svg" className="btnimg" />
                  </button>
                  <button className="callbutton">
                    <img src="/assets/noun_chat_2518709 .svg" className="btnimg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="secondscrolldiv  bg-fourscrolldiv" ref={el => boxItemsRef.current[4] = el}>
            <div className="cool-link">
              <div className="row paddingmarginzero">
                <div className="col-lg-7 paddingmarginzero changewidthcol7">
                  <Tilt
                    tiltMaxAngleX={25}
                    tiltMaxAngleY={25}
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={false}
                    gyroscope={true}
                    trackOnWindow={true}
                    transitionSpeed={1500}
                  >
                    <img src="/aiapplication/aiapp.png" className="aiappimage" />
                  </Tilt>

                </div>
                <div className="col-lg-5 changewidthcol5 paddingmarginzero">
                  <p className="scrollcardheading">A.I & M.L.</p>
                  <p className="scrollcardsubheading">Why work more when you can ask the machine to dance?. </p>
                  <p className="scrollcardtext"> Give brains to your machine and let them handle your work. Imagine this as a program that can perform different operations based on the things they learn. </p>
                  <p className="cardexample">Examples:-</p>
                  <div className="row appexamplecarddes">
                    <div className="col-lg-3">
                      <div className="firstexamplediv">
                        <img src="/aiapplication/Face_Recognition.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="firstexamplediv">
                        <img src="/aiapplication/Computer_Vision.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="firstexamplediv">
                        <img src="/aiapplication/Lenskart.png" className="horitrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="firstexamplediv">
                        <img src="/aiapplication/Neural_Network.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                  </div>
                  <div className="row appexamplecarddes">
                    <div className="col-lg-3">
                      <div className="firstexamplediv">
                        <img src="/aiapplication/Tensorflow.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="firstexamplediv">
                        <img src="/aiapplication/Wolfram_Alpha.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="firstexamplediv">
                        <img src="/aiapplication/The_Weather_Channel.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="firstexamplediv">
                        <img src="/aiapplication/Amazon_Alexa.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                  </div>

                  <div className="row appexamplecard">
                    <div className="col-2">
                      <div className="firstexamplediv">
                        <img src="/aiapplication/Face_Recognition.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="firstexamplediv">
                        <img src="/aiapplication/Computer_Vision.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="firstexamplediv">
                        <img src="/aiapplication/Lenskart.png" className="horitrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="firstexamplediv">
                        <img src="/aiapplication/Neural_Network.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="firstexamplediv">
                        <img src="/aiapplication/Tensorflow.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="firstexamplediv">
                        <img src="/aiapplication/Wolfram_Alpha.png" className="vertrectangleproductlogo" />
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
                    <img src="/assets/noun_call_1078211.svg" className="btnimg" />
                  </button>
                  <button className="callbutton">
                    <img src="/assets/noun_chat_2518709 .svg" className="btnimg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="secondscrolldiv  bg-fivescrolldiv" ref={el => boxItemsRef.current[5] = el}>
            <div className="cool-link">
              <div className="row paddingmarginzero">
                <div className="col-lg-7 paddingmarginzero changewidthcol7">
                  <Tilt
                    tiltMaxAngleX={25}
                    tiltMaxAngleY={25}
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={false}
                    gyroscope={true}
                    trackOnWindow={true}
                    transitionSpeed={1500}
                  >
                    <img src="/chatapplication/chatbots.png" className="chatappimag" />
                  </Tilt>
                </div>
                <div className="col-lg-5 changewidthcol5 paddingmarginzero">
                  <p className="scrollcardheading">Chat Bots</p>
                  <p className="scrollcardsubheading">Give your product its very own intelligence! </p>
                  <p className="scrollcardtext"> Enhance your products by adding automation. Let the Chatbot handle the requests & increase the productivity of your business. Avoid multiple clicks and selections just start interacting with ChatBot. </p>
                  <p className="cardexample">Examples:-</p>
                  <div className="row appexamplecarddes">
                    <div className="col-lg-3">
                      <div className="firstexamplediv card6">
                        <img src="/chatapplication/Food.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="firstexamplediv card6">
                        <img src="/chatapplication/E_Learning.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="firstexamplediv card6">
                        <img src="/chatapplication/Travel.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="firstexamplediv card6">
                        <img src="/chatapplication/Health.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                  </div>
                  <div className="row appexamplecarddes">
                    <div className="col-lg-3">
                      <div className="firstexamplediv card6">
                        <img src="/chatapplication/Entertainment.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="firstexamplediv card6">
                        <img src="/chatapplication/Restaurant_Booking.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="firstexamplediv card6">
                        <img src="/chatapplication/Shopping.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="firstexamplediv card6">
                        <img src="/chatapplication/Custom_Solutions.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                  </div>

                  <div className="row appexamplecard">
                    <div className="col-2">
                      <div className="firstexamplediv card6">
                        <img src="/chatapplication/Food.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="firstexamplediv card6">
                        <img src="/chatapplication/E_Learning.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="firstexamplediv card6">
                        <img src="/chatapplication/Travel.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="firstexamplediv card6">
                        <img src="/chatapplication/Health.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="firstexamplediv card6">
                        <img src="/chatapplication/Entertainment.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="firstexamplediv card6">
                        <img src="/chatapplication/Restaurant_Booking.png" className="vertrectangleproductlogo" />
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
                    <img src="/assets/noun_call_1078211.svg" className="btnimg" />
                  </button>
                  <button className="callbutton">
                    <img src="/assets/noun_chat_2518709 .svg" className="btnimg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="secondscrolldiv  cool-link2" ref={el => boxItemsRef.current[6] = el}>
            <div className="container-search">
              <input placeholder="Search for something..." className="searchbar" />
              <div className="scroll-animate" ref={marqueeRef}
              >
                <div className="searchcraoselinside">
                  <div className="morquecont">
                    <div className="marquee__part">
                      <div className="firstexamplediv mx-2">
                        <img src="/assets/Airbnb.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/assets/Facebook.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv card6">
                        <img src="/chatapplication/E_Learning.png" className="vertrectangleproductlogo" />
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
                        <img src="/assets/Google_Drive.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/assets/Pinterest.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/assets/Pinterest.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv card6">
                        <img src="/chatapplication/Food.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="aiapplication/Tensorflow.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                  </div>
                  <div className="morquecont1">
                    <div className="marquee__part">
                      <div className="firstexamplediv mx-3">
                        <img src="/mobapplication/Google_Maps.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/desktopapplication/Slack.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/aiapplication/Wolfram_Alpha.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/desktopapplication/Zoho.png" className="horitrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/desktopapplication/Skype.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/desktopapplication/Duolingo.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/desktopapplication/Amazon_Music.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/desktopapplication/Whatsapp.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/desktopapplication/Vlc.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                  </div>
                  <div className="morquecont2">
                    <div className="marquee__part">
                      <div className="firstexamplediv mx-2">
                        <img src="/ecommerceapp/Amazon.png" className="horitrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/ecommerceapp/Flipkart.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>

                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/ecommerceapp/Olx.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/ecommerceapp/Netmeds.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/aiapplication/Face_Recognition.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/aiapplication/Computer_Vision.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/aiapplication/Amazon_Alexa.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                    <div className="marquee__part">
                      <div className="firstexamplediv">
                        <img src="/mobapplication/Netflix.png" className="vertrectangleproductlogo" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <a className="extrabutton">
                  <PiCaretRightBold />
                </a>
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
              <div className="text-center">
                <Lottie options={defaultOptions} height={400} width={400} className="lottieImag" />;
              </div>
            </div>
            <div className="col-lg-7 techcol2">
              <div className="commontech tech1">
                <center>
                  <img src="/techimg/wordpress-icon.svg" className="techicon1" />
                </center>
              </div>
              <div className="commontech tech2">
                <center>
                  <img src="/techimg/flutterio-icon.webp" className="techicon2" />
                </center>
              </div>
              <div className="commontech tech3">
                <center>
                  <img src="/techimg/angular-icon.webp" className="techicon3" />
                </center>
              </div>
              <div className="commontech tech4">
                <center>
                  <img src="/techimg/dartlang-icon.webp" className="techicon4" />
                </center>
              </div>
              <div className="commontech tech5">
                <center>
                  <img src="/techimg/google_cloud-icon.webp" className="techicon1" />
                </center>
              </div>
              <div className="commontech tech6">
                <center>
                  <img src="/techimg/laravel-icon.webp" className="techicon1" />
                </center>
              </div>
              <div className="commontech tech7">
                <center>
                  <img src="/techimg/node-node-js-seeklogo.com.webp" className="techicon7" />
                </center>
              </div>
              <div className="commontech tech8">
                <center>
                  <img src="/techimg/kotlinlang-icon.webp" className="techicon1" />
                </center>
              </div>
              <div className="commontech tech9">
                <center>
                  <img src="/techimg/microsoft_azure-icon.webp" className="techicon9" />
                </center>
              </div>
              <div className="commontech tech10">
                <center>
                  <img src="/techimg/swift-icon.svg" className="techicon10" />
                </center>
              </div>
              <div className="commontech tech11">
                <center>
                  <img src="/techimg/vuejs-seeklogo.com.svg" className="techicon11" />
                </center>
              </div>
              <div className="commontech tech12">
                <center>
                  <img src="/techimg/golang-official.webp" className="techicon12" />
                </center>
              </div>
              <div className="commontech tech13">
                <center>
                  <img src="/techimg/electronjs-icon.webp" className="techicon1" />
                </center>
              </div>
              <div className="commontech tech14">
                <center>
                  <img src="/techimg/graphql-icon.webp" className="techicon14" />
                </center>
              </div>
              <div className="commontech tech15">
                <center>
                  <img src="/techimg/Path_7239.svg" className="techicon15" />
                </center>
              </div>
              <div className="commontech tech16">
                <center>
                  <img src="/techimg/python-icon.svg" className="techicon16" />
                </center>
              </div>
              <div className="commontech tech17">
                <center>
                  <img src="/techimg/graphql-icon.webp" className="techicon1" />
                </center>
              </div>
              <div className="commontech tech18">
                <center>
                  <img src="/techimg/java-vertical.webp" className="techicon18" />
                </center>
              </div>
              <div className="commontech tech19">
                <center>
                  <img src="/techimg/reactjs-icon.svg" className="techicon1" />
                </center>
              </div>
              <div className="commontech tech20">
                <center>
                  <img src="/techimg/Layer%202.svg" className="techicon20" />
                </center>
              </div>

            </div>
          </div>
          <div>
            <img src="/assets/Up.svg" className="mt-5 downloadimga" width="100%" />
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
            <Lottie options={defaultOptions} height={600} width={500} />;
          </div>
          <div>
            <div className="smallcard">
              <div className="commontech1 commontech10 ">
                <img src="/techimg/wordpress-icon.svg" className="techicon188" />
              </div>
              <div className="commontech1 commontech11">
                <img src="/techimg/flutterio-icon.webp" className="techicon188" />
              </div>
              <div className="commontech1 commontech13">
                <img src="/techimg/angular-icon.webp" className="techicon188" />
              </div>
            </div>
            <div className="smallcard">
              <div className="commontech1 commontech10 ">
                <img src="/techimg/dartlang-icon.webp" className="techicon188" />
              </div>
              <div className="commontech1 commontech11">
                <img src="/techimg/google_cloud-icon.webp" className="techicon188" />
              </div>
              <div className="commontech1 commontech13">
                <img src="/techimg/laravel-icon.webp" className="techicon188" />
              </div>
            </div>
            <div className="smallcard">
              <div className="commontech1 commontech10 ">
                <img src="/techimg/kotlinlang-icon.webp" className="techicon188" />
              </div>
              <div className="commontech1 commontech11">
                <img src="/techimg/node-node-js-seeklogo.com.webp" className="techicon188" />
              </div>
              <div className="commontech1 commontech13">
                <img src="/techimg/microsoft_azure-icon.webp" className="techicon188" />
              </div>
            </div>
          </div>
          <div>
            <img src="/assets/Up.svg" className="mt-5 downloadimga" width="100%" />
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


