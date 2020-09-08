import React from "react"

export default class NavBar extends React.Component {

    render() {
        return (
            <header>
                <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                    <h5 className="my-0 mr-md-auto font-weight-normal">
                        Online Shop
                    </h5>

                    <nav className="my-2 my-md-0 mr-md-3">
                        <a className="p-2 text-dark" href="/">Main-Page</a>
                    </nav>
                </div>

            </header>
        )
    }
}
