import "./style.css";
import React, { Component } from "react";
import data from "./store";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { id: props.match.params.id, data: {} };
    console.log(props);
  }

  componentDidMount() {
    this.setState({ data: data[this.state.id - 1] });
    // console.log("pD: data:", this.state.data);
  }

  renderProduct() {
    console.log("render", this.state.id, this.state.data.price);
    return (
      <div className="product-container">
        <h1>{this.state.data.title}</h1>
        <img src={this.state.data.imageUrl} alt={this.state.data.title} />
        <p>Size: {this.state.data.size}</p>
        <p>Price: {this.state.data.price}$</p>
      </div>
    );
  }

  render() {
    return <div>{this.renderProduct()}</div>;
  }
}

export default ProductDetail;
