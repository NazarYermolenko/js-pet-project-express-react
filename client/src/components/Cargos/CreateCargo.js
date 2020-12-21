import React, { Component } from "react"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { Button, InputField, LoadSpinner } from '../BaseComponents'
import { createCargo } from '../../utils/CargoUtils'


class CreateCargo extends Component {
    constructor(props) {
        super(props)
        this.setCargoTitle = this.setCargoTitle.bind(this)
        this.setCargoDescription = this.setCargoDescription.bind(this)
        this.handleCargoCreate = this.handleCargoCreate.bind(this)

        this.state = {
            loading: true,
            title: "",
            description: ""
        }
    }

    setCargoTitle(e) {
        this.setState({ title: e.target.value })
    }

    setCargoDescription(e) {
        this.setState({ description: e.target.value })
    }

    handleCargoCreate() {
        createCargo({
            title: this.state.title,
            description: this.state.description
        }, this.props.token)
    }

    componentDidMount() {
        this.setState({
            loading: false
        })
    }

    render() {
        return (
            <div className="container center offset_top_1_5">
                {this.state.loading ?
                    <LoadSpinner /> :
                    <div className="column">
                        <InputField
                            type={"text"}
                            placeholder={"Title"}
                            onChange={this.setCargoTitle}
                            label={"Title:"} />
                        <InputField
                            type={"text"}
                            placeholder={"Description"}
                            onChange={this.setCargoDescription}
                            label={"Description"}
                        />
                        <Link to={"/"}>
                            <div className="container row justify_content offset_top_1_5 offset_left_1_5">
                                <div>
                                    <Button text={"Create Cargo"} onClick={this.handleCargoCreate} />
                                    <Button className="red" text={"Cancel"} />
                                </div>
                            </div>
                        </Link>
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        token: state.authReducer.user_auth.user.token
    }
}

export default connect(mapStateToProps)(CreateCargo);