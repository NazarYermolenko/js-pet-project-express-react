import React from 'react'

export default class LoadSpinner extends React.Component {

    render() {
        return (
            <div className="container mt-5">
                <div className="offset-sm-6">
                    <div class="spinner-border text-primary" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        )
    }
}

