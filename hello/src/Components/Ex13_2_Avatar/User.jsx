import "./user.css";
import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: `${props.data.name.first} ${props.data.name.last}`,
      image: props.data.picture.large,
      id: props.data.login.username,
    };
  }
  render() {
    const { name, image, id } = this.state;
    return (
      <div id={id} className="user">
        <h3>{name}</h3>
        <img alt={name} src={image}></img>
      </div>
    );
  }
}

export default User;
