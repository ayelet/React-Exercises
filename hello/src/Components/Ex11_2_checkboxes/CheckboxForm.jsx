import React, { Component } from "react";
class CheckboxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
    this.colors = ["red", "green", "blue"];
  }

  onChangeColor(e) {
    console.log(e.target);
  }

  render() {
    return (
      <div className="btn-container">
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
      </div>
    );
  }
}

export default CheckboxForm;
