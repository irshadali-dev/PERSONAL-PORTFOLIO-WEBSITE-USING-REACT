import React from "react";
import "./style.scss";
import Arrow from "../arrow";

const CallToAction = ({ text, icon, action }) => {
    return (
        <div className="call-to-action">
            <span className="text">{text}</span>

            {icon ? <div className="icon">{icon}</div> : <Arrow />}
        </div>
    );
};

export default CallToAction;
