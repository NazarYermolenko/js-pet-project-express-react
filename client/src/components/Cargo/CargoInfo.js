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
                    <h5>Title: </h5> :
                    <h5>Description: </h5>
                }
                {(this.state.isHover) ?
                    <p>
                        {this.props.value} <span className="badge badge-info">(click to change)</span>
                    </p>
                    :
                    <p>{this.props.value}</p>}
            </div>
        )
    }
}
