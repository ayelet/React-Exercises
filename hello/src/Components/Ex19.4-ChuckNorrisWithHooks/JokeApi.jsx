import React, { useState, useEffect } from "react";
import axios from "axios";
import chuck from "./img/funny-chuck-norris-meme.jpg";

export default function SearchAlgolia() {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("animal");
  const [joke, setJoke] = useState("A random dad joke about Chuck Norris");
  const categoriesEndpoint = "https://api.chucknorris.io/jokes/categories";
  const baseUrl = "https://api.chucknorris.io/jokes/random?category=";

  useEffect(() => {
    // console.log("retriveing data from " + baseUrl + currentCategory);
    axios.get(baseUrl + currentCategory).then((res) => {
      setJoke(res.data.value);
    });
    // console.log("joke retrieved: " + joke);
  }, [currentCategory]);

  useEffect(() => {
    try {
      axios.get(categoriesEndpoint).then((res) => {
        setCategories(res.data);
      });
    } catch (err) {
      handleError(err);
    }
  }, []);

  const onChangeCategory = (e) => {
    setCurrentCategory(e.currentTarget.value);
  };
  const handleError = (error) => {
    // setError(err);
    // toggleLoadingState(false);
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
    // console.log(error);
  };
  return (
    <div>
      <h1>Fancy some Chuck Norris Humor?</h1>
      <select name="categories" id="categories" onChange={onChangeCategory}>
        {categories.map((element) => {
          return (
            <option value={element} key={element}>
              {element}
            </option>
          );
        })}
      </select>
      <fieldset>
        <legend>Category: {currentCategory}</legend>
        <span>{joke} </span>
      </fieldset>
      <img alt="funny chuck norris meme" src={chuck} width={"480px"}></img>
    </div>
  );
}
