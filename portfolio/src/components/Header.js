import React, { Component } from "react";
import "./Boxes.css";

export default class Header extends Component {
    render() {
        return (
            <div className="ui grid">
                <div className="ten wide column">
                    <div className="ui inverted large secondary pointing menu">
                        <button
                            className="active item"
                            href="#"
                            onClick={() => {
                                window.scrollTo({
                                    left: 0,
                                    top: document.body.scrollHeight,
                                    behavior: "smooth"
                                });
                            }}
                        >
                            Introduction
                        </button>
                        <button className="item" href="!#">
                            About Me
                        </button>
                        <button className="item" href="!#">
                            Projects
                        </button>
                    </div>
                </div>
                <div className="six wide column">
                    <i
                        className="github square icon big"
                        onClick={() => {
                            window.location.href =
                                "https://github.com/andrerocha22";
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
        );
    }
}
