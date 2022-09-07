import React from 'react';
import './Result.scss';

const Result = (props) => {
  return (
    <div className="result">
      <h1>{props.value}</h1>
    </div>
  );
};

export default Result;
