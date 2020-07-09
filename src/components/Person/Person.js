import React from 'react';
import './Person.css';
const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        Name: {props.name} and age: {props.age}
      </p>
      {/* <p>{props.children}</p> */}
      <input type="text" onChange={props.change} value={props.name}></input>
    </div>
  );
};
export default person;
