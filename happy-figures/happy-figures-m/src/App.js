import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    count: 0,
    dynamicData: [{
      id: 0,
      isFilled: false,
      styles: {

      }
    }, {
      id: 1,
      isFilled: false,
      styles: {
        
      }
    }, {
      id: 2,
      isFilled: false,
      styles: {
        
      }
    }],
  }

  colors = ['#e91e63', '#8e24aa', '#2196f3'];
  figures = ['0', '50%'];

  randomInteger = (min, max) => {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  staticData = [{
    borderRadius: this.figures[this.randomInteger(0, this.figures.length - 1)],
    background: this.colors[this.randomInteger(0, this.colors.length - 1)]
  }, {
    borderRadius: this.figures[this.randomInteger(0, this.figures.length - 1)],
    background: this.colors[this.randomInteger(0, this.colors.length - 1)]
  }, {
    borderRadius: this.figures[this.randomInteger(0, this.figures.length - 1)],
    background: this.colors[this.randomInteger(0, this.colors.length - 1)]
  }];

  clickHandler = (e) => {
    if (!this.state.dynamicData[e.target.id].isFilled) {
      this.setState = {
        dynamicData: this.state.dynamicData
      }
    }
  }

  render () {
    return (
      <div className="App">
        <div className="count">Count = {this.state.count}</div>

        <div className="figures__dynamic">
          <div style={this.state.dynamicData[0].styles} id={this.state.dynamicData[0].id} className="figure dynamic">Click here to fill</div>
          <div style={this.state.dynamicData[1].styles} id={this.state.dynamicData[1].id} className="figure dynamic">Click here to fill</div>
          <div style={this.state.dynamicData[2].styles} id={this.state.dynamicData[2].id} className="figure dynamic">Click here to fill</div>
        </div>

        <div className="figures__static">
          <div style={this.staticData[0]} className="figure"></div>
          <div style={this.staticData[1]} className="figure"></div>
          <div style={this.staticData[2]} className="figure"></div>
        </div>
      </div>
    );
  }
}

export default App;