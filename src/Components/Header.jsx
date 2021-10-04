import React from 'react';
import Search from './Search';

const Header = ({ setSearchValue, setObjectDetails, displaySearch }) => {

  const goHomeHandler = () => {
    return setObjectDetails({});
  };

  return (
    <nav className="header-container">
      <h1>Mijn Rijksmuseum</h1>
      <div className="navigation">
        {
          displaySearch ?
            <Search setSearchValue={setSearchValue} />
            :
            <h3 onClick={goHomeHandler}>HOME</h3>
        }
      </div>
    </nav>
  )
}

export default Header;
