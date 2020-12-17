import React, { Component } from "react"

import "./pageTitle.scss"

export default class PageTitle extends Component {
    render() {
        return <div className="title">
            <h1>{this.props.text}</h1>
        </div>
    }

}