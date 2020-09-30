import React, { Component } from 'react';
import { connect } from 'react-redux'


import { useRoutes } from './routes/routes'
import './index.css'


class App extends Component {

  render() {
    return (
      <div className="App">
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
})(App);