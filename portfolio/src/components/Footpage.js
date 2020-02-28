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
                                        behavior: 'smooth'
                                    })
                                }}
                            >
                                Introduction
                            </h3>
                        </div>
                        <div className="three wide column">
                            <h3 className="ui inverted header">About me</h3>
                        </div>
                        <div className="three wide column">
                            <h3 className="ui inverted header">Projects</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
