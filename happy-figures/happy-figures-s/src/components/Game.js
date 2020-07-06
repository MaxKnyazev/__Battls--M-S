import React, {Component} from 'react';
import './Game.css';
import {randomArrayValue, log} from './utils';

const figuresBorderRadius = () => ['0', '50%'];
const figuresColor = () => ['#E91E63', '#FFEB3B', '#FF5722'];
// const figureEtalon = [
//   {id: '0', backgroundColor: randomArrayValue(figuresColor()), borderRadius: randomArrayValue(figuresBorderRadius()), border: 'none'},
//   {id: '1', backgroundColor: randomArrayValue(figuresColor()), borderRadius: randomArrayValue(figuresBorderRadius()), border: 'none'},
//   {id: '2', backgroundColor: randomArrayValue(figuresColor()), borderRadius: randomArrayValue(figuresBorderRadius()), border: 'none'},
// ];

//************* ТЕСТОВЫЙ МАССИВ */
const figureEtalon = [
  {id: '0', backgroundColor: '#FFEB3B', borderRadius: '0', border: 'none'},
  {id: '1', backgroundColor: '#E91E63', borderRadius: '50%', border: 'none'},
  {id: '2', backgroundColor: '#FF5722', borderRadius: '0', border: 'none'},
];

const EQUAL_COUNTS_OF_IDENTICAL_FIGURES_POINTS = 1;
const EQUAL_COUNTS_OF_IDENTICAL_COLORS_POINTS = 2;
const EQUAL_COUNTS_OF_IDENTICAL_FIGURES_ALL_ELEMENTS_POINTS = 3;
const EQUAL_COUNTS_OF_IDENTICAL_COLORS_ALL_ELEMENTS_POINTS = 4;
const EQUAL_COUNTS_OF_IDENTICAL_FIGURES_AND_COLORS_POINTS = 5;
const EQUAL_COUNTS_OF_IDENTICAL_FIGURES_AND_COLORS_ALL_ELEMENTS_POINTS = 10;

//sort() --> every position of element is important = importantPosition

const equalCountsOfIdenticalFigures = (arrEtalon, arrSelection) => {
  const etalonResult = arrEtalon.map(elem => elem.borderRadius).sort().join('');
  const selectionResult = arrSelection.map(elem => elem.borderRadius).sort().join('');

  log(etalonResult, selectionResult, etalonResult === selectionResult);
  // log(arrEtalon, arrSelection);
  return etalonResult === selectionResult
}

const equalCountsOfIdenticalColors = (arrEtalon, arrSelection) => {
  const etalonResult = arrEtalon.map(elem => elem.backgroundColor).sort().join('');
  const selectionResult = arrSelection.map(elem => elem.backgroundColor).sort().join('');

  log(etalonResult, selectionResult, etalonResult === selectionResult);
  // log(arrEtalon, arrSelection);
  return etalonResult === selectionResult
<<<<<<< HEAD
}

const equalCountsOfIdenticalFiguresAllElem = (arrEtalon, arrSelection) => {
  const etalonResult = arrEtalon.map(elem => elem.borderRadius).join('');
  const selectionResult = arrSelection.map(elem => elem.borderRadius).join('');

  log(etalonResult, selectionResult, etalonResult === selectionResult);
  // log(arrEtalon, arrSelection);
  return etalonResult === selectionResult
}

const equalCountsOfIdenticalColorsAllElem = (arrEtalon, arrSelection) => {
  const etalonResult = arrEtalon.map(elem => elem.backgroundColor).join('');
  const selectionResult = arrSelection.map(elem => elem.backgroundColor).join('');

  log(etalonResult, selectionResult, etalonResult === selectionResult);
  // log(arrEtalon, arrSelection);
  return etalonResult === selectionResult
}

=======
}

const equalCountsOfIdenticalFiguresAllElem = (arrEtalon, arrSelection) => {
  const etalonResult = arrEtalon.map(elem => elem.borderRadius).join('');
  const selectionResult = arrSelection.map(elem => elem.borderRadius).join('');

  log(etalonResult, selectionResult, etalonResult === selectionResult);
  // log(arrEtalon, arrSelection);
  return etalonResult === selectionResult
}

const equalCountsOfIdenticalColorsAllElem = (arrEtalon, arrSelection) => {
  const etalonResult = arrEtalon.map(elem => elem.backgroundColor).join('');
  const selectionResult = arrSelection.map(elem => elem.backgroundColor).join('');

  log(etalonResult, selectionResult, etalonResult === selectionResult);
  // log(arrEtalon, arrSelection);
  return etalonResult === selectionResult
}

>>>>>>> master
const equalCountsOfIdenticalFiguresAndColors = (arrEtalon, arrSelection) => {
  const etalonResult = arrEtalon.map(elem => elem.borderRadius + elem.backgroundColor).sort().join('');
  const selectionResult = arrSelection.map(elem => elem.borderRadius + elem.backgroundColor).sort().join('');

  log(etalonResult, selectionResult, etalonResult === selectionResult);
  // log(arrEtalon, arrSelection);
  return etalonResult === selectionResult
}

const equalCountsOfIdenticalFiguresAndColorsAllElem = (arrEtalon, arrSelection) => {
  const etalonResult = arrEtalon.map(elem => elem.borderRadius + elem.backgroundColor).join('');
  const selectionResult = arrSelection.map(elem => elem.borderRadius + elem.backgroundColor).join('');

  log(etalonResult, selectionResult, etalonResult === selectionResult);
  // log(arrEtalon, arrSelection);
  return etalonResult === selectionResult
}


class Game extends Component {
  state = {
    count: 0,
    // figureSelection: [
    //   {id: '0', backgroundColor: 'transparent', borderRadius: '0', border: '1px solid #673ab7', clicked: false},
    //   {id: '1', backgroundColor: 'transparent', borderRadius: '0', border: '1px solid #673ab7', clicked: false},
    //   {id: '2', backgroundColor: 'transparent', borderRadius: '0', border: '1px solid #673ab7', clicked: false},
    // ],

    //************* ТЕСТОВЫЙ МАССИВ */
    figureSelection: [
      {id: '0', backgroundColor: '#FFEB3B', borderRadius: '0', border: 'none', clicked: true},
      {id: '1', backgroundColor: '#E91E63', borderRadius: '50%', border: 'none', clicked: true},
      {id: '2', backgroundColor: 'transparent', borderRadius: '0', border: '1px solid #673ab7', clicked: false},
    ],

  }


  

// componentWillReceiveProps(nextProps) {
//   console.log("componentWillReceiveProps()");
// }
// componentWillMount(){
//     console.log("componentWillMount()");
// }
componentDidMount(){
    console.log("componentDidMount()");
}
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
    log('******************* figureSelection[id]', figureSelection[id]);
    // console.log(figureSelection[id].cliked);

    if (!figureSelection[id].clicked) {

      // const newFigure = {
      //   id, 
      //   backgroundColor: randomArrayValue(figuresColor()), 
      //   borderRadius: randomArrayValue(figuresBorderRadius()), 
      //   border: 'none', 
      //   clicked: true
      // };

      //************* ТЕСТОВЫЙ ОБЪЕКТ */
      const newFigure = {
        id, 
        backgroundColor: '#FF5722', 
        borderRadius: '0', 
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
    
      log('****************************  newFigureSelection', newFigureSelection);

      this.setState({
        figureSelection: newFigureSelection
      });


      const allFiguresIsBuilded = newFigureSelection.map(elem => elem.clicked).every(elem => elem === true);
      console.log('figureSelection is clicked :');
      console.log(allFiguresIsBuilded);

      //если все фигуры уже построены, начинаем начислять очки...
      if (allFiguresIsBuilded)  {
        log(`The beginning of the calculations :------------------------>>>`);
    
      // EQUAL_COUNTS_OF_IDENTICAL_FIGURES_POINTS = равное количество одинаковых фигур 1-го и 2-го ряда
      // equalCountsOfIdenticalFigures
      // +1 очко
      if (equalCountsOfIdenticalFigures(figureEtalon, newFigureSelection)) {
        log('equalCountsOfIdenticalFigures : равное количество одинаковых фигур 1-го и 2-го ряда --> +1');
<<<<<<< HEAD
        this.setState(prevState => ({
          count: prevState.count + EQUAL_COUNTS_OF_IDENTICAL_FIGURES_POINTS
        }));
      } else {
        log('----------- НЕравное количество одинаковых фигур 1-го и 2-го ряда')
      }
      // EQUAL_COUNTS_OF_IDENTICAL_COLORS_POINTS = равное количество одинаковых цветов 1-го и 2-го ряда
      // equalCountsOfIdenticalFigures
      // +2 очка
      if (equalCountsOfIdenticalColors(figureEtalon, newFigureSelection)) {
        log('equalCountsOfIdenticalColors : равное количество одинаковых цветов 1-го и 2-го ряда --> +2');
        this.setState(prevState => ({
          count: prevState.count + EQUAL_COUNTS_OF_IDENTICAL_COLORS_POINTS
        }));
      } else {
        log('----------- НЕравное количество одинаковых цветов 1-го и 2-го ряда')
      }
      // EQUAL_COUNTS_OF_IDENTICAL_FIGURES_ALL_ELEMENTS_POINTS = поэлементное совпадение фигур 1-го и 2-го ряда
      // equalCountsOfIdenticalFiguresAllElem
      // +3 очка
      if (equalCountsOfIdenticalFiguresAllElem(figureEtalon, newFigureSelection)) {
        log('equalCountsOfIdenticalFiguresAllElem : поэлементное совпадение фигур 1-го и 2-го ряда --> +3');
        this.setState(prevState => ({
          count: prevState.count + EQUAL_COUNTS_OF_IDENTICAL_FIGURES_ALL_ELEMENTS_POINTS
        }));
      } else {
        log('----------- НЕпоэлементное совпадение фигур 1-го и 2-го ряда')
      }
      // EQUAL_COUNTS_OF_IDENTICAL_COLORS_ALL_ELEMENTS_POINTS = поэлементное совпадение цветов 1-го и 2-го ряда
      // equalCountsOfIdenticalFiguresAllElem
      // +4 очка
      if (equalCountsOfIdenticalColorsAllElem(figureEtalon, newFigureSelection)) {
        log('equalCountsOfIdenticalColorsAllElem : поэлементное совпадение цветов 1-го и 2-го ряда --> +4');
        this.setState(prevState => ({
          count: prevState.count + EQUAL_COUNTS_OF_IDENTICAL_COLORS_ALL_ELEMENTS_POINTS
        }));
      } else {
        log('----------- НЕпоэлементное совпадение цветов 1-го и 2-го ряда')
      }
      // EQUAL_COUNTS_OF_IDENTICAL_FIGURES_AND_COLORS_POINTS = равное количество одинаковых фигур и цветов 1-го и 2-го ряда
      // equalCountsOfIdenticalFiguresAndColors
      // +5 очков
      if (equalCountsOfIdenticalFiguresAndColors(figureEtalon, newFigureSelection)) {
        log('equalCountsOfIdenticalFiguresAndColors : равное количество одинаковых фигур и цветов 1-го и 2-го ряда --> +5');
        this.setState(prevState => ({
          count: prevState.count + EQUAL_COUNTS_OF_IDENTICAL_FIGURES_AND_COLORS_POINTS
        }));
      } else {
        log('----------- НЕравное количество одинаковых фигур и цветов 1-го и 2-го ряда')
      }
      // EQUAL_COUNTS_OF_IDENTICAL_FIGURES_AND_COLORS_ALL_ELEMENTS_POINTS = поэлементное совпадение фигур и цветов 1-го и 2-го ряда
      // equalCountsOfIdenticalFiguresAndColorsAllElem
      // +10 очков
      if (equalCountsOfIdenticalFiguresAndColorsAllElem(figureEtalon, newFigureSelection)) {
        log('equalCountsOfIdenticalFiguresAndColorsAllElem : поэлементное совпадение фигур и цветов 1-го и 2-го ряда --> +10');
        this.setState(prevState => ({
          count: prevState.count + EQUAL_COUNTS_OF_IDENTICAL_FIGURES_AND_COLORS_ALL_ELEMENTS_POINTS
        }));
      } else {
=======
        this.setState(prevState => ({
          count: prevState.count + EQUAL_COUNTS_OF_IDENTICAL_FIGURES_POINTS
        }));
      } else {
        log('----------- НЕравное количество одинаковых фигур 1-го и 2-го ряда')
      }
      // EQUAL_COUNTS_OF_IDENTICAL_COLORS_POINTS = равное количество одинаковых цветов 1-го и 2-го ряда
      // equalCountsOfIdenticalFigures
      // +2 очка
      if (equalCountsOfIdenticalColors(figureEtalon, newFigureSelection)) {
        log('equalCountsOfIdenticalColors : равное количество одинаковых цветов 1-го и 2-го ряда --> +2');
        this.setState(prevState => ({
          count: prevState.count + EQUAL_COUNTS_OF_IDENTICAL_COLORS_POINTS
        }));
      } else {
        log('----------- НЕравное количество одинаковых цветов 1-го и 2-го ряда')
      }
      // EQUAL_COUNTS_OF_IDENTICAL_FIGURES_ALL_ELEMENTS_POINTS = поэлементное совпадение фигур 1-го и 2-го ряда
      // equalCountsOfIdenticalFiguresAllElem
      // +3 очка
      if (equalCountsOfIdenticalFiguresAllElem(figureEtalon, newFigureSelection)) {
        log('equalCountsOfIdenticalFiguresAllElem : поэлементное совпадение фигур 1-го и 2-го ряда --> +3');
        this.setState(prevState => ({
          count: prevState.count + EQUAL_COUNTS_OF_IDENTICAL_FIGURES_ALL_ELEMENTS_POINTS
        }));
      } else {
        log('----------- НЕпоэлементное совпадение фигур 1-го и 2-го ряда')
      }
      // EQUAL_COUNTS_OF_IDENTICAL_COLORS_ALL_ELEMENTS_POINTS = поэлементное совпадение цветов 1-го и 2-го ряда
      // equalCountsOfIdenticalFiguresAllElem
      // +4 очка
      if (equalCountsOfIdenticalColorsAllElem(figureEtalon, newFigureSelection)) {
        log('equalCountsOfIdenticalColorsAllElem : поэлементное совпадение цветов 1-го и 2-го ряда --> +4');
        this.setState(prevState => ({
          count: prevState.count + EQUAL_COUNTS_OF_IDENTICAL_COLORS_ALL_ELEMENTS_POINTS
        }));
      } else {
        log('----------- НЕпоэлементное совпадение цветов 1-го и 2-го ряда')
      }
      // EQUAL_COUNTS_OF_IDENTICAL_FIGURES_AND_COLORS_POINTS = равное количество одинаковых фигур и цветов 1-го и 2-го ряда
      // equalCountsOfIdenticalFiguresAndColors
      // +5 очков
      if (equalCountsOfIdenticalFiguresAndColors(figureEtalon, newFigureSelection)) {
        log('equalCountsOfIdenticalFiguresAndColors : равное количество одинаковых фигур и цветов 1-го и 2-го ряда --> +5');
        this.setState(prevState => ({
          count: prevState.count + EQUAL_COUNTS_OF_IDENTICAL_FIGURES_AND_COLORS_POINTS
        }));
      } else {
        log('----------- НЕравное количество одинаковых фигур и цветов 1-го и 2-го ряда')
      }
      // EQUAL_COUNTS_OF_IDENTICAL_FIGURES_AND_COLORS_ALL_ELEMENTS_POINTS = поэлементное совпадение фигур и цветов 1-го и 2-го ряда
      // equalCountsOfIdenticalFiguresAndColorsAllElem
      // +10 очков
      if (equalCountsOfIdenticalFiguresAndColorsAllElem(figureEtalon, newFigureSelection)) {
        log('equalCountsOfIdenticalFiguresAndColorsAllElem : поэлементное совпадение фигур и цветов 1-го и 2-го ряда --> +10');
        this.setState(prevState => ({
          count: prevState.count + EQUAL_COUNTS_OF_IDENTICAL_FIGURES_AND_COLORS_ALL_ELEMENTS_POINTS
        }));
      } else {
>>>>>>> master
        log('----------- НЕпоэлементное совпадение фигур и цветов 1-го и 2-го ряда')
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

        <section className="Points">
          <span className="Points__count">+1</span>
          <span className="Points__count">+2</span>
          <span className="Points__count">+3</span>
          <span className="Points__count">+4</span>
          <span className="Points__count">+5</span>
          <span className="Points__count">+10</span>
        </section>

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
+ TODO : сделать генерацию фигур при кликах

+ TODO : отследить момент, когда все фигуры будут сгенерированы и надо начинать проверку

+ TODO : где делать проверки? в componentDidMount? update?

+ TODO : элементы figureSelection не должны перегенерироваться при повторном клике
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



//--------------------------------------------

1.	+ Равное количество одинаковых фигур 1го и 2го ряда =          +1 очко
2.	+ Равное количество одинаковых цветов 1го и 2го ряда =         +2 очка
3.	+ Совпали фигуры 1го и 2го ряда поэлементно =                  +3 очка
4.	+ Совпали цвета 1го и 2го ряда фигур поэлементно =             +4 очка
5.	+ Равное количество одинаковых фигур и цветов 1го и 2го ряда = +5 очков
6.	Совпали фигуры и цвета 1го и 2го ряда поэлементно =         +10 очков


 */


