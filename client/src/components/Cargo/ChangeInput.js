import React, { Component } from "react"

export default class ChangeInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            changed: false,
            value: '',
        }
    }

    componentDidMount() {
        this.setState({ value: this.props.value })
    }

    changeHandler(e) {
        this.props.changeValueHandler(this.props.type, e.target.value)
        this.setState({ value: e.target.value })
    }

    render() {
        return (
            <div>
                <div className="row mb-3">
                    <input onChange={this.changeHandler.bind(this)} value={this.state.value}></input>
                    <div className="col offset-s1">
                        <button className="btn btn-danger" onClick={this.props.clickCloseHandler}>X</button>
                    </div>
                </div>
            </div>
        )
    }
}