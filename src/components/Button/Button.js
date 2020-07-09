import React from 'react';
import './Button.css';
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operator = ['.', '='];
const isOperator = (val) => {
  return !isNaN(val) || val === '.' || val === '=' || val === null;
};
const Button = (props) => {
  return (
    <div className={`button ${isOperator(props.children) ? null : 'operator'}`}>
      {props.children}
    </div>
  );
};

export default Button;
