import React, { Component } from 'react'

export default class FixedMenu extends Component {
    render() {
        return (
            <div className="ui segment">
            <div className="ui large secondary pointing menu">
                <a className="active item" href="!#">
                    Introduction
                </a>
                <a className="item" href="!#">
                    About Me
                </a>
                <a className="item" href="!#">
                    Projects
                </a>
            </div>
        </div>
        )
    }
}
