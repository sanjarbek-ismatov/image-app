import React, { useState } from "react";

import Objects from "./objects";
import "./objects.css";
function Search() {
  const fetchData = () => {
    setLoad("load");

    if (text !== "") {
      fetch(api)
        .then((res) => res.json())
        .then((dat) => {
          setList(dat);
        });
    }
    setTimeout(() => {
      setLoad("not-load");
    }, 4000);
  };
  const [text, setText] = useState();
  const key = "nKnKTDLfF-u8ty8Dvdqqkpg1TIYjQBxp91oG08Cel_k";
  const api = `https://api.unsplash.com/search/photos?page=1&query=${text}&client_id=${key}`;
  const [list, setList] = useState();
  const [load, setLoad] = useState("not-load");

  return (
    <>
      <div className="container-fluid">
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
          <img className={load} src="./loading.png" />
        </div>
        {list !== undefined ? <Objects list={list} /> : ""}
      </div>
    </>
  );
}

export default Search;
