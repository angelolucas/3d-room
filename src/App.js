import React, { Component } from 'react';
import './App.css';
import './room.css';

class App extends Component {
  render() {
    return (
      <div className="room">
        <div class="room__perspective">
          <div className="room__container">
            <div className="room__floor"></div>
            <div className="room__ceiling"></div>
            <div className="room__wall room__wall--north"></div>
            <div className="room__wall room__wall--south"></div>
            <div className="room__wall room__wall--east"></div>
            <div className="room__wall room__wall--west"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
