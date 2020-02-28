import React, { Component } from "react";
import Boxes from "./Boxes";

export default class Timeline extends Component {
    render() {
        return (
            <div className="ui grid centered container">
                <div className="ui equal width centered stackable grid">
                    <div className="column">
                        <Boxes
                            title="Web Development"
                            description="I have experience building website and playables ads using Javascript, Typescript, React, HTML, CSS."
                            iconType="cogs"
                            color="#09F"
                        />
                    </div>
                    <div className="column">
                        <Boxes
                            title="Data Structures & Algorithms"
                            description="As coming from the Computer Engineer background, I have good grasp over fundamental concepts of DSA."
                            iconType="database"
                            color="#FF5"

                        />
                    </div>
                    <div className="column">
                        <Boxes
                            title="Product Management"
                            description="Study about product management is my new hobbie. After 1 year working together with the BI team at Wildlife Studios, I figured out how important is study your client, your product and your goals to be the best in your market."
                            iconType="lightbulb"
                            color="#F00"

                        />
                    </div>
                </div>
            </div>
        );
    }
}
