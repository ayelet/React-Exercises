import React from "react";
import "./Card.css";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <h1>{this.props.data.title}</h1>
        <img
          alt={this.props.data.title}
          src={this.props.data.imageUrl}
          width="80%"
        ></img>
        <div className="card-description">{this.props.data.description}</div>
        <a href={this.props.data.links[0]}>Share</a>
        <a href={this.props.data.links[1]}>Explore</a>
      </div>
    );
  }
}

export default Card;
