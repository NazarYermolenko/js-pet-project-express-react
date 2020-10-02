import React, { Component } from 'react';
import { connect } from 'react-redux'


import { useRoutes } from './routes/routes'
import { logIn } from './state/actions/auth'

import './index.css'


class App extends Component {
  constructor(props) {
    super(props)
    this.getAuth = this.getAuth.bind(this)
    this.state = {
      local_storage_data: JSON.parse(localStorage.getItem('authenticated'))
    };
  }
  getAuth() {
    if (this.state.local_storage_data.authenticated) {
      this.props.logIn(this.state.local_storage_data.user)
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