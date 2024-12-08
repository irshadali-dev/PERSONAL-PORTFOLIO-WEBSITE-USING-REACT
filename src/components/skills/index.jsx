import React from "react";
import "./style.scss";
import Section from "../shared/section";
import TechIcons from "../../images/tech-icons.png";
import CallToAction from "../shared/CallToAction";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Skills = () => {
    return (
        <Section
            id="skills"
            background="dark"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={TechIcons}
                        alt="react,js,html,css,figma"
                    />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
                        I am a dedicated front-end developer with a strong
                        foundation in HTML, CSS, and JavaScript, and extensive
                        knowledge in CSS frameworks for creating elegant,
                        mobile-responsive designs. I specialize in React,
                        building engaging, high-performance applications with a
                        focus on functionality and seamless user interactions.
                        My passion for learning keeps me up-to-date with the
                        latest front-end advancements, enabling me to implement
                        best practices and deliver exceptional digital
                        experiences.
                    </p>
                    <CallToAction
                        icon={<AiOutlineCloudDownload />}
                        text="Download CV"
                        file="/IrshadResumeReactDevloper.pdf"
                    />
                </div>
            </div>
        </Section>
    );
};

export default Skills;
