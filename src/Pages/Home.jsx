import React from 'react';
import Collection from '../Components/Collection';
import ArtObject from '../Components/ArtObject';

const Home = ({ artObjects }) => {
  return (
    <>
      <Collection artObjects={artObjects} />
      <ArtObject artObjects={artObjects} />
    </>
  )
}

export default Home;
