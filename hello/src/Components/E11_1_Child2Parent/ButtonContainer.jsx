import React, { Component } from "react";
import MyButton from "../E11_1_Child2Parent/MyButton";
class ButtonContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
    this.colors = ["red", "green", "blue"];
  }

  onChangeColor(e) {
    console.log(e.target);
  }

  //   { <MyButton
  //       bkColor={this.colors[0]}
  //       changeColor={this.onChangeColor.bind(this)}
  //     />}
  render() {
    return (
      <div className="btn-container">
        <label
          style={{
            textAlign: "center",
            fontSize: "24px",
            color: this.state.color,
            display: "inline",
          }}
        >
          {this.state.color}
        </label>
        {this.colors.map((color) => {
          return (
            <input
              className="btn"
              type="button"
              style={{ backgroundColor: color }}
              value={color}
              onClick={(e) => this.setState({ color: e.target.value })}
            ></input>
          );
        })}
      </div>
    );
  }
}

export default ButtonContainer;
