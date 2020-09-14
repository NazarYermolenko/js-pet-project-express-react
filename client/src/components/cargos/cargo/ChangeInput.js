import React from 'react'

export default class ChangeInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            changed: false,
            value: '',
            type: "input"
        }
    }

    changeHandler(e) {
        this.setState({ value: e.target.value })
    }

    componentDidMount() {
        this.setState({ value: this.props.value })
    }

    render() {
        return (
            <div className="d-flex">
                <input className="mr-3" onChange={this.changeHandler.bind(this)} value={this.state.value}></input>
                <button className="btn btn-danger" onClick={this.props.changeHandler}>X</button>
            </div>
        )
    }
}