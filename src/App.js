import React, { Component } from 'react';
import './App.css';
import './App.css';
class App extends Component {
  render() {
    return (
      <div class="room">
        <div class="room__floor"></div>
        <div class="room__ceiling"></div>
        <div class="room__wall room__wall--north"></div>
        <div class="room__wall room__wall--south"></div>
        <div class="room__wall room__wall--east"></div>
        <div class="room__wall room__wall--west"></div>
      </div>
    );
  }
}

export default App;
