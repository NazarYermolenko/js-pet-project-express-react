import React, { Component } from 'react'
import { connect } from 'react-redux'

import LoadSpinner from '../LoadSpinner/LoadSpinner'
import { sendLogin, sendRegister, checkLogin } from '../../utils/AuthUtils'
import { logIn } from '../../state/actions/auth'

class Login extends Component {
    constructor(props) {
        super(props)
        this.changeHandler = this.changeHandler.bind(this)
        this.clickRegister = this.clickRegister.bind(this)
        this.clickLogin = this.clickLogin.bind(this)
        this.state = {
            errorMessage: "",
            loading: false,
            email: "",
            password: ""
        }
    }

    clickRegister() {
        this.setState({ loading: true })
        sendRegister(this.state.email, this.state.password).then((response) => {
            response.json.then((data) => {
                if (response.status !== 200) {
                    this.setState({ errorMessage: "Wrong registration data" })
                }
            })
        })
        this.setState({ loading: false })
    }

    clickLogin() {
        this.setState({ loading: true })
        sendLogin(this.state.email, this.state.password).then((response) => {
            response.json.then((loginData) => {
                if (response.status !== 200) {
                    this.setState({ errorMessage: "Wrong authentication data" })
                }
                if (loginData.userId && loginData.token) {
                    checkLogin(loginData.token).then((checkLogin) => {
                        if (checkLogin.status === 200) {
                            this.props.logIn({ userId: loginData.userId, token: loginData.token })
                            localStorage.setItem('authenticated', JSON.stringify({ authenticated: true, user: { userId: loginData.userId, token: loginData.token } }))
                        } else {
                            this.setState({ errorMessage: "Something wrong with auth token" })
                        }
                    })
                }
            })
        })
        this.setState({ loading: false });
    }

    changeHandler(event) {
        this.setState({ errorMessage: "" })
        switch (event.target.name) {
            case 'email': this.setState({ email: event.target.value }); break;
            case 'password': this.setState({ password: event.target.value }); break;
            default: console.log("Wrong field"); break;
        }
    }

    render() {
        return (
            <div className="auth-container">
                <div className="header">
                    <h3>Welcome!!!</h3>
                </div>
                <form className="form">
                    <div className="input-area">
                        <div className="label">
                            <label htmlFor={'email'}>E-mail:</label>
                        </div>
                        <div className='input'>
                            <input type='email' onChange={this.changeHandler} value={this.state.value} name="email" placeholder='Email' id='email' />
                        </div>
                    </div>
                    <div className="input-area">
                        <div className="label">
                            <label htmlFor='password'>Password:</label>
                        </div>
                        <div className='input'>
                            <input type='password' onChange={this.changeHandler} value={this.state.value} name="password" placeholder='Password' id='password' />
                        </div>
                    </div>

                    {(this.state.loading) ?
                        <LoadSpinner /> :
                        <div className="buttons">
                            <div>
                                <button type='button' className="btn btn-green" onClick={this.clickLogin}>Login</button>
                            </div>
                            <div>
                                <button type='button' className="btn btn-yellow" onClick={this.clickRegister}>Register</button>
                            </div>
                        </div>
                    }
                    {
                        this.state.errorMessage && <div>
                            <p>{this.state.errorMessage}</p>
                        </div>
                    }
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user_auth: state.authReducer.user_auth
    };
}

export default connect(mapStateToProps, { logIn })(Login)