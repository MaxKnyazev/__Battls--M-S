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

const GAME_POINTS_FROM_THE_CONDITION_1 = 1;

const equalCountsOfIdenticalFiguresOfThe1stAnd2ndRow = (arrEtalon, arrSelection) => {
  const arrEtalonStr = arrEtalon.map(elem => elem.borderRadius).sort().join('');
  const arrSelectionStr = arrSelection.map(elem => elem.borderRadius).sort().join('');
  console.log(arrEtalonStr);
  console.log(arrSelectionStr);
  // console.log(arrEtalon);
  // console.log(arrSelection);
  console.log(arrEtalonStr === arrSelectionStr);
  return arrEtalonStr === arrSelectionStr
}

class Game extends Component {
  state = {
    count: 0,
    figureSelection: [
      {id: '0', backgroundColor: 'transparent', borderRadius: '0', border: '1px solid #673ab7', clicked: false},
      {id: '1', backgroundColor: 'transparent', borderRadius: '0', border: '1px solid #673ab7', clicked: false},
      {id: '2', backgroundColor: 'transparent', borderRadius: '0', border: '1px solid #673ab7', clicked: false},
    ],
    // figureEtalon: [
    //   {backgroundColor: 'transparent', borderRadius: randomArrayValue(figuresBorderRadius), border: '1px solid #673ab7'},
    //   {backgroundColor: 'transparent', borderRadius: randomArrayValue(figuresBorderRadius), border: '1px solid #673ab7'},
    //   {backgroundColor: 'transparent', borderRadius: randomArrayValue(figuresBorderRadius), border: '1px solid #673ab7'},
    // ],

  }


  

// componentWillReceiveProps(nextProps) {
//   console.log("componentWillReceiveProps()");
// }
// componentWillMount(){
//     console.log("componentWillMount()");
// }
// componentDidMount(){
//     console.log("componentDidMount()");
// }
// componentWillUnmount(){
//     console.log("componentWillUnmount()");
// }
// shouldComponentUpdate(){
//     console.log("shouldComponentUpdate()");
//     return true;
// }
// componentWillUpdate(){
//     console.log("componentWillUpdate()");
// }
componentDidUpdate(){
    console.log("componentDidUpdate()");
    // console.log(this.state);
    // console.log(this.state.figureSelection);
    // console.log(figureEtalon);

    // const allFiguresIsBuilded = this.state.figureSelection.map(elem => elem.clicked).every(elem => elem === true);
    // console.log('figureSelection is clicked :');
    // console.log(allFiguresIsBuilded);

    // if (allFiguresIsBuilded)  {
    // console.log(`BEGIN :------------------------>>>`);
    
    // //TODO : GAME_POINTS_FROM_THE_CONDITION_1
    // //       равное количество одинаковых фигур 1-го и 2-го ряда
    // // equalCountsOfIdenticalFiguresOfThe1stAnd2ndRow

    //   // if (equalCountsOfIdenticalFiguresOfThe1stAnd2ndRow(figureEtalon, this.state.figureSelection)) {
    //   //   console.log('yes!!!   +1');

    //   //   this.setState(prevState => ({
    //   //     count: prevState.count + GAME_POINTS_FROM_THE_CONDITION_1
    //   //   }));
    //   // }

    // }
}



  figureSelectionHandleClick = (e) => {
    const id = e.target.id;
    const { figureSelection } = this.state;

    // console.log(e.target);
    // console.log(id);
    console.log(figureSelection[id]);
    // console.log(figureSelection[id].cliked);

    if (!figureSelection[id].clicked) {

      const newFigure = {
        id, 
        backgroundColor: randomArrayValue(figuresColor()), 
        borderRadius: randomArrayValue(figuresBorderRadius()), 
        border: 'none', 
        clicked: true
      };

      // console.log('***********figureSelection*******************');
      // console.log(figureSelection);
      // console.log('***********figureSelection*******************');
      // console.log(figureSelection.slice(0, id));
      // console.log(newFigure);
      // console.log(figureSelection.slice(id+1));
    
      let newFigureSelection = [...figureSelection];
      newFigureSelection[id] = newFigure;
    
      console.log('****************************  newFigureSelection');
      console.log(newFigureSelection);

      this.setState({
        figureSelection: newFigureSelection
      });


      const allFiguresIsBuilded = newFigureSelection.map(elem => elem.clicked).every(elem => elem === true);
      console.log('figureSelection is clicked :');
      console.log(allFiguresIsBuilded);

      //если все фигуры уже построены, начинаем начислять очки...
      if (allFiguresIsBuilded)  {
        console.log(`BEGIN :------------------------>>>`);
    
      //TODO : GAME_POINTS_FROM_THE_CONDITION_1 = равное количество одинаковых фигур 1-го и 2-го ряда
      //       equalCountsOfIdenticalFiguresOfThe1stAnd2ndRow
      //       +1 очко
      if (equalCountsOfIdenticalFiguresOfThe1stAnd2ndRow(figureEtalon, newFigureSelection)) {
        console.log('equalCountsOfIdenticalFiguresOfThe1stAnd2ndRow --> +1');
        this.setState(prevState => ({
          count: prevState.count + GAME_POINTS_FROM_THE_CONDITION_1
        }));
      }

    }

      

      // console.log('****************************this.state');
      // console.log(this.state);
      }

    console.log('****************************this.state');
    console.log(this.state);

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
              const id = elem.id;
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
              const id = elem.id;
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

TODO : где делать проверки? в componentDidMount? update?

TODO : элементы figureSelection не должны перегенерироваться при повторном клике
т.е. если поле cliked = true

//------------------------------------------

const a = [
  {id: '0', br: '0'},
  {id: '1', br: '50%'},
  {id: '2', br: '0'},
];

const b = [
  {id: '0', br: '0'},
  {id: '1', br: '0'},
  {id: '2', br: '50%'},
];

const astr = a.map(elem => elem.br).sort().join('');
const bstr = b.map(elem => elem.br).sort().join('');
console.log(astr);
console.log(bstr);
console.log(astr === bstr);


//--------------------------------------------

    // let newFigureSelection = [
    //   ...figureSelection.slice(0, id), 
    //   newFigure, 
    //   ...figureSelection.slice(id+1)
    // ];

 */


