import React, { Component } from "react"
import CargoInfo from "./CargoInfo"
import ChangeInput from "./ChangeInput"
import { updateCargo } from '../../utils/CargoUtils'

export default class Cargo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDisplayedTitleInputArea: false,
            isDisplayedDescriptionInputArea: false,
            changedCargo: {
                _id: props.cargo._id,
                title: props.cargo.title,
                description: props.cargo.description
            }
        }
    }

    handleDelete() {
        this.props.onDelete(this.props.cargo._id)
    }

    handleClick(type) {
        switch (type) {
            case 'title': this.setState({ isDisplayedTitleInputArea: true }); break;
            case 'title-close': this.setState({ isDisplayedTitleInputArea: false }); break;
            case 'description': this.setState({ isDisplayedDescriptionInputArea: true }); break;
            case 'description-close': this.setState({ isDisplayedDescriptionInputArea: false }); break;
            default: this.setState({ isDisplayedDescriptionInputArea: false, isDisplayedTitleInputArea: false })
        }
    }

    handleChange(type, value) {
        let updatedCargo = this.state.changedCargo
        switch (type) {
            case 'title': updatedCargo.title = value; break;
            case 'description': updatedCargo.description = value; break;
            default: updatedCargo.title = this.props.cargo.title;
        }
    }

    handleUpdateCargo() {
        updateCargo(this.state.changedCargo).then(() => this.props.updateHandler())
        this.setState({
            isDisplayedTitleInputArea: false,
            isDisplayedDescriptionInputArea: false
        })
    }


    render() {
        return (
            <div className="card">
                <div className="card-content">
                    {(!this.state.isDisplayedTitleInputArea) ?
                        <CargoInfo
                            type={"title"}
                            value={this.props.cargo.title}
                            clickToChange={this.handleClick.bind(this, "title")}
                        /> :
                        <ChangeInput value={this.props.cargo.title}
                            id={this.props.cargo._id}
                            type={'title'}
                            clickCloseHandler={this.handleClick.bind(this, 'title-close')}
                            changeValueHandler={this.handleChange.bind(this)}
                        />
                    }
                    <div>
                        {(!this.state.isDisplayedDescriptionInputArea) ?
                            <CargoInfo
                                type={'description'}
                                value={this.props.cargo.description}
                                clickToChange={this.handleClick.bind(this, "description")}
                            /> :
                            <ChangeInput value={this.props.cargo.description}
                                id={this.props.cargo._id}
                                type={'description'}
                                clickCloseHandler={this.handleClick.bind(this, "description-close")}
                                changeValueHandler={this.handleChange.bind(this)}
                            />
                        }
                        <div>
                            <div className="card-action">
                                {(this.state.isDisplayedTitleInputArea || this.state.isDisplayedDescriptionInputArea) ?
                                    <button className="btn btn-secondary" onClick={this.handleUpdateCargo.bind(this)}>Update</button>
                                    : <button className="btn btn-primary" onClick={this.handleDelete.bind(this, this.props.cargo._id)}>Delete</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}