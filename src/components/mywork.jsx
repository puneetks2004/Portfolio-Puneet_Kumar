import React from "react";
import "./mywork.css";
import theme_pattern from "../assets/theme_pattern.svg"
import back from "../assets/back.jpeg"
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import proj_1 from "../assets/proj_1.png"
import proj_2 from "../assets/proj_2.png"

export default function My_work() {
    return (
        <>
            <div id="mywork" className="mywork">
                <div className="mywork-title">
                    <h1>
                        My Latest work
                    </h1>
                    <img src={theme_pattern} alt="" />
                </div>


                <div className="mywork-block">

                    <div className="work b1" >
                        <img src={proj_1} />
                        <div className="layer">
                            <h2>
                                NewsHub
                            </h2>
                            <p>Displays latest news using React, Tailwind CSS, and RSS feed.</p>
                            <a href="https://github.com/puneetks2004/React_Development_Projects/tree/main/news-web"><FaExternalLinkSquareAlt className="logo" /></a>
                        </div>
                    </div>

                    <div className="work b2" >
                        <img src={proj_2} />
                        <div className="layer">
                            <h2>
                                Weather App
                            </h2>
                            <p>Weather app built with React, showing live data using API.</p>
                            <a href="https://react-development-projects.vercel.app/"><FaExternalLinkSquareAlt className="logo" /></a>
                        </div>
                    </div>

                    <div className="work b3" >
                        <img src={back} />
                        <div className="layer">
                            <h2>
                                coming soon
                            </h2>
                            <p>----------------coming soon---------------</p>
                            <a href="#"><FaExternalLinkSquareAlt className="logo" /></a>
                        </div>
                    </div>

                    <div className="work b4" >
                        <img src={back} />
                        <div className="layer">
                            <h2>
                                coming soon
                            </h2>
                            <p>----------------coming soon---------------</p>
                            <a href="#"><FaExternalLinkSquareAlt className="logo" /></a>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

