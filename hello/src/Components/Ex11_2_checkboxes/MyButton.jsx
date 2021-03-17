import "./MyButton.css";
import React, { Component } from "react";

class MyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.bkColor = props.bkColor;
  }
  onChangeColor() {
    this.props.onChangeColor(this.props.bkColor);
  }
  render() {
    return (
      <button
        className="btn btn-primary"
        style={{ backgroundColor: this.props.bkColor }}
        changeColor={this.onChangeColor}
      >
        Click
      </button>
    );
  }
}

export default MyButton;
