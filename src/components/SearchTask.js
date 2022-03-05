import React from "react";

const SearchTask = ({ searchValue, setSearchValue }) => {
  return (
    <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </form>
  );
};

export default SearchTask;
