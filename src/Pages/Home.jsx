import React from 'react';
import Collection from '../Components/Collection';
import ArtObject from '../Components/ArtObject';

const Home = ({ artObjects }) => {
  return (
    <section className="collection-container">
      <Collection artObjects={artObjects} />
      <ArtObject artObjects={artObjects} />
    </section>
  )
}

export default Home;
