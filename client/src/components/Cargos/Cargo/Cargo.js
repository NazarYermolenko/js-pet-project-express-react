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
        this.handleMouseOnTitle = this.handleMouseOnTitle.bind(this)
        this.handleMouseOutTitle = this.handleMouseOutTitle.bind(this)
        this.handleMouseOnDescription = this.handleMouseOnDescription.bind(this)
        this.handleMouseOutDescription = this.handleMouseOutDescription.bind(this)


        this.state = {
            isDisplayedTitleInputArea: false,
            isDisplayedDescriptionInputArea: false,
            isMouseOverTitle: false,
            isMouseOverDescription: false,
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

    handleMouseOnTitle() {
        this.setState({ isMouseOverTitle: true })
    }

    handleMouseOutTitle() {
        this.setState({ isMouseOverTitle: false })
    }

    handleMouseOnDescription() {
        this.setState({ isMouseOverDescription: true })
    }

    handleMouseOutDescription() {
        this.setState({ isMouseOverDescription: false })
    }

    renderChangeItBadge() {
        return <small className="red"> Change it!</small>
    }

    render() {
        return (
            <div className="container small margin_left_1_5 offset_top_1_5 box justify_content">
                <div>
                    <h2>Title:</h2>
                    {this.state.isDisplayedTitleInputArea ?
                        <InputField value={this.state.changedCargo.title}
                            onChange={this.handleTitleChange} /> :
                        <p onClick={this.handleClickOnTitle}
                            onMouseEnter={this.handleMouseOnTitle}
                            onMouseLeave={this.handleMouseOutTitle}
                        >{this.props.cargo.title}{this.state.isMouseOverTitle && this.renderChangeItBadge()}</p>}

                </div>
                <div>
                    <h2>Description:</h2>
                    {this.state.isDisplayedDescriptionInputArea ?
                        <InputField value={this.state.changedCargo.description}
                            onChange={this.handleDescriptionChange} /> :
                        <p onClick={this.handleClickOnDescription}
                            onMouseEnter={this.handleMouseOnDescription}
                            onMouseLeave={this.handleMouseOutDescription}
                        >{this.props.cargo.description}{this.state.isMouseOverDescription && this.renderChangeItBadge()}</p>}
                </div>
                <div className="container">
                    {(this.state.isDisplayedTitleInputArea || this.state.isDisplayedDescriptionInputArea) ?
                        <div className="container row justify_content offset_top_1_5">
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