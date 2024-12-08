import React from "react";
import "./style.scss";
import Arrow from "../arrow";

const CallToAction = ({ text, icon, action, file }) => {
    const handleClick = () => {
        // If a file is provided, download it
        if (file) {
            const link = document.createElement("a");
            link.href = file;
            link.download = file.split("/").pop(); // Get the file name
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else if (action) {
            // If no file, execute the action
            action();
        }
    };
    return (
        <div
            className="call-to-action"
            onClick={handleClick}
        >
            <span className="text">{text}</span>

            {icon ? <div className="icon">{icon}</div> : <Arrow />}
        </div>
    );
};

export default CallToAction;
