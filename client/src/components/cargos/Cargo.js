import React from "react"

export default class Cargo extends React.Component {
    handleDelete() {
        this.props.onDelete(this.props.cargo._id)
    }

    render() {
        return (
            <div className="col mb-4">
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title">{this.props.cargo.title}</h5>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{this.props.cargo.description}</p>
                        <button className="btn btn-primary" onClick={() => this.handleDelete(this.props.cargo._id)}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }

}