import React, { Component } from "react"

export default class PageTitle extends Component {
    render() {
        return <div>
            <h1>{this.props.text}</h1>
        </div>
    }

}