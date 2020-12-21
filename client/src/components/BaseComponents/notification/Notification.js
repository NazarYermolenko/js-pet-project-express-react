import React, { Component } from "react";

import "./notification.scss"

export default class Notification extends Component {
    render() {
        return <div className="notification-wrap">
            <div className="notification">
                <p className="alert">{this.props.text}</p>
            </div>
        </div>
    }
}
