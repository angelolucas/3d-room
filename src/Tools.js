import React, { Component } from 'react';
import './Tools.css';

class Tools extends Component {
  componentWillMount() {
    this.initialExpand = 500;
  }
  componentDidMount() {

    // Expand Input
    this.expandRange.value = this.initialExpand;
    this.expandNumber.value = this.initialExpand;
    const selectExpand = document.querySelectorAll('[data-expand]');

    this.updateExpand = (val) => {      
      this.expandRange.value = val;
      this.expandNumber.value = val;

      [].forEach.call(selectExpand, (el) => {
        el.style.width = `${val}px`;
      });

    }
  }
  render() {
    return (
      <div className="tools">
        <h1 className="title">3D ROOM</h1>
        <form>
          <ul>
            <li className="tool">
              <labe className="tool__label">
                expad

                <input
                  ref={(expandNumber) => { this.expandNumber = expandNumber; }}
                  className="tool__number"
                  type="number"
                  name="amountInput"
                  min="0"
                  max="1000"
                  onInput={() => this.updateExpand(this.expandNumber.value)}
                />

                px

                <input
                  ref={(expandRange) => { this.expandRange = expandRange; }}
                  className="tool__range"
                  type="range"
                  name="amountRange"
                  min="0"
                  max="1000"
                  onInput={() => this.updateExpand(this.expandRange.value)}
                />
              </labe>
            </li>
            <li className="tool">
              <label className="tool__label">
                rotate
                <input className="tool__range" type="range"/>
              </label>
            </li>
            <li className="tool">
              <label className="tool__label">
                perspective
                <input className="tool__range" type="range"/>
              </label>
            </li>
            <li className="tool">
              <label className="tool__label">
                zoom
                <input className="tool__range" type="range"/>
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