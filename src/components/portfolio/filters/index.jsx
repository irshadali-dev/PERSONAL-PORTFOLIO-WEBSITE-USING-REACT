import React, { useState } from "react";
import "./style.scss";

const filtersData = [
    {
        name: "All",
        id: "all",
    },
    {
        name: "React",
        id: "react",
    },
    {
        name: "Java Script",
        id: "java-script",
    },
    {
        name: "Html & Css",
        id: "html",
    },
];

const Filters = ({ filterProjects }) => {
    const [active, setActive] = useState("");

    const clickHandler = (id) => {
        setActive(id);
        filterProjects(id);
    };

    return (
        <ul className="filter-menu-items">
            {filtersData.map((item, index) => {
                return (
                    <li
                        key={item.id}
                        className={`filter-menu-item ${
                            active === item.id ? "active" : ""
                        }`}
                        onClick={() => clickHandler(item.id)}
                    >
                        {item.name}
                    </li>
                );
            })}
        </ul>
    );
};

export default Filters;
