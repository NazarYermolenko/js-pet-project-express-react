import React, { Component } from 'react'

import "./button.scss"

export default class Button extends Component {
    render() {
        return <div className="btn-wrap">
            <button className={`button ${this.props.className}`}
                type="button"
                onClick={this.props.onClick}>
                <div className="button__content">
                    {this.props.text}
                </div>
            </button>
        </div>
    }
}