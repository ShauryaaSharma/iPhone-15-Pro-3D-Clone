import React, { useEffect, useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';


const Hero = () => {

    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
    const handleVideoSrcSet = ()=>{
        if (window.innerWidth < 760) {
            setVideoSrc(smallHeroVideo)
        }else{
            setVideoSrc(heroVideo)
        }
    }

    useEffect(()=> {
        window.addEventListener('resize', handleVideoSrcSet)

        return () =>{
            window.removeEventListener('resize', handleVideoSrcSet)
        }
    }, [])
    
    useGSAP(()=> {
        gsap.to("#Hero", {
            
            opacity: 1,
            delay: 1.5,
            duration: 2.5
        })
        gsap.to("#cta", {
            opacity:1,
            delay: 1.5,
            duration:2.5,
            y: -50
        })
    }, [])

  return (
    <section className="w-full nav-height bg-black relative">
        <div className="h-5/6 w-full flex-center flex-col">
            <p id="Hero" className="hero-title">iPhone 15 Pro</p>
            <div className="md:w-10/12 w-9/12">
                <video className="pointer-events-none" src= {videoSrc} type="video/mp4" autoPlay muted playsInline key={videoSrc}></video>
            </div>
        </div>

        <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
            <a href="#highlights" className="btn"> Buy </a>
            <p className="font-normal text-xl">From $199/month or $999</p>
        </div>
    </section>
  )
}

export default Hero