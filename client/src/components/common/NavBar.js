import React from "react"
import { Link } from "react-router-dom"

export default class NavBar extends React.Component {

    render() {
        return (
            <header>
                <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                    <div className="my-0 mr-md-auto font-weight-normal">
                        <h5>
                            <Link to={"/"} className="blog-header-logo text-dark">
                                <strong>Online Shop</strong>
                            </Link>
                        </h5>
                    </div>

                    <nav className="my-2 my-md-0 mr-md-3">
                        <Link to={"/create"}>Create cargo</Link>
                    </nav>
                </div >

            </header >
        )
    }
}
