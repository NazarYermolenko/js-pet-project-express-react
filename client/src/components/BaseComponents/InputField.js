import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        return <div className="input-wrap">
            <label htmlFor={this.props.id}>{this.props.label}</label>
            <input className={this.props.className}
                type={this.props.type}
                onChange={this.props.onChange}
                value={this.props.value}
                name={this.props.name}
                placeholder={this.props.placeholder}
                id={this.props.id} />
        </div>
    }
}