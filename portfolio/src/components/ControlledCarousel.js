import "./ControlledCarousel.css";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import photoAlanTuring from "../assets/alan-turing.png";

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return (
        <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={handleSelect}
            indicators={false}
            style={{ width: "100%", height: "200px" }}
        >
            <Carousel.Item>
                <div className="container-md">
                    <div className="row">
                        <div className="col align-self-center">
                            <div>
                                <h1 className="text-welcome">Welcome!</h1>
                                <i className="huge coffee icon"></i>
                                <i className="huge plus icon"></i>
                                <i className="huge code icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            
            {/* --------------------------------------------------------------------------------------------------------------------------------- */}

            <Carousel.Item>
                <div className="container-md">
                    <div className="row">
                        <div className="col-8 align-self-center">
                            <div>
                                <h3 className="text-style">
                                    "Those who can imagine anything can create
                                    the impossible"
                                </h3>
                                <p>- Alan Turing</p>
                            </div>
                        </div>
                        <div className="col-4 align-self-center">
                            <img
                                className="image-turing"
                                src={photoAlanTuring}
                                alt="First slide"
                            />
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;
