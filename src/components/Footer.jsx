import React from "react";
import "./Footer.css";
import Profile_img from "../assets/profile_img.svg"
import c4 from "../assets/c4.jpg"
import AnchorLink from "react-anchor-link-smooth-scroll";
import { IoCall } from "react-icons/io5";



export default function Footer() {
    const phoneNumber = '+1234567890';

    const handleCallClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };


   


    return (
        <>
            <div className="footer-above">
                <button className="call-block" onClick={handleCallClick}><IoCall className="callicon" /><p>Call Now</p></button>
            </div>

            <div className="footer" style={{ backgroundImage: `url(${c4})` }}>
                <div className="footer-parent">
                    <div className="sub-parent">
                        <div className="footer-left">
                            <img src={Profile_img} alt="" />
                        </div>
                        <div className="footer-right" >
                            <h2 className="quickh">Quick Links</h2>


                            <AnchorLink className="anchor-link" offset={-80} href="#home"><p onClick={() => setMenu("About")} className="quick">Home</p></AnchorLink>


                            <AnchorLink className="anchor-link" offset={5} href="#about"><p onClick={() => setMenu("About")} className="quick">About Me</p></AnchorLink>

                            <AnchorLink className="anchor-link" offset={-40} href="#mywork"><p onClick={() => setMenu("About")} className="quick">My Latest Projects</p></AnchorLink>

                            <AnchorLink className="anchor-link" offset={-5} href="#skill"><p onClick={() => setMenu("About")} className="quick">My Skills</p></AnchorLink>

                            <AnchorLink className="anchor-link" offset={-25} href="#lets-connect"><p onClick={() => setMenu("About")} className="quick">Let's Connect</p></AnchorLink>





                            <AnchorLink className="anchor-link" offset={10} href="#contact"><p onClick={() => setMenu("About")} className="quick">Get in touch</p></AnchorLink>

                        </div>
                    </div>
                    <hr className="line"></hr>
                    <div className="last">© 2025 — Designed and developed by Puneet Kumar</div>
                </div>
            </div>
        </>
    )
}
