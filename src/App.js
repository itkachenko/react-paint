import React, { Component } from 'react';
import './App.css';
import SideBar from "./components/sideBar";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Painter</h1>
        </header>
        <div className="App-content">
          <SideBar/>
        </div>
      </div>
    );
  }
}

export default App;
