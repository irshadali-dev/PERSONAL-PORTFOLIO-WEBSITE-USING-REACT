import React from "react";

import "./style.scss";

import {
    FaYoutube,
    FaGithub,
    FaLinkedinIn,
    FaStackOverflow,
    FaInstagram,
} from "react-icons/fa";

import SocialIcon from "./social-icon";
import { scrollToSection } from "../utils/helpers";

import Section from "../shared/section";
import Logo from "../../images/irshad-logo-2.png";

const Footer = () => {
    return (
        <Section
            background="dark"
            className="footer"
        >
            <div className="footer-content-wrapper">
                <div className="footer-logo">
                    <img
                        src={Logo}
                        alt="footer-logo"
                    />
                </div>
                <ul className="footer-menu-items">
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("skills")}
                    >
                        Skills
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("portfolio")}
                    >
                        Portfolio
                    </li>
                    {/* <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("blogs")}
                    >
                        Blogs & Articles
                    </li> */}
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("contact")}
                    >
                        Contact Me
                    </li>
                </ul>
                <div className="social-icons">
                    <SocialIcon
                        color="#FF0000"
                        icon={<FaYoutube />}
                        link="#"
                    />

                    <SocialIcon
                        color="#0D2636"
                        icon={<FaGithub />}
                        link="https://github.com/irshadali-dev"
                    />
                    <SocialIcon
                        color="#0A66C2"
                        icon={<FaLinkedinIn />}
                        link="https://www.linkedin.com/in/irshadali7689/"
                    />
                    <SocialIcon
                        color="#F2740d"
                        icon={<FaStackOverflow />}
                        link="#"
                    />
                    <SocialIcon
                        color="#E84C88"
                        icon={<FaInstagram />}
                        link="https://www.instagram.com/alamirshad7689/"
                    />
                </div>
                <div className="bottom-bar">
                    <div className="copyright-text">
                        Copyright <span>{"\u00a9"}</span> 2024 IRSHAD || All
                        Rights Reserved
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Footer;
