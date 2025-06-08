import React from "react"
import "./hero.css"
import Profile_img from "../assets/profile_img.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll';


export default function Hero() {
    return (
        <>
            <div id="home" className="hero">
                <div className="img-wrapper">
                    <img src={Profile_img} alt="" />
                </div>
                <h1><span>"Hi, I'm Puneet Kumar,</span> a full-stack web developer." </h1>
                <p>"I'm Puneet Kumar, a passionate full-stack web developer skilled in building responsive and user-friendly web applications using modern technologies."</p>
                <div className="hero-action">
                    <div className="hero-connect"><AnchorLink className="anchor-link" offset={10} href="#contact">Connect with me</AnchorLink></div>


                    <a
                        href="/resume.pdf"             // path to your file in public/
                        download="Puneet_Kumar_Resume.pdf"       // file will download with this name
                        className="resume-outer"
                    >
                        <div className="hero-resume">My Resume</div>
                    </a>
                </div>
            </div>
        </>
    )
}