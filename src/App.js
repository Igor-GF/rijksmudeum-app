import React, { useState, useEffect } from 'react';
import './main.scss';
import Home from './Pages/Home';
import Header from './Components/Header';
import ObjectInfo from './Pages/ObjectInfo';

function App() {

  const [artObjects, setArtObjects] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [objectDetails, setObjectDetails] = useState({});
  const [displaySearch, setDisplaySearch] = useState(true);

  const getDataRequest = async (value) => {

    const rijksmuseumUrl = `https://www.rijksmuseum.nl/api/nl/collection?key=2yMGSMev&q=${value}`;

    const response = await fetch(rijksmuseumUrl);
    const respJson = await response.json();

    setArtObjects(respJson.artObjects);
  };

  useEffect(() => {
    getDataRequest(searchValue);
  }, []);

  return (
    <div className="App">
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setObjectDetails={setObjectDetails}
        displaySearch={displaySearch}
      />

      {
        !objectDetails.id ?
          <Home
            artObjects={artObjects}
            setObjectDetails={setObjectDetails}
            setDisplaySearch={setDisplaySearch}
          />
          :
          <ObjectInfo
            object={objectDetails}
            setDisplaySearch={setDisplaySearch}
          />
      }
    </div>
  )
}

export default App;
