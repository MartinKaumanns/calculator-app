import React, { useState } from 'react';
import './App.scss';
import Button from './components/Button';
import ColorToggleButton from './components/ColorToggleButton';
import Keyboard from './components/Keyboard';
import Result from './components/Result';

function App() {
  return (
    <div className="App main">
      <div className="logo">
        <h1>calc</h1>
        <div className="toggle">
          <h2>THEME</h2>
          <ColorToggleButton />
        </div>
      </div>
      <Result value={0} />
      <Keyboard>
        <Button
          className=""
          value="0"
          onClick={() => {
            console.log('Button clicked!');
          }}
        />
      </Keyboard>
    </div>
  );
}

export default App;
