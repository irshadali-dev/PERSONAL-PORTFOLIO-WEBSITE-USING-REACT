import React from "react";
import "./style.scss";
import Navigation from "./navigation-bar";
import IntroContent from "./intro-content/index";
import cloud from "../../images/cloud.png";
import cloudSoft from "../../images/cloud-soft.png";

const Intro = () => {
    return (
        <div className="Intro-section">
            <div
                className="vector-bg"
                id="parallax"
            ></div>
            <img
                src={cloud}
                alt="cloud img"
                className="cloud"
            />
            <img
                src={cloudSoft}
                alt="cloud-soft img"
                className="cloud-soft"
            />
            <div className="content">
                <Navigation />
                <IntroContent />
            </div>
        </div>
    );
};

export default Intro;
