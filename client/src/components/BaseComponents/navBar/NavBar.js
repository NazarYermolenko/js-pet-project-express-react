import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from 'react-redux'

import { logOut } from '../../../state/actions/auth'


class NavBar extends Component {
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
                <nav>
                    <div className="container row justify-content">
                        <div className="logo">
                            <Link to={"/cargos"}>
                                <strong>Online Shop</strong>
                            </Link>
                        </div>
                        <div className="container row">
                            <ul>
                                <li>
                                    <Link className="nav-link" to={"/create"}>Create cargo</Link>
                                </li>
                                <li>
                                    <Link to={"/auth"} onClick={this.logoutHandler} className="nav-link">Logout</Link>
                                </li>
                            </ul>
                        </div>
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