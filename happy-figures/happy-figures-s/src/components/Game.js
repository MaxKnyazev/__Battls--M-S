import React, {Component} from 'react';
import './Game.css';
import {randomArrayValue} from './utils';

const figuresBorderRadius = () => ['0', '50%'];
const figuresColor = () => ['#E91E63', '#FF9800', '#FFEB3B'];
const figureEtalon = () => [
  {id: 1, backgroundColor: randomArrayValue(figuresColor()), borderRadius: randomArrayValue(figuresBorderRadius()), border: 'none'},
  {id: 2, backgroundColor: randomArrayValue(figuresColor()), borderRadius: randomArrayValue(figuresBorderRadius()), border: 'none'},
  {id: 3, backgroundColor: randomArrayValue(figuresColor()), borderRadius: randomArrayValue(figuresBorderRadius()), border: 'none'},
];

//TODO : если заменить id на data-id, то можно обойтись без этой функции
//и использовать elem в стилизации

//TODO : использовать компонент ListFigure для обоих случаев

//убирает из объекта elem поле id, т.к. elem является объектом стилей
//и строит новый массив JSX-елементов
const buildListFigureEtalon = figureEtalon().map(elem => {
  const id = elem.id;
  // console.log(elem);
  delete elem.id;
  // console.log(elem);
  return (
    <span className='figure figure--etalon' key={id} style={elem}></span>
  )
});

class Game extends Component {
  state = {
    count: 0,
    figureSelection: [
      {id: 1, backgroundColor: 'transparent', borderRadius: '0', border: '1px solid #673ab7', cliked: false},
      {id: 2, backgroundColor: 'transparent', borderRadius: '0', border: '1px solid #673ab7', cliked: false},
      {id: 3, backgroundColor: 'transparent', borderRadius: '0', border: '1px solid #673ab7', cliked: false},
    ],
    // figureEtalon: [
    //   {backgroundColor: 'transparent', borderRadius: randomArrayValue(figuresBorderRadius), border: '1px solid #673ab7'},
    //   {backgroundColor: 'transparent', borderRadius: randomArrayValue(figuresBorderRadius), border: '1px solid #673ab7'},
    //   {backgroundColor: 'transparent', borderRadius: randomArrayValue(figuresBorderRadius), border: '1px solid #673ab7'},
    // ],

  }

  render() {
    const {count, figureSelection} = this.state;

    return (
      <div className='Game'>

        <div className='Game__info'>
          <span className='titleCount'>Count = </span>
          <span className='count'>{count}</span>
        </div>

        <div className='Game__figures'>
          <span className='figure figure--selection' style={figureSelection[0]}></span>
          <span className='figure figure--selection' style={figureSelection[1]}></span>
          <span className='figure figure--selection' style={figureSelection[2]}></span>
        </div>

        <div className='Game__figures'>
          {buildListFigureEtalon}
        </div>

      </div>
    )
  }
}

export default Game;

/***
 * const listItems = numbers.map((number) =>
    // Правильно! Ключ нужно определять внутри массива:
    <ListItem key={number.toString()} value={number} />
  );
 */