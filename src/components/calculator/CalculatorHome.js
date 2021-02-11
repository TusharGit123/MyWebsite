import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Button } from "./SmallComponents/Button";
import { ClearButton } from "./SmallComponents/ClearButton";
import { Input } from "./SmallComponents/Input";
import * as math from "mathjs";
import { Navbar } from "../navbar/Navbar";

export class CalculatorHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  addToInput = (val) => {
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    this.setState({ input: math.evaluate(this.state.input) });
  };

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Calculator Home</title>
        </Helmet>
        <Navbar />
        <div className="main-calculator">
          <div className="calc-wrapper">
            <Input input={this.state.input} />
            <div className="row">
              <Button handleClick={this.addToInput}>7</Button>
              <Button handleClick={this.addToInput}>8</Button>
              <Button handleClick={this.addToInput}>9</Button>
              <Button handleClick={this.addToInput}>/</Button>
            </div>
            <div className="row">
              <Button handleClick={this.addToInput}>4</Button>
              <Button handleClick={this.addToInput}>5</Button>
              <Button handleClick={this.addToInput}>6</Button>
              <Button handleClick={this.addToInput}>x</Button>
            </div>
            <div className="row">
              <Button handleClick={this.addToInput}>1</Button>
              <Button handleClick={this.addToInput}>2</Button>
              <Button handleClick={this.addToInput}>3</Button>
              <Button handleClick={this.addToInput}>+</Button>
            </div>
            <div className="row">
              <Button handleClick={this.addToInput}>.</Button>
              <Button handleClick={this.addToInput}>0</Button>
              <Button handleClick={() => this.handleEqual()}>=</Button>
              <Button handleClick={this.addToInput}>-</Button>
            </div>
            <div className="row">
              <ClearButton handleClear={() => this.setState({ input: "" })}>
                Clear
              </ClearButton>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CalculatorHome;
