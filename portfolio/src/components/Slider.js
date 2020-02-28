import React from "react";

const Slider = () => {
    return (
        <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-ride="carousel"
        >
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <i className="red massive crosshairs icon"></i>
                </div>
                <div className="carousel-item">
                    <i className="blue massive crosshairs icon"></i>
                </div>
                <div className="carousel-item">
                    <i className="yellow massive crosshairs icon"></i>
                </div>
            </div>
        </div>
    );
};

export default Slider;
