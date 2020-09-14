import React, { Component } from "react"
import CargoInfo from "./CargoInfo"
import ChangeInput from "./ChangeInput"

export default class Cargo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDisplayedTitleInputArea: false,
            isDisplayedDescriptionInputArea: false,
        }
    }

    handleDelete() {
        this.props.onDelete(this.props.cargo._id)
    }

    handleClickButton(e) {
        console.log(this)
        
        const parentClass = e.target.parentNode.parentNode.classList[0]
        if (parentClass === 'card-body') {
            if (e.target.type === 'submit') {
               this.setState({ isDisplayedDescriptionInputArea: false })
            } else {
                this.setState({ isDisplayedDescriptionInputArea: true })
            }
        } else {
            if (e.target.type === 'submit') {
               this.setState({ isDisplayedTitleInputArea: false })
            } else {
                this.setState({ isDisplayedTitleInputArea: true })
            }
        }
    }

    render() {
        return (
            <div className="col mb-4">
                <div className="card">
                    <div className="card-header">
                        {(!this.state.isDisplayedTitleInputArea) ?
                            <CargoInfo
                                value={this.props.cargo.title}
                                clickToChange={this.handleClickButton.bind(this)}
                            /> :
                            <ChangeInput value={this.props.cargo.title}
                                clickCloseHandler={this.handleClickButton.bind(this)}
                            />
                        }
                    </div>
                    <div className="card-body">
                        {(!this.state.isDisplayedDescriptionInputArea) ?
                            <CargoInfo
                                value={this.props.cargo.description}
                                clickToChange={this.handleClickButton.bind(this)}
                            /> :
                            <ChangeInput value={this.props.cargo.description}
                                clickCloseHandler={this.handleClickButton.bind(this)}
                            />
                        }
                        <div className="mt-3">
                            <button className="btn btn-primary" onClick={this.handleDelete.bind(this, this.props.cargo._id)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}