import React, { Component } from 'react';
import NavBar from "./components/NavBar"
import Cargos from "./components/Cargos"

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Cargos />
      </div>
    );
  }
}

export default App;
