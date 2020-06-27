import React, {Component} from 'react';
import './Game.css';
import {randomArrayValue} from './utils';

const figuresBorderRadius = () => ['0', '50%'];
const figuresColor = () => ['#E91E63', '#FFEB3B', '#FF5722'];
const figureEtalon = [
  {id: '0', backgroundColor: randomArrayValue(figuresColor()), borderRadius: randomArrayValue(figuresBorderRadius()), border: 'none'},
  {id: '1', backgroundColor: randomArrayValue(figuresColor()), borderRadius: randomArrayValue(figuresBorderRadius()), border: 'none'},
  {id: '2', backgroundColor: randomArrayValue(figuresColor()), borderRadius: randomArrayValue(figuresBorderRadius()), border: 'none'},
];

//TODO : использовать компонент ListFigure для обоих случаев

//убирает из объекта elem поле id, т.к. elem является объектом стилей и строит новый массив JSX-елементов
// const buildListFigureEtalon = figureEtalon().map(elem => {
//   const id = elem.id;
//   // console.log(elem);
//   delete elem.id;
//   // console.log(elem);
//   return (
//     <span className='figure figure--etalon' key={id} style={elem}></span>
//   )
// });

class Game extends Component {
  state = {
    count: 0,
    figureSelection: [
      {id: '0', backgroundColor: 'transparent', borderRadius: '0', border: '1px solid #673ab7', cliked: false},
      {id: '1', backgroundColor: 'transparent', borderRadius: '0', border: '1px solid #673ab7', cliked: false},
      {id: '2', backgroundColor: 'transparent', borderRadius: '0', border: '1px solid #673ab7', cliked: false},
    ],
    // figureEtalon: [
    //   {backgroundColor: 'transparent', borderRadius: randomArrayValue(figuresBorderRadius), border: '1px solid #673ab7'},
    //   {backgroundColor: 'transparent', borderRadius: randomArrayValue(figuresBorderRadius), border: '1px solid #673ab7'},
    //   {backgroundColor: 'transparent', borderRadius: randomArrayValue(figuresBorderRadius), border: '1px solid #673ab7'},
    // ],

  }

  figureSelectionHandleClick = (e) => {
    const id = e.target.id;
    const { figureSelection } = this.state;

    console.log(id);
    console.log(figureSelection[id]);

    // const idx = arr.findIndex((el) => el.id === id);
    // const oldItem = arr[idx];
    // const newItem = {...oldItem, [propName] : !oldItem[propName]};
    const newFigure = {
      id, 
      backgroundColor: 'red', 
      borderRadius: '0', 
      border: 'none', 
      cliked: true
    };

    // return [
    //   ...arr.slice(0, idx), 
    //   newItem, 
    //   ...arr.slice(idx + 1)
    // ];
    console.log('***********figureSelection*******************');
    console.log(figureSelection);
    console.log('***********figureSelection*******************');
    console.log(figureSelection.slice(0, id));
    console.log(newFigure);
    console.log(figureSelection.slice(id+1));

    // let newFigureSelection = [
    //   ...figureSelection.slice(0, id), 
    //   newFigure, 
    //   ...figureSelection.slice(id+1)
    // ];
  
    let newFigureSelection = [...figureSelection];
    newFigureSelection[id] = newFigure;
  
console.log(newFigureSelection);

    this.setState({
      figureSelection: newFigureSelection
    });
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
          {
            figureSelection.map(elem => {
              //убирает из объекта elem поле id и поле clicked, т.к. elem является объектом стилей и строит новый массив JSX-елементов
              const id = elem.id;
              // console.log(elem);
              // delete elem.id;
              // delete elem.cliked;
              // console.log(elem);
              return (
                <span 
                  className='figure figure--selection' 
                  key={id} 
                  id={id}
                  style={elem}
                  onClick={(e) => this.figureSelectionHandleClick(e)}
                ></span>
              )
            })
          }
        </div>

        <div className='Game__figures'>
          {
            figureEtalon.map(elem => {
              //убирает из объекта elem поле id, т.к. elem является объектом стилей и строит новый массив JSX-елементов
              const id = elem.id;
              // console.log(elem);
              // delete elem.id;
              // console.log(elem);
              return (
                <span 
                  className='figure figure--etalon' 
                  key={id}
                  id={id} 
                  style={elem}
                ></span>
              )
            })
          }
        </div>

      </div>
    )
  }
}

export default Game;

/***
 *
 * 
TODO : сделать генерацию фигур при кликах

TODO : отследить момент, когда все фигуры будут сгенерированы и надо начинать проверку

TODO : где делать проверки? в componentDidMount?

TODO : элементы figureSelection не должны перегенерироваться при повторном клике
т.е. если поле cliked = true


 */


