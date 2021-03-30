import React, { useState, useEffect } from "react";
import axios from "axios";
//call rfc

export default function MyMovie() {
  const baseUrl = "https://swapi.dev/api/films/1/";
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch star wars movie
    axios.get(baseUrl).then((res) => {
      let fetched = { title: res.data.title, director: res.data.director };
      setData(fetched);

      console.log(res);
    });
  }, []);
  
  return (
    <div>
      <h1>Ex 19.1 - Simple Fetch</h1>
      <div>
        <h2>{data.title}</h2>
        <p>{data.director}</p>
      </div>
    </div>
  );
}
