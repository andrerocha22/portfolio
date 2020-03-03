import React, { Component } from "react";
import ControlledCarousel from "./ControlledCarousel"
import Header from "./Header";

export default class MasterHead extends Component {
    render() {
        return (
            <div className="ui inverted vertical masthead center aligned segment">
                <Header />
                <ControlledCarousel />
            </div>
        );
    }
}
