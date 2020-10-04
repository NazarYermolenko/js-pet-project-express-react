import React, { Component } from 'react';
import { connect } from 'react-redux'


import { useRoutes } from '../routes/routes'

import { logIn } from '../state/actions/auth'


import '../styles/css/normalize.css'
import '../styles/css/index.css'



class App extends Component {
  constructor(props) {
    super(props)
    this.getAuth = this.getAuth.bind(this)
  }
  getAuth() {
    const authenticated = JSON.parse(localStorage.getItem('authenticated'))
    if (authenticated) {
      this.props.logIn(authenticated.user)
    }
  }

  render() {
    return (
      <div className="App">
        {this.getAuth()}
        {useRoutes(this.props.authenticated)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.authReducer.user_auth.authenticated
  };
}

export default connect(mapStateToProps, {
  logIn
})(App);