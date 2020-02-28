import React, { Component } from "react";
import Slider from "./Slider"
import Header from "./Header";

export default class MasterHead extends Component {
    render() {
        return (
            <div className="ui inverted vertical masthead center aligned segment">
                <Header />
                <Slider />
            </div>
        );
    }
}
