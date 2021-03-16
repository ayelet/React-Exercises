import React, { Component } from "react";

class FavColor extends Component {
  constructor(props) {
    super(props);
    this.state = { favColor: "Blue" };
    this.colorRef = React.createRef();
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favColor: "Red" });
    }, 1000);
  }

  componentDidUpdate() {
    this.colorRef.current.innerHTML = `My favourite color is ${this.state.favColor}`;
  }

  render() {
    return (
      <div>
        <h1>My Favourite Color is {this.state.favColor}</h1>
        <div id={"inner"} ref={this.colorRef}></div>
      </div>
    );
  }
}

export default FavColor;
