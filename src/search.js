import React, { useState } from "react";

import Objects from "./objects";
import "./objects.css";
function Search() {
  const fetchData = () => {
    if (text !== "") {
      fetch(api)
        .then((res) => res.json())
        .then((dat) => {
          setList(dat);
        });
    }
  };
  const [text, setText] = useState();
  const key = "nKnKTDLfF-u8ty8Dvdqqkpg1TIYjQBxp91oG08Cel_k";
  const api = `https://api.unsplash.com/search/photos?page=1&query=${text}&client_id=${key}`;
  const [list, setList] = useState();
  return (
    <>
      <div className="container ">
        <h1 className="text-center text-primary display-1">Image App</h1>
        <div id="div" className="d-flex">
          <input
            onChange={(e) => {
              setText(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                fetchData();
              }
            }}
            className="form-control"
            type="search"
            name="search"
            placeholder="Search..."
          />
          <button onClick={fetchData} className="btn btn-primary">
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div className="loading">
          <div className="load"></div>
        </div>
        {list !== undefined ? <Objects list={list} /> : ""}
      </div>
    </>
  );
}
export default Search;
