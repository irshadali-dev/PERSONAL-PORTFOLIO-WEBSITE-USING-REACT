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
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Accusamus, voluptate ipsa ipsum iste quidem
                        laboriosam repellat temporibus! Laborum consequatur
                        obcaecati nam, sequi et cum blanditiis atque
                        consequuntur necessitatibus eaque. Beatae esse at
                        tempora obcaecati, unde perferendis iusto odit
                        consequatur eos, optio maiores ipsam! Eum consequatur
                        recusandae optio soluta ut laborum.
                    </p>
                    <CallToAction
                        icon={<AiOutlineCloudDownload />}
                        text="Download CV"
                    />
                </div>
            </div>
        </Section>
    );
};

export default Skills;
