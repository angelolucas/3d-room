import React, { Component } from 'react';
import './Tools.css';

class Tools extends Component {
  render() {
    return (
      <div className="tools">
        <h1 className="title">3D ROOM</h1>
        <form>
          <ul>
            <li className="tool">
              <labe className="tool__label">
                expad
                <input className="tool__input" type="range"/>
              </labe>
            </li>
            <li className="tool">
              <label className="tool__label">
                rotate
                <input className="tool__input" type="range"/>
              </label>
            </li>
            <li className="tool">
              <label className="tool__label">
                perspective
                <input className="tool__input" type="range"/>
              </label>
            </li>
            <li className="tool">
              <label className="tool__label">
                zoom
                <input className="tool__input" type="range"/>
              </label>
            </li>
            <li className="tool">
              <label className="tool__label">
                colors
                <input className="tool__input" type="checkbox" />
              </label>
            </li>
            <li className="tool">
              <label className="tool__label">
                layers
                <input className="tool__input" type="checkbox" />
              </label>
            </li>
          </ul>
        </form>
      </div>
    )
  }
}

export default Tools;