import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../searchBar/searchBar.css";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearch(searchTerm);
  };

  return (
    <div className="Search-Bar-Container">
      <div className="searchBar">
        <form id="form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="inputField"
            placeholder="Search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <SearchIcon />
        </form>
      </div>
    </div>
  );
};

export default Search;
