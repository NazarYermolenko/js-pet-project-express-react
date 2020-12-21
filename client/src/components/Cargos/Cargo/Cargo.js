import React, { Component } from "react"
import { connect } from "react-redux"

import { Button, InputField } from "../../BaseComponents"
import { updateCargo } from '../../../utils/CargoUtils'

import "./cargo.scss"

class Cargo extends Component {
    constructor(props) {
        super(props)
        this.handleClickOnDescription = this.handleClickOnDescription.bind(this)
        this.handleClickOnDescriptionClose = this.handleClickOnDescriptionClose.bind(this)
        this.handleClickOnTitle = this.handleClickOnTitle.bind(this)
        this.handleClickOnTitleClose = this.handleClickOnTitleClose.bind(this)
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleClickUpdateCargo = this.handleClickUpdateCargo.bind(this)
        this.handleClickCancelCargoUpdate = this.handleClickCancelCargoUpdate.bind(this)
        this.handleCargoDelete = this.handleCargoDelete.bind(this)

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

    handleCargoDelete() {
        this.props.onDelete(this.props.cargo._id)
    }

    handleClickOnTitle() {
        this.setState({ isDisplayedTitleInputArea: true })
    }

    handleClickOnTitleClose() {
        this.setState({ isDisplayedTitleInputArea: false })
    }

    handleClickOnDescription() {
        this.setState({ isDisplayedDescriptionInputArea: true })
    }

    handleClickOnDescriptionClose() {
        this.setState({ isDisplayedDescriptionInputArea: false })
    }

    handleTitleChange(e) {
        this.setState({ changedCargo: { ...this.state.changedCargo, title: e.target.value } })
    }

    handleDescriptionChange(e) {
        this.setState({ changedCargo: { ...this.state.changedCargo, description: e.target.value } })
    }

    handleClickUpdateCargo() {
        updateCargo(this.state.changedCargo, this.props.token).then(() => this.props.updateHandler())
        this.setState({
            isDisplayedTitleInputArea: false,
            isDisplayedDescriptionInputArea: false
        })
    }

    handleClickCancelCargoUpdate() {
        this.setState({
            isDisplayedTitleInputArea: false,
            isDisplayedDescriptionInputArea: false
        })
    }


    render() {
        return (
            <div>
                <div>
                    <h2>Title:</h2>
                    {this.state.isDisplayedTitleInputArea ?
                        <InputField value={this.state.changedCargo.title}
                            onChange={this.handleTitleChange} /> :
                        <p onClick={this.handleClickOnTitle}>{this.props.cargo.title}</p>}
                </div>
                <div>
                    <h2>Description:</h2>
                    {this.state.isDisplayedDescriptionInputArea ?
                        <InputField value={this.state.changedCargo.description}
                            onChange={this.handleDescriptionChange} /> :
                        <p onClick={this.handleClickOnDescription}>{this.props.cargo.description}</p>}
                </div>
                <div className="row">
                    {(this.state.isDisplayedTitleInputArea || this.state.isDisplayedDescriptionInputArea) ?
                        <div>
                            <Button text={"Update"} onClick={this.handleClickUpdateCargo} />
                            <Button className="red" text={"Cancel"} onClick={this.handleClickCancelCargoUpdate} />
                        </div> :
                        <div><Button className="red" text={"Delete"} onClick={this.handleCargoDelete} /></div>
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        token: state.authReducer.user_auth.user.token
    }
}

export default connect(mapStateToProps)(Cargo)