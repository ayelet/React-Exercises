import React, { Component } from "react";
import axios from "axios";

class JokeApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      categories: [],
      currentCategory: "",
      joke: "random joke not funny",
    };
  }

  componentDidMount() {
    const categoriesEndpoint = "https://api.chucknorris.io/jokes/categories";
    axios.get(categoriesEndpoint).then((res) => {
      const categories = res.data;
      this.setState({ categories });
    });
    console.log(this.state.categories);
  }

  onChangeCategory = (e) => {
    const category = e.currentTarget.value;
    this.setState({ currentCategory: e.currentTarget.value });
    console.log(category);
    const categoriesEndpoint =
      "https://api.chucknorris.io/jokes/random?category=";
    console.log("retriveing data from " + categoriesEndpoint + category);
    axios.get(categoriesEndpoint + category).then((res) => {
      const joke = res.data.value;
      this.setState({ joke });
    });
    console.log("joke retrieved: " + this.state.joke);
  };
  render() {
    return (
      <div>
        <h1>Fancy some Chuck Norris Humor?</h1>
        <select
          name="categories"
          id="categories"
          onChange={this.onChangeCategory}
        >
          {this.state.categories.map((element) => {
            return (
              <option value={element} key={element}>
                {element}
              </option>
            );
          })}
        </select>
        <fieldset>
          <legend>Category: {this.state.currentCategory}</legend>
          <span>{this.state.joke} </span>
        </fieldset>
      </div>
    );
  }
}

export default JokeApi;
