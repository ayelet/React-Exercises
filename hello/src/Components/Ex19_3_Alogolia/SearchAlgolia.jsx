import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function SearchAlgolia() {
  const baseUrl = "https://hn.algolia.com/api/v1/search?query=";
  const [isLoading, toggleLoadingState] = useState(true);
  const [list, setList] = useState([]);
  // const [filteredList, setFilteredList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("hooks");
  const [searchOn, toggleSearch] = useState(false);
  const [error, setError] = useState("");
  const firstSearch = baseUrl + searchTerm;
  useEffect(() => {
    // search with query
    try {
      axios.get(firstSearch).then((res) => {
        console.log(res.data.hits);
        setList(res.data.hits);
        toggleSearch(false);
        toggleLoadingState(false);
      });
    } catch (err) {
      handleError(err);
    }
  }, [searchOn, error]);
  //////////////////////////////////////////////////
  useEffect(() => {}, [error]);
  //////////////////////////////////////////////////
  const handleError = (err) => {
    setError(err);
    toggleLoadingState(false);
    if (error.response) {
      /*
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      /*
       * The request was made but no response was received, `error.request`
       * is an instance of XMLHttpRequest in the browser and an instance
       * of http.ClientRequest in Node.js
       */
      console.log(error.request);
    } else {
      // Something happened in setting up the request and triggered an Error
      console.log("Error", error.message);
    }
    console.log(error);
  };
  //////////////////////////////////////////////////
  const onChangeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  ///////////////////////////////////
  const onSearch = (e) => {
    toggleSearch(true);
    toggleLoadingState(true);
  };
  ////////////////////////////////////
  const displayList = () => {
    let renderedList = [...list];
    // if (searchOn) renderedList = [...filteredList];
    // else renderedList = [...list];

    return renderedList.map((item) => (
      <li key={item.id}>
        <a href={item.url}>{item.title}</a>
      </li>
    ));
  };
  /////////////////////////////////////
  const displaySpinner = () => {
    return <Loader type="Circles" color="#00BFFF" height={80} width={80} />;
  };

  //////////////////////////////////////
  const displayError = () => {
    return <div>Error: {error} </div>;
  };
  ///////////////////////
  return (
    <div>
      <label>Search</label>
      <input type="text" onChange={onChangeSearchTerm} />
      <input type="button" onClick={onSearch} value="Search" />
      {isLoading ? displaySpinner() : <ul>{displayList()}</ul>}
      {error ? displayError() : ""}
    </div>
  );
}
