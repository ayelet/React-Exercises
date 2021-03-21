import "./user.css";
import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: `${props.data.name.first} ${props.data.name.last}`,
      image: props.data.picture.large,
    };
  }
  render() {
    return (
      <div className="card">
        <h3>{this.state.name}</h3>
        <img alt={this.state.name} src={this.state.image}></img>
      </div>
    );
  }
}

export default User;
