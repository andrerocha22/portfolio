import "./Header.css"
import React, { Component } from "react";
import "./Boxes.css";

export default class Header extends Component {
    render() {
        return (
            <div className="ui grid">
                <div className="eleven wide column">
                    <div className="ui inverted large secondary pointing menu">
                        <button
                            className="active item"
                            href="#"
                            onClick={() => {
                                window.scrollTo({
                                    left: 0,
                                    top: -document.body.scrollHeight,
                                    behavior: "smooth"
                                });
                            }}
                        >
                            About Me
                        </button>
                        <button
                            className="item"
                            href="!#"
                            onClick={() => {
                                window.scrollTo({
                                    left: 0,
                                    top: document.body.scrollHeight * 0.25,
                                    behavior: "smooth"
                                });
                            }}
                        >
                            Expertise
                        </button>
                        <button
                            className="item"
                            href="!#"
                            onClick={() => {
                                window.scrollTo({
                                    left: 0,
                                    top: document.body.scrollHeight * 0.5,
                                    behavior: "smooth"
                                });
                            }}
                        >
                            Timeline
                        </button>
                        <button
                            className="item"
                            href="!#"
                            onClick={() => {
                                window.scrollTo({
                                    left: 0,
                                    top: document.body.scrollHeight * 0.75,
                                    behavior: "smooth"
                                });
                            }}
                        >
                            Others
                        </button>
                    </div>
                </div>
                <div className="five wide column">
                    <div className="icons-group">
                        <i
                            className="github square icon big"
                            onClick={() => {
                                window.location.href =
                                    "https://github.com/andrerocha22";
                            }}
                        ></i>

                        <i
                            className="envelope square icon big"
                            onClick={() => {
                                window.location.href =
                                    "mailto:andreerocha2@gmail.com";
                            }}
                        ></i>

                        <i
                            className="linkedin icon big"
                            onClick={() => {
                                window.location.href =
                                    "https://www.linkedin.com/in/andrefelipe22/";
                            }}
                        ></i>
                    </div>
                </div>
            </div>
        );
    }
}
