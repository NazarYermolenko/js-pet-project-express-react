import React, { Component } from 'react'
import { connect } from 'react-redux'


import { Button, InputField, Notification, LoadSpinner, PageTitle } from "../BaseComponents"
import { sendLogin, sendRegister, checkLogin } from '../../utils/AuthUtils'
import { logIn } from '../../state/actions/auth'

class Login extends Component {
    constructor(props) {
        super(props)
        this.emailChangeHandler = this.emailChangeHandler.bind(this)
        this.passwordChangeHandler = this.passwordChangeHandler.bind(this)
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

    emailChangeHandler(event) {
        this.setState({
            email: event.target.value,
            errorMessage: ""
        })
    }

    passwordChangeHandler(event) {
        this.setState({
            password: event.target.value,
            errorMessage: ""
        })
    }

    render() {
        return (
            <div className="auth-container">
                <PageTitle text={"Authentication Page"} />
                
                <form className="form">
                    <InputField type={"email"}
                        onChange={this.emailChangeHandler}
                        value={this.state.value}
                        name={"email"}
                        placeholder="E-mail"
                        id="email"
                        label={"Email:"}
                    />

                    <InputField type={"password"}
                        onChange={this.passwordChangeHandler}
                        value={this.state.value}
                        name={"password"}
                        placeholder="Password"
                        id="password"
                        label={"Password:"}
                    />

                    {(this.state.loading) ?
                        <LoadSpinner /> :
                        <div className="buttons">
                            <Button text={"Log In"} onClick={this.clickLogin} />
                            <Button text={"Register"} onClick={this.clickRegister} />
                        </div>
                    }
                    {
                        this.state.errorMessage && <Notification text={this.state.errorMessage} />
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