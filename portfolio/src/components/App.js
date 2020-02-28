import React from "react";
// import FixedMenu from "./FixedMenu";
import MasterHead from "./MasterHead";
import Footpage from "./Footpage";
import Expertise from "./Expertise";
import Timeline from "./Timeline";
import AboutMe from "./AboutMe";
import ScrollAnimation from "react-animate-on-scroll";

const App = () => {
    return (
        <div className="ui">
            <div className="ui ">
                <MasterHead />
            </div>

            <div
                className="ui vertical stripe segment"
                style={{ padding: "7%" }}
            >
                <ScrollAnimation animateIn="fadeIn">
                    <AboutMe />
                </ScrollAnimation>
            </div>

            <div
                className="ui vertical stripe segment"
                style={{ padding: "7%" }}
            >
                <ScrollAnimation animateIn="fadeInLeft">
                    <h1 className="ui header">Expertise</h1>
                    <Expertise />
                </ScrollAnimation>
            </div>

            <div
                className="ui vertical stripe segment"
                style={{ padding: "7%" }}
            >
                <ScrollAnimation animateIn="fadeInRight">
                    <h1 className="ui header">Timeline</h1>
                    <Timeline />
                </ScrollAnimation>
            </div>

            <div
                className="ui vertical stripe segment"
                style={{ padding: "7%" }}
            >
                <ScrollAnimation animateIn="fadeInLeft">
                    <h1 className="ui header">Projects</h1>
                    <Expertise />
                </ScrollAnimation>
            </div>

            <Footpage />
        </div>
    );
};

export default App;
