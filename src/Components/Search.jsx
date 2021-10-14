import React, { useState } from 'react';

const Search = ({ searchValue, setSearchValue }) => {

  const [searchedWord, setSearchedWord] = useState('');

  const onChangeHandler = (event) => {
    setSearchedWord(event.target.value);
  }

  const onSubmitHandler = () => {
    setSearchValue(searchedWord);
  }

  return (
    <div className="input-container">
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          className="searchbar"
          value={searchValue}
          placeholder="type to search ..."
          onChange={onChangeHandler}
        />
        <button type="submit">DD</button>
      </form>

    </div >
  )
}

export default Search;
