import React from "react"
import { Link } from "react-router-dom"

export default class NavBar extends React.Component {

    render() {
        return (
            <header>
                <nav className="nav-extended">
                    <div className="nav-wrapper">
                        <Link to={"/"} className="brand-logo">
                            <strong>Online Shop</strong>
                        </Link>
                    </div>
                    <div className="nav-content teal lighten-2">
                        <ul className="tabs tabs-transparent">
                            <li className="tab col s3"><Link to={"/create"}>Create cargo</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}
