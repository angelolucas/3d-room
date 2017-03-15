import React, { Component } from 'react';
import './Room.css';

class Room extends Component {
  render() {
    return (
      <div className="room">
        <div className="room__container">
          <div className="room__floor">
            <div className="room__wall__layers">
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">floor 01</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">floor 02</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">floor 03</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">floor 04</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">floor 05</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">floor 06</div>
              </div>
            </div>
          </div>
          <div className="room__ceiling">
            <div className="room__wall__layers">
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">ceiling 01</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">ceiling 02</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">ceiling 03</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">ceiling 04</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">ceiling 05</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">ceiling 06</div>
              </div>
            </div>
          </div>
          <div className="room__wall room__wall--north">
            <div className="room__wall__layers">
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">north 01</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">north 02</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">north 03</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">north 04</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">north 05</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">north 06</div>
              </div>
            </div>
          </div>
          <div className="room__wall room__wall--south">
            <div className="room__wall__layers">
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">south 01</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">south 02</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">south 03</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">south 04</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">south 05</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">south 06</div>
              </div>
            </div>
          </div>
          <div className="room__wall room__wall--east">
            <div className="room__wall__layers">
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">east 01</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">east 02</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">east 03</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">east 04</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">east 05</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">east 06</div>
              </div>
            </div>
          </div>
          <div className="room__wall room__wall--west">
            <div className="room__wall__layers">
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">west 01</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">west 02</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">west 03</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">west 04</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">west 05</div>
              </div>
              <div className="room__wall__layer-position">
                <div className="room__wall__layer">west 06</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Room;
