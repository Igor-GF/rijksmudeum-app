import React, { useState, useEffect } from 'react';
import './main.scss';
import Home from './Pages/Home';
import Header from './Components/Header';
import ObjectInfo from './Pages/ObjectInfo';

function App() {

  const [artObjects, setArtObjects] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [objectDetails, setObjectDetails] = useState({});

  const getDataRequest = async (value) => {

    const rijksmuseumUrl = `https://www.rijksmuseum.nl/api/nl/collection?key=2yMGSMev&q=${value}`;

    const response = await fetch(rijksmuseumUrl);
    const respJson = await response.json();

    console.log(respJson);
    setArtObjects(respJson.artObjects);
  };

  useEffect(() => {
    getDataRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="App">
      <Header
        setSearchValue={setSearchValue}
        setObjectDetails={setObjectDetails}
      />

      {
        !objectDetails.id ?
          <Home artObjects={artObjects} setObjectDetails={setObjectDetails} />
          :
          <ObjectInfo object={objectDetails} />
      }
    </div>
  )
}

export default App;
