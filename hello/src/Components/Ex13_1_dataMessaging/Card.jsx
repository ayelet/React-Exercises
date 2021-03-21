import React, { Component } from "react";
import "./card.css";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderCards = () => {
    return (
      <React.Fragment>
        <h1>Hi, I'm {this.props.data.name}</h1>
        <h2>Born at {this.props.data.birthday}</h2>
        <ul className="meats">
          <h5>My favorite meats are:</h5>
          {this.props.data.favoriteFoods.meats.map((meat, i) => (
            <li key={`meat-${i}`}>{meat}</li>
          ))}
        </ul>
        <ul className="fish">
          <h5>My favorite fish are:</h5>
          {this.props.data.favoriteFoods.fish.map((fish, i) => (
            <li key={`fish-${i}`}>{fish}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  };

  render() {
    return <div className="card">{this.renderCards()}</div>;
  }
}

export default Card;
