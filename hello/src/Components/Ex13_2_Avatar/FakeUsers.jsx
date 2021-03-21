import "./user.css";
import React, { Component } from "react";
import axios from "axios";
import User from "./User";

class FakeUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      filteredUsers: [],
      filterUsers: false,
      filterString: "",
    };
  }

  getUsers = () => {
    const baseUrl = "https://randomuser.me/api/?results=100&inc=name,picture";
    axios.get(baseUrl).then((res) => {
      const users = res.data.results;
      this.setState({ users });
      // console.log("users: ", this.state.users);
    });
    this.setState({ filteredUsers: this.state.users });
    console.log(this.state.filteredUsers);
  };

  componentDidMount() {
    this.getUsers();
  }

  setFilter = (e) => {
    this.setState({ filterUsers: !this.state.filterUsers });
  };

  changeSearchString = (e) => {
    let newStr = e.target.value;
    console.log(e.target.value, newStr);
    this.setState({ filterString: newStr });
    console.log(this.state.filterString);
  };

  renderUsers() {
    return this.state.users.map((user) => <User data={user} />);
  }

  renderFilteredUsers() {
    return this.state.users
      .filter((user) =>
        (user.name.first + user.name.last)
          .toLowerCase()
          .includes(this.state.filterString.toLowerCase())
      )
      .map((user) => <User data={user} />);
  }

  render() {
    return (
      <div className="container">
        <label for="search">Filter</label>
        <input
          name="search"
          type="text"
          onChange={this.changeSearchString}
          placeholder={"filter avatars"}
        ></input>
        <input type="button" onClick={this.setFilter} value={"filter"} />
        <div className="users-container">
          {this.state.filterUsers
            ? this.renderFilteredUsers()
            : this.renderUsers()}
        </div>
      </div>
    );
  }
}

export default FakeUsers;
