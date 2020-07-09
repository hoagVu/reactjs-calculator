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
  // TODO:Handle Operations
  // addition, subtraction, multiple, division, percent
  negativeNumber = () => {
    if (this.state.input !== '' && parseFloat(this.state.input) > 0) {
      this.setState({
        input: `${parseFloat(this.state.input) * -1}`,
      });
    } else if (this.state.input !== '' && parseFloat(this.state.input) < 0) {
      this.setState({
        input: `${parseFloat(this.state.input) * -1}`,
      });
    }
  };
  percent = () => {
    if (this.state.input !== '') {
      this.setState({ input: `${parseFloat(this.state.input) / 100}` });
    }
  };
  add = () => {
    this.setState({ previousNumber: this.state.input });
    this.setState({ input: '' });
    this.setState({ operator: 'plus' });
  };
  sub = () => {
    this.setState({ previousNumber: this.state.input });
    this.setState({ input: '' });
    this.setState({ operator: 'minus' });
  };
  mul = () => {
    this.setState({ previousNumber: this.state.input });
    this.setState({ input: '' });
    this.setState({ operator: 'multiply' });
  };
  division = () => {
    this.setState({ previousNumber: this.state.input });
    this.setState({ input: '' });
    this.setState({ operator: 'division' });
  };
  displayResult = () => {
    if (this.state.operator === 'plus') {
      const result =
        parseFloat(this.state.previousNumber) + parseFloat(this.state.input);

      this.setState({
        input: result,
      });
    } else if (this.state.operator === 'minus') {
      const result =
        parseFloat(this.state.previousNumber) - parseFloat(this.state.input);
      this.setState({
        input: result,
      });
    } else if (this.state.operator === 'multiply') {
      const result =
        parseFloat(this.state.previousNumber) * parseFloat(this.state.input);
      this.setState({
        input: result,
      });
    } else if (this.state.operator === 'division') {
      const result =
        parseFloat(this.state.previousNumber) / parseFloat(this.state.input);
      this.setState({
        input: result,
      });
    }
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
            <Button clicked={this.negativeNumber}>-Var</Button>
            <Button clicked={this.percent}>%</Button>
            <Button clicked={this.division}>/</Button>
          </div>
          <div className="row">
            <Button clicked={this.addNumberToInput}>7</Button>
            <Button clicked={this.addNumberToInput}>8</Button>
            <Button clicked={this.addNumberToInput}>9</Button>
            <Button clicked={this.mul}>*</Button>
          </div>
          <div className="row">
            <Button clicked={this.addNumberToInput}>4</Button>
            <Button clicked={this.addNumberToInput}>5</Button>
            <Button clicked={this.addNumberToInput}>6</Button>
            <Button clicked={this.sub}>-</Button>
          </div>
          <div className="row">
            <Button clicked={this.addNumberToInput}>1</Button>
            <Button clicked={this.addNumberToInput}>2</Button>
            <Button clicked={this.addNumberToInput}>3</Button>
            <Button clicked={this.add}>+</Button>
          </div>
          <div className="row">
            <Button> </Button>
            <Button clicked={this.addZero}>0</Button>
            <Button clicked={this.addDecimal}>.</Button>
            <Button clicked={this.displayResult}>=</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
