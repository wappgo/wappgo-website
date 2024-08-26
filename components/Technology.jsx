"use client"
import React, { useEffect, useRef } from 'react'
import animationData from '../public/mobile.json';
import "../public/styles/Global.css";
import Lottie from 'react-lottie';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
function Technology() {
    const verticalRef = useRef(null);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    useEffect(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: verticalRef.current,
                start: 'top 80%',
                end: 'top 90%',
                scrub: true,
                markers: false,
                onLeave: () => {
                    gsap.to(".commontech,.commontec1", { scale: 1, duration: 1, stagger: 0.2, delay: 0.2, });
                }
            }
        });

        timeline.to(".commontech,.commontech1", {
            scale: 1.2,
            duration: 1,
            delay: 0.2,
            stagger: 0.2
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);



    return (
        <>
            <div className="techmaindiv" ref={verticalRef}>
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
                            <div className="lottie-animation">
                                <Lottie options={defaultOptions} />
                            </div>
                        </div>
                        <div className="col-lg-7 techcol2 ">
                            <div className={"commontech tech1"}>
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
                        <img src="/assets/Up.svg" className="downloadimga" width="100%" />
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
                    <div className='lottie-play'>
                        <Lottie options={defaultOptions} height={300} width={300} />;
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
        </>
    )
}

export default Technology
