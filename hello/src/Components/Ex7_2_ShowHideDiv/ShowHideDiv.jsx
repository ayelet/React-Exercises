import React, { Component } from "react";
import "./ShowHideDiv.css";

class ShowHideDiv extends Component {
  constructor(props) {
    super(props);
    this.state = { showDiv: true };
  }
  displayDiv = () => {
    this.setState({ showDiv: !this.state.showDiv });
  };
  render() {
    return (
      <div className="show-hide-container">
        <button className="showHideBtn" onClick={this.displayDiv}>
          Show/Hide
        </button>
        {this.state.showDiv ? <div className="show-me"></div> : null}
      </div>
    );
  }
}

export default ShowHideDiv;
