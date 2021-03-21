import "./CheckboxForm.css";
import React, { Component } from "react";
import ApprovalData from "./ApprovalData";

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submit: false,
      approve: false,
      showReview: false,
      fname: "",
      lname: "",
      age: -1,
      freeText: "",
    };
  }

  onFormSubmit = (e) => {
    "Submit button clicked";
    if (!this.state.approve) {
      e.preventDefault();
      this.setState({ fname: e.target[0].value });
      this.setState({ lname: e.target[1].value });
      this.setState({ age: e.target[2].value });
      this.setState({ freeText: e.target[3].value });
      this.setState({ showReview: true });
    } else {
      console.log("form submitted!");
      this.setState({ showReview: false });
      this.clearForm();
    }
  };

  clearForm = () => {
    this.setState({ fname: "" });
    this.setState({ lname: "" });
    this.setState({ age: -1 });
    this.setState({ freeText: "" });
  };

  onButtonBack = () => {
    //reset al form fields
    console.log("button back");
    this.setState({ showReview: false });
  };

  onButtonApprove = () => {
    console.log("button approve");
    this.setState({ approve: true });
  };

  render() {
    return (
      <React.Fragment>
        <form className="checkboxform" onSubmit={this.onFormSubmit}>
          <label htmlFor="fname">First Name</label>
          <input id="fname" type="text" />
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" />
          <label htmlFor="age">Age: </label>
          <input type="number" />
          <label htmlFor="free-text">Free Text:</label>
          <textarea
            name="free-text"
            id="free-text"
            cols="30"
            rows="10"
          ></textarea>
          <input type="submit" value="continue" />
        </form>

        {this.state.showReview && (
          <ApprovalData
            fname={this.state.fname}
            lname={this.state.lname}
            age={this.state.age}
            freeText={this.state.freeText}
            approve={this.onButtonApprove}
            back={this.onButtonBack}
          />
        )}
      </React.Fragment>
    );
  }
}

export default MyForm;
