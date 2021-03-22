import React, { Component } from "react";

class MyCopy extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  state = {};

  onCopy = () => {
    this.myRef.current.select();
    document.execCommand("copy");
  };

  render() {
    return (
      <div>
        <h1>Tell me more about the birds and the bees</h1>
        <textarea ref={this.myRef} placeholder="your answer here"></textarea>
        <input type="button" value="Copy" onClick={this.onCopy} />
      </div>
    );
  }
}

export default MyCopy;
