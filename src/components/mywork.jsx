import React from "react";
import "./mywork.css";
import theme_pattern from "../assets/theme_pattern.svg"
import back from "../assets/back.jpeg"
import { FaExternalLinkSquareAlt } from "react-icons/fa";

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
                        <img src={back} />
                        <div className="layer">
                            <h2>
                                Social Media
                            </h2>
                            <p>the app is all about game to play in life and see the magical changes</p>
                            <a href="#"><FaExternalLinkSquareAlt className="logo" /></a>
                        </div>
                    </div>

                    <div className="work b2" >
                        <img src={back} />
                        <div className="layer">
                            <h2>
                                Social Media
                            </h2>
                            <p>the app is all about game to play in life and see the magical changes</p>
                            <a href="#"><FaExternalLinkSquareAlt className="logo" /></a>
                        </div>
                    </div>

                    <div className="work b3" >
                        <img src={back} />
                        <div className="layer">
                            <h2>
                                Social Media
                            </h2>
                            <p>the app is all about game to play in life and see the magical changes</p>
                            <a href="#"><FaExternalLinkSquareAlt className="logo" /></a>
                        </div>
                    </div>

                    <div className="work b4" >
                        <img src={back} />
                        <div className="layer">
                            <h2>
                                Social Media
                            </h2>
                            <p>the app is all about game to play in life and see the magical changes</p>
                            <a href="#"><FaExternalLinkSquareAlt className="logo" /></a>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

