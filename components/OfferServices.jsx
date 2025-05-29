"use client"
import gsap from "gsap";
import { useEffect, useState, useRef, useCallback } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../public/styles/Global.css";
import { debounce } from 'lodash';
gsap.registerPlugin(ScrollTrigger);

const OfferServices = () => {
    const [text, setText] = useState('BUSINESS');
    const element = useRef(null);
    const verticalRef = useRef(null);
    const boxItemsRef = useRef([]);
    const SectionCenterRef = useRef(null);
    const elementRef = useRef(null); 
    const fadeRefs = useRef([]);
    const titleRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        const titleEl = titleRef.current;
        if (titleEl) observer.observe(titleEl);

        fadeRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => {
            if (titleEl) observer.unobserve(titleEl);
            fadeRefs.current.forEach((el) => {
                if (el) observer.unobserve(el);
            });
        };
    }, []);


   
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
    const getXPercent = () => {
        const viewportWidth = window.innerWidth;
        // Dynamic calculation based on viewport width
        if (viewportWidth < 768) {
            return -150; // Adjust for mobile
        } else if (viewportWidth < 1024) {
            return -300; // Adjust for tablets
        } else if (viewportWidth < 1280) {
            return -400; // Adjust for medium screens
        } else {
            return -502; // Default for large screens
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
                trigger: SectionCenter,
                pin: true,
                pinSpacing: true,
                scrub: 1,
                snap: 1 / (boxItems.length - 1),
                start: "top top",
                end: () => "+=" + SectionCenter.offsetWidth // Dynamically update end based on container width
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

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
            <div className="offervidediv">
                <div className="position-relative offervidediv2">
                    <div className="video-overlay-offer"></div>
                </div>
            </div>
            <div>
                <div className="row justify-content-center">
                    <div className="col-md-7 col-12">
                        <h6 ref={titleRef} className="offer-title fadeInUp-animation">Offerings & Services</h6>
                        <h2 ref={(el) => fadeRefs.current[0] = el} className="cardsectionhrheadingoffer fadeInUp-animation">We offer & work on more than an IT service</h2>
                    </div>
                </div>
                
                <div id="horizontal" ref={SectionCenterRef} className="scroll-container scroll-container2">
                    <div className="d-flex">
                        <div ref={el => boxItemsRef.current[0] = el}>
                            <div className="firstscrolldiv-offer">
                                <div className="cool-link-offer web-offer">
                                    <div className="">
                                        <div className=" paddingmarginzero ">
                                            <img src="/assets/web-application-code.svg" />
                                        </div>
                                        <div className="paddingmarginzero">
                                            <p className="scrollcardheading-offer">Web Applications</p>
                                            <p className="scrollcardsubheading-offer">Innovative, Scalable & High-Performance Web Apps</p>
                                            <p className="scrollcardtext-offer">Empower your business with custom-built, secure, and scalable web applications designed for seamless performance.</p>
                                            <p className="cardexample-offer">Examples</p>
                                            <div className="row">
                                                <img src="/assets/web-app-all.svg" className="card-example" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div ref={el => boxItemsRef.current[1] = el}>
                            <div className="secondscrolldiv-offer">
                                <div className="cool-link-offer mobile-offer">
                                    <div className="">
                                        <div className=" paddingmarginzero ">
                                            <img src="/assets/application-new.svg" />
                                        </div>
                                        <div className="paddingmarginzero">
                                            <p className="scrollcardheading-offer">Mobile Application</p>
                                            <p className="scrollcardsubheading-offer">Intuitive, Scalable & High-Performance Mobile Apps</p>
                                            <p className="scrollcardtext-offer">Transform your ideas into feature-rich, user-friendly mobile appss designed for iOS, Android, and cross-platform experiences.</p>
                                            <p className="cardexample-offer">Examples</p>
                                            <div className="row">
                                                <img src="/assets/mobile-examples.svg" className="card-example" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div ref={el => boxItemsRef.current[2] = el}>
                            <div className="secondscrolldiv-offer">
                                <div className="cool-link-offer desktop-offer">
                                    <div className="">
                                        <div className=" paddingmarginzero ">
                                            <img src="/assets/desktop-new.svg" />
                                        </div>
                                        <div className="paddingmarginzero">
                                            <p className="scrollcardheading-offer">Desktop Application</p>
                                            <p className="scrollcardsubheading-offer">Powerful, Scalable & High-Performance Desktop Apps</p>
                                            <p className="scrollcardtext-offer">Robust, secure & high-performance desktop apps for your business needs. Whether it's for Windows, macOS, or cross-platform.</p>
                                            <p className="cardexample-offer">Examples</p>
                                            <div className="row">
                                                <img src="/assets/desktop-examples.svg" className="card-example" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div ref={el => boxItemsRef.current[3] = el}>
                            <div className="secondscrolldiv-offer">
                                <div className="cool-link-offer ecommerce-offer">
                                    <div className="">
                                        <div className=" paddingmarginzero ">
                                            <img src="/assets/ecommerce-new.svg" />
                                        </div>
                                        <div className="paddingmarginzero">
                                            <p className="scrollcardheading-offer">E-commerce</p>
                                            <p className="scrollcardsubheading-offer">Scalable, Secure & High-Converting Online Stores</p>
                                            <p className="scrollcardtext-offer">Launch a powerful, user-friendly, and conversion-driven e-com platform for  your business needs. From custom storefronts to</p>
                                            <p className="cardexample-offer">Examples</p>
                                            <div className="row">
                                                <img src="/assets/ecommerce-examples.svg" className="card-example" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div ref={el => boxItemsRef.current[4] = el}>
                            <div className="secondscrolldiv-offer" >
                                <div className="cool-link-offer ai-offer">
                                    <div className="">
                                        <div className=" paddingmarginzero ">
                                            <img src="/assets/robotic-hand-new.svg" />
                                        </div>
                                        <div className="paddingmarginzero">
                                            <p className="scrollcardheading-offer">AI & ML</p>
                                            <p className="scrollcardsubheading-offer">Intelligent, Scalable & Data-Driven Innovations</p>
                                            <p className="scrollcardtext-offer">Leverage the power of AI and Machine Learning to automate processes, enhance decision-making, and get new opportunities.</p>
                                            <p className="cardexample-offer">Examples</p>
                                            <div className="row">
                                                <img src="/assets/robotic-examples.svg" className="card-example" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div ref={el => boxItemsRef.current[5] = el}>
                            <div className="secondscrolldiv-offer">
                                <div className="cool-link-offer ai-offer">
                                    <div className="">
                                        <div className=" paddingmarginzero ">
                                            <img src="/assets/chatbot-new.svg" />
                                        </div>
                                        <div className="paddingmarginzero">
                                            <p className="scrollcardheading-offer">Chatbot</p>
                                            <p className="scrollcardsubheading-offer">Give your product it’s very own AI Intelligence</p>
                                            <p className="scrollcardtext-offer">Enhance your products by adding automation. Let the Chatbot handle the requests & increase the productivity of your business.</p>
                                            <p className="cardexample-offer">Examples</p>
                                            <div className="row">
                                                <img src="/assets/chatboats-examples.svg" className="card-example" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div ref={el => boxItemsRef.current[6] = el}>
                            <div className="secondscrolldiv-offer">
                                <div className="cool-link-offer cool-link-offer2 people-offer">
                                    <div className="">
                                        <div className=" paddingmarginzero">
                                            <p className="scrollcardheading-offer text-white">Let’s Create
                                                Something Amazing</p>
                                            <p className="scrollcardsubheading-offer text-white">Innovate, Build & Transform Your Digital Vision</p>
                                        </div>
                                        <div className="paddingmarginzero">
                                            <p className="scrollcardsubheading-offer text-white"
                                            style={{
                                                opacity:"0"
                                            }}
                                            >Innovate, Build & Transform Your Digital Vision</p>
                                            <p className="scrollcardtext-offer scrollcardtext-offermaring "
                                             style={{
                                                opacity:"0"
                                            }}
                                            >Enhance your products by adding automation. Let the Chatbot handle the requests & increase the productivity of.</p>
                                            {/* <p className="cardexample-offer">Examples</p> */}
                                            <div className="row">
                                                <button class="consultation-btn m-0">Get Consultation<img src="/assets/base-buttons.svg" /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div ref={el => boxItemsRef.current[6] = el}>
                            <div className="secondscrolldiv-offer cool-link-offer2 people-offer">
                                <div className="position-relative">
                                    <div className="">
                                        <div className="paddingmarginzero">
                                            <p className="scrollcardheading-offer text-white">Let’s Create
                                                Something Amazing</p>
                                            <p className="scrollcardsubheading-offer text-white mt-2">Innovate, Build & Transform Your Digital Vision</p>
                                        </div>
                                    </div>
                                    <button class="consultation-btn">Get Consultation<img src="/assets/base-buttons.svg" /></button>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferServices;


