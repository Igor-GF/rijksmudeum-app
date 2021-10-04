import React from 'react';
import Search from './Search';

const Header = ({ setSearchValue }) => {
  return (
    <nav className="header-container">
      <h1>Mijn Rijksmuseum</h1>
      <div className="navigation">
        <h3>HOME</h3>
        <Search setSearchValue={setSearchValue} />
      </div>
    </nav>
  )
}

export default Header;
