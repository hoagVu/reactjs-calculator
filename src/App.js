import React, { Component } from 'react';
import './App.css';
import Person from './components/Person/Person.js';
class App extends Component {
  state = {
    persons: [
      { id: 'sadasd', name: 'Hoang', age: '29' },
      { id: 'asdaw', name: 'Vu', age: '25' },
      { id: 'asawds', name: 'Viet', age: '24' },
    ],
    otherState: 'some other value',
    showPersons: false,
  };
  switchNameHandler = (newName) => {
    // console.log('switchName Success!');
    //Do not mutate state directly. Use setState()
    // DO NOT DO THIS:  this.state.persons[0].name = 'Quynh';
    this.setState({
      persons: [
        { name: newName, age: '29' },
        { name: 'Vu', age: '25' },
        { name: 'Viet', age: '25' },
      ],
    });
  };
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  };
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(
      (person) => person.id === id
    );
    //copy object person with spread operator
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons,
    });
  };
  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

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
