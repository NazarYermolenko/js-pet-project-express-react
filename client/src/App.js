import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

import { useRoutes } from './routes/routes'
import './index.css'

import store from './state/store'

class App extends Component {
  constructor(props) {
    super(props)
    this.routes = useRoutes(false)
  }

  componentDidMount(){
    console.log(store.getState().authReducer)
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Provider store={store}>
            {console.log(store.getState().authReducer)}
            {this.routes}
          </Provider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
