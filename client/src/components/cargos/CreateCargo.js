import React from 'react'
import LoadSpinner from '../common/LoadSpinner'
import { Link } from 'react-router-dom'

export default class CreateCargo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
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
                    <div className="container">
                        <form>
                            <div className="form-group">
                                <label for='title'>Title</label>
                                <input className="form-control" id="title" placeholder="Title" />
                            </div>
                            <div className="form-group">
                                <label for='description'>Description</label>
                                <input className="form-control" id="description" placeholder="Description" />
                            </div>
                            <div className="form-group">
                                <Link to={"/"}>
                                    <button className="form-control btn btn-primary">Create</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                }
            </div>
        )
    }
}