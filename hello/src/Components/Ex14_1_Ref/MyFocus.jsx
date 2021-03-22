import React, { Component } from "react";

class MyFocus extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  state = {};

  componentDidMount() {
    this.myRef.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" value="Look Ma! No Focus!"></input>
        <input type="text" value="Look Ma! No Focus!"></input>
        <input ref={this.myRef} type="text" value="Where is waldo?"></input>
      </div>
    );
  }
}

export default MyFocus;
