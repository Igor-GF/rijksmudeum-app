import React from 'react';
import ArtCard from './ArtCard';

const Collection = ({ artObjects, setObjectDetails }) => {
  return (
    <div className="collection-row">
      {
        artObjects.map((obj) => {
          return <ArtCard artObject={obj} setObjectDetails={setObjectDetails} />
        })
      }
    </div>
  )
}

export default Collection;
