import React from 'react';
import './Button.scss';

const Button = ({ className, value, onClick }) => {
  return (
    <button className={`${className} item`} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
