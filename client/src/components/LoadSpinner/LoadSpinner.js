import React from 'react'

export default class LoadSpinner extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s4"></div>
                    <div className="col s4">
                        <div className="preloader-wrapper big active">
                            <div className="spinner-layer spinner-green-only">
                                <div className="circle-clipper left">
                                    <div className="circle"></div>
                                </div><div className="gap-patch">
                                    <div className="circle"></div>
                                </div><div className="circle-clipper right">
                                    <div className="circle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col s4"></div>
                </div>
            </div>
        )
    }
}

