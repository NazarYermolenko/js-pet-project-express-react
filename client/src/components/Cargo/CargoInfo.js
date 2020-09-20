import React, { Component } from "react"

export default class CargoInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isHover: false
        }
    }

    onMouseEnter(e) {
        this.setState({ isHover: true })
    }

    onMouseLeave(e) {
        this.setState({ isHover: false })
    }

    renderInfoType(type) {
        switch (type) {
            case "title": return <h6>Title: </h6>;
            case "description": return <h6>Description: </h6>;
            default: return <h6>Undefined type {type}</h6>
        }
    }

    renderBadge(type) {
        if (this.state.isHover) {
            switch (type) {
                case "title": return <span className="badge badge-info">(click to change title)</span>
                case "description": return <span className="badge badge-info">(click to change description)</span>
                default: return <h6>Undefined type {type}</h6>
            }
        }
    }

    render() {
        return (
            <div onClick={this.props.clickToChange}
                onMouseEnter={this.onMouseEnter.bind(this)}
                onMouseLeave={this.onMouseLeave.bind(this)}
            >
                {this.renderInfoType(this.props.type)}
                <div>
                    <p>{this.props.value} {this.renderBadge(this.props.type)}</p>
                </div>
            </div>
        )
    }
}
