import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CoutriesList() {
  const baseUrl = "https://restcountries.eu/rest/v2/all";
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // fetch countries
    axios.get(baseUrl).then((res) => {
      const fetchedData = res.data.map((item) => ({
        name: item.name,
        capital: item.capital,
      }));
      setList(fetchedData);
      console.log(res.data);
    });
  }, []);
  useEffect(() => {
    const tempList = [...list];
    // console.log(tempList);
    if (searchTerm) {
      let filteredList = tempList.filter((item) =>
        item.name.toLowerCase().includes(searchTerm)
      );
      console.log(filteredList);
      setFilteredList(filteredList);
    }
  }, [searchTerm, filteredList, list]);

  const onSearch = (e) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
    console.log("search term:", searchTerm);
  };

  const displayList = () => {
    let renderedList = [];
    if (searchTerm) renderedList = [...filteredList];
    else renderedList = [...list];

    return renderedList.map((item) => (
      <li>
        {item.name} - {item.capital}
      </li>
    ));
  };

  return (
    <div>
      <label>Search</label>
      <input type="text" onChange={onSearch} />
      <ul>{displayList()}</ul>
    </div>
  );
}
