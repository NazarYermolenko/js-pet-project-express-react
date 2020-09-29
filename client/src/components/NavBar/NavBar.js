import React from "react"
import { Link } from "react-router-dom"

export default class NavBar extends React.Component {

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <Link to={"/cargos"} className="navbar-brand col-1">
                        <strong>Online Shop</strong>
                    </Link>
                    
                    <div className="offset-sm-9 collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to={"/create"}>Create cargo</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

        )
    }
}
