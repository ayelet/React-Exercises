import React from "react";

class MyButton extends React.Component {
  render() {
    return (
      <button style={{ fontWeight: this.props.fontWeight }}>
        {this.props.text}
      </button>
    );
  }
}

export default MyButton;
