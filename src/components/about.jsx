import React from "react";
import "./about.css";
import theme_pattern from "../assets/theme_pattern.svg"
import profile_img from "../assets/profile_img.svg"

export default function About() {

    return (
        <>
            <div id="about" className="about">
                <div className="about-title">
                    <h1>About Me</h1>
                    <img src={theme_pattern} alt="" />
                </div>
                <div className="about-sections">
                    <div className="about-left">
                        <img src={profile_img} alt="" />
                    </div>
                    <div className="about-right">
                        <div className="about-para">
                            <p>
                                I build responsive, scalable, and user-friendly web applications using JavaScript frameworks like React and Node.js. I'm comfortable working across the full stack—from designing front-end interfaces to developing back-end APIs and managing databases like MongoDB and MySQL.
                            </p>

                            <p>
                                I focus on writing clean, maintainable code and delivering high-performance solutions. I also work with Vercel, Docker, and GitHub Actions to deploy and manage applications efficiently.

                            </p>
                        </div>
                       
                    </div >
                </div >
                <div className="about-acheivements">
                    <div className="about-acheivement">
                        <h1>2+</h1>
                        <p>Years Of Experience</p>
                    </div>
                    <hr />
                    <div className="about-acheivement">
                        <h1>10+</h1>
                        <p>Projects Completed</p>
                    </div>
                    <hr />
                    <div className="about-acheivement">
                        <h1>10+</h1>
                        <p>Happy Clients</p>
                    </div>
                </div>
            </div>
        </>
    )
}



