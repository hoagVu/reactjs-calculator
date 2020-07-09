import React from 'react';
import './Button.css';
const isOperator = (val) => {
  return !isNaN(val) || val === '.' || val === '';
};
const Button = (props) => {
  return (
    <div
      className={`button ${isOperator(props.children) ? null : 'operator'}`}
      onClick={() => props.clicked(props.children)}
    >
      {props.children}
    </div>
  );
};

export default Button;
