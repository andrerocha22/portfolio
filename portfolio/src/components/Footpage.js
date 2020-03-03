import React, { Component } from "react";

export default class Footpage extends Component {
    render() {
        return (
            <div className="ui inverted vertical footer segment">
                <div className="ui container">
                    <div className="ui stackable inverted divided equal height stackable grid">
                        <div className="three wide column">
                            <h3
                                className="ui inverted header"
                                onClick={() => {
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth"
                                    });
                                }}
                            >
                                About me
                            </h3>
                        </div>
                        <div className="three wide column">
                            <h3
                                className="ui inverted header"
                                onClick={() => {
                                    window.scrollTo({
                                        top: document.body.scrollHeight * 0.25,
                                        behavior: "smooth"
                                    });
                                }}
                            >
                                Expertise
                            </h3>
                        </div>
                        <div className="three wide column">
                            <h3
                                className="ui inverted header"
                                onClick={() => {
                                    window.scrollTo({
                                        top: document.body.scrollHeight * 0.5,
                                        behavior: "smooth"
                                    });
                                }}
                            >
                                Timeline
                            </h3>
                        </div>
                        <div className="four wide column">
                            <div className="ui container">
                                <h3 className="ui inverted header">Contact:</h3>
                                <i
                                    className="envelope icon red"
                                    style={{ padding: "1em" }}
                                ></i>
                                <a href="mailto:andreerocha2@gmail.com">
                                    andreerocha2@gmail.com
                                </a>
                            </div>
                            <div className="ui container">
                                <i
                                    className="linkedin icon red"
                                    style={{ padding: "1em" }}
                                ></i>
                                <a href="https://www.linkedin.com/in/andrefelipe22/">
                                    andrefelipe22
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
