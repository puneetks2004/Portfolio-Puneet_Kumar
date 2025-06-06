import React, { useEffect, useRef } from "react"
import "./skills.css"
import theme_pattern from "../assets/theme_pattern.svg"




export default function Skill({ text = "", onClick }) {


    const frontendRef = useRef(null);
    const backendRef = useRef(null);
    const othRef = useRef(null);

    useEffect(() => {
        const buttons = [frontendRef.current, backendRef.current, othRef.current];

        const interval = setInterval(() => {
            buttons.forEach(button => {
                if (button) {
                    const shine = document.createElement("span");
                    shine.className = "shine-effect";
                    button.appendChild(shine);

                    setTimeout(() => {
                        shine.remove();
                    }, 1000);
                }
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div id="skill" className="skill">
                <div className="skill-title">
                    <h1>My Skills</h1>
                    <img src={theme_pattern} alt="" />
                </div>

                <div className="skill-block">
                    <div className="block_1 pp" >
                        <h2 ref={frontendRef} className="shine-button blinking-border" onClick={onClick}>
                            frontend Development
                        </h2>

                        <div className="outer">
                            <div className="inner bny1">
                                <p>HTML</p>
                                <hr />
                            </div>
                            <div className="inner bny2">
                                <p>CSS</p>
                                <hr />
                            </div>
                            <div className="inner bny3">
                                <p>JavaScript</p>
                                <hr />
                            </div>
                            <div className="inner bny4">
                                <p>TypeScript</p>
                                <hr />
                            </div>
                            <div className="inner bny5">
                                <p>React.js</p>
                                <hr />
                            </div>
                            <div className="inner bny6">
                                <p>Tailwind CSS</p>
                                <hr />
                            </div>

                        </div>

                    </div>
                    <div className="block_2 pp" >

                        <h2 ref={backendRef} className="shine-button blinking-border" onClick={onClick}>
                            backend Development
                        </h2>

                        <div className="outer">
                            <div className="inner bny7">
                                <p>Node.js</p>
                                <hr />
                            </div>
                            <div className="inner bny8">
                                <p>Express</p>
                                <hr />
                            </div>
                            <div className="inner bny9">
                                <p>GraphQL</p>
                                <hr />
                            </div>
                            <div className="inner bny10">
                                <p>MongoDB</p>
                                <hr />
                            </div>
                            <div className="inner bny11">
                                <p>MySql</p>
                                <hr />
                            </div>


                        </div>

                    </div>
                    <div className="block_3 pp" >

                        <h2 ref={othRef} className="shine-button blinking-border" onClick={onClick}>
                            Development Tools & Workflow
                        </h2>

                        <div className="outer">
                            <div className="inner bny12">
                                <p>Git/GitHub</p>
                                <hr />
                            </div>
                            <div className="inner bny13">
                                <p>VS Code</p>
                                <hr />
                            </div>
                            <div className="inner bny14">
                                <p>Vercel</p>
                                <hr />
                            </div>
                            <div className="inner bny15">
                                <p>Docker</p>
                                <hr />
                            </div>
                            

                        </div>
                        
                    </div>

                </div></div>
            </>
            )
}