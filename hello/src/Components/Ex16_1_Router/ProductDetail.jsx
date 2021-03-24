import React, { Component } from "react";
import data from "./store";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { id: props.match.params.id };
    console.log(props);
  }

  componentDidMount() {
    this.setState({ data: data[this.state.id] });
    // console.log("pD: data:", this.state.data);
  }

  renderProduct() {
    const { id } = this.state.id;
    return (
      <div className="card">
        <h1>{this.state.data.title}</h1>
        <img
          src={this.state.data[id].imageUrl}
          alt={this.state.data[id].title}
        />
        <p>Size: {this.state.data[id].data.size}</p>
        <p>Price: {this.state.data[id].price}$</p>
      </div>
    );
  }
  renderProduct1() {
    console.log("render", this.state.id, this.state.data.);
    return <div>hi there</div>;
  }

  render() {
    return <div>{this.renderProduct1()}</div>;
  }
}

export default ProductDetail;
