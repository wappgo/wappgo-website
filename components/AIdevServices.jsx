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

const OfferServices = () => {
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

        // Pin the title section
        ScrollTrigger.create({
            trigger: ".offer-title-container",
            start: "top top",
            end: "+=200",  // Keeps it pinned until some scroll is done
            pin: true,
            pinSpacing: true // Avoid extra space after pinning
        });

        // Horizontal scrolling for cards
        gsap.to(boxItems, {
            xPercent: getXPercent(),
            scrollTrigger: {
                trigger: SectionCenter,  // The section containing the scrollable cards
                pin: true,
                pinSpacing: true,
                scrub: 1,
                snap: 1 / (boxItems.length - 1),
                start: "top top",  // Animation starts after title is pinned
                end: "+=" + SectionCenter.offsetWidth
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
        <div className="offer-container">
            <div>
                <div className="row justify-content-center">
                    <div className="col-md-7 col-12">
                        {/* <h6 className="offer-title">Offerings & Services</h6>
                        <h2 className="cardsectionhrheadingoffer p-sm-5">We offer & work on more than an IT service</h2> */}
                        <h2 className="custom-section-heading6">
                            Our Custom Approach <br />
                            to <span className="ai-text6">AI</span> <span className="dev-text6">Development</span> Services
                        </h2>
                        <p className="custom-subheading6">
                            As an artificial intelligence software development company, we offer comprehensive services, including data
                            preparation for AI algorithms and system rollout for a large number of users. As an illustrious AI services
                            company, we follow an agile development approach, capable of offering a definitive value to your business.
                        </p>
                    </div>
                </div>
                <div id="horizontal" ref={SectionCenterRef} className="scroll-container scroll-container2">
                    <div className="d-flex">
                        <div className="firstscrolldiv-offer" ref={el => boxItemsRef.current[0] = el}>
                            <div className="cool-link-offer2 people-offer2 scroll-card-modern">
                                <h6>Discovery</h6>
                                <p className="m-0">The discovery stage of our AI software development services involves analyzing your business data, challenges, and potentiality to map out new business opportunities,.</p>
                            </div>
                        </div>
                        <div className="secondscrolldiv-offer" ref={el => boxItemsRef.current[1] = el}>
                            <div className="cool-link-offer2 people-offer3 scroll-card-modern">
                                <h6>Design</h6>
                                <p className="m-0">
                                    During this phase, our AI app developers and designers finalize the feature set and technologies to be used while creating a working prototype to be tested.
                                </p>
                            </div>
                        </div>
                        <div className="secondscrolldiv-offer" ref={el => boxItemsRef.current[2] = el}>
                            <div className="cool-link-offer people-offer4 scroll-card-modern">
                                <h6>POC</h6>
                                <p className="m-0">During the Proof of Concept phase, we, as a leading AI services company, engage in the training and tuning of artificial intelligence algorithms while continuously testing them.</p>
                            </div>
                        </div>
                        <div className="secondscrolldiv-offer" ref={el => boxItemsRef.current[3] = el}>
                            <div className="cool-link-offer2 people-offer5 scroll-card-modern">
                                <h6>Implementation</h6>
                                <p className="m-0">
                                    In this phase, the AI application is engineered based on best AI development practices. The ML model is then integrated into the app, which launched in the desired environment.
                                </p>
                            </div>
                        </div>
                        <div className="secondscrolldiv-offer" ref={el => boxItemsRef.current[4] = el}>
                            <div className="cool-link-offer2 people-offer2 scroll-card-modern">
                                <h6>Discovery</h6>
                                <p className="m-0">The discovery stage of our AI software development services involves analyzing your business data, challenges, and potentiality to map out new business opportunities,.</p>
                            </div>
                        </div>
                        <div className="secondscrolldiv-offer" ref={el => boxItemsRef.current[5] = el}>
                            <div className="cool-link-offer2 people-offer3 scroll-card-modern">
                                <h6>Design</h6>
                                <p className="m-0">
                                    During this phase, our AI app developers and designers finalize the feature set and technologies to be used while creating a working prototype to be tested.
                                </p>
                            </div>
                        </div>
                        <div className="secondscrolldiv-offer" ref={el => boxItemsRef.current[6] = el}>
                            <div className="cool-link-offer2 people-offer2 scroll-card-modern">
                                <h6>Design</h6>
                                <p className="m-0">
                                    During this phase, our AI app developers and designers finalize the feature set and technologies to be used while creating a working prototype to be tested.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default OfferServices;


