import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import NavBar from "./components/common/NavBar"
import Cargos from "./components/cargos/Cargos"
import CreateCargo from "./components/cargos/CreateCargo"


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/">
          <Cargos />
        </Route>
        <Route path="/create">
          <CreateCargo />
        </Route>
      </div>
    );
  }
}

export default App;
