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

    render() {
        return (
            <div onClick={this.props.clickToChange}
                onMouseEnter={this.onMouseEnter.bind(this)}
                onMouseLeave={this.onMouseLeave.bind(this)}
            >
                {(this.props.type === 'title') ?
                    <h6>Title: </h6> :
                    <h6>Description: </h6>
                }
                <p>{this.props.value}</p>
                {this.state.isHover && <span className="badge badge-info">(click to change)</span>}
            </div>
        )
    }
}
