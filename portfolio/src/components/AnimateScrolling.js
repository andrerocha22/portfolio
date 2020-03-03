import "./AnimateScrolling.css"
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const AnimateScrolling = props => {
    return (
        <div className="ui vertical stripe segment" style={{ padding: "7%" }}>
            <h1 className="text-subtitle" style={{color:"#ffffff"}}>{props.subsectionTitle}</h1>
            <ScrollAnimation animateIn={props.animation}>
                {props.comp}
            </ScrollAnimation>
        </div>
    );
};

export default AnimateScrolling;
