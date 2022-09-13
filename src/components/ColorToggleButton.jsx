import React, { useContext, useState } from 'react';
import { ThemeContext } from '../Theme';
import './ColorToggleButton.scss';

const ColorToggleButton = () => {
  const [isActive01, setIsActive01] = useState(true);
  const [isActive02, setIsActive02] = useState(false);
  const [isActive03, setIsActive03] = useState(false);

  const toggleButton01 = () => {
    setIsActive01(!isActive01);
    if (!isActive01) {
      setIsActive02(false) || setIsActive03(false);
    }
  };
  const toggleButton02 = () => {
    setIsActive02(!isActive02);
    if (!isActive02) {
      setIsActive01(false) || setIsActive03(false);
    }
  };
  const toggleButton03 = () => {
    setIsActive03(!isActive03);
    if (!isActive03) {
      setIsActive02(false) || setIsActive01(false);
    }
  };

  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="tri-state-toggle">
      <button
        onClick={() => {
          toggleTheme();
          toggleButton01();
        }}
        className={`tri-state-toggle-button ${isActive01 ? 'active' : null}`}
        id="toggle-button1"
      ></button>

      <button
        onClick={() => {
          toggleTheme();
          toggleButton02();
        }}
        className={`tri-state-toggle-button  ${isActive02 ? 'active' : null}`}
        id="toggle-button2"
      ></button>

      <button
        onClick={() => {
          toggleTheme();
          toggleButton03();
        }}
        className={`tri-state-toggle-button ${isActive03 ? 'active' : null} `}
        id="toggle-button3"
      ></button>
    </div>
  );
};

export default ColorToggleButton;
