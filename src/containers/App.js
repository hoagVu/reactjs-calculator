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
  addZero = (val) => {
    if (this.state.input !== '') {
      // add 0 when this,state,input is't empty
      const addedNumber = this.state.input + val;
      this.setState({ input: addedNumber });
    }
  };
  addDecimal = (val) => {
    const inputString = this.state.input;
    if (inputString !== '' && inputString.indexOf('.') === -1) {
      const addedNumber = this.state.input + val;
      this.setState({ input: addedNumber });
    }
  };
  clearInput = () => {
    this.setState({ input: '' });
  };
  render() {
    return (
      <div className="App">
        <div className="calc-main">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Button clicked={this.clearInput}>AC</Button>
            <Button>-Var</Button>
            <Button>%</Button>
            <Button>/</Button>
          </div>
          <div className="row">
            <Button clicked={this.addNumberToInput}>7</Button>
            <Button clicked={this.addNumberToInput}>8</Button>
            <Button clicked={this.addNumberToInput}>9</Button>
            <Button>*</Button>
          </div>
          <div className="row">
            <Button clicked={this.addNumberToInput}>4</Button>
            <Button clicked={this.addNumberToInput}>5</Button>
            <Button clicked={this.addNumberToInput}>6</Button>
            <Button>-</Button>
          </div>
          <div className="row">
            <Button clicked={this.addNumberToInput}>1</Button>
            <Button clicked={this.addNumberToInput}>2</Button>
            <Button clicked={this.addNumberToInput}>3</Button>
            <Button>+</Button>
          </div>
          <div className="row">
            <Button></Button>
            <Button clicked={this.addZero}>0</Button>
            <Button clicked={this.addDecimal}>.</Button>
            <Button>=</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
