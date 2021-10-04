import React from 'react';

const Search = ({ searchValue, setSearchValue }) => {

  const onChangeHandler = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="input-container">
      <input
        type="text"
        className="searchbar"
        value={searchValue}
        placeholder="type to search ..."
        onChange={onChangeHandler}
      />
      <button type="submit"></button>
    </div>
  )
}

export default Search;
