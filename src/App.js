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
  };
  switchNameHandler = () => {
    // console.log('switchName Success!');
    //Do not mutate state directly. Use setState()
    // DO NOT DO THIS:  this.state.persons[0].name = 'Quynh';
    this.setState({
      persons: [
        { name: 'Hoang', age: '29' },
        { name: 'Vu', age: '25' },
        { name: 'Viet', age: '25' },
      ],
    });
  };
  render() {
    return (
      <div className="App">
        <h1> Hello World!</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        ></Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My Hobbies: Coding
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        ></Person>
      </div>
    );
  }
}

export default App;
