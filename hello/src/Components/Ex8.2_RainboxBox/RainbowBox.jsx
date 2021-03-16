import React, { Component } from "react";
import "./RainbowBox.css";

class RainboxBox extends Component {
  constructor(props) {
    super(props);
    this.state = { color: null, round: false, numChanges: 0 };
  }
  componentDidMount = () => {
    setInterval(() => {
      this.setState({
        numChanges: this.state.numChanges + 1,
        color: this.getRandomColor(),
        round: this.state.numChanges > 4 ? true : false,
      });
    }, 500);
  };

  componentDidUpdate = () => {};

  getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.round ? (
          <div
            className={"round-rainbow-box"}
            style={{
              backgroundColor: this.state.color,
            }}
          ></div>
        ) : (
          <div
            className={"rainbow-box"}
            style={{
              backgroundColor: this.state.color,
            }}
          ></div>
        )}
      </div>
    );
  }
}

export default RainboxBox;
