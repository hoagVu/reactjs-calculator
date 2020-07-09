import React, { useState } from 'react';
import './App.css';
import Person from './components/Person/Person.js';
const App = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Hoang', age: '29' },
      { name: 'Vu', age: '25' },
      { name: 'Viet', age: '24' },
    ],
    otherState: 'some other value',
  });
  const switchNameHandler = (newName) => {
    // console.log('switchName Success!');
    //Do not mutate state directly. Use setState()
    // DO NOT DO THIS:  this.state.persons[0].name = 'Quynh';
    setPersonState({
      persons: [
        { name: newName, age: '29' },
        { name: 'Vu', age: '25' },
        { name: 'Viet', age: '25' },
      ],
    });
  };
  return (
    <div className="App">
      <h1> Hello World!</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler.bind(this, 'Hoang Vu')}>
        Switch Name
      </button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      ></Person>
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
        click={switchNameHandler.bind(this, 'Hoang Viet')}
      >
        My Hobbies: Coding
      </Person>
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
      ></Person>
    </div>
  );
};

export default App;
// state = {
//   persons: [
//     { name: 'Hoang', age: '29' },
//     { name: 'Vu', age: '25' },
//     { name: 'Viet', age: '24' },
//   ],
// };
// switchNameHandler = () => {
//   // console.log('switchName Success!');
//   //Do not mutate state directly. Use setState()
//   // DO NOT DO THIS:  this.state.persons[0].name = 'Quynh';
//   this.setState({
//     persons: [
//       { name: 'Hoang', age: '29' },
//       { name: 'Vu', age: '25' },
//       { name: 'Viet', age: '25' },
//     ],
//   });
// };
