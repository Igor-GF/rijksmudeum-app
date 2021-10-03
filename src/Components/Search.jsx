import React from 'react';

const Search = ({ setSearchValue }) => {

  const onChangeHandler = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="input-container">
      <input
        type="text"
        className="searchbar"
        placeholder="type to search ..."
        onChange={onChangeHandler}
      />
    </div>
  )
}

export default Search;
