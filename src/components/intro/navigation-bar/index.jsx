import React, { useState } from "react";
import "./style.scss";
import CallToAction from "../../shared/CallToAction/index";
import logo from "../../../images/irshad-logo-2.png";
import { scrollToSection } from "../../utils/helpers";

import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

const Navigation = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const menuItemClickHandler = (section) => {
        setMobileMenu(!mobileMenu);
        scrollToSection(section);
    };

    return (
        <div className="top-navigation-bar">
            <div className="app-logo">
                <img
                    src={logo}
                    alt="irshad-logo"
                />
            </div>
            <div
                className="mobile-menu"
                onClick={() => setMobileMenu(!mobileMenu)}
            >
                {mobileMenu ? (
                    <IoMdClose
                        size={24}
                        color="#fff"
                    />
                ) : (
                    <CgMenuRight
                        size={24}
                        color="#fff"
                    />
                )}
            </div>
            <div className={`navigation ${mobileMenu ? "active" : ""}`}>
                <span
                    className="navigation-item"
                    onClick={() => menuItemClickHandler("skills")}
                >
                    Skills
                </span>
                <span
                    className="navigation-item"
                    onClick={() => menuItemClickHandler("portfolio")}
                >
                    Portfolio
                </span>
                {/* <span
                    className="navigation-item"
                    onClick={() => menuItemClickHandler("blogs")}
                >
                    Blogs & Article
                </span> */}
                <CallToAction
                    text="Contact Me"
                    action={() => menuItemClickHandler("contact")}
                />
            </div>
        </div>
    );
};

export default Navigation;
