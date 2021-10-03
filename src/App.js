import React, { useState, useEffect } from 'react';
import './main.scss';
import Home from './Pages/Home';
import Header from './Components/Header';

function App() {

  const [artObjects, setArtObjects] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getDataRequest = async () => {

    const rijksmuseumUrl = `https://www.rijksmuseum.nl/api/nl/collection?key=2yMGSMev&q=${searchValue}`;

    const response = await fetch(rijksmuseumUrl);
    const respJson = await response.json();

    console.log(respJson);
    setArtObjects(respJson.artObjects);
  };

  useEffect(() => {
    getDataRequest();
  }, [searchValue]);

  return (
    <div className="App">
      <Header setSearchValue={setSearchValue} />
      <Home artObjects={artObjects} />
    </div>
  )
}

export default App;
