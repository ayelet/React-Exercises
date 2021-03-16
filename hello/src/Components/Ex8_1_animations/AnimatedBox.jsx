import React, { Component } from "react";
import "./AnimatedBox.css";

class AnimatedBox extends Component {
  constructor(props) {
    super(props);
    this.state = { showDiv: false };
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ showDiv: true });
    }, 1000);
    setTimeout(() => {
      this.setState({ showDiv: false });
    }, 4000);
  };

  render() {
    return (
      <div>
        {this.state.showDiv ? (
          <div
            className="animated"
            style={{
              width: this.props.width,
              height: this.props.height,
              backgroundColor: this.props.color,
            }}
          ></div>
        ) : null}
      </div>
    );
  }
}

export default AnimatedBox;
