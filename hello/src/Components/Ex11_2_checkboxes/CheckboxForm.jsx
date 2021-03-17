import React, { Component } from "react";

class CheckboxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { checkbox: "" };
    this.checkboxList = [
      { isCheck: false, desc: "I have read" },
      { isCheck: false, desc: "I agree" },
      { isCheck: true, desc: "Yes I can" },
      { isCheck: true, desc: "I am" },
    ];
  }

  render() {
    return (
      <div className="btn-container">
        {this.checkboxList.map((element, i) => {
          console.log(element.isCheck, element.desc);
          return (
            <div>
              <input
                id={`checkbox-${i}`}
                type="checkbox"
                defaultChecked={element.isCheck}
                onChange={() => {
                  this.setState({ checkbox: !this.state.checkbox });
                }}
              />
              <label for={`checkbox-${i}`}>{`${element.desc}`}</label>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CheckboxForm;
