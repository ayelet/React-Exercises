import React, { Component } from "react";
import { Link } from "react-router-dom";

import data from "./store";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { productsData: [] };
  }

  componentDidMount() {
    this.setState({ productsData: data });
    // console.log(this.state.productsData);
  }

  render() {
    //   this.state.productsData.map((product) =>());
    return (
      <div>
        <ul>
          {this.state.productsData.map((item) => {
            return (
              <li>
                <Link to={`/products/${item.id}`}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Products;
// const Products = (props) => {

//   return <div>Products</div>;
// };

// export default Products;
