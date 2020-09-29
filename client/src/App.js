import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

import { useRoutes } from './routes/routes'
import './index.css'

import store from './store'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAuthenticated: false,
      userId:false
    }
    this.routes = useRoutes(this.state.isAuthenticated)
  }

  componentDidMount(){
    console.log(localStorage.getItem('auth'))
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Provider store={store}>
            {this.routes}
          </Provider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
