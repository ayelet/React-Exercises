import React, { Component } from "react";
import AnimatedBox from "./AnimatedBox";

class AnimationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <AnimatedBox width="200px" height="100px" color="red" />
        <AnimatedBox width="300px" height="80px" color="violet" />
        <AnimatedBox width="250px" height="120px" color="lightblue" />
      </div>
    );
  }
}

export default AnimationContainer;
