import React, { Component } from 'react';
import './App.css';
import './room.css';

class App extends Component {
  render() {
    return (
      <div className="room">
        <div className="room__container">
          <div className="room__floor">
            <div className="room__wall__layers">
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">FRONT</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">FRONT</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">FRONT</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">FRONT</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">FRONT</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">FRONT</div>
              </div>
            </div>
          </div>
          <div className="room__ceiling">
            <div className="room__wall__layers">
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">FRONT</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">FRONT</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">FRONT</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">FRONT</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">FRONT</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">FRONT</div>
              </div>
            </div>
          </div>
          <div className="room__wall room__wall--north">
            <div className="room__wall__layers">
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">FRONT</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">FRONT</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">FRONT</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">FRONT</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">FRONT</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">FRONT</div>
              </div>
            </div>
          </div>
          <div className="room__wall room__wall--south">
            <div className="room__wall__layers">
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">FRONT</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">FRONT</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">FRONT</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">FRONT</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">FRONT</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">FRONT</div>
              </div>
            </div>
          </div>
          <div className="room__wall room__wall--east"></div>
          <div className="room__wall room__wall--west"></div>
        </div>
      </div>
    );
  }
}

export default App;
