import React, { Component } from "react";

class NewAuthor extends Component {
  constructor(props) {
    super(props);
    this.state = { error: "", isValidName: false, isValidUrl: false };
  }

  handleChange = (e) => {
    console.log(e.target.type, e.target.value);
    this.setState({ error: "" });
    if (e.target.type === "text")
      if (e.target.value.length >= 5) this.setState({ isValidName: true });
    if (e.target.type === "url") {
      console.log("checking url...");
      let url = e.target.value;
      if (this.checkURL(url)) this.setState({ isValidUrl: true });
    }

    if (!this.state.isValidUrl || !this.state.isValidName) {
      this.setState({ error: "Invalid fields, please try again" });
    }
  };

  onSubmit = (e) => {
    // validate data
    if (!this.state.isValidUrl || !this.state.isValidName) {
      this.setState({ error: "Invalid fields, please try again" });
      e.preventDefault();
    } else {
      this.props.onSubmit();
    }
  };

  checkURL = (url) => {
    console.log(url);
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
    // return true;
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter min. 5 characters"
            onChange={this.handleChange}
          ></input>
          <label htmlFor="avatar">Name</label>
          <input
            nam="avatar"
            type="url"
            defaultValue="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/single-minded-royalty-free-image-997141470-1558379890.jpg"
            onChange={this.handleChange}
          ></input>
          <input
            type="submit"
            value="submit"
            disabled={!this.state.isValidName || !this.state.isValidUrl}
          ></input>
          <input
            type="button"
            onClick={this.props.onCancel}
            value="cancel"
          ></input>
        </form>
        <p>{this.state.error}</p>
      </div>
    );
  }
}

export default NewAuthor;
