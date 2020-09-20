import React, { Component } from "react"
import LoadSpinner from '../../components/LoadSpinner/LoadSpinner'
import { Link } from 'react-router-dom'
import { createCargo } from '../../utils/CargoUtils'

export default class CreateCargo extends Component {
    constructor(props) {
        super(props)
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
        })
    }

    componentDidMount() {
        this.setState({
            loading: false
        })
    }

    render() {
        return (
            <div className="container">
                {this.state.loading ?
                    <LoadSpinner /> :
                    <div className="container mt-3">
                        <form>
                            <div className="for-group">
                                <div className="form-group">
                                    <label htmlFor={"title"}>Title</label>
                                    <input onChange={this.setCargoTitle.bind(this)} className="form-control" id="title" placeholder="Title" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor={"description"}>Description</label>
                                    <input onChange={this.setCargoDescription.bind(this)} className="form-control" id="description" placeholder="Description" />
                                </div>
                                <div className="form-group">
                                    <Link to={"/"}>
                                        <button className="form-control btn btn-primary" onClick={this.handleCargoCreate.bind(this)}>Create</button>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                }
            </div>
        )
    }
}