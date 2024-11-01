import React, { useState } from "react";
import "./style.scss";
import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";

const projectsData = [
    {
        id: 1,
        name: "Healthy Food Restraunt",
        tags: ["html"],
        media: {
            thumbnail: require("../../images/portfolio/html&css foody-zone.png"),
        },
    },
    {
        id: 2,
        name: "Documentaion",
        tags: ["html"],
        media: {
            thumbnail: require("../../images/portfolio/html&css-documentaion.png"),
        },
    },
    {
        id: 3,
        name: "Form Landing-Page",
        tags: ["html"],
        media: {
            thumbnail: require("../../images/portfolio/html&css-form landing-page.png"),
        },
    },
    {
        id: 4,
        name: "Gamezone",
        tags: ["html"],
        media: {
            thumbnail: require("../../images/portfolio/html&css-gamezone.png"),
        },
    },
    {
        id: 5,
        name: "Multipage-web",
        tags: ["html"],
        media: {
            thumbnail: require("../../images/portfolio/html&css-multipage-web.png"),
        },
    },
    {
        id: 6,
        name: "MyTunes",
        tags: ["html"],
        media: {
            thumbnail: require("../../images/portfolio/html&css-mytunes.png"),
        },
    },
    {
        id: 7,
        name: "Parallax",
        tags: ["html"],
        media: {
            thumbnail: require("../../images/portfolio/html&css-parallax.png"),
        },
    },
    {
        id: 8,
        name: "Landing-Page",
        tags: ["html"],
        media: {
            thumbnail: require("../../images/portfolio/html&css-portfolio-landing-page.png"),
        },
    },
    {
        id: 9,
        name: "Portfolio",
        tags: ["html"],
        media: {
            thumbnail: require("../../images/portfolio/html&css-portfolio.png"),
        },
    },
    {
        id: 10,
        name: "Tribute-webpage",
        tags: ["html"],
        media: {
            thumbnail: require("../../images/portfolio/html&css-tribute.png"),
        },
    },
    {
        id: 11,
        name: "Lightbox-Image-Slider",
        tags: ["java-script"],
        media: {
            thumbnail: require("../../images/portfolio/javascript/javascript-Lightbox-image.png"),
        },
    },
    {
        id: 12,
        name: "Temprature-Converter",
        tags: ["java-script"],
        media: {
            thumbnail: require("../../images/portfolio/javascript/javascript-Temprature-Converter.png"),
        },
    },
    {
        id: 13,
        name: "Word-Counter",
        tags: ["java-script"],
        media: {
            thumbnail: require("../../images/portfolio/javascript/javascript-Word-Counter.png"),
        },
    },
    {
        id: 14,
        name: "Background-ColorChanger",
        tags: ["java-script"],
        media: {
            thumbnail: require("../../images/portfolio/javascript/javascript-background-background-colorchanger.png"),
        },
    },
    {
        id: 15,
        name: "Background-Switcher",
        tags: ["java-script"],
        media: {
            thumbnail: require("../../images/portfolio/javascript/javascript-background-switcher.png"),
        },
    },
    {
        id: 18,
        name: "Form-Validation",
        tags: ["java-script"],
        media: {
            thumbnail: require("../../images/portfolio/javascript/javascript-form-validation.png"),
        },
    },
    {
        id: 19,
        name: "Image-Slider",
        tags: ["java-script"],
        media: {
            thumbnail: require("../../images/portfolio/javascript/javascript-image-slider.png"),
        },
    },
    {
        id: 16,
        name: "StickeyMenu",
        tags: ["java-script"],
        media: {
            thumbnail: require("../../images/portfolio/javascript/javascript-stickeyMenu.png"),
        },
    },
    {
        id: 17,
        name: "Stopwatch",
        tags: ["java-script"],
        media: {
            thumbnail: require("../../images/portfolio/javascript/javascript-stopwatch.png"),
        },
    },
    {
        id: 20,
        name: "BackGround-Changer",
        tags: ["react"],
        media: {
            thumbnail: require("../../images/portfolio/react/BackGround-Changer.png"),
        },
    },
    {
        id: 21,
        name: "Counter",
        tags: ["react"],
        media: {
            thumbnail: require("../../images/portfolio/react/Counter.png"),
        },
    },
    {
        id: 22,
        name: "Currency-Convertor",
        tags: ["react"],
        media: {
            thumbnail: require("../../images/portfolio/react/Currency-Convertor.png"),
        },
    },
    {
        id: 23,
        name: "Login-Form",
        tags: ["react"],
        media: {
            thumbnail: require("../../images/portfolio/react/Login-Form-Context.png"),
        },
    },
    {
        id: 24,
        name: "Multipage-Website",
        tags: ["react"],
        media: {
            thumbnail: require("../../images/portfolio/react/Multipage-Website.png"),
        },
    },
    {
        id: 25,
        name: "Password-Generator",
        tags: ["react"],
        media: {
            thumbnail: require("../../images/portfolio/react/Password-Generator.png"),
        },
    },
    {
        id: 26,
        name: "Toggle-Theme",
        tags: ["react"],
        media: {
            thumbnail: require("../../images/portfolio/react/Toggle-Theme.png"),
        },
    },
    {
        id: 27,
        name: "Crypto-App",
        tags: ["react"],
        media: {
            thumbnail: require("../../images/portfolio/react/Crypto-App.png"),
        },
    },
    {
        id: 28,
        name: "Brand-Landing-page",
        tags: ["react"],
        media: {
            thumbnail: require("../../images/portfolio/react/Brand-Landing-page.png"),
        },
    },
    {
        id: 29,
        name: "Contact-Page",
        tags: ["react"],
        media: {
            thumbnail: require("../../images/portfolio/react/Contact-page.png"),
        },
    },
    {
        id: 30,
        name: "Dice-Game",
        tags: ["react"],
        media: {
            thumbnail: require("../../images/portfolio/react/Dice-Game.png"),
        },
    },
    {
        id: 31,
        name: "Foody-Zone",
        tags: ["react"],
        media: {
            thumbnail: require("../../images/portfolio/react/Foody-Zone.png"),
        },
    },
    {
        id: 32,
        name: "Firebase-Contact-App",
        tags: ["react"],
        media: {
            thumbnail: require("../../images/portfolio/react/Firebase-Contact-App.png"),
        },
    },
];

const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData);
    const [transition, setTransition] = useState(false);

    const filterProjects = (tag) => {
        setTransition("zoomout");
        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomin");
        }, 200);

        setTimeout(() => {
            setTransition(false);
        }, 600);
    };

    return (
        <Section
            id="portfolio"
            title="Check My Portfolio"
            background="light"
        >
            <div className="portfolio-content-wrapper">
                <Filters filterProjects={(tag) => filterProjects(tag)} />
                <Showcase
                    data={projects}
                    transition={transition}
                />
            </div>
        </Section>
    );
};

export default Portfolio;
