import "./AboutMe.css"
import React from "react";

const AboutMe = () => {
    return (
        <div className="ui vertical container centered">
            <div className="ui grid stackable">
                <div className="two wide column">
                    <i className="red massive crosshairs icon"></i>
                </div>
                <div className="fourteen wide column">
                    <h1 className="ui header">ABOUT ME</h1>
                    <p className="text">
                        I am a computer grad student from DAIICT-Gandhinagar
                        with ICT as my major.I love exploring new technologies
                        and often amazed by the progress we as a human species
                        have mad so far in the recent years (apart from the
                        headphone-jack part!!)
                        </p>
                        <p className="text">
                        I have started reflecting my
                        ideas and thougths through the medium of words recently
                        so spelling and grammer mistaks are very often.You can
                        write me back if you spot any and don't want to live
                        anymore :P
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
