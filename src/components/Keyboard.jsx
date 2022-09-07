import React, { useState } from 'react';
import './Keyboard.scss';

const Keyboard = ({ children }) => {
  const [calculation, setCalculation] = useState([]);

  const addValueToArray = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="keyboard-wrapper">
      <div className="key-row">
        <button onClick={addValueToArray} value={7} className="item item7">
          7
        </button>
        <button onClick={addValueToArray} value={8} className="item item8">
          8
        </button>
        <button onClick={addValueToArray} value={9} className="item item9">
          9
        </button>
        <button
          onClick={() => console.log('Del')}
          className="item itemDel blue"
        >
          DEL
        </button>
      </div>
      <div className="key-row">
        <button onClick={addValueToArray} value={4} className="item item4">
          4
        </button>
        <button onClick={addValueToArray} value={5} className="item item5">
          5
        </button>
        <button onClick={addValueToArray} value={6} className="item item6">
          6
        </button>
        <button onClick={() => console.log('+')} className="item itemPlus">
          +
        </button>
      </div>
      <div className="key-row">
        <button onClick={addValueToArray} value={1} className="item item1">
          1
        </button>
        <button onClick={addValueToArray} value={2} className="item item2">
          2
        </button>
        <button onClick={addValueToArray} value={3} className="item item3">
          3
        </button>
        <button onClick={() => console.log('-')} className="item itemMinus">
          -
        </button>
      </div>
      <div className="key-row">
        <button onClick={() => console.log('.')} className="item itemDot">
          .
        </button>
        <button onClick={addValueToArray} value={0} className="item item0">
          0
        </button>
        <button onClick={() => console.log('/')} className="item itemSlash">
          /
        </button>
        <button onClick={() => console.log('x')} className="item itemX">
          x
        </button>
      </div>
      <div className="key-last-row">
        <button
          onClick={() => console.log('Reset')}
          className="item itemReset blue"
        >
          RESET
        </button>
        <button
          onClick={() => console.log('=')}
          className="item itemEquals red"
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Keyboard;
