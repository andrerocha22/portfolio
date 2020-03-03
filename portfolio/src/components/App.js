import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import MasterHead from "./MasterHead";
import Footpage from "./Footpage";
import Expertise from "./Expertise";
import Timeline from "./Timeline";
import Others from "./Others";
import AboutMe from "./AboutMe";
import AnimateScrolling from "./AnimateScrolling"

const App = () => {
    return (
        <div className="ui" style={{backgroundColor:"#111"}}>
            <div className="ui ">
                <MasterHead />
            </div>

            <AnimateScrolling comp={<AboutMe/>} animation="fadeIn"/>
            <AnimateScrolling comp={<Expertise />} animation="fadeInLeft" subsectionTitle="EXPERTISE"/>
            <AnimateScrolling comp={<Timeline />} animation="fadeInRight" subsectionTitle="TIMELINE"/>
            <AnimateScrolling comp={<Others />} animation="fadeInLeft" subsectionTitle="OTHERS"/>

            <Footpage />
        </div>
    );
};

export default App;
