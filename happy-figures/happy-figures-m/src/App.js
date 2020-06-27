import React, {Component} from 'react';
import './App.css';
// import classes from '*.module.css';

class App extends Component {
  state = {
    count: 0,
    isFilled1: false,
    isFilled2: false,
    isFilled0: false,
    classes1: 'figure dynamic',
    classes2: 'figure dynamic',
    classes0: 'figure dynamic',
    dynamicData: [{
      id: 0,
    }, {
      id: 1,
    }, {
      id: 2,
    }],
  }

  colors = ['pink', 'purple', 'blue'];
  figures = ['square', 'circle'];

  randomInteger = (min, max) => {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  staticData = [
    `figure ${this.figures[this.randomInteger(0, this.figures.length - 1)]} ${this.colors[this.randomInteger(0, this.colors.length - 1)]}`,
    `figure ${this.figures[this.randomInteger(0, this.figures.length - 1)]} ${this.colors[this.randomInteger(0, this.colors.length - 1)]}`,
    `figure ${this.figures[this.randomInteger(0, this.figures.length - 1)]} ${this.colors[this.randomInteger(0, this.colors.length - 1)]}`
  ];

  clickHandler = (e) => {
    if (+e.target.id === 0 && !this.state.isFilled0) {
      this.setState({
        isFilled0: true,
        classes0: `figure ${this.figures[this.randomInteger(0, this.figures.length - 1)]} ${this.colors[this.randomInteger(0, this.colors.length - 1)]}`
      })
    }

    if (+e.target.id === 1 && !this.state.isFilled1) {
      this.setState({
        isFilled1: true,
        classes1: `figure ${this.figures[this.randomInteger(0, this.figures.length - 1)]} ${this.colors[this.randomInteger(0, this.colors.length - 1)]}`
      })
    }

    if (+e.target.id === 2 && !this.state.isFilled2) {
      this.setState({
        isFilled2: true,
        classes2: `figure ${this.figures[this.randomInteger(0, this.figures.length - 1)]} ${this.colors[this.randomInteger(0, this.colors.length - 1)]}`
      })
    }
    console.log(e.target.id)
    console.log(this.state.isFilled0)
  }

  render () {
    return (
      <div className="App">
        <div className="count">Count = {this.state.count}</div>

        <div className="figures__dynamic">
          <div onClick={this.clickHandler} id={this.state.dynamicData[0].id} className={this.state.classes0}>Click here to fill</div>
          <div onClick={this.clickHandler} id={this.state.dynamicData[1].id} className={this.state.classes1}>Click here to fill</div>
          <div onClick={this.clickHandler} id={this.state.dynamicData[2].id} className={this.state.classes2}>Click here to fill</div>
        </div>

        <div className="figures__static">
          <div className={this.staticData[0]}></div>
          <div className={this.staticData[1]}></div>
          <div className={this.staticData[2]}></div>
        </div>
      </div>
    );
  }
}

export default App;