import React from 'react'

export default class CargoTitle extends React.Component {
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
            <div onClick={this.props.changeHandler}
                onMouseEnter={this.onMouseEnter.bind(this)}
                onMouseLeave={this.onMouseLeave.bind(this)}
            >
                {(this.state.isHover) ?
                    <div>
                        {this.props.value} <span className="badge badge-info">(click to change)</span>
                    </div>
                    : this.props.value}
            </div>
        )
    }
}
