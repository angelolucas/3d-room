import React, { Component } from 'react';
import './Tools.css';

class Tools extends Component {
  componentWillMount() {
    this.initialExpand = 200;
    this.initialRotate = 38;
    this.initialPerspective = 800;
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

    // Rotate Input
    this.rotateRange.value = this.initialRotate;
    this.rotateNumber.value = this.initialRotate;
    const selectRotate = document.querySelectorAll('[data-rotate]');

    this.updateRotate = (val) => {      
      this.rotateRange.value = val;
      this.rotateNumber.value = val;

      [].forEach.call(selectRotate, (el) => {
        el.style.transform = `rotateX(38deg) rotateZ(${val}deg)`;
      });
    }

    // Perspective Input
    this.perspectiveRange.value = this.initialPerspective;
    this.perspectiveNumber.value = this.initialPerspective;
    const selectPerspective = document.querySelectorAll('[data-perspective]');

    this.updatePerspective = (val) => {      
      this.perspectiveRange.value = val;
      this.perspectiveNumber.value = val;

      

      if (val > 9999) {
        val = 9999999999;
        console.log(val);
      }

      [].forEach.call(selectPerspective, (el) => {
        el.style.perspective = `${val}px`;
      });
    }

    window.setTimeout(() => {
      this.updateExpand(this.initialExpand);
      this.updateRotate(this.initialRotate);
    }, 1000);
    
    window.setTimeout(() => {
      document.querySelector('body').classList.add('played');
    }, 3000);
  }
  render() {
    return (
      <div className="tools">
        <h1 className="title">3D ROOM</h1>
        <form>
          <ul>
            <li className="tool">
              <labe className="tool__label">
                expand

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
              <labe className="tool__label">
                rotate

                <input
                  ref={(rotateNumber) => { this.rotateNumber = rotateNumber; }}
                  className="tool__number"
                  type="number"
                  name="amountInput"
                  min="0"
                  max="360"
                  onInput={() => this.updateRotate(this.rotateNumber.value)}
                />

                px

                <input
                  ref={(rotateRange) => { this.rotateRange = rotateRange; }}
                  className="tool__range"
                  type="range"
                  name="amountRange"
                  min="0"
                  max="360"
                  onInput={() => this.updateRotate(this.rotateRange.value)}
                />
              </labe>
            </li>
            <li className="tool">
              <labe className="tool__label">
                perspective

                <input
                  ref={(perspectiveNumber) => { this.perspectiveNumber = perspectiveNumber; }}
                  className="tool__number"
                  type="number"
                  name="amountInput"
                  min="400"
                  max="10000"
                  onInput={() => this.updatePerspective(this.perspectiveNumber.value)}
                />

                px

                <input
                  ref={(perspectiveRange) => { this.perspectiveRange = perspectiveRange; }}
                  className="tool__range"
                  type="range"
                  name="amountRange"
                  min="400"
                  max="10000"
                  onInput={() => this.updatePerspective(this.perspectiveRange.value)}
                />
              </labe>
            </li>
          </ul>
        </form>
      </div>
    )
  }
}

export default Tools;