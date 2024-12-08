import React from "react";
import { BsAwardFill } from "react-icons/bs";
import { HiMiniHeart } from "react-icons/hi2";

import heroImage from "../../../images/Hero-image.svg";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";

import "./style.scss";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={hand} />
                            </span>
                            <span className="text">, I Am</span>
                        </span>
                        <span className="big-text">Irshad Ali</span>
                    </h1>
                    <p>
                        I’m a frontend developer with a passion for creating
                        responsive and user-friendly websites. I work with HTML,
                        CSS, and JavaScript, along with frameworks like React,
                        to build smooth and interactive experiences.
                    </p>
                    <CallToAction
                        text="Check Out My GitHub Profile"
                        action={() =>
                            window.open(
                                "https://github.com/irshadali-dev",
                                "_blank"
                            )
                        }
                    />
                </div>
                <div className="right-col">
                    <img
                        src={heroImage}
                        alt="JS Dev Hindi"
                    />

                    <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">Best Design Award</div>
                    </div>

                    <div className="highlights verticle">
                        <div className="icon">
                            <HiMiniHeart />
                        </div>
                        <div className="text">
                            <span>Passion</span>
                            for web design
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
