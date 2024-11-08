import React, { useEffect, useRef } from 'react';
import Navbar from '../navbar/Navbar';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const Section1 = () => {
    const navRef = useRef(null)
    useEffect(() => {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".section1",
                start: "top 0%",
                end: "top -100%",
                scrub: 1,
                pin: true,
            }
        })
        tl
            .to(navRef.current, {
                y: "-100%",
                duration: .3
            }, "a")
            .to(".header-txt", {
                y: -50,
            }, "a")
            .to(".header-video", {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"
            }, "a")

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }

    }, []);

    return (
        <div className='section1 h-screen relative w-full text-white text-center flex flex-col items-center justify-center uppercase'>
            <Navbar nav={navRef} />
            <div className='header-txt'>
                <h1 className='text-[6vw] leading-none'>Digital agency with a</h1>
                <h1 className='text-[6vw] mb-[4vw]'>human touch.</h1>
            </div>
            <div className='w-full flex justify-end p-[2vw] absolute bottom-0'>
                <div className='social flex items-center gap-[1vw]'>
                    {["instagram-line", "dribbble-line", "linkedin-fill"].map((icon, idx) => (
                        <span key={idx} className="w-[3vw] h-[3vw] border border-white rounded-full flex items-center justify-center text-white relative overflow-hidden social-i cursor-pointer">
                            <span className='cir transition-all duration-300 w-full h-full absolute bg-white rounded-full left-1/2 -translate-x-1/2 top-full'></span>
                            <i className={`text-[1.2vw] transition-all duration-300 relative ri-${icon}`}></i>
                        </span>
                    ))}
                </div>
            </div>
            <div style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }} className='header-video pointer-events-none absolute bottom-0 left-0 w-full h-screen z-[99]'>
                <video autoPlay muted loop playsInline className='w-full h-full object-cover' src="https://video.wixstatic.com/video/36971c_4cf7ab905c31434e928491fde8282fd5/480p/mp4/file.mp4"></video>
            </div>
        </div>
    );
};

export default Section1;

