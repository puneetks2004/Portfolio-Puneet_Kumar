import React from "react"
import "./letsconnect.css"
import theme_pattern from "../assets/theme_pattern.svg"
import back from "../assets/back.jpeg"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function LetsConnect() {
    return (

        <>
            <div id="lets-connect" className="lets-connect">
                <div className="title-connect">
                    <h1>Let’s Connect</h1>
                    <img src={theme_pattern} alt="" />
                </div>
                <div className="parts">


                    <a
                        href="https://www.instagram.com/puneetks2004/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="parent"
                    >
                        <div className="seg-1 mat" style={{ backgroundImage: `url(${back})` }}>
                            <FaInstagram className="getit" />
                        </div>
                        <div className="late">
                            Instagram
                        </div>
                    </a>


                    <a
                        href="https://www.linkedin.com/in/puneet-kumar-882397235/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="parent"
                    >
                        <div className="seg-2 mat" style={{ backgroundImage: `url(${back})` }}>
                            <FaLinkedin className="getit" />
                        </div>
                        <div className="late">
                            LinkedIn
                        </div>
                    </a>

                    <a
                        href="https://github.com/puneetks2004"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="parent"
                    >
                        <div className="seg-3 mat" style={{ backgroundImage: `url(${back})` }}>
                            <FaGithub className="getit" />
                        </div>
                        <div className="late">
                            GitHub
                        </div>
                    </a>

                    <a
                        href="https://x.com/puneetks2004"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="parent"
                    >
                        <div className="seg-4 mat" style={{ backgroundImage: `url(${back})` }}>
                            <FaXTwitter className="getit" />
                        </div>
                        <div className="late">
                            Twitter
                        </div>
                    </a>

                </div>

            </div>
        </>

    )
}