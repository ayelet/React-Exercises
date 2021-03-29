import "./style.css";
import React, { Component } from "react";

class AuthorCard extends Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.data };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="card">
        <h1>{this.state.data.name}</h1>
        <button
          data-key={this.state.data.id}
          className="btn sm-btn"
          onClick={this.props.onUpdate}
        >
          Update
        </button>
        <button
          className="btn sm-btn"
          onClick={this.props.onDelete}
          data-key={this.state.data.id}
        >
          Delete
        </button>
        <img src={this.state.data.avatar} alt={this.state.data.name} />
      </div>
    );
  }
}

export default AuthorCard;
