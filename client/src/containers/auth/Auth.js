import React, { Component } from 'react'
import { connect } from 'react-redux'

import LoadSpinner from '../../components/LoadSpinner/LoadSpinner'
import { sendLogin, sendRegister } from '../../utils/AuthUtils'
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
            response.json.then((data) => {
                if (response.status !== 200) {
                    this.setState({ errorMessage: "Wrong authentication data" })
                }
                if (data.userId && data.token) {
                    this.props.logIn({ userId: data.userId, token: data.token })
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
            <div className="d-flex justify-content-center">
                <div className="m-5">
                    <div className="card p-3">
                        <div className="d-flex justify-content-center">
                            <h3 className="align-center">Welcome!!!</h3>
                        </div>
                        <form className='d-flex flex-column'>
                            <div className="my-2">
                                <label htmlFor={'email'}>E-mail:</label>
                                <input type='email' onChange={this.changeHandler} value={this.state.value} name="email" className='form-control' placeholder='Email' id='email'></input>
                            </div>
                            <div className="my-2">
                                <label htmlFor='password'>Password:</label>
                                <input type='password' onChange={this.changeHandler} value={this.state.value} name="password" className="form-control" placeholder='Password' id='password'></input>
                            </div>

                            {(this.state.loading) ?
                                <LoadSpinner /> :
                                <div className="d-flex flex-column my-2">
                                    <button type='button' className='btn btn-primary m-1' onClick={this.clickLogin}>Login</button>
                                    <button type='button' className='btn btn-success m-1' onClick={this.clickRegister}>Register</button>
                                </div>
                            }
                            {
                                this.state.errorMessage && <div className="alert alert-danger">
                                    <p>{this.state.errorMessage}</p>
                                </div>
                            }
                        </form>
                    </div>
                </div>
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