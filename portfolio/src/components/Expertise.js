import React, { Component } from "react";
import Boxes from "./Boxes";

export default class Expertise extends Component {
    render() {
        return (
            <div className="ui grid centered container">
                <div className="ui equal width centered stackable grid">
                    <div className="column">
                        <Boxes
                            title="Web Development"
                            body="I have experience building website and playables ads using Javascript, Typescript, React, HTML, CSS."
                            iconType="cogs"
                            color="#0000ff"
                        />
                    </div>
                    <div className="column">
                        <Boxes
                            title="Data Structures & Algorithms"
                            body="As coming from the Computer Engineer background, I have good grasp over fundamental concepts of DSA."
                            iconType="database"
                            color="#0000ff"

                        />
                    </div>
                    <div className="column">
                        <Boxes
                            title="Product Management"
                            body="Study about product management is my new hobbie. After 1 year working together with the BI team at Wildlife Studios, I figured out how important is study your client, your product and your goals to be the best in your market."
                            iconType="lightbulb"
                            color="#0000ff"

                        />
                    </div>
                </div>
            </div>
        );
    }
}
