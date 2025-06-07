import React, { useState, useRef } from "react"
import "./navbar.css"
import myupdatedimage from "../assets/myupdatedimage.png";
import underline from "../assets/nav_underline.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll';
//to add responsiveness for this block we will add a side bar ---importing its images
import menu_open from "../assets/menu_open.svg";
import menu_close from "../assets/menu_close.svg";

export default function Navbar() {

    const [menu, setMenu] = useState("Hero");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    }
    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    }

    return (
        <>
            <div className="navbar">

                <AnchorLink className="anchor-link" offset={-80} href="#home"><img onClick={() => setMenu("Hero")}
                    src={myupdatedimage} alt="" /></AnchorLink>


                <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
                <ul ref={menuRef} className="nav-menu">
                    <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />

                    <li><AnchorLink className="anchor-link" offset={-80} href="#home"><p onClick={() => setMenu("Hero")}>Home</p></AnchorLink>{menu === "Hero" ? <img src={underline} alt="" /> : <></>}</li>

                    <li><AnchorLink className="anchor-link" offset={5} href="#about"><p onClick={() => setMenu("About")} > About Me </p></AnchorLink>{menu === "About" ? <img src={underline} alt="" /> : <></>}</li>

                    <li><AnchorLink className="anchor-link" offset={-40} href="#mywork"><p onClick={() => setMenu("My_work")} > Projects</p></AnchorLink>{menu === "My_work" ? <img src={underline} alt="" /> : <></>}</li>

                    <li><AnchorLink className="anchor-link" offset={-5} href="#skill"><p onClick={() => setMenu("Skill")} > My Skills</p></AnchorLink>{menu === "Skill" ? <img src={underline} alt="" /> : <></>}</li >

                    <li><AnchorLink className="anchor-link" offset={-25} href="#lets-connect"><p onClick={() => setMenu("Lets_Connect")} > Let's Connect</p></AnchorLink>{menu === "Lets_Connect" ? <img src={underline} alt="" /> : <></>}</li>

                    <li ><AnchorLink className="anchor-link" offset={10} href="#contact"><p onClick={() => setMenu("Contact")} >Contact</p></AnchorLink>{menu === "Contact" ? <img src={underline} alt="" /> : <></>}</li>
                </ul>

                <div className="nav-connect"><AnchorLink className="anchor-link" offset={10} href="#contact">Connect with Me</AnchorLink></div>
            </div >
        </>
    )
}

//for smooth scrolll we use anchor property from package
//<AnchorLink className="anchor-link" offset={50} href="that id ">menu</anchorLink>
//instead of jumping abruptly, it scrolls smoothly for better user experience.
//The offset defines how many pixels above or below the target element the page should stop scrolling.