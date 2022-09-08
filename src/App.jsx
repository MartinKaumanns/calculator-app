import React, { useState } from 'react';
import './App.scss';
import Button from './components/Button';
import ColorToggleButton from './components/ColorToggleButton';
import Keyboard from './components/Keyboard';
import Result from './components/Result';

const btnValues = [
  [7, 8, 9, 'DEL'],
  [4, 5, 6, '+'],
  [1, 2, 3, '-'],
  ['.', 0, '/', 'x'],
  ['Reset', '=']
];

const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ');

const removeSpaces = (num) => num.toString().replace(/\s/g, '');

const App = () => {
  const [calculation, setCalculation] = useState({
    sign: '',
    num: 0,
    res: 0
  });

  const numClickHandler = (event) => {
    event.preventDefault();
    const value = event.target.innerHTML;

    if (removeSpaces(calculation.num).length < 16) {
      setCalculation({
        ...calculation,
        num:
          calculation.num === 0 && value === '0'
            ? '0'
            : removeSpaces(calculation.num) % 1 === 0
            ? toLocaleString(Number(calculation.num + value))
            : toLocaleString(calculation.num + value),
        res: !calculation.sign ? 0 : calculation.res
      });

      console.log(calculation);
    }
  };

  const commaClickHandler = (event) => {
    event.preventDefault();
    const value = event.target.innerHTML;
    setCalculation({
      ...calculation,
      num: !calculation.num.toString().includes('.')
        ? calculation.num + value
        : calculation.num
    });
  };

  const signClickHandler = (event) => {
    event.preventDefault();
    const value = event.target.innerHTML;

    setCalculation({
      ...calculation,
      sign: value,
      res:
        !calculation.res && calculation.num ? calculation.num : calculation.res,
      num: 0
    });
  };

  const equalsClickHandler = () => {
    if (calculation.sign && calculation.number) {
      let math = (a, b, sign) =>
        sign === '+'
          ? a + b
          : sign === '-'
          ? a - b
          : sign === 'x'
          ? a * b
          : a / b;

      setCalculation({
        ...calculation,
        res:
          calculation.num === '0' && calculation.sign === '/'
            ? "Can't divide with 0!"
            : toLocaleString(
                math(
                  Number(calculation.res),
                  Number(calculation.num),
                  calculation.sign
                )
              ),
        sign: '',
        num: 0
      });
    }
    console.log(calculation);
  };

  const resetClickHandler = () => {
    setCalculation({
      ...calculation,
      sign: '',
      num: 0,
      res: 0
    });
  };

  /*   const deleteClickHandler = () => {
    setCalculation({
      ...calculation,

      num: 0
    });
  }; */

  return (
    <div className="App main">
      <div className="logo">
        <h1>calc</h1>
        <div className="toggle">
          <h2>THEME</h2>
          <ColorToggleButton />
        </div>
      </div>
      <Result value={calculation.num ? calculation.num : calculation.res} />
      <Keyboard>
        {btnValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={
                btn === 'Reset'
                  ? 'reset'
                  : btn === '='
                  ? 'equals'
                  : btn === 'DEL'
                  ? 'reset'
                  : ''
              }
              value={btn}
              onClick={
                /*  btn === 'DEL'
                  ? deleteClickHandler
                  :  */
                btn === '='
                  ? equalsClickHandler
                  : btn === '/' || btn === '+' || btn === '-' || btn === 'x'
                  ? signClickHandler
                  : btn === '.'
                  ? commaClickHandler
                  : btn === 'Reset'
                  ? resetClickHandler
                  : numClickHandler
              }
            />
          );
        })}
      </Keyboard>
    </div>
  );
};

export default App;
