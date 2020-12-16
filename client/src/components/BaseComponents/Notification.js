import React, { Component } from "react";

export default class Notification extends Component {
    render() {
        return <div className="notification">
            <p className="alert">{this.props.text}</p>
        </div>
    }
}