import React, { Component } from 'react'

export default class LoadSpinner extends Component {

    render() {
        return (
            <div className="d-flex justify-content-center m-4">
                <div className="m-auto">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>

        )
    }
}

