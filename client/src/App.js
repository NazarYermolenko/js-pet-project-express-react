import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import './index.css'
import NavBar from "./components/NavBar/NavBar"
import Cargos from "./containers/Cargos/Cargos"
import CreateCargo from "./containers/CreateCargo/CreateCargo"
import store from './store'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <NavBar />
          <Route exact path="/">
            <Cargos />
          </Route>
          <Route path="/create">
            <CreateCargo />
          </Route>
        </Provider>
      </div>
    );
  }
}

export default App;
