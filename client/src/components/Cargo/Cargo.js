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

    handleClick(type) {
        switch (type) {
            case 'title': this.setState({ isDisplayedTitleInputArea: true }); break;
            case 'title-close': this.setState({ isDisplayedTitleInputArea: false }); break;
            case 'description': this.setState({ isDisplayedDescriptionInputArea: true }); break;
            case 'description-close': this.setState({ isDisplayedDescriptionInputArea: false }); break;
            default: this.setState({ isDisplayedDescriptionInputArea: false, isDisplayedTitleInputArea: false })
        }
    }

    render() {
        return (
            <div className="col mb-4">
                <div className="card">
                    <div className="card-header">
                        {(!this.state.isDisplayedTitleInputArea) ?
                            <CargoInfo
                                ref={this.titleRef}
                                value={this.props.cargo.title}
                                clickToChange={this.handleClick.bind(this, "title")}
                            /> :
                            <ChangeInput value={this.props.cargo.title}
                                clickCloseHandler={this.handleClick.bind(this, 'title-close')}
                            />
                        }
                    </div>
                    <div className="card-body">
                        {(!this.state.isDisplayedDescriptionInputArea) ?
                            <CargoInfo
                                ref={this.descriptionRef}
                                value={this.props.cargo.description}
                                clickToChange={this.handleClick.bind(this, "description")}
                            /> :
                            <ChangeInput value={this.props.cargo.description}
                                clickCloseHandler={this.handleClick.bind(this, "description-close")}
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