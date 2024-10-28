import React from "react";
import "./style.scss";
import CallToAction from "../../shared/CallToAction/index";
import logo from "../../../images/irshad-logo.png";

const Navigation = () => {
    return (
        <div className="top-navigation-bar">
            <div className="app-logo">
                <img
                    src={logo}
                    alt="irshad-logo"
                />
            </div>
            <div className="navigation">
                <span className="navigation-item">Skills</span>
                <span className="navigation-item">Portfolio</span>
                <span className="navigation-item">Blogs & Article</span>
                <CallToAction text="Contact Me" />
            </div>
        </div>
    );
};

export default Navigation;
