import React, { Component } from "react";

class IncContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <div>
        <button className="inc" onClick={this.incrementCounter}>
          Increment
        </button>
        <div>{this.state.counter}</div>
      </div>
    );
  }
}

export default IncContainer;
