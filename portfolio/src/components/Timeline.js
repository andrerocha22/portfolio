import "./Timeline.css";
import React, { Component } from "react";
import Boxes from "./Boxes";

export default class Timeline extends Component {
    createBodyText1 = () => {
        return (
            <div className="container">
                <p className="text-timeline">
                    I used the game engine Cocos Creato and Typescript in the
                    development of playables ads for user acquisition campaigns.
                    Meanwhile, I acted as product owner of each playable
                    developed, participating in decisions together with the team
                    of art and business intelligence, I learned concepts like
                    metrics and UX. I was also responsible for testing and
                    submitting completed playables for each ad network we worked
                    on.
                </p>
            </div>
        );
    };

    createBodyText2 = () => {
        return (
            <div className="container">
                <p className="text-timeline">
                    During my under-graduation, I participated in the Academic
                    Directory of Computing as Financial Director. I was also
                    part of the Microelectronics Group of the Federal University
                    of Itajubá where I studied two main topics: Development of a
                    plataform of integrated circuits and A Reconfigurable
                    artificial neural network architecture using FGPA
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
                            title="Creative Engineer at Wildlife Studios (2018-2019)"
                            body={this.createBodyText1()}
                            iconType="game"
                            color="#ff0000"
                        />
                    </div>
                    <div className="column">
                        <Boxes
                            title="BS in Computer Engineering (2014-2019)"
                            body={this.createBodyText2()}
                            iconType="book"
                            color="#ff0000"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
