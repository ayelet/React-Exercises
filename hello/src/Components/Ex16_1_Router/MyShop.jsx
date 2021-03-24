import "./style.css";
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import data from "./store";
import Header from "./Header";
import Home from "./Home";
import Products from "./Products";
import ProductDetail from "./ProductDetail";

class MyShop extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  state = { storeData: [] };

  componentDidMount() {
    this.setState({ storeData: data });
    console.log(this.state.storeData);
  }

  // Home() {
  //   return <h2>Home</h2>;
  // }

  // Products() {
  //   return <h2>Our Products</h2>;
  // }

  // Headers() {
  //   return <h2>Headers</h2>;
  // }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/Products" exact component={Products} />
          <Route path="/Products/:id" component={ProductDetail} />
        </BrowserRouter>
      </div>
    );
  }
}

export default MyShop;
