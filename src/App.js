import React from 'react';
import './App.css';
import Person from './components/Person/Person.js';
function App() {
  return (
    <div className="App">
      <h1> Hello World!</h1>
      <p>This is really working!</p>
      <Person name="Hoang" age="28"></Person>
      <Person name="Vu" age="29">
        My Hobbies: Coding
      </Person>
      <Person name="Viet" age="20"></Person>
    </div>
  );
}

export default App;
