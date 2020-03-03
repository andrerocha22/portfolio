import "./AboutMe.css";
import React from "react";

const AboutMe = () => {
    return (
        <div className="ui vertical container centered">
            <div className="ui grid stackable">
                <div className="two wide column">
                    <div className="about">
                        <i className="red massive crosshairs icon"></i>
                    </div>
                </div>
                <div className="fourteen wide column">
                    <h1 className="ui header" style={{ color: "white" }}>
                        ABOUT ME
                    </h1>
                    <p className="text">
                        Hi! I'm Andre Rocha, I am a computer engineer from
                        Federal University of Itajubá. I love exploring new
                        technologies and often amazed by the progress we as a
                        human species have made so far in the recent years. But,
                        for me, the most important thing is how the technology
                        make the people's live better
                    </p>
                    <p className="text">
                        About me at university I learned that study is never
                        enough, learn is the key to be a sucessefull developer.
                        In my previous experience this feeling became stronger,
                        I had autonomy over what I was developing acting as a
                        kind of PO, so I was able to use new tools and libraries
                        to build a better product and collected data,
                        encouraging a data-driven culture.
                    </p>
                 
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
