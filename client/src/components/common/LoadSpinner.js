import React from 'react'

export default class LoadSpinner extends React.Component {

    render() {
        return (
            <div className="container d-flex justify-content-center">
                <div className="spinner-border m-5" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
}

