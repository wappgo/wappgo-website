"use client"
import gsap from "gsap";
import { useEffect, useState, useRef, useCallback } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../public/styles/Global.css";
import { PiCaretRightBold } from "react-icons/pi";
import Tilt from 'react-parallax-tilt';
import { WebApp } from "@/app/Data/WebApp";
import { MobApp } from "@/app/Data/WebApp";
import { DesApp } from "@/app/Data/WebApp";
import { EcommerceApp } from "@/app/Data/WebApp";
import { aimlApp } from "@/app/Data/WebApp";
import { chatApp } from "@/app/Data/WebApp";
import Technology from "./Technology";
import { debounce } from 'lodash'; 
gsap.registerPlugin(ScrollTrigger);

const GlobeImage = () => {
  const [text, setText] = useState('BUSINESS');
  const [count1, setCount1] = useState(null);
  const [count2, setCount2] = useState(null);
  const [count3, setCount3] = useState(null);
  const [count4, setCount4] = useState(null);
  const [count5, setCount5] = useState(null);
  const [count6, setCount6] = useState(null);
  const [active1, setActive1] = useState(true)
  const [active2, setActive2] = useState(true)
  const [active3, setActive3] = useState(true)
  const [active4, setActive4] = useState(true)
  const [active5, setActive5] = useState(true)
  const [active6, setActive6] = useState(true)
  const [wmApp, setWmApp] = useState([])
  const [decApp, setDecApp] = useState([])
  const [aiChatApp, setAiChatApp] = useState([])
  const element = useRef(null);
  const verticalRef = useRef(null);
  const boxItemsRef = useRef([]);
  const SectionCenterRef = useRef(null);
  const elementRef = useRef(null);
  const [oneState, setOneState] = useState(null);
  const [secondState, setSecondState] = useState(null);
  const [thirdState, setThirdState] = useState(null);
  const [activeAni1, setActiveAni1] = useState(false);
  const [activeAni2, setActiveAni2] = useState(false);
  const [activeAni3, setActiveAni3] = useState(false);
  const handleCard = (index, str) => {
    if (index !== undefined && index !== null && str == "webapp") {
      if (count1 === index) {
        setActive1(!active1)
      }
      else {
        setActive1(true)
      }
      setCount1(index)
    } else if (index !== undefined && index !== null && str === "mobapp") {
      if (count2 === index) {
        setActive2(!active2)
      }
      else {
        setActive2(true)
      }
      setCount2(index)
    } else if (index !== undefined && index !== null && str === "desapp") {
      if (count3 === index) {
        setActive3(!active3)
      }
      else {
        setActive3(true)
      }
      setCount3(index)
    } else if (index !== undefined && index !== null && str === "e-app") {
      if (count4 === index) {
        setActive4(!active4)
      }
      else {
        setActive4(true)
      }
      setCount4(index)
    } else if (index !== undefined && index !== null && str === "aiapp") {
      if (count5 === index) {
        setActive5(!active5)
      }
      else {
        setActive5(true)
      }
      setCount5(index)
    } else if (index !== undefined && index !== null && str === "chatapp") {
      if (count6 === index) {
        setActive6(!active6)
      }
      else {
        setActive6(true)
      }
      setCount6(index)
    }
  }
  const handleText = useCallback(() => {
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
  }, [text]);

  const debouncedHandleText = useCallback(debounce(handleText, 1000), [handleText]);

  useEffect(() => {
    debouncedHandleText();
    return () => debouncedHandleText.cancel();
  }, [debouncedHandleText]);

  const handleAnimateCard = (index, type) => {
    if (index === undefined || index === null) return;

    let stateSetter;
    let activeState;

    switch (type) {
      case "first":
        stateSetter = setOneState;
        activeState = activeAni1;
        setActiveAni1(!activeAni1);
        setActiveAni2(false);
        setActiveAni3(false);
        break;
      case "second":
        stateSetter = setSecondState;
        activeState = activeAni2;
        setActiveAni2(!activeAni2);
        setActiveAni1(false);
        setActiveAni3(false);
        break;
      case "third":
        stateSetter = setThirdState;
        activeState = activeAni3;
        setActiveAni3(!activeAni3);
        setActiveAni2(false);
        setActiveAni1(false);
        break;
      default:
        return;
    }

    stateSetter(index);
  };



  const getXPercent = () => {
    const viewportWidth = window.innerWidth;
    if (viewportWidth < 1280) {
      return -320;
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
        scrub: 1,
        // snap: 1 / (boxItems.length - 1),
        // end: "+=" + SectionCenter.offsetWidth

      }
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);


  useEffect(() => {
    setWmApp(WebApp.concat(...MobApp, ...DesApp, ...EcommerceApp, ...aimlApp, ...chatApp))
    setDecApp(DesApp.concat(...EcommerceApp, ...aimlApp, ...chatApp, ...MobApp, ...WebApp))
    setAiChatApp(aimlApp.concat(...chatApp, ...MobApp, ...WebApp, ...EcommerceApp, ...chatApp))
  }, [])

  const handleMouseEnter = () => {
    gsap.to(elementRef.current, {
      duration: 0.3,
      ease: "bounce.out",
      yoyo: true,
      repeat: -1, 
      x: 20
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleMouseEnter();
    }, 3000);
    return () => clearInterval(interval);
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
                  <Tilt
                    tiltMaxAngleX={25}
                    tiltMaxAngleY={25}
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={false}
                    gyroscope={true}
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
                  <div className="row">
                    {WebApp?.map((item, index) => (
                      <div className="col-lg-3 col-md-3 col-2 position-relative" key={index}>
                        <div className={count1 === index && active1 ? `firstexampledivactive servicsecard-${index}` : count1 !== index && count1 !== null && active1 ? `carddeactive servicsecard-${index}` : !active1 ? `firstexamplediv servicsecard-${index}` : `firstexamplediv servicsecard-${index}`}
                          type="button"
                          onClick={() => handleCard(index, "webapp")}>
                          <img src={item.image} className={item.className} />
                        </div>
                        {count1 === index && active1 && (
                          <div className="cardtextexample">
                            <p className="caroselproductname">{item.name}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="boutton-chat">
                <div className="btn-chatetext">
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
                    tiltMaxAngleX={30}
                    tiltMaxAngleY={25}
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={false}
                    gyroscope={true}
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
                  <div className="row">
                    {MobApp.map((item, index) => (
                      <div className="col-lg-3 col-md-3 col-2 position-relative" key={index}>
                        <div className={count2 === index && active2 ? `firstexampledivactive servicsecard-${index}` : count2 !== index && count2 !== null && active2 ? `carddeactive servicsecard-${index}` : !active2 ? `firstexamplediv servicsecard-${index}` : `firstexamplediv servicsecard-${index}`} type="button" onClick={() => handleCard(index, "mobapp")}>
                          <img src={item.image} className={item.className} />
                        </div>
                        {count2 === index && active2 && (
                          <div className="cardtextexample">
                            <p className="caroselproductname">{item.name}</p>
                          </div>
                        )}
                      </div>
                    ))}
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
                    tiltMaxAngleX={25}
                    tiltMaxAngleY={25}
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={false}
                    gyroscope={true}
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
                  <div className="row">
                    {DesApp.map((item, index) => (
                      <div className="col-lg-3 col-md-3 col-2 position-relative" key={index}>
                        <div className={count3 === index && active3 ? `firstexampledivactive servicsecard-${index}` : count3 !== index && count3 !== null && active3 ? `carddeactive servicsecard-${index}` : !active3 ? `firstexamplediv servicsecard-${index}` : `firstexamplediv servicsecard-${index}`} type="button" onClick={() => handleCard(index, "desapp")}>
                          <img src={item.image} className={item.className} />
                        </div>
                        {count3 === index && active3 && (
                          <div className="cardtextexample">
                            <p className="caroselproductname">{item.name}</p>
                          </div>
                        )}
                      </div>
                    ))}
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
                  <div className="row">
                    {EcommerceApp.map((item, index) => (
                      <div className="col-lg-3 col-md-3 col-2 position-relative" key={index}>
                        <div className={count4 === index && active4 ? `firstexampledivactive servicsecard-${index}` : count4 !== index && count4 !== null && active4 ? `carddeactive servicsecard-${index}` : !active4 ? `firstexamplediv servicsecard-${index}` : `firstexamplediv servicsecard-${index}`} type="button" onClick={() => handleCard(index, "e-app")}>
                          <img src={item.image} className={item.className} />
                        </div>
                        {count4 === index && active4 && (
                          <div className="cardtextexample">
                            <p className="caroselproductname">{item.name}</p>
                          </div>
                        )}
                      </div>
                    ))}
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
                    {aimlApp.map((item, index) => (
                      <div className="col-lg-3 col-md-3 col-2 position-relative" key={index}>
                        <div className={count5 === index && active5 ? `firstexampledivactive servicsecard-${index}` : count5 !== index && count5 !== null && active5 ? `carddeactive servicsecard-${index}` : !active5 ? `firstexamplediv servicsecard-${index}` : `firstexamplediv servicsecard-${index}`} type="button" onClick={() => handleCard(index, "aiapp")}>
                          <img src={item.image} className={item.className} />
                        </div>
                        {count5 === index && active5 && (
                          <div className="cardtextexample">
                            <p className="caroselproductname">{item.name}</p>
                          </div>
                        )}
                      </div>
                    ))}
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
                    {chatApp.map((item, index) => (
                      <div className="col-lg-3 col-md-3 col-2 position-relative" key={index}>
                        <div className={count6 === index && active6 ? `firstexampledivactive card6 servicsecard-${index}` : count6 !== index && count6 !== null && active6 ? `carddeactive card6 servicsecard-${index}` : !active6 ? `firstexamplediv card6 servicsecard-${index}` : `firstexamplediv card6 servicsecard-${index}`} type="button" onClick={() => handleCard(index, "chatapp")}>
                          <img src={item.image} className={item.className} />
                        </div>
                        {count6 === index && active6 && (
                          <div className="cardtextexample">
                            <p className="caroselproductname">{item.name}</p>
                          </div>
                        )}
                      </div>
                    ))}
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
          <div className={"secondscrolldiv2" } ref={el => boxItemsRef.current[6] = el}>
            <div className="container-search cool-link2">
              <input placeholder="Search for something..." className="searchbar" />
              <div className="marquee-conteiner">
                <div className="cardmarquee">
                  <div className="Marquee22">
                    <div className={activeAni2 || activeAni1 || activeAni3 ? "Marquee-content22 stopanimate22" : "Marquee-content22"}>
                      {wmApp.map((item, index) => (
                        <div className="Marquee-tag" key={index}>
                          <div
                            className={
                              index === oneState && activeAni1
                                ? `firstexampledivactive1 hideanimate-${index}`
                                : index !== oneState && activeAni1 || activeAni2 || activeAni3
                                  ? `firstexamplediv1 anicarddeactive hideanimate-${index}`
                                  : `firstexamplediv1 hideanimate-${index}`
                            }
                            onClick={() => handleAnimateCard(index, "first")}
                          >
                            <img src={item.image} className={item.className} alt={item.name} />
                            {index === oneState && activeAni1 && (
                              <div className={`animated-text animated-text-${index}`}>
                                <p className="caroselproductname1 text-white">{item.name}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="Marquee33">
                    <div className={activeAni2 || activeAni1 || activeAni3 ? "Marquee-content22 stopanimate22" : "Marquee-content22"}>
                      {decApp.map((item, index) => (
                        <div className="Marquee-tag" key={index}>
                          <div
                            className={
                              index === secondState && activeAni2
                                ? `firstexampledivactive1 hideanimate-${index}`
                                : index !== secondState && activeAni2 || activeAni1 || activeAni3
                                  ? `firstexamplediv1 anicarddeactive hideanimate-${index}`
                                  : `firstexamplediv1 hideanimate-${index}`
                            }
                            onClick={() => handleAnimateCard(index, "second")}
                          >
                            <img src={item.image} className={item.className} alt={item.name} />
                            {index === secondState && activeAni2 && (
                              <div className={`animated-text animated-text-${index}`}>
                                <p className="caroselproductname1 text-white">{item.name}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="Marquee44">
                    <div className={activeAni2 || activeAni1 || activeAni3 ? "Marquee-content22 stopanimate22" : "Marquee-content22"}>
                      {aiChatApp.map((item, index) => (
                        <div className="Marquee-tag" key={index}>
                          <div
                            className={
                              index === thirdState && activeAni3
                                ? `firstexampledivactive1 hideanimate-${index}`
                                : index !== thirdState && activeAni3 || activeAni2 || activeAni1
                                  ? `firstexamplediv1 anicarddeactive hideanimate-${index}`
                                  : `firstexamplediv1 hideanimate-${index}`
                            }
                            onClick={() => handleAnimateCard(index, "third")}
                          >
                            <img src={item.image} className={item.className} alt={item.name} />
                            {index === thirdState && activeAni3 && (
                              <div className={`animated-text animated-text-${index}`}>
                                <p className="caroselproductname1 text-white">{item.name}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <a className="extrabutton"
                  ref={elementRef}
                // onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleMouseLeave}
                >
                  <PiCaretRightBold />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Technology />
    </div>
  );
};

export default GlobeImage;


