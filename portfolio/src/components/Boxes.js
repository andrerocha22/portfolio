import React from "react";
import "./Boxes.css";

const Boxes = props => {
    return (
        <div
            className="box"
            style={{ borderBottom: `solid 8px ${props.color}` }}
        >
            <h2 className="ui centered header" style={{ height: "30%" }}>
                <i className={`${props.color} ${props.iconType} icon`}></i>
                {props.title}
            </h2>
           <div>
                {props.body}
            </div> 
        </div>
    );
};

export default Boxes;
