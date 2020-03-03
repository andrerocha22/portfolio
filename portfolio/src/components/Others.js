import "./Others.css";
import React, { Component } from "react";
import Boxes from "./Boxes";

export default class Others extends Component {
    createBodyCourses = () => {
        return (
            <div className="container">
                <h1 className="text-others">
                    Become a Product Manager - Udemy (01/2020)
                </h1>
                <h1 className="text-others">
                    Modern React with Redux - Udemy (02/2020)
                </h1>
                <h1 className="text-others">
                    English Program High Advanced - ILAC Toronto (12/2019)
                </h1>
            </div>
        );
    };

    createBodyProjects = () => {
        return (
            <div className="ui container">
                <p className="text-others">
                    Recreating the Nubank App using React Native
                </p>
            </div>
        );
    };

    render() {
        return (
            <div className="ui grid centered container">
                <div className="ui equal width centered stackable grid">
                    <div className="column">
                        <Boxes
                            title="Courses"
                            body={this.createBodyCourses()}
                            iconType="code"
                            color="#00ff00"
                        />
                    </div>
                    <div className="column">
                        <Boxes
                            title="Other Projects"
                            body={this.createBodyProjects()}
                            iconType="coffee"
                            color="#00ff00"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
