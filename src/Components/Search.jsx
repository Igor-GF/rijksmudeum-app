import React from 'react';

const Search = ({ setSearchValue }) => {

  const onChangeHandler = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="input-container">
      <form onSubmit={onChangeHandler}>
        <input
          type="text"
          className="searchbar"
          placeholder="type to search ..."
        // onChange={onChangeHandler}
        />
        <button type="submit"></button>
      </form>

    </div>
  )
}

export default Search;
