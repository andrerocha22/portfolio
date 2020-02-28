import React from "react";
import "./Boxes.css";

const Boxes = props => {
    return (
        <div
            className="box"
            style={{ borderBottom: `solid 5px ${props.color}` }}
        >
            <h2 className="ui centered header" style={{ height: "30%" }}>
                <i className={`${props.iconType} icon`}></i>
                {props.title}
            </h2>
            <p className="text_style">{props.description}</p>
        </div>
    );
};

export default Boxes;
