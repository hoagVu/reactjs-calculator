import React, { Component } from 'react';
import './App.css';
import Person from './components/Person/Person.js';
class App extends Component {
  state = {
    persons: [
      { name: 'Hoang', age: '29' },
      { name: 'Vu', age: '25' },
      { name: 'Viet', age: '24' },
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
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  };
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Hoang', age: '29' },
        { name: event.target.value, age: '25' },
        { name: 'Viet', age: '24' },
      ],
    });
  };
  render() {
    let person = null;
    if (this.state.showPersons) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={this.deletePersonHandler}
              ></Person>
            );
          })}
        </div>
        // <div>
        //   <Person
        //     name={this.state.persons[0].name}
        //     age={this.state.persons[0].age}
        //   ></Person>
        //   <Person
        //     name={this.state.persons[1].name}
        //     age={this.state.persons[1].age}
        //     click={this.switchNameHandler.bind(this, 'Hoang Viet')}
        //     change={this.nameChangedHandler}
        //   >
        //     My Hobbies: Coding
        //   </Person>
        //   <Person
        //     name={this.state.persons[2].name}
        //     age={this.state.persons[2].age}
        //   ></Person>
        // </div>
      );
    }
    return (
      <div className="App">
        <h1> Hello World!</h1>
        <p>This is really working!</p>
        <button onClick={this.togglePersonHandler}>Switch Name</button>
        {person}
      </div>
    );
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
