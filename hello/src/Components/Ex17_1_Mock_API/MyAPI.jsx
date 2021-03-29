import React, { Component } from "react";
import axios from "axios";
import AuthorCard from "./AuthorCard";
import NewAuthor from "./NewAuthor";

class MyAPI extends Component {
  constructor(props) {
    super(props);
    this.state = { authors: [], newAuthor: false };

    this.baseUrl = "https://6060dfcbac47190017a703d2.mockapi.io/authors";
  }

  componentDidMount() {
    axios.get(this.baseUrl).then((res) => {
      const authors = res.data;
      this.setState({ authors: authors });
      console.log("Authors: ", this.state.authors);
    });
  }

  AddNewAuthor = (e) => {
    this.setState({ newAuthor: true });
    console.log("new author form", this.state.newAuthor);
    console.log(e.currentTarget);
  };

  onCancel = (e) => {
    this.setState({ newAuthor: false });
    console.log("new author form", this.state.newAuthor);
  };

  updateAuthor = (e) => {
    let id = e.currentTarget.getAttribute("data-key");
    console.log("update", id);
  };

  deleteAuthor = (e) => {
    let id = e.currentTarget.getAttribute("data-key");
    console.log("delete", id);
    axios.delete(this.baseUrl + `/${id}`).then((res) => {
      console.log("deleted...", res);
    });
    // update state
    this.setState({
      authors: this.state.authors.filter((author) => author.id !== id),
    });
  };

  render() {
    return (
      <div>
        <h1>A comprehensive list of world renowned Sci-Fi Authors</h1>
        <button className="btn" onClick={this.AddNewAuthor}>
          New Author
        </button>
        <h3>Number of Authors on list: {this.state.authors.length}</h3>
        {this.state.newAuthor ? (
          <NewAuthor onSubmit={this.AddNewAuthor} onCancel={this.onCancel} />
        ) : (
          <div className="card-container">
            {this.state.authors.map((author) => {
              return (
                <AuthorCard
                  key={author.id}
                  data={author}
                  onDelete={this.deleteAuthor}
                  onUpdate={this.updateAuthor}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default MyAPI;
