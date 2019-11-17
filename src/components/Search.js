import React, { useState } from "react";


const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return (
    <div className="searchContainer">
      <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
          placeholder="Find some movies"
        />
        <input onClick={callSearchFunction} type="submit" value="SEARCH" />
      </form>
    </div>
    );
}

export default Search;