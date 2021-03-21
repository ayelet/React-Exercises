import React, { Component } from "react";

class Name extends Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.name };
  }
  render() {
    return <h4 className="name">{this.props.name}</h4>;
  }
}

export default Name;
