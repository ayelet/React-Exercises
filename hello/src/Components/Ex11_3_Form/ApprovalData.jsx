import React, { Component } from "react";

class ApprovalData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onButtonBack = (e) => {
    "approvalData: onbuttonBack";
    return false;
  };
  onButtonApprove = (e) => {
    "approvalData: onbuttonApprove";
    return true;
  };

  render() {
    return (
      <div>
        <p>
          name: {this.props.fname} last name: {this.props.lname} age:{" "}
          {this.props.age}
        </p>
        <p>{this.props.freeText}</p>
        <input type="button" value={"back"} onClick={this.props.back} />
        <input type="button" value={"approve"} onClick={this.props.approve} />
      </div>
    );
  }
}

export default ApprovalData;
