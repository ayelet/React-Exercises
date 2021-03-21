import React, { Component } from "react";
import Card from "./Card";
import data from "./data";
import Name from "./Name";

class MyData extends Component {
  constructor(props) {
    super(props);
    this.state = { users: data, name: [], filteredUsers: [] };
  }

  //   getData = () => {
  //     fetch("./data.js", {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //     })
  //       .then(function (response) {
  //         console.log(response);
  //         return response.json();
  //       })
  //       .then(function (myJson) {
  //         console.log(myJson);
  //       });
  //   };
  componentDidMount() {
    console.log(this.state.users);
    const older = this.filterUsers();
    this.setState({ filteredUsers: older });
  }

  filterUsers = () => {
    console.log("filterUsers()");
    let filteredUsers = this.state.users.filter(
      (user) => parseInt(user.birthday.substr(-4)) < 1990
    );
    return filteredUsers;
  };

  render() {
    return (
      <div className="users">
        Hello users!
        {this.state.users.map((user) => (
          <Name key={user.name} name={user.name} />
        ))}
        {this.state.filteredUsers.map((user) => (
          <Card key={user.name} data={user} />
        ))}
      </div>
    );
  }
}

export default MyData;
