import React, { Component } from 'react';
import './App.css';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      previousNumber: '',
      currentNumber: '',
      operator: '',
    };
  }
  addNumberToInput = (val) => {
    const addedNumber = this.state.input + val;
    this.setState({ input: addedNumber });
  };
  render() {
    return (
      <div className="App">
        <div className="calc-main">
          <div className="row">
            <Input></Input>
          </div>
          <div className="row">
            <Button>AC</Button>
            <Button>#</Button>
            <Button className="operator">%</Button>
            <Button className="operator">/</Button>
          </div>
          <div className="row">
            <Button click=={this.addNumberToInput}>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button className="operator">*</Button>
          </div>
          <div className="row">
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button className="operator">-</Button>
          </div>
          <div className="row">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button className="operator">+</Button>
          </div>
          <div className="row">
            <Button></Button>
            <Button>0</Button>
            <Button>.</Button>
            <Button className="operator">=</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
