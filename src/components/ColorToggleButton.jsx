import React, { useContext, useState } from 'react';
import { ThemeContext } from '../Theme';
import './ColorToggleButton.scss';

const ColorToggleButton = () => {
  const [isActive01, setIsActive01] = useState(true);
  const [isActive02, setIsActive02] = useState(false);

  const toggleButton01 = () => {
    setIsActive01(!isActive01);
    if (!isActive01) {
      setIsActive02(false);
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
    </div>
  );
};

export default ColorToggleButton;
