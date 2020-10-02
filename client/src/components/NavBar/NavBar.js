import React from "react"
import { Link } from "react-router-dom"
import { connect } from 'react-redux'

import { logOut } from '../../state/actions/auth'


class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.logoutHandler = this.logoutHandler.bind(this)
    }

    logoutHandler() {
        localStorage.clear()
        this.props.logOut(this.props.user_auth.user);
    }

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
                            <li className="nav-item active">
                                <Link to={"/auth"} onClick={this.logoutHandler} className="nav-link">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}


function mapStateToProps(state) {
    return {
        user_auth: state.authReducer.user_auth
    };
}

export default connect(mapStateToProps, { logOut })(NavBar)