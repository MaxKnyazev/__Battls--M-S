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

  isFinished = false;

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
    console.log('isFilled0 ' + this.state.isFilled0)
    console.log('isFilled1 ' + this.state.isFilled1)
    console.log('isFilled2 ' + this.state.isFilled2)
  }

  checkEnd = () => this.state.isFilled0 && this.state.isFilled1 && this.state.isFilled2;

  countScore () {
    let score = 0;

    let staticFigures = [
      this.staticData[0].split(' ')[1],
      this.staticData[1].split(' ')[1],
      this.staticData[2].split(' ')[1],
    ]
    let dynamicFigures = [
      this.state.classes0.split(' ')[1],
      this.state.classes1.split(' ')[1],
      this.state.classes2.split(' ')[1],
    ]

    let staticColors = [
      this.staticData[0].split(' ')[2],
      this.staticData[1].split(' ')[2],
      this.staticData[2].split(' ')[2],
    ]
    let dynamicColors = [
      this.state.classes0.split(' ')[2],
      this.state.classes1.split(' ')[2],
      this.state.classes2.split(' ')[2],
    ]

    if (staticFigures.join('') === dynamicFigures.join('')) {
      score += 3;
      console.log('Third')
    }

    if (staticColors.join('') === dynamicColors.join('')) {
      score += 4;
      console.log('Fourth')
    }

    if ((staticFigures.join('') === dynamicFigures.join('')) && (staticColors.join('') === dynamicColors.join(''))) {
      score += 10;
      console.log('Sixth')
    }

    if (staticFigures.sort().join('') === dynamicFigures.sort().join('')) {
      score += 1;
      console.log('First')
    }

    if (staticColors.sort().join('') === dynamicColors.sort().join('')) {
      score += 2;
      console.log('Second')
    }

    if ((staticFigures.sort().join('') === dynamicFigures.sort().join('')) && (staticColors.sort().join('') === dynamicColors.sort().join(''))) {
      score += 5;
      console.log('Fifth')
    }

    this.setState({
      count: score,
    })    
    console.log('DynamicFigures', dynamicFigures.join(''));
    console.log('SortedDynamicFigures', dynamicFigures.sort().join(''));
    console.log('StaticSquares', staticFigures);
    console.log('StaticColors', staticColors);

  }

  componentDidUpdate () {
    if (!this.isFinished) {
      console.log('Is all filled: ', this.state.isFilled0 && this.state.isFilled1 && this.state.isFilled2);

      if (this.checkEnd()) {
        this.countScore()
        console.log('Finished')
        console.log(this.state)
        this.isFinished = true;
      }
    }
  }

  render () {
    return (
      <div className="App">
        <div className="count">Score = {this.state.count}</div>

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