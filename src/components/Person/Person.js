import React from 'react';
const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>
        Name: {props.name} and age: {props.age}
      </p>
      <p>{props.children}</p>
    </div>
  );
};
export default person;
