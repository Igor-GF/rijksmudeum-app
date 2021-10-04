import React from 'react';
import Collection from '../Components/Collection';

const Home = ({ artObjects, setObjectDetails }) => {
  return (
    <section className="collection-container">
      <Collection artObjects={artObjects} setObjectDetails={setObjectDetails} />
    </section>
  )
}

export default Home;
