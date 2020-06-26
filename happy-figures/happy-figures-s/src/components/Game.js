import React, {Component} from 'react';
import './Game.css';
import {randomArrayValue} from './utils';

const figuresBorderRadius = ['0', '50%'];
const figureEtalon = [
  {backgroundColor: 'transparent', borderRadius: randomArrayValue(figuresBorderRadius), border: '1px solid #673ab7'},
  {backgroundColor: 'transparent', borderRadius: randomArrayValue(figuresBorderRadius), border: '1px solid #673ab7'},
  {backgroundColor: 'transparent', borderRadius: randomArrayValue(figuresBorderRadius), border: '1px solid #673ab7'},
];


class Game extends Component {
  state = {
    count: 0,
    figureSelection: [
      {backgroundColor: 'transparent', borderRadius: '0', border: '1px solid #673ab7'},
      {backgroundColor: 'transparent', borderRadius: '0', border: '1px solid #673ab7'},
      {backgroundColor: 'transparent', borderRadius: '0', border: '1px solid #673ab7'},
    ],
    // figureEtalon: [
    //   {backgroundColor: 'transparent', borderRadius: randomArrayValue(figuresBorderRadius), border: '1px solid #673ab7'},
    //   {backgroundColor: 'transparent', borderRadius: randomArrayValue(figuresBorderRadius), border: '1px solid #673ab7'},
    //   {backgroundColor: 'transparent', borderRadius: randomArrayValue(figuresBorderRadius), border: '1px solid #673ab7'},
    // ],

  }

  render() {
    const {count} = this.state;
    return (
      <div className='Game'>

        <div className='Game__info'>
          <span className='titleCount'>Count :</span>
          <span className='count'>{count}</span>
        </div>

        <div className='Game__figures'>
          <span className='figure figure--selection'></span>
          <span className='figure figure--selection'></span>
          <span className='figure figure--selection'></span>
        </div>

        <div className='Game__figures'>
          <span className='figure figure--etalon' style={figureEtalon[0]}></span>
          <span className='figure figure--etalon' style={figureEtalon[1]}></span>
          <span className='figure figure--etalon' style={figureEtalon[2]}></span>
        </div>

      </div>
    )
  }
}

export default Game;