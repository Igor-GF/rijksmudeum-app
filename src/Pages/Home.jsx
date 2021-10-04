import React, { useEffect } from 'react';
import Collection from '../Components/Collection';

const Home = ({ artObjects, setObjectDetails, setDisplaySearch }) => {

  useEffect(() => {
    return setDisplaySearch(true);
  });

  return (
    <section className="collection-container">
      <Collection
        artObjects={artObjects}
        setObjectDetails={setObjectDetails}
      />
    </section>
  )
}

export default Home;
