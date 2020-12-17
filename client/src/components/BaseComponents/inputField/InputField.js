import React, { Component } from 'react'

import "./inputField.scss"
export default class Input extends Component {

    render() {
        return <div className="input-wrap">
            <label className="label" htmlFor={this.props.id}>{this.props.label}</label>
            <input className="input"
                type={this.props.type}
                onChange={this.props.onChange}
                value={this.props.value}
                name={this.props.name}
                placeholder={this.props.placeholder}
                id={this.props.id} />
        </div>
    }
}